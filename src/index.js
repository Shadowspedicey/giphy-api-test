const img = document.querySelector("img");
const input = document.querySelector("input");
const findButton = document.querySelector("button");

img.src = "https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif";

function SearchForGif()
{
	if (input.value === "") return alert("Please input something, don't try to break the fucking system");
	fetch(`https://api.giphy.com/v1/gifs/translate?api_key=PqHv59WbAiJybaGF4QE0hCZCIEY3b0rS&s=${input.value}`, {mode: "cors"})
		.then(response => response.json())
		.then(response => 
		{
			console.log(response);
			img.src = response.data.images.downsized.url;
		})
		.catch(err => new Error(err));
}

findButton.addEventListener("click", SearchForGif);
