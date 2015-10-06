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
        <h2 class="header-title">Create A New Volunteer Event</h2>
        <div class="inline-input">
            <label class="label" for="eventName">Event Name</label>
            <input type="text" class="input input-text" placeholder="Event Name" id="eventName"/>
        </div>
        <div class="inline-input">
            <label class="label" for="Address">Address</label>
            <input type="text" class="input input-text" placeholder="Address" id="Address"/>
        </div>
        <div class="inline-input">
          <label class="label" for="myComments">Details</label>
          <textarea class="input input-textarea" placeholder="Comments" id="myComments"></textarea>
        </div>

        <button onClick={e => actions.createEvent(prompt())}>
          Click To Create
        </button>
      </main>
    );
  }
}

export default connect(state => state.Sample)(New)
