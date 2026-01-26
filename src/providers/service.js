import axios from "axios";
import { baseApiUrl } from "../constants/defaultValues";

const createInstance = function () {
  const axiosInstance = axios.create({
    baseURL: baseApiUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("x-access-token"),
    },
  });
  return axiosInstance;
};

export const Service = {
  login: function (payload) {
    return new Promise(function (resolve, reject) {
      const axiosInstance = createInstance();
      axiosInstance
        .post("/login", payload)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
    });
  },
  create_user: function (payload) {
    return new Promise(function (resolve, reject) {
      const axiosInstance = createInstance();
      axiosInstance
        .post("/register", payload)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}