(function () {

	var button = $("button");
	var takeURL = "https://jsonplaceholder.typicode.com/users";
	button.on("click", function(event) {
		event.preventDefault();
		$("input").attr("value", takeURL);
		var place = $("#list");
		$.getJSON(takeURL, function(data) {
			console.log(data);
			for (var i=0; i<data.length; i++) {
				var str = "<strong>"+data[i].name+" ("+data[i].username+")</strong>; e-mail: "+data[i].email+"; <strong>Tel: "+data[i].phone+"</strong>; Adres: "+data[i].address.city+" "+data[i].address.street+" "+data[i].address.suite;
				place.append("<li>"+str+"</li>");
			}
		});
	});


})();