var getUser = function(){
		VK.api('users.get', {}, function (data){
			userId = data.response.id;
			console.log(userId);	
		}) 
	};

// var getAlbum = function (){
// 	VK.api('photos.getAlbums',{ owner_id: userId}, function (data){
// 		album = data['response'];
// 	})
// };	

  VK.init(function() { 
     getUser();
     //getAlbum(); 
  }, function() { 
     console.log('error');
}, '5.53'); 