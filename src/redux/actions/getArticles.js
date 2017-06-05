import _ from "underscore";
let getArticles;

export default getArticles = url => {
	return (dispatch, getState) => {
		dispatch({type: "ALL_ARTICLES_LOADER_LOADING"});
		fetch(url)
		.then(response => {
			if(response.status !== 200) {
				console.log("all articles error");
			} else {
				response.json()
				.then(data => {
					//если данные в store равны данным на сервере, то не загружаем новые
					if(_.isEqual(getState().addArticles, data)) {

					} else {
						dispatch({type: "ADD_ARTICLES", payload: data});
						dispatch({type: "ALL_ARTICLES_LOADER_SUCCSS"});
					}
				})
			}
		})
		.catch(err => {
			console.log(err);
		})
	}
};