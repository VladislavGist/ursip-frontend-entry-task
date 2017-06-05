let addArticles;

export default addArticles = (state = [], action) => {
	switch(action.type) {
		case "ADD_NEW_ARTICLES":
			return [
				...state,
				action.payload
			];
			break;
		case "ADD_ARTICLES":
			return action.payload;
			break;
		case "REMOVE_ARTICLE":
			return [
				...state.filter(elem => {
					return elem.id !== action.payload;
				})
			];
			break;
		case "CLEAR_ARTICLES":
			return [];
			break;
		case "ADD_IN_MASS":
			return {
				...state,
				comments: [
					...state.comments,
					action.payload
				]
			};
			break;
		case "LOAD_COMMENTS":
			return {
				...state,
				loadComments: action.payload
			};
			break;
		default:
			return state;
	}
}