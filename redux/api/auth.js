import Axios from "axios";
let BASEURL = process.env.NEXT_PUBLIC_BACKEND_API;

//Config
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

/**
 * Login api
 */
export const loginApi = async (data) => {
  let jData = JSON.stringify(data);

  let res = await Axios.post(`${BASEURL}/api/auth/login`, jData, config);
  console.log(res);
  return res;
};
