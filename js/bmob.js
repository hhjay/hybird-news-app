var BmobTest = {
    init: function(){
    	// your Bmob message
    	Bmob.initialize("", "");
    },
	getLoginUser: function(){
		var user = Bmob.Object.extend("User");
	    var query = new Bmob.Query(user);
	    query.find({
	      	success: function(obj) {
	      		let list = [];
	      		for(let i in obj){
	      			let temp = obj[i].attributes;
	      			list.push(temp);
	      		}
	      		vm.article = list;
	      		currentList(0, 5);
		    },
		    error: function(obj, error) {
		        console.error(obj, error);
		    }
	    });
	}
}
BmobTest.init();
BmobTest.getLoginUser();