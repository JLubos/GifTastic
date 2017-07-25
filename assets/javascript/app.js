//linked
console.log("its linked");




//Array for topics (buttons at the top)

var topics =["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "feret", "turtle",
			"sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
			"capybara", "teacup pig", "serval", "salamander", "frog"];




//Render the buttons
function renderButtons(){
	$("#animalButtons").empty();

	for(var i=0; i <topics.length ; i++){
		var a = $("<button>");
		a.addClass("animal");
		a.attr("data-name", topics[i]);
		a.attr("data-animal", topics[i]);
		a.text(topics[i]);
		$("#animalButtons").append(a);
	}

}


//Submit button
$("#addAnimal").on("click", function(event){
	event.preventDefault();
	var topic = $("#animal-input").val().trim();
	topics.push(topic);
	renderButtons();

});

//run function
renderButtons();


//click event for every button
$("button").on("click",function(){

	var animal = $(this).attr("data-animal");
	var APIkey = "502ddf6f7f5d42a39909e82a0bcc6d3d";

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal +
    		"&api_key=" + APIkey + "&limit=10";
   
    //call ajax
    $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response){
        	var results = response.data; console.log(response.data);
        	console.log(response);

        	for(var i=0; i <results.length; i++){

        		var animalDiv = $("<div>");

        		var p = $("<p>").text("Rating: " + results[i].rating);

        		var animalImage = $("<img>");

        		animalImage.attr("src", results[i].images.fixed_height.url);

        		animalDiv.append(animalImage);
        		animalDiv.append(p);

        		$("#animals").prepend(animalDiv);

        	}

        });

});

//buttons dont work after submitting a new topic


