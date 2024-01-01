import { loggedAxios } from "./config";

export const getAllFeeds = async () => {
  let res = await loggedAxios().get(`/feed`);
  return res;
};
