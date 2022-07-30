export const postUser = async ({
  name,
  email,
  phone,
  positionId,
  photo,
  token,
}) => {
  // console.log("DATA to post", name, email, phone, positionId, photo, token);
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("position_id", positionId);
  formData.append("photo", photo);

  return await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
    {
      method: "POST",
      headers: {
        Token: token,
      },

      body: formData,
    }
  ).then((response) => {
    // if (response.status !== 200) {
    //   throw Error;
    // }
    return response.json();
    // console.log("resp", j);
    // return j;
  });
};
