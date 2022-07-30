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
    `shttps://frontend-test-assignment-api.abz.agency/api/v1/users`,
    {
      method: "POST",
      headers: {
        Token: token,
      },

      body: formData,
    }
  )
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
