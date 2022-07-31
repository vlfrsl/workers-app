import { GET_TOKEN_URL } from "../constants/urls";

export const getToken = async () => {
  const url = GET_TOKEN_URL;
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.token;
    });
};
