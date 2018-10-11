export class FriendsService {
  getFriends() {
    return fetch('http://localhost:5000/friends')
           .then((data) => {
             return data.json();
           });
  }
}