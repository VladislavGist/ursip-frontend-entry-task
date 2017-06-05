let actionAddComment;

export default actionAddComment = (url, text, user, article) => {
	return dispatch => {
		fetch(url, {
			method: "post",
			headers: {  
		      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"  
		   }, 
			body: `text=${text}&user=${user}&article=${article}`
		})
		.then(response => {
			console.log(url, text, user, article);
			if(response.status !== 200) {
				console.log("Ошибка добавления комментария", response.status);
			} else {
				response.json()
				.then(data => {
					dispatch({type: "ADD_IN_MASS", payload: data.id});
				})
			}
		})
		.catch(err => {
			console.log("Ошибка запроса на доб. ком.");
			console.log(err);
		})
	}
};