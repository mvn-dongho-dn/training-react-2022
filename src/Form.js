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
      agree: false
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state);
  }

  handleOnChange(evt) {
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => this.handleOnChange(e)}/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => this.handleOnChange(e)} />
        </div>
        <div className="form-control">
          <label>Your Country</label>
          <select
            name="country"
            onChange={(e) => this.handleOnChange(e)}>
            <option>Please choose</option>
            <option value="vn">Vietnam</option>
            <option value="cn">China</option>
          </select>
        </div>
        <div className="form-control">
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="0"
            defaultChecked={this.state.gender === '0'}
            onChange={(e) => this.handleOnChange(e)}
            /> Male
          <input
            type="radio"
            name="gender"
            value="1"
            defaultChecked={this.state.gender === '1'}
            onChange={(e) => this.handleOnChange(e)}
            /> Female
        </div>
        <div className="form-control">
          <label>Other infomation</label>
          <textarea name="info" onChange={(e) => this.handleOnChange(e)}></textarea>
        </div>
        <div className="form-control">
          <label>
            Agree with our terms?
            <input
              type="checkbox"
              name="agree"
              defaultChecked={this.state.agree}
              onChange={(e) => this.handleOnChange(e)}
            />
          </label>
        </div>
        <div className="buttons-set">
          <button>Submit</button>
        </div>
      </form>
    )
  }
}
