import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

// // step 1 and 2 combined 
// axios.get('https://api.github.com/users/fernando817mm')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err))
//   .finally(() => console.log('done'));

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

// function builder(username){
//   axios.get(`https://api.github.com/users/${username}`)
//     .then(res => document.querySelector('.cards').append(res.data.name))
//     .catch(err => console.log(err));
// }

// builder('fernando817mm');

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// followersArray.forEach(e => {
//   const user = builder(e);
//   return user;
// })

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardConstructor({ avatar_url, name, login, location, html_url, followers, following, bio }){
  const card = document.createElement('div');
  const img = document.createElement('img');
  const infoDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  const username = document.createElement('p');
  const pLocation = document.createElement('p');
  const addressContainer = document.createElement('p');
  const address = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  card.classList.add('card');
  img.src = avatar_url;
  infoDiv.classList.add('card-info');
  h3.classList.add('name');
  username.classList.add('username');
  address.href = html_url;

  h3.textContent = name;
  username.textContent = login;
  pLocation.textContent = `Location: ${location}`;
  addressContainer.textContent = 'Profile: ';
  address.textContent = html_url;
  followersP.textContent = `Followers: ${followers}`;
  followingP.textContent = `Following: ${following}`;
  bioP.textContent = `Bio: ${bio}`;

  address.setAttribute('target', '_blank');

  card.append(img);
  card.append(infoDiv);
  infoDiv.append(h3);
  infoDiv.append(username);
  infoDiv.append(pLocation);
  infoDiv.append(addressContainer);
  addressContainer.append(address);
  infoDiv.append(followersP);
  infoDiv.append(followingP);
  infoDiv.append(bioP);

  return card;
}

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'Jie-chelchel',
  'fernando817mm',
  'aliyahlina'
];

followersArray.forEach(e => {
  axios.get(`https://api.github.com/users/${e}`)
  .then(res => {
    const userCard = cardConstructor(res.data);
    document.querySelector('.cards').append(userCard);
  })
  .catch(err => console.log(err));
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
