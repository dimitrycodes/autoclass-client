import React, { Component } from "react";
import './BestCars.css';
const {config} = require('../config');

class BestCars extends Component {
  state = {
    carclass: [{
      class: 'Sport',
      cars: [
        {
          name: 'McLaren 720S'
        },
        {
          name: 'Audi R8'
        },
        {
          name: 'Porsche 911'
        },
        {
          name: 'BMW Z4'
        },
        {
          name: 'Nissan GT-R'
        }
      ]
    }]
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/class`)
    ])
      .then(([classResponse]) => {
        if (!classResponse.ok) return classResponse.json().then(e => Promise.reject(e));
        return Promise.all([classResponse.json()]);
      })
      .then(([carclass]) => {
        
        console.log(carclass, 'this is line 24 app.js')
      })
      .catch((error) => { console.log({ error }) })
  }

  render() {
    return (
      <div className="">
      <section className="main-header">
        <header role="banner">
          <h1 className="head-title">Highest Rated Cars</h1>
          <h2 className="head-sub-title">Store your cars according to class/style</h2>
          <div className="head-p-title">
            <p>See our curated list of Sports cars.</p>
          </div>
           
        </header>
        </section>
        <section className="car">
          <header className="game-head">
            <h3 className="game-title">{this.state.carclass[0].class}</h3>
          </header>
          <ol className="list">
            {this.state.carclass[0].cars.map((car, index) =>
              <li key={index}>{car.name}</li>
            )}
          </ol>
          <header className="list-head">
            <h3 className="list-main-head">Build Your Own List by Class</h3>
            {/* <p className="list-sub-head">Create Your own List!</p> */}
            <form className='form'>
            <a href='/createlist'><button type='button' className="block-btn">Create List</button></a>
          </form>
          </header>
        </section>
      </div>
    );
  }
}

export default BestCars;
