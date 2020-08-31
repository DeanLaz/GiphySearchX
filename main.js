// SELECTORS

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const giphyDiv = document.getElementById("giphy-container");

const giphyKey = "F3hdmwTeh5VQtMeFRhODHQxNtUT5jzL1";

async function main(searchKeyword) {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${searchKeyword}&api_key=${giphyKey}&limit=24`;
  const response = await fetch(URL);
  const jsonData = await response.json();
  console.log(jsonData);
  console.log(jsonData.data[0].images.original.url);
  for (let i = 0; i < jsonData.data.length; i++) {
    var giphyImage = document.createElement("img");
    giphyImage.src = jsonData.data[i].images.original.url;
    giphyImage.height = 200;
    giphyImage.width = 200;
    console.log(jsonData.data[i].images.original.url);
    giphyDiv.appendChild(giphyImage);
  }
}
searchBtn.addEventListener("click", function handleSearch() {
  giphyDiv.innerHTML = "";
  let searchKey = searchInput.value;
  return main(searchKey);
});

// main("javascript");

// var xhr = $.get(
//   "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=F3hdmwTeh5VQtMeFRhODHQxNtUT5jzL1&limit=5"
// );
// xhr.done(function (data) {
//   console.log("success got data", data);

// });

// function giphySearch(keyword) {
//   const data = await new Promise((resolve, reject) => {
//     fetch(
//         `http://api.giphy.com/v1/gifs/search?q=dogs&api_key=${giphyKey}&limit=5`
//       )
//         .then((response) => resolve(response.json()))
//         .catch(error => reject(error));
//   })

//     .then((data) => console.log(data));
// }

// const result = data.data;
// for (let i = 0; i < result.length; i++) {
//   giphyDiv.innerHTML = result[i].images.original.url;
// }
