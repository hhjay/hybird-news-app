var BmobTest = {
    init: function(){
    	Bmob.initialize("9b70739f697130cb5cc760915aba2430", "e8f67fd824bca45c9cc406c5daca8a2f");
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