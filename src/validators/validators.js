export const phoneValidator = (val) => {
  return !!val.match(/\+38\ \(\d{3}\)\ \d{3}-\d{2}-\d{2}/g); //? true : false;
};

export const nameValidator = (val) => {
  return val.length >= 2 && val.length <= 60;
};

export const emailValidator = (val) => {
  return !!val.match(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  );
};
