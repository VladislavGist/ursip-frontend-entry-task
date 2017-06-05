let filterArticles;

export default filterArticles = (state = "", action) => {
	switch(action.type) {
		case "FIND_ARTICLE":
			return action.payload;
			break;
		default:
			return state;
	}
}