import React, { Component } from "react";
import './CreateList.css';
const {config} = require('../config');
//import { Redirect } from "react-router-dom";
 
class EditList extends Component {
 
  initState = {
    id: this.props.info.id,
    class_id: this.props.info.class_id,
    carclass: this.props.info.carclass,
    makeandmodel: this.props.info.makeandmodel,
    comfort: this.props.info.comfort,
    topspeed: this.props.info.topspeed,
    handling: this.props.info.handling,
    crashsafetyrating: this.props.info.crashsafetyrating,
    fueleconomy: this.props.info.fueleconomy
  }
 
  state = this.initState;
 
  handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
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
        this.render();
      })
      .then(data => {
        console.log("data===============>", data)
      });
      // return <Redirect to="/" />;
  }
 
  updateUser = ()=>{
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      };
      //const url = `http://localhost:8000/class/${this.state.id}`;
      const url2 = `${config.API_ENDPOINT}/class/${this.state.id}`;
 
      fetch(url2, requestOptions).then(res=>res.json).then(console.log);
      this.props.changeCars(this.state);
      this.props.changeInfo(this.state);

  }
  render() {
      console.log(this.props.info)
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
                defaultValue="Sport"
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({
                    carclass: e.target.value,
                  })
                }}
              >
                <option value='Sport'>Sport</option>
                {/* <option value='Football'>Football</option>
                <option value='Basketball'>Basketball</option>
                <option value='Hockey'>Hockey</option>
                <option value='Baseball'>Baseball</option> */}
              </select>
            </div>
            <div className="form-section ">

              <label htmlFor="dream-summary">Make and Model</label>
              <input
                value={(this.state.makeandmodel)}
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
                value={(this.state.comfort)}
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
                value={(this.state.topspeed)}
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
                value={(this.state.handling)}
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
                value={(this.state.crashsafetyrating)}
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
                value={(this.state.fueleconomy)}
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
              <a href="/mycar">
              <button type="submit" onClick={()=>{this.updateUser();this.props.editing();}} >Submit</button>
              </a>
              <button type="reset" onClick={()=>{this.props.editing();}}>Reset</button>
              </div>
            {/* </section> */}
          </form>
        </section>
      </>
    );
  }
};
 
export default EditList;
