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

export const setDefaults = () => {
  return {
    type: "users/setDefaults",
  };
};
