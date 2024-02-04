import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const UserService = {
  async getAllUsers() {
    let response = await apiClient.get("/users");
    let allUsers = response.data;
    return allUsers;
  },

  async submitUser(newUser) {
    await apiClient.post("/users", newUser);
  },

  async deleteUser(id) {
    try {
      await apiClient.delete(`/users/${id}`);
    } catch (error) {
      console.error("Hubo un error al eliminar el usuario: ", error);
    }
  },

  /*async submitUser() {

        //completar :)
        await console.log("Hola")
    }*/
};
