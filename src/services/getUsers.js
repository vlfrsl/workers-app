export const getUsers = async ({ page, limit }) => {
  return await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${limit}`
  ).then((response) => {
    // if (response.status !== 200) {
    //   throw Error;
    // }
    return response.json();
  });
};
