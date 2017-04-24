import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Button from 'components/Button';
import Tile from 'components/Tile';
import styles from 'assets/css/modules/home.css';

import services from '../../../services.json'

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {id: 0}
    this.navigate = this.navigate.bind(this);
  }

  navigate(id) {
    this.setState({id});
  }

  render() {
    if (this.state.id !== 0) {
      return <Redirect to="/services"/>
    }
    return (
      <div className={styles.section}>
        <Header as="section" center>Services</Header>
        <div className={styles.tilesSection}>
          {
            services.map(m => {
              return (
                <Tile 
                  key={m.id}
                  header={m.title}
                  subHeader={m.description}
                  important={m.price}
                  onMouseEnter={<Button onClick={() => this.navigate(m.id)} ghost size="large">Book Now</Button>}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Services;