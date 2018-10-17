import React, { Component } from 'react';

class Cars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const carList = this.props.vehicles;

    const cars = carList.map((car, index) => (
      <div className="col-md-4" key={index}>
        <div className="card mb-4 shadow-sm">
          <div className="card-body text-center">
            <img className="card-img-top" src={car.img} alt="car" width="250px" />
            <p className="card-text">{car.name}</p>
            <p className="card-text">{car.model}</p>
            <p className="card-text">
              Year:&nbsp;
              {car.year}
            </p>
            <div className="align-items-center">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

    return <div className="row">{cars}</div>;
  }
}

export default Cars;
