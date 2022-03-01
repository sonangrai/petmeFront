import axios from "axios";

//Utlilites for api hits
export const BASEURL = process.env.NEXT_PUBLIC_BACKEND_API;

//Config for application json
export const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

/**
 * The interceptor logic
 */
const interceptor = (loggedAxios) => (error) => {
  const _axios = loggedAxios;
  const originalConfig = error.config;

  //If qouta request finished
  // if (error.response.status === 403) {
  //   toast.error(error.data.status.message, {
  //     position: "bottom-right",
  //   });
  //   return Promise.reject(error);
  // }

  // Access Token was expired
  if (error.response.status === 401 && !originalConfig._retry) {
    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalConfig.headers["x-auth-token"] = token;
          return _axios(originalConfig);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    originalConfig._retry = true;
    isRefreshing = true;

    return new Promise(function (resolve, reject) {
      refreshTokenApi(pack)
        .then((res) => {
          processQueue(null, res.data?.data?.access_token);
          //Distpaching the redux
          store.dispatch(loadUser());
          resolve(_axios(originalConfig));
        })
        .catch((error) => {
          processQueue(error, null);
          reject(error);
        })
        .finally(() => {
          isRefreshing = false;
        });
    });
  } else {
    return Promise.reject(error);
  }
};

/**
 * Axios with interceptors
 */
export const loggedAxios = () => {
  let headers = {};
  let loggedAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    headers,
  });
  let getAuth = JSON.parse(localStorage.getItem("petAuth"));
  loggedAxios.interceptors.request.use((req) => {
    req.headers["x-auth-token"] = getAuth.access_token; //Adding token in the request headers
    return req;
  });

  loggedAxios.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    interceptor(loggedAxios)
  );

  return loggedAxios;
};
