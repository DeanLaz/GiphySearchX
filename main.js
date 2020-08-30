// SELECTORS

const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-input");

var xhr = $.get(
  "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=F3hdmwTeh5VQtMeFRhODHQxNtUT5jzL1&limit=5"
);
xhr.done(function (data) {
  console.log("success got data", data);
});
