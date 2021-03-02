
fetch('http://www.jhonnymichel.com/frontend-academy/api/profile/')
  .then((response) => {
    return response.json();
  }).then(data => {
    renderProfileInfo(data);
    const userLoader = document.getElementById("loader");
    //userLoader.classList.add('loaderfadeout');
  }).catch((err) => {
    console.log('rejected', err);
  })
  ;


fetch('http://www.jhonnymichel.com/frontend-academy/api/friends/')
  .then((response) => {
    return response.json();
  }).then(data => {
    createFriendsList(data);
    document.getElementById("loadersGrid").style.display = "none";
  }).catch((err) => {
    console.log('rejected', err);
  })
  ;

const apiUrl = 'http://www.jhonnymichel.com/frontend-academy/';

//functions 
function renderRating(stars) {
  const rating = document.createElement('div');
  for (let i = 0; i < 5; i++) {
    const starPosition = document.createElement('i');
    if (stars >= i + 1) {
      starPosition.textContent += 'star';
    } else if (stars <= i) {
      starPosition.textContent += 'star_outline';
    } else {
      starPosition.textContent += 'star_half';
    }
    starPosition.className = ('material-icons');
    rating.appendChild(starPosition);
  }
  return rating;
}

function renderProfileInfo(user) {
  const profileImage = document.querySelector('#profile-image');
  profileImage.style.backgroundImage = `url(${apiUrl + user.imgUrl})`

  const welcomeMessage = document.querySelector('#welcome-message');
  welcomeMessage.textContent = `Welcome, ${user.name}!`;

  const profileVisits = document.querySelector('#profile-visits');
  profileVisits.textContent = `${user.profileVisits} profile visits last week`;

  const profileRatedBy = document.querySelector('#profile-rated-by');
  profileRatedBy.textContent = `${user.ratedBy} people rated your profile`;

  const userRating = document.querySelector("#user-rating");
  const rating = renderRating(user.rate);
  userRating.appendChild(rating);

}

var counter = 1;
function cardLoaders(counter) {
  while (counter <= 6) {
    const cardLoader = document.createElement('article');
    cardLoader.className = 'cardLoader';
    counter++;
  }
}


function createFriend(friend) {
  const card = document.createElement('article');
  card.className = 'card';

  const friendIcons = document.createElement('footer');
  friendIcons.className = 'friend-icons';
  card.appendChild(friendIcons);

  const photo = document.createElement('div');
  photo.className = 'picturevisitor';
  photo.style.backgroundImage = `url(${apiUrl + friend.imgUrl})`
  friendIcons.appendChild(photo);


  const ratingVisitor = document.createElement('div');
  ratingVisitor.className = 'ratingvisitor';
  const rating = renderRating(friend.rate);
  ratingVisitor.appendChild(rating);
  friendIcons.appendChild(ratingVisitor);

  const userText = document.createElement('div');
  userText.className = 'user-text';
  card.appendChild(userText);

  const friendName = document.createElement('header');
  friendName.innerHTML += `<h3 class = "friendname">${friend.name}</h3>`
  userText.appendChild(friendName);

  const bio = document.createElement('p');
  bio.className = 'bio';
  bio.innerHTML = friend.description;
  userText.appendChild(bio);

  return card;
}

function createFriendsList(friends) {
  const friendsContainer = document.querySelector('#friends-container');
  friends.forEach(function (friend) {
    const cardFriend = createFriend(friend);
    friendsContainer.appendChild(cardFriend);
  })

}
