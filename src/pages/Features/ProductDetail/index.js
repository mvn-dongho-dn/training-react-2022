import React, { useMemo, useRef, useState } from 'react'
import { datas } from '../../../data';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export default function ProductDetail() {
  const [count, setCount] = useState(0);
  const [validateSchema, setValidateSchema] = useState(Yup.object().shape({}));
  const getData = datas.data;
  const ref = useRef(null);
  const formInitVal = useMemo(() => {
    return getData.reduce((a, b, c) => {
      const data = b.answers.filter(e => e.is_text).reduce((d, el) => {
        d[`text_${el.id}`] = '';
        return d;
      }, {});
      a[`q_${b.id}`] = {...data, radio: ''};
      return a;
    }, {});
  }, [getData]);
  
  const handleSetYupSchema = (vals) => {
    const f = Object.keys(vals).filter(e => vals[e].radio.length && ((vals[e][`text_${vals[e].radio}`] !== undefined) || Array.isArray(vals[e].radio))).reduce((a, b) => {
      const items = {};
      if (Array.isArray(vals[b].radio)) {
        vals[b].radio.forEach((e) => {
          if (vals[b][`text_${e}`] !== undefined) {
            items[`text_${e}`] = Yup.string().required('Required');
          }
        });
      } else {
        items[`text_${vals[b].radio}`] = Yup.string().required('Required');
      }
      a[b] = Yup.object().shape(items);
      return a;
    }, {});
    setValidateSchema(Yup.object().shape(f));
  };

  const handleChangeField = (e, setFieldValue) => {
    setTimeout(() => {
      setCount(Object.keys(ref.current.values).filter(e => ref.current.values[e].radio).length);
      handleSetYupSchema(ref.current.values);
    });
    const qId = e.target.getAttribute('qid');
    const aId = e.target.getAttribute('aid');
    const toggleDisabled = (toggle, fieldName) => {
      const $elm = document.querySelector(`[name="${fieldName}"]`);
      ref.current.getFieldMeta(fieldName).value !== undefined && setFieldValue(fieldName, '');
      $elm && (toggle ? $elm.removeAttribute('disabled') : $elm.setAttribute('disabled', true));
    };
    if (e.target.type === 'radio') {
      const getList = Object.keys(formInitVal[qId]);
      getList.forEach(el => {
        if (el.includes('text')) {
          toggleDisabled(el.includes(aId), `${qId}.${el}`);
        }
      });
    } else if (e.target.type === 'checkbox') {
      toggleDisabled(e.target.checked , `${qId}.text_${aId}`);
    }
  };

  const validateCondition = (errors, touched, keys) => {
    let mess = '';
    if (errors[keys[0]] && errors[keys[0]][keys[1]] && touched[keys[0]] && touched[keys[0]][keys[1]]) {
      mess = errors[keys[0]][keys[1]];
    }
    return mess;
  };

  return (
    <div className="container">
      <h1>ProductDetail</h1>
      <Formik
        initialValues={formInitVal}
        innerRef={ref}
        onSubmit={async (values) => {
          console.log(values);
        }}
        validationSchema={validateSchema}
        validateOnBlur={false}
      >
        {({ setFieldValue, errors, touched, values, handleChange, handleBlur }) => (
          <Form onChange={(e) => handleChangeField(e, setFieldValue)}>
            {getData.map(e => (
              <div key={e.id}>
                <h4>{e.question} {e.id}</h4>
                <div className="answer-group">
                  {e.answers.map((el) => (
                    <label key={el.id} className="form-group">
                      <Field type={e.multi_choices ? 'radio' : 'checkbox'} name={`q_${e.id}.radio`} value={el.id.toString()} qid={`q_${e.id}`} aid={el.id} />
                      <span>{el.name}</span>
                      { el.is_text && 
                        (
                          <>
                            <input value={values[`q_${e.id}`][`text_${el.id}`]} onChange={handleChange} onBlur={handleBlur} name={`q_${e.id}.text_${el.id}`} disabled type="text" placeholder={el.placeholder} />
                            {validateCondition(errors, touched, [`q_${e.id}`, `text_${el.id}`], values)}
                          </>
                        )
                      }
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, background: '#ccc'}}>
              <button type="submit" style={{width: '100px', marginRight: 10}}>Submit</button>
              {count} / {getData.length}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
