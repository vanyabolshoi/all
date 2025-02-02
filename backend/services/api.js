import axios from "axios";

const API_URL = "http://vroom.buhprogsoft.com.ua/users";

const UserService = {
  getUsers: () => axios.get(API_URL),
  getUserById: (id) => axios.get(`${API_URL}/${id}`),
  createUser: (user) => axios.post(API_URL, user),
  updateUser: (id, user) => axios.put(`${API_URL}/${id}`, user),
  deleteUser: (id) => axios.delete(`${API_URL}/${id}`)
};

export default UserService;