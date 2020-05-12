import React from 'react';
import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;

    return (
      <div className="Goat col-3">
        <div className="card">
          <img className="card-img-top" src={goat.imgUrl} alt="Goat Card"/>
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">Beard Length: {goat.beardLength}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
