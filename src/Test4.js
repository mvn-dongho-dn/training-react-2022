import React, { Component } from 'react'

export default class Form extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      country: '',
      gender: '0',
      info: '',
      agree: false,
      multi: [false, false, false, false]
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleValueMulti(e, val, idx) {
    let newVal = this.state.multi;
    newVal[idx] = !val;
    this.setState({
      multi: newVal
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={this.state.email}
            onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={this.state.password}
            onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="country">Your Country</label>
          <select
            id="country"
            name="country"
            onChange={(e) => this.handleChange(e)}
            defaultValue={this.state.console}>
            <option>Please choose</option>
            <option>Vietnam</option>
            <option>China</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="0"
            defaultChecked={this.state.gender === '0'}
            onChange={(e) => this.handleChange(e)}
            />Male
          <input
            type="radio"
            name="gender"
            value="1"
            defaultChecked={this.state.gender === '1'}
            onChange={(e) => this.handleChange(e)}
            />Female
        </div>
        <div className="form-group">
          <label htmlFor="info">Other information</label>
          <textarea
            name="info"
            defaultValue={this.state.info}
            onChange={(e) => this.handleChange(e)}
            id="info"></textarea>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agree"
              value="0"
              defaultChecked={this.state.agree}
              onChange={(e) => this.handleChange(e)}
              /> Agree with our terms
          </label>
        </div>
        <div className="form-group">
          {
            this.state.multi.map((val, idx) =>
              <label key={idx}>
                <input
                  type="checkbox"
                  name="multi"
                  defaultValue={val}
                  defaultChecked={this.state.agree}
                  onChange={(evt) => this.handleValueMulti(evt, val, idx)}
                  /> Multiple Checkboxes {idx}
              </label>
            )
          }
        </div>
        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    )
  }
}
