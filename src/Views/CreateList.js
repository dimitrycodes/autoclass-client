import React, { Component } from "react";
import './CreateList.css';
const {config} = require('../config');
//import { Redirect } from "react-router-dom";

class CreateList extends Component {

  initState = {
    class_id: '1',
    carclass: 'Sport',
    makeandmodel: '',
    comfort: '',
    topspeed: '',
    handling: '',
    crashsafetyrating: '',
    fueleconomy: ''
  }

  state = this.initState;

  handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };
    // window.location.reload();
    console.log("requestOptions", requestOptions);
    fetch(`${config.API_ENDPOINT}/class`, requestOptions)
      .then(response => {
        console.log("response==========>", response)
        response.json()
        console.log("What is state", this.initState);
        //const updateOnSubmit = 
        this.setState(this.initState);
        this.forceUpdate();
      })
      .then(data => {
        console.log("data===============>", data)
      });
      // return <Redirect to="/" />;
  }

  render() {
    return (
      <>
        <section className="add-car">
          <form id="recordDream" onSubmit={this.handleSubmit} className="create-form">
            <div className="form-section">
                <label htmlFor="Class">Class</label>
              <select
                type="text"
                name="dream-title"
                placeholder="Flying dream"
                required
                defaultValue="Sports"
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({
                    carclass: e.target.value,
                  })
                }}
              >
                <option value='Sports'>Sports</option>
                {/* <option value='Football'>Football</option>
                <option value='Basketball'>Basketball</option>
                <option value='Hockey'>Hockey</option>
                <option value='Baseball'>Baseball</option> */}
              </select>
            </div>
            <div className="form-section ">

              <label htmlFor="dream-summary">Make and Model</label>
              <input
                name="dream-summary"
                rows="15"
                required
                onChange={(e) => {
                  this.setState({
                    makeandmodel: e.target.value,
                  })
                }}
              />
            </div>
            <div className="form-section">
              <label htmlFor="hours-slept">Comfort</label>
              <input
                type="number"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    comfort: e.target.value,
                  })
                }}
              />
              </div>

<div className="form-section">
              <label htmlFor="hours-slept">Top Speed</label>
              <input
                type="number"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    topspeed: e.target.value,
                  })
                }}
              />
              </div>
              <div className="form-section">
              <label htmlFor="hours-slept">Handling</label>
              <input
                type="number"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    handling: e.target.value,
                  })
                }}
              />
              </div>
              <div className="form-section">
              <label htmlFor="hours-slept">Crash and Safety Rating</label>
              <input
                type="text"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    crashsafetyrating: e.target.value,
                  })
                }}
              />
              </div>
              <div className="form-section">
              <label htmlFor="hours-slept">Fuel Economy</label>
              <input
                type="text"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    fueleconomy: e.target.value,
                  })
                }}
              />
              </div>
              
              <div className="form-submit"> 
              <button type="submit" >Submit</button>
              <button type="reset">Reset</button>
              </div>
            {/* </section> */}
          </form>
        </section>
      </>
    );
  }
};

export default CreateList;
