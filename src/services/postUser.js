import { POST_USER_URL } from "../constants/urls";

export const postUser = async ({
  name,
  email,
  phone,
  positionId,
  photo,
  token,
}) => {
  const url = POST_USER_URL;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("position_id", positionId);
  formData.append("photo", photo);

  return await fetch(url, {
    method: "POST",
    headers: {
      Token: token,
    },

    body: formData,
  })
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
