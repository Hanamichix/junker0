var data = require("../data.json");
exports.view = function(req, res){
	var posts = data.accounts[0].matches;
	console.log(posts);
	var items = {
		"items": [
		]
	}
	for(var i = 0; i < posts.length; i ++) {
		console.log(data.items[posts[i].youritem - 1]);
		var ownerid = data.items[posts[i].item - 1].owner;
		var youritemindex = posts[i].youritem - 1;
		var hisitemindex = posts[i].item - 1;
		var matchdata = {
			"id": data.items[youritemindex].userid,
			"youritem": data.items[youritemindex].name,
			"youritemdis": data.items[youritemindex].description,
			"yoururl": data.items[youritemindex].imageURL,
			"hisitem": data.items[hisitemindex].name,
			"hisitemdis": data.items[hisitemindex].description,
			"hisurl": data.items[hisitemindex].imageURL,
			"hisname": data.accounts[ownerid - 1].name,
			"email": data.accounts[ownerid - 1].email

		}
		items.items.push(matchdata);
		//,data.accounts[ownerid - 1]
	}
	console.log(items);
	res.render('match', items);
};
