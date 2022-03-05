import { BASEURL, loggedAxios, jsonConfig, multiConfig } from "./config";

/**
 *
 * @param {*} id
 * @returns Fet profile api
 */
export const getProfileApi = async () => {
  const res = await loggedAxios().get(`${BASEURL}/profile`);
  return res;
};

/**
 *
 * @param {*} data
 * @returns Add or Update DP
 */
export const addupdateDPApi = async (data) => {
  //Creating formdata for image file
  var fd = new FormData();
  fd.append("image", data);

  const res = await loggedAxios().post(
    `${BASEURL}/profile/dp`,
    fd,
    multiConfig
  );
  return res;
};

/**
 *
 * @param data Adds profile
 */
export const addProfileApi = async (data: Iprofile) => {
  const jData = JSON.stringify(data);
  const res = await loggedAxios().post(`${BASEURL}/profile`, jData, jsonConfig);
  return res;
};
