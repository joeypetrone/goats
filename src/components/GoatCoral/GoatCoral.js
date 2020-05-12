import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';
import './GoatCoral.scss';

import Goat from '../Goat/Goat';

class GoatCoral extends React.Component {
  static propTypes = {
    freeAGoat: PropTypes.func.isRequired,
    useAGoat: PropTypes.func.isRequired,
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const { goats, useAGoat, freeAGoat } = this.props;
    const makeGoats = goats.map((goat) => (
      <Goat key={goat.id} goat={goat} useAGoat={useAGoat} freeAGoat={freeAGoat}/>
    ));

    return (
      <div className="GoatCoral d-flex flex-wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCoral;
