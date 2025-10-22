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
  console.log(user);
  //Går igennem alle users,
  user_container.innerHTML += ` 
     <div>
            <h1>${user.firstName} ${user.lastName}</h1>
            <p class="single_user_space">Alder: ${user.age}</p>
            <p>Køn: ${user.gender}</p>
            <p>Fødselsdag: ${user.birthDate}</p>
        
            <p class="single_user_space">Højde: ${user.height} cm</p>
            <p>Hår: ${user.hair.color} ${user.hair.type}</p>
            <p>Øjne: ${user.eyeColor}</p>
        
            <p class="single_user_space">Email: ${user.email}</p>
            <p>Telefon: ${user.phone}</p>
        </div>
        <div>
            <img class="single_user_img" src="${user.image}" alt="">
        </div>
   
`;
}
