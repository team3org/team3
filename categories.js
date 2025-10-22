console.log("Sitet er loadet");

const params = new URLSearchParams(window.location.search);
const gender = params.get("gender");

console.log(gender);
const user_container = document.querySelector(".user_container");

document.querySelector("#filters").addEventListener("click", showFiltered);

function showFiltered(event) {
  //console.log(event.target);
  console.log("klikket");
  console.log(event.target.dataset.haircolor);
  const haircolor = event.target.dataset.haircolor;
  if (haircolor == "All") {
    currentDataSet = allData;
  } else {
    const udsnit = allData.filter((user) => user.hair.color == haircolor);
    currentDataSet = udsnit;
  }
  showUsers(currentDataSet);
}

let allData, currentDataSet;
const url = `https://dummyjson.com/users/filter?key=gender&value=${gender}`; //Url til api'et

getData(url); //Kalder funktionen getData

function getData(url) {
  //Henter data fra APIét og sender det videre til funktionen showProducts
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allData = currentDataSet = data.users;
      showUsers(allData);
    });
}

function showUsers(users) {
  user_container.innerHTML = "";
  users.forEach((user) => {
    //Går igennem alle produkter,
    user_container.innerHTML += ` <article> 
       <a href="single_user.html?id=${user.id}"><img src="${user.image}" alt="">
    <p>${user.firstName} ${user.lastName}</p></a>
    </article>
`;
  });
}
