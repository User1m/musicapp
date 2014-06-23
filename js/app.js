

function search(){

	var query = $("#search_box").val();

	var Parameters = { "title": "or nah" };

	console.log(query);

	$.ajax({
		type:'POST',
		url:"https://instatunes.p.mashape.com/search",
		headers: { "X-Mashape-Authorization": "SQ1GEeMmhU9uBVr1sj388WC6HbbRNNF8",
		"Content-Type": "application/json"},
		data: JSON.stringify(Parameters),
		dataType: 'json', 
		success:function(data){
			alert("Success");
			console.log(data['result'][0]['title']);
			
		for(var count=0; count < data['result'].length; count++){
			console.log(data['result'][count]['title']);
		}

		},
		error:function(){
			alert("Error");
		}      
	});
}