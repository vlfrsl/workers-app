export const getPositions = async () => {
  return await fetch(
    "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
  ).then((response) => {
    // if (response.status !== 200) {
    //   throw Error;
    // }
    return response.json();
  });
};
