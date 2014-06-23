

function search(){

	document.getElementById("list_view").innerHTML = "";
	document.getElementById("search_count").innerHTML = "";

	var query = $("#search_box").val();

	var Parameters = { "title": query.toString() };

	console.log(query);

	$.ajax({
		type:'POST',
		url:"https://instatunes.p.mashape.com/search",
		headers: { "X-Mashape-Authorization": "SQ1GEeMmhU9uBVr1sj388WC6HbbRNNF8",
		"Content-Type": "application/json"},
		data: JSON.stringify(Parameters),
		dataType: 'json', 
		success:function(data){
			
			var list = $("#list_view");
			var s_count = $("#search_count");


			if(data['result'].length>0){
			//alert("Success");
			//console.log(data['result'][0]['title']);
			
			// var style = document.createElement('style');
			// style.type = 'text/css';
			// style.innerHTML = '.cssClass { color: #F00; }';


			// var ul = document.createElement('ul');
			// ul.setAttribute('data-role',"listview");
			// ul.setAttribute('data-inset',"true");

			// var li = document.createElement('li');
			// li.setAttribute('data-role',"list-divider");
			// li.setAttribute('data-theme',"b");

			// var h1 = document.createElement('h1');
			// h1.innerHTML="Search Results";

			// li.appendChild(h1);
			// console.log(li);
			// console.log(ul);
			// list.append('<li data-role="list-divider" data-theme="b"><h1>Search Results</h1></li>');

			for(var count=0; count < data['result'].length; count++){
			//console.log(data['result'][count]['title']);

			// var full_title = data['result'][count]['title'].split("-");
			// var artist_mp3 = full_title[1].split(" ");
			// var artist = artist_mp3[0];

			var other_info = data['result'][count]['other_info'].split("|");

			var msg = "<li data-role=\"list-divider\"><a href=\""+data['result'][count]['stream_link']+"\" target=\"blank\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-icon-left ui-icon-audio\">"; 
			msg += "<h2>"+data['result'][count]['title']+"</h2>";
			if(typeof(other_info[1]) && typeof(other_info[2]) != "undefined"){
				msg+= "<p>"+other_info[1]+" "+other_info[2]+"</p>";
			}
			msg += "</a><a href=\""+data['result'][count]['download_link']+"\" download=\""+data['result'][count]['title']+"\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-icon-left ui-icon-action\">Download</a></li>";


			list.append(msg);
		}
		s_count.append(data['result'].length.toString());

		// ul.appendChild(li);
		 console.log(list);
		// list.append(ul);
	}else{
		s_count.append(data['result'].length.toString());
		list.append('<h3>Sorry no results found for that title</h3>');
	}
},
error:function(){
	alert("Error - Could not make search");
}      
});
}