export const getUsers = async () => {
  return await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`
  ).then((response) => {
    // if (response.status !== 200) {
    //   throw Error;
    // }
    return response.json();
  });
};
