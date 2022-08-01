import { GET_POSITIONS_URL } from "../constants/urls";

export const getPositions = async () => {
  const url = GET_POSITIONS_URL;
  return await fetch(url).then((response) => {
    return response.json();
  });
};
