import Axios from "axios";
import { BASEURL } from "./utils";

/**
 *
 * @param {*} id
 * @returns Fet profile api
 */
export const getProfileApi = async (id) => {
  const res = await Axios.get(`${BASEURL}/profile`);
  return res;
};
