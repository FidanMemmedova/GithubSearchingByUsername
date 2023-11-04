const form = document.getElementById("myForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const myDiv = document.getElementById("myDiv");
const API = "https://api.github.com/users/";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchUser();
});

searchUser = async () => {
  let request = await fetch(API + searchInput.value);
  let response = await request.json();
  //   console.log(response);
  renderUser(response);
};
function renderUser(response) {
  console.log(response);
  myDiv.innerHTML = "";
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  h1.className = "title";
  const h2_following = document.createElement("h2");
  const h2_followers = document.createElement("h2");
  h2_following.className = "follow";
  h2_followers.className = "follow";
  img.src = response.avatar_url;
  h1.textContent = response.login;
  h2_following.textContent = "Following: " + response.following;
  h2_followers.textContent = "Followers: " + response.followers;

  myDiv.append(h1, h2_followers, h2_following, img);
}
