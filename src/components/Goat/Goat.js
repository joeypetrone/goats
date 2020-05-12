import React from 'react';
import './Goat.scss';

class Goat extends React.Component {
  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
  }

  freeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, freeAGoat } = this.props;
    freeAGoat(goat.id);
  }

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
          <div className="card-footer">
            <button className="btn btn-dark" onClick={this.useGoatEvent}>Use the Goat</button>
            <button className="btn btn-danger" onClick={this.freeGoatEvent}>Free the Goat</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
