import { BASEURL, loggedAxios, config } from "./utils";

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
  let config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  //Creating formdata for image file
  var fd = new FormData();
  fd.append("image", data);

  const res = await loggedAxios().post(`${BASEURL}/profile/dp`, fd, config);
  return res;
};
