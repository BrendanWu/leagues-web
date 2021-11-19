import axios, { Method } from "axios";
import { BASE_URL } from "../utils/config";

const makeApiRequest = (endpoint: string, method: Method, body: {}, token: any) => {
  const options = {
    url: `${BASE_URL}/api/${endpoint}`,
    method,
    headers: { 
      idtoken: token,
      liftedapp: "leagues",
      ContentType:"application/json"
    },
    data:body
  };
  return axios(options);
};

export default makeApiRequest;
