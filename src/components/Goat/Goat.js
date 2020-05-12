import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    useAGoat: PropTypes.func.isRequired,
    freeAGoat: PropTypes.func.isRequired,
    goat: goatShape.goatShape,
  }

  useGoatEvent = (e) => {
    e.preventDefault();
    const { goat, useAGoat } = this.props;
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
            {
              goat.isBusy ? (
                <button className="btn btn-danger" onClick={this.freeGoatEvent}>Free the Goat</button>
              ) : (
                <button className="btn btn-dark" onClick={this.useGoatEvent}>Use the Goat</button>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
