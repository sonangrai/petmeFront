import Axios from "axios";
import { BASEURL } from "./utils";

export const getProfileApi = async (id) => {
  const res = await Axios.get(`${BASEURL}/profile`);
  return res;
};
