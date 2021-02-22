import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchUsers: function() {
    return axios.get("https://randomuser.me/api/?results=500").then(res => {
        const users = res.data.results;
        let userList = users.filter(user => {
          return user.location.country === "United States"; 
        });
        return userList.sort((a,b) => (a.name.last > b.name.last) ? 1 : -1);
      }).catch(err => console.log(err));
  }
};