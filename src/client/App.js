import React, { Component } from 'react';
import './app.css';
import sortJson from 'sort-json-array';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SortBy from './components/SortBy';
import Cars from './components/Cars';

// import ReactImage from './react.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    fetch('/api/cars')
      .then(res => res.json())
      .then(data => this.setState({ cars: data }));
  }

  changeHandler = (event) => {
    const sortBy = event.target.value;
    const carsArray = this.state.cars;
    const sorted = sortJson(carsArray, sortBy);

    this.setState({
      cars: sorted
    });
  };

  render() {
    const { cars } = this.state;
    // console.log(cars);
    return (
      <div>
        <Navbar />
        <div className="content-section">
          <div className="album py-5 bg-light">
            <SortBy changed={this.changeHandler} />
            <div className="container items-section">
              <Cars vehicles={cars} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
