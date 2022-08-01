import { REGISTER_REQUIRED_DATA } from "../constants/registerUserDataRequired";

export const isDataFull = (data) => {
  const requiredKeys = Object.keys(REGISTER_REQUIRED_DATA);

  const result = requiredKeys.every((requiredKey) => {
    return !!data[requiredKey] && !!data[requiredKey];
  });

  return result;
};
