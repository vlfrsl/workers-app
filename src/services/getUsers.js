import { GET_USERS_URL } from "../constants/urls";

export const getUsers = async (searchParams) => {
  const url = GET_USERS_URL + new URLSearchParams(searchParams);

  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (!json.success) {
        throw Error(json.message);
      }
      return json;
    });
};
