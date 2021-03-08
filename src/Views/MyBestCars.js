import React, { Component } from "react";
import './MyBestCars.css';
import EditList from './EditList';
const {config} = require('../config');

class MyBestCars extends Component {
  state = {
    count: 0,
    info: {},
    edit: false,
    carclass: [{
      class: 'Sport',
      cars: [
        {
          name: 'BMW Z4',
          comfort: 10,
          topspeed: 7,
          handling: 10,
          crashsafetyrating: 7,
          fueleconomy: 8
        },
        {
          name: 'Nissan GT-R',
          comfort: 7,
          topspeed: 8,
          handling: 8,
          crashsafetyrating: 6,
          fueleconomy: 6
        },
        {
          name: 'Porsche 911',
          comfort: 9,
          topspeed: 8,
          handling: 9,
          crashsafetyrating: 7,
          fueleconomy: 7
        }
      ]
    }]
  };
 
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/class`)
    ])
      .then(([classResponse]) => {
        if (!classResponse.ok) return classResponse.json().then(e => Promise.reject(e));
        return Promise.all([classResponse.json()]);
      })
      .then(([carclass]) => {
        // if (sports.length) {
        //   console.log("")
        this.setState({ carclass, count: carclass.length })
        // }
        //console.log(sports, 'this is line 54')
      })
      .catch((error) => { console.log({ error }) })
  }
 
  handlePlayer = () =>{
    
    Promise.all([
      fetch(`${config.API_ENDPOINT}/class`)//http://localhost:8000/class/
    ])
      .then(([classResponse]) => {
        if (!classResponse.ok) return classResponse.json().then(e => Promise.reject(e));
        return Promise.all([classResponse.json()]);
      })
      .then(([carclass]) => {
        
        console.log("we are here")
        this.setState({ carclass, count: carclass.length })
        this.setState(this.state);
        // }
        //console.log(carclass, 'this is line 54')
      })
      .catch((error) => { console.log({ error }) })
  }
 
  handleEdit = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };
    //window.location.reload();
    fetch(`${config.API_ENDPOINT}/class/:id`, requestOptions)
      .then(response => {
        console.log("response==========>", response)
        response.json()
      })
      .then(data => {
        
        console.log("data===============>", data)
      });
  }
 
  handleDelete = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };
    
    //currently expecting 1 that is hardcoded in CreateList for just one carclass. 
    fetch(`${config.API_ENDPOINT}/class/1`, requestOptions)
      .then(response => {
        console.log("response==========>", response)
        response.json()
      })
      .then(data => {
        //update in state--> deleting current carclass set to 1. Change logic to handle multiples carclasses.
        this.setState({
          carclass: [],
          count: 0
        })
 
        //update in API server
        console.log("DELETE===============>", data)
      });
  }
 
  setEditing = (index)=>{
    const info = this.state.carclass[index];
      this.setState({edit: !this.state.edit, info});
  }
 
  setEditingToo = ()=>{
    this.setState({edit: !this.state.edit});
  }
  replaceStateContent = (carclass)=>{
    const newClasses = this.state.carclass.map(car=>{
      if(car.id === carclass.id){
        return carclass;
      }
      return car;
    })
    this.setState({carclass: newClasses})
  }
  changeInfo = (info)=>{
    this.setState({info})
  }
  renderContent = ()=>{
    return(
      <div>
      <section role="banner" className="main-header">
        <header role="banner">
          <h1 className="head-title">My Best Cars</h1>
        </header>
        </section>
 
{/* SORT Button */}
        <section className="my-car">
          {/* <div className="sort-head">
            <label htmlFor="Sport">Sort By:</label>
            <select className="sort-select"
              type="text"
              name="dream-title"
              placeholder="Flying dream"
              required
              defaultValue="Championships"
              onChange={(e) => {
                this.setState({
                  sports: [{
                    game: 'Soccer',
                    players: this.state.sports[0].players.sort(
                      (a, b) => {
                        return a[e.target.value] - b[e.target.value]
                      })
                  }],
                })
              }}
            >
              <option value='championshipsWon'>Championships</option>
              <option value='mvpAwards'>MVP Awards</option>
              <option value='yearsPlayed'>Longevity/Years Played</option>
              <option value='careerPointsScored'>All time Career Point</option>
              <option value='careerAssistRanking'>All Time Career Assist</option>
            </select>
            </div> */}
        {/* </section>
        <section> */}
          <header>
            <h2 className="game-head">Sports:</h2>
            <p className="game-sub-head">Updated on: 03.08.2021</p>
            <ol className="list-item">
              {this.state.carclass.map((car, index) => {
                if (index<5) {
                  return(
                    <li key={index} onClick={()=>{this.setEditing(index);console.log(this.state);console.log(index);}}>
                      <div className="carDiv">
                        <div>
                          {car.makeandmodel}
                        </div>
                        <div>
                            <button className="carEditButton">Edit</button>
                        </div>
                      </div>
                    </li>)
                } else {
                  return null;
                } 
              }
              )}
            </ol>
          </header>
          <div className="btn-footer">
          <blockquote>Which metric makes your List great? Edit or start over.</blockquote>
          <button onClick={this.handleDelete}>Delete</button>
          {this.state.count < 5 ? <a href='/createlist'><button type='button'>Create List</button></a> : null}
          </div>
        </section>
      </div>
    )
  }
  render() {
    console.log("Checking Carclass", this.state.carclass)
    return (
      <div>
        {this.state.edit ? <EditList info={this.state.info} editing={this.setEditingToo} changeCars={this.replaceStateContent} changeInfo={this.changeInfo} handlePlayers={this.handlePlayer}/> : this.renderContent()}
        
      </div>
    );
  }
}
 
export default MyBestCars;
