import $ from "jquery";
import _ from "underscore";

let actionLoadComments;

export default actionLoadComments = url => {
	return (dispatch, getState) => {
		dispatch({type: "COMMENTS_LOADER_LOADING"});

		fetch(url)
		.then(response => {
			if(response.status !== 200) {
				console.log("Ошибка получения комментариев ");
			} else {
				response.json()
				.then(data => {
					//если данные в store равны данным на сервере, то не загружаем новые
					if(_.isEqual(getState().addArticles.loadComments, data)) {
						dispatch({type: "COMMENTS_LOADER_SUCCESS"});
					} else {
						let finalData;

						if(data.length === 0) {
							finalData = [{id: Math.random(), text: "Комментариев нет"}];
						} else {
							finalData = data;
						}
						dispatch({type: "LOAD_COMMENTS", payload: finalData});
						dispatch({type: "COMMENTS_LOADER_SUCCESS"});
					}
				});
			}
		})
		.catch(err => {
			console.log("Ошибка запроса на получение комментариев");
			console.log(err);
		});
	}
};