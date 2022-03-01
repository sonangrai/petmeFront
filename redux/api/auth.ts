import Axios from "axios";
import { config, BASEURL } from "./utils";

/**
 * Login api
 */
export const loginApi = async (data) => {
  let jData = JSON.stringify(data);

  let res = await Axios.post(`${BASEURL}/auth/login`, jData, config);
  return res;
};

/**
 * Register api
 */
export const registerApi = async (data) => {
  let jData = JSON.stringify(data);

  let res = await Axios.post(`${BASEURL}/auth`, jData, config);
  return res;
};

/**
 * Activate account api
 */
export const activateApi = async (data) => {
  let jData = JSON.stringify(data);

  let res = await Axios.post(`${BASEURL}/auth/activate`, jData, config);
  return res;
};
