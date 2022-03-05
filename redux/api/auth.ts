import Axios from "axios";
import { jsonConfig, BASEURL } from "./config";

/**
 * Login api
 */
export const loginApi = async (data) => {
  let jData = JSON.stringify(data);

  let res = await Axios.post(`${BASEURL}/auth/login`, jData, jsonConfig);
  return res;
};

/**
 * Register api
 */
export const registerApi = async (data) => {
  let jData = JSON.stringify(data);

  let res = await Axios.post(`${BASEURL}/auth`, jData, jsonConfig);
  return res;
};

/**
 * Activate account api
 */
export const activateApi = async (data) => {
  let jData = JSON.stringify(data);

  let res = await Axios.post(`${BASEURL}/auth/activate`, jData, jsonConfig);
  return res;
};
