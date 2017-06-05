let toggleBtnComment;

export default toggleBtnComment = (state = true, action) => {
	switch(action.type) {
		case "SHOW_COMMENTS":
			return false;
			break;
		case "HIDE_COMMENTS":
			return true;
			break;
		default:
			return state;
	}
}