import { BASEURL, loggedAxios } from "./utils";

/**
 *
 * @param {*} id
 * @returns Fet profile api
 */
export const getProfileApi = async () => {
  const res = await loggedAxios().get(`${BASEURL}/profile`);
  return res;
};
