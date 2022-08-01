export const setPage = (page) => {
  return {
    type: "users/setPage",
    payload: page,
  };
};

export const setCount = (count) => {
  return {
    type: "users/setCount",
    payload: count,
  };
};

export const setDefaultsUsers = () => {
  return {
    type: "users/setDefaults",
  };
};
