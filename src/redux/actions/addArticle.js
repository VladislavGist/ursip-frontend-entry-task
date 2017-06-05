let addArticle;

export default addArticle = (url, input, textarea) => {
	return dispatch => {
		fetch(url, {
			method: "post", 
			headers: {  
		      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"  
		   },  
			body: `title=${input}&text=${textarea}&user=anonym`
		})
		.then(response => {
			if(response.status !== 200) {
				console.log("Ошибка добавления статьи")
			} else {
				response.json()
				.then(data => {
					dispatch({type: "ADD_NEW_ARTICLES", payload: data});
				});
			}
		})
		.catch(err => {
			console.log(err);
		})
	}
};