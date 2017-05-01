import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { ENABLE_BOOKING } from '../../../config/settings';
import Header from 'components/Header';
import Button from 'components/Button';
import Tile from 'components/Tile';
import styles from 'assets/css/modules/home.css';
import { selectService } from 'ducks/modules/services';

// import services from '../../../services.json';

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = { id: 0 };
    this.navigate = this.navigate.bind(this);
  }

  navigate(id) {
    this.props.selectService(id);
    this.setState({ id });
  }

  render() {
    if (this.state.id !== 0) {
      return <Redirect to="/booking" />;
    }
    const mouseEnter = {
      onMouseEnter: (
        <Button
          onClick={() => this.navigate(m._id)}
          primary
          size="medium"
          fullWidth
        >
          Book Now
        </Button>
      )
    }
    return (
      <div className={styles.section}>
        <Header as="section" center>Services</Header>
        <div className={styles.tilesSection}>
          {
            
            this.props.services.map(m => (
              <Tile
                key={m._id}
                icon={<i className="material-icons">build</i>}
                header={m.title}
                subHeader={m.description}
                important={m.price}
                {...ENABLE_BOOKING && mouseEnter}
              />
              ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ services }) => ({
  services: services.all,
});

export default connect(mapStateToProps, { selectService })(Services);
