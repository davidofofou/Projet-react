import http from "../http-common";

class UserService  {
 
    getAll() {
        return http.get("/users");
    }

    get(id) {
        return http.get(`/users/${id}`);
    }

    create(data) {
        return http.post("/users",data);
    }

    update(id, data) {
        return http.put(`/users/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }

    find(terms) {
        return http.get(`/users?terms=${terms}`);
    }
}

export default new UserService();
