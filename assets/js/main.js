const form = document.getElementById("myForm");
const myDiv = document.getElementById("myDiv");
const searchInput = document.getElementById("searchInput");
const API = "https://api.github.com/users/";

form.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
  },
  searchUser
);

function searchUser() {
  fetch(API + searchInput.value)
    .then((response) => response.json())
    .then((data) => {
      renderUser(data);
    });
}

function renderUser(data) {
  myDiv.innerHTML = "";
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  h1.className = "title";
  const h2_following = document.createElement("h2");
  const h2_followers = document.createElement("h2");
  h2_following.className = "follow";
  h2_followers.className = "follow";
  img.src = data.avatar_url;
  h1.textContent = data.login;
  h2_following.textContent = "Following: " + data.following;
  h2_followers.textContent = "Followers: " + data.followers;

  myDiv.append(h1, h2_followers, h2_following, img);
}
