app.service('userInfoService', ['baseService', function(baseService){
	
	baseService.service = 'userInfo1';

	baseService.syncLoad = function(){
		return $.ajax({
			url: baseService._getService(),
			async: false
		});
	};

	return baseService;

}]);