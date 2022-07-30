export const getToken = async () => {
  return await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/token`
  )
    .then((response) => {
      // if (response.status !== 200) {
      //   throw Error;
      // }
      return response.json();
    })
    .then((json) => {
      return json.token;
    });
};
