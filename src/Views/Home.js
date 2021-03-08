import React, { Component } from "react";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="main ">
        <section className="main-header main-bg">
          {/* <header role="banner">
            <h1>Greatest Cars by class</h1>
          </header> */}
          </section>
          <section className="container-box">
            <h3>
              <a href='/cars' className="no-link">Our Highest Rated Sports Cars</a>
            </h3>
          </section>
          <section className="container-box">
            <h3><a href='/mycars' className="no-link">My top 5 rated vehicles</a></h3>
          </section>
          <section className="intro">
            <p className="s-style">Help others find the perfect car by rating yours and other cars you're familiar with. We all have a need for variety in different aspects of our lives and that's why there are so many different brands. Cars are no different. We like different ones for different reasons, but is it subjective or is the car you like actually better? Let's find out.</p>
          </section>
        </div>
    );
  }
}

export default Home;
