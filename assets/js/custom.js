function editImage(id){
	$.get("editImage/" + id);
};

$(document).ready(function(){

$.get('album/default');

$('#searchBtn').click(function(){
	var searchTxt= $('#searchTxt').val();	
	$.getJSON("/file"), function(data){		
		Object.keys(data).forEach(function (key) {
			if(data[key].userId==searchTxt){  //Staviti da trazi username umjesto id
			var path="images/"+data[key].path;
			$('#slide1').append("<div><div class='post-box col-lg-4 col-md-4 col-sm-4'><img class='img-responsive img-thumbnail' src="+path+"</div></div>");
			}
		});
		Object.keys(data).forEach(function (key) {
			if(data[key].albumId==searchTxt){ //staviti da trazi albumname umjesto id
			var path="images/"+data[key].path;
			$('#slide1').append("<div><div class='post-box col-lg-4 col-md-4 col-sm-4'><img class='img-responsive img-thumbnail' src="+path+"</div></div>");
			}
		});
	};
});

$('#slideYX').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 100,
  gutter:25,
});


});