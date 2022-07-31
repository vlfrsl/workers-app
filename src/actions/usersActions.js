export const setPage = (page) => {
  return {
    type: "users/setPage",
    payload: page,
  };
};

export const setLimit = (limit) => {
  return {
    type: "users/setPage",
    payload: limit,
  };
};

export const setDefaultsUsers = () => {
  return {
    type: "users/setDefaults",
  };
};
