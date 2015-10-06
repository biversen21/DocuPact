import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as InviteActions from '../actions/InviteActions';
import styles from '../../css/app.css';

class Invite extends Component {
	render() {
		const {title, dispatch} = this.props;
		const actions = bindActionCreators(InviteActions, dispatch);
		return (
			<main>
				<h1 className={styles.text}>Invite Friends</h1>
				<button onClick={e => actions.inviteFriends(prompt())}>
					Invite Friends
				</button>
			</main>
		);
	}
}

export default connect(state => state.Sample)(Invite)