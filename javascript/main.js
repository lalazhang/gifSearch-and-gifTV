/*1.Grab the input*/

/*grab the button class, when hit the button the gifs show up*/
document.querySelector(".js-go").addEventListener('click',function(){
	var input = document.querySelector("input").value;/*grab the user input value*/
    //console.log(input);
    inputToSearch(input);/*add user input to the search URI*/

});
/*grab the input, when hit the enter the gifs show up*/
document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	//console.log(e);
	
	var input = document.querySelector("input").value;
	/*how to clean the search history  container.innerHTML="input";*/
    /*console.log(input);*/

    // if the key ENTER is pressed...
    if (e.which===13){
    	inputToSearch(input);
    }
    

});
/*2.do the data stuff with the API*/
function inputToSearch(a){
var url= "http://api.giphy.com/v1/gifs/search?q="+a+"&api_key=dWM8H4eOcph7ch2kq5s6pe1AxB1Qnk6l";

//AJAX Request
var GiphyAJAXCall= new XMLHttpRequest();
GiphyAJAXCall.open('GET',url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){
	var data=e.target.response;
	//console.log(data); 
	pushToDOM(data);

});
}
/*3.show the GIFs*/
function pushToDOM(a) {
 
    /*a is the input value that matches dog*/
    var container = document.querySelector(".js-container");
	var response=JSON.parse(a);
	console.log(response);
	var imageUrl=response.data;//[0].images.fixed_height.url;
	container.innerHTML=""; /*this line is to clear the previous search*/
	imageUrl.forEach(function(e){
		console.log(e.images.fixed_height.url);
		var image=e.images.fixed_height.url;

		/*
		below write gif one after the previous one by concation 
		note the use of escape \
		*/
	    container.innerHTML = container.innerHTML+ "<img src=\""+image+"\" class=\"container-image\">"; 
	})


	



}


