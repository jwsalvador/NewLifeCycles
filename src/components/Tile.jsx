import React, { Component } from 'react';

import Header from 'components/Header';
import styles from 'assets/css/components/tile.css';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {showMore: false};
    this.showMoreDetails = this.showMoreDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
  }

  showMoreDetails() {
    this.setState({showMore: true});
  }

  hideDetails() {
    this.setState({showMore: false});
  }

  render() {
    const {icon, header, subHeader, important, onMouseEnter} = this.props;
    return (
      <div className={styles.tile} onMouseEnter={this.showMoreDetails} onMouseLeave={this.hideDetails}>
        <Header as="h1"><i className="material-icons">build</i></Header>
        <Header as="h5">{header}</Header>
        <p>
          {subHeader}
        </p>
        <Header as="h1">{important}</Header>
        {this.state.showMore && <div className={styles.tileHoveredItem}>{onMouseEnter}</div>}
      </div>
    )
  }
}

export default Tile;