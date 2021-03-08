import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import config from './config';
import ApiContext from './ApiContext';
import './App.css';

import Home from './Views/Home';
import BestCars from "./Views/BestCars";
import MyBestCars from "./Views/MyBestCars";
import CreateList from "./Views/CreateList";

class App extends Component {
  state = {
    carclass: []
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
        if (carclass.length) {
          this.setState({ carclass })
        }
        console.log(carclass, 'this is line 24 app.js')
      })
      .catch((error) => { console.log({ error }) })
  }

  handleAddCarclass = (carclass) => {
    this.setState({
      carclass: [...this.state.carclass, carclass]
    })
  };

  handleDeleteCarclass = (carclassId) => {
    this.setState({
      carclass: this.state.carclass.filter((car) => car.id !== carclassId)
    });
  };

  handleUpdateCarclass = (updateCarclass) => {
    const newUpdatedCarclass = this.state.carclass.map((car) =>
      car.id === updateCarclass.id ? updateCarclass : car
    );
    this.setState({
      carclass: newUpdatedCarclass,
    })
  };

  render() {
    const value = {
      carclass: this.state.carclass,
      addCarclass: this.handleAddCarclass,
      deleteCarclass: this.handleDeleteCarclass,
      updateCarclass: this.handleUpdateCarclass,
    };

    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Router>
            <header className="App-header">
              {/* <nav role="navigation">
                <div>
                  <a href="/">Home</a>
                </div>
              </nav> */}
              <a href="/" className="title">Autoclass</a>
            </header>
            <main className="main-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cars" component={BestCars} />
                <Route exact path="/mycars" component={MyBestCars} />
                <Route exact path="/createlist" component={CreateList} />
              </Switch>
            </main>
            <footer className="app-footer">Autoclass | <a href='https://github.com/dimitrycodes'>@dimitrycodes</a></footer>
          </Router>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
