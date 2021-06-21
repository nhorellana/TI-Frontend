import axios from "axios";

const HOST = "http://aysen3.ing.puc.cl/api/";

const instance = axios.create({
  baseURL: HOST,
});

async function requestBodegaData() {
  const response = await instance.get(
    "status-info",
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export default {
  requestBodegaData,
};
