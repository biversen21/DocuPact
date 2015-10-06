import {INVITE_FRIENDS} from '../constants/ActionTypes';

export function inviteFriends(text) {
	return {
		type: INVITE_FRIENDS,
		text
	}
}