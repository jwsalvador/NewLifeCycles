import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from 'components/Button';

import styles from 'assets/css/modules/servicesList.css';

class ServicesList extends Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose() {
    this.setState({open: false})
  }

  handleOpen() {
    this.setState({open: true});
  };

  getActions() {
    return [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ]
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handleOpen}
          ghost
          size="large"
        >
          More Services
        </Button>
        <Dialog
          title="Services"
          actions={this.getActions()}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div className={styles.container}>
            {this.props.services.map(m => {
              return (
                <div className={styles.item}>
                  <div className={styles.price}>{m.price}</div>
                  <div className={styles.title}>{m.title}</div>
                  <div className={styles.description}>{m.description}</div>
                </div>
              )
            })}
            <div className={styles.logo}/>
          </div>
          
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ services }) => ({
  services: services.all,
});

export default connect(mapStateToProps)(ServicesList);