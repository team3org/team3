console.log("Sitet er loadet");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const user_container = document.querySelector(".user_container_single");
const url = `https://dummyjson.com/users/${id}`; //Url til api'et

function getData(url) {
  //Henter data fra APIét og sender det videre til funktionen showUsers
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showUsers(data);
    });
}

getData(url); //Kalder funktionen getData

function showUsers(user) {
  //Går igennem alle users,
  user_container.innerHTML += ` <article> 
    <img src="${user.image}" alt="">
    <p>${user.firstName}</p>
    <p>${user.lastName}</p>
    <p>${user.height}</p>
    </article>
`;
}
