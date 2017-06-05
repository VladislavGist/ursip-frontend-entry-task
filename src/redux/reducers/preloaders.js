let preloaders,
	initialState = {
		allArticlesLoader: false,
		commentsLoader: false
	}

export default preloaders = (state = initialState, action) => {
	switch(action.type) {
		case "ALL_ARTICLES_LOADER_LOADING":
			return {
				...state,
				allArticlesLoader: true
			}
			break;
		case "ALL_ARTICLES_LOADER_SUCCSS":
			return {
				...state,
				allArticlesLoader: false
			}
			break;
		case "COMMENTS_LOADER_LOADING":
			return {
				...state,
				commentsLoader: true
			}
			break;
		case "COMMENTS_LOADER_SUCCESS":
			return {
				...state,
				commentsLoader: false
			}
			break;
		default:
			return state;
	}
}