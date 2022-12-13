const searchButton = document.querySelector("#search-btn");
const searchBar = document.querySelector("input#search-bar");

searchButton.onclick = () => {
  const searchBarValue = searchBar.value;
  if (searchBarValue == "Millefeuille NOW") {
    searchButton.setAttribute("href", "./register.html");
  } else if (searchBarValue == "demo_page") {
    searchButton.setAttribute("href", "./order.html");
  }
};