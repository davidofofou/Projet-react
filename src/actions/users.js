import UserService from "../services/UserService";

class users {
    createUser(data){
        UserService.create(data);
    }

    retrieveUsers()
}