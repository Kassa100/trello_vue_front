import axios from "axios";
import TMessage from "../components/Tmessage/TMessage";

axios.defaults.baseURL = process.env.VUE_APP_SERVER_API_PATH;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let { message, errorDetails } = error.response.data;
    if (errorDetails) {
      message += ":" + errorDetails;
    }
    TMessage.error(message);
    throw error;
  }
);

// 注册

export const register = (data) => {
  return axios({
    method: "post",
    url: "/user/register",
    data,
  });
};
