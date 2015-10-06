import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as NewActions from '../actions/NewActions';
import styles from '../../css/app.css';

class New extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(NewActions, dispatch);
    return (
      <main>
        <h1 className={styles.text}>Create A New Volunteer Event</h1>
        <button onClick={e => actions.createEvent(prompt())}>
          Create
        </button>
      </main>
    );
  }
}

export default connect(state => state.Sample)(New)
