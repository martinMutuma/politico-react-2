import { mainUrl } from "../../utils/globalVars";
import axios from "axios";
import display_message from "../actions/messageAction";
import store from "../store";
export default (data = {}) => {
  const url = mainUrl + "auth/login";
  return axios
    .post(url, data)
    .then(response => {
      if (response.data != null) {
        const data = response.data.data;
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("user", JSON.stringify(data.user));
        sessionStorage.setItem("userob", data.user);
        localStorage.setItem("message", "Login Successfull");
        return true;
      }
    })
    .catch(error => {
      if (error.response) {
        const data = error.response.data;
        store.dispatch(display_message(data.error));
        return false;
      }
    });
};
