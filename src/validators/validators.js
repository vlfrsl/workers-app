window.URL = window.URL || window.webkitURL;

export const phoneValidator = (val) => {
  const result = {
    isValid: true,
    message: "",
  };

  if (!val.match(/^[\+]{0,1}380([0-9]{9})$/g)) {
    result.isValid = false;
    result.message =
      "enter phone number in international format, should start with code of Ukraine +380 ";
  }
  return result;
};

export const nameValidator = (val) => {
  const result = {
    isValid: true,
    message: "",
  };

  if (!(val.length >= 2 && val.length <= 60)) {
    result.isValid = false;
    result.message = "user name, should be 2-60 characters";
  }

  return result;
};

export const emailValidator = (val) => {
  const result = {
    isValid: true,
    message: "",
  };

  if (
    !val.match(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g
    )
  ) {
    result.isValid = false;
    result.message = "user email, must be a valid email according to RFC2822";
  }
  return result;
};

export const imageValidator = (file) => {
  const result = {
    isValid: true,
    message: "",
  };
  const allowed = ["jpg", "jpeg"];
  const type = file.type.split("/")[1];

  if (!allowed.includes(type)) {
    result.isValid = false;
    result.message = `user photo should be ${allowed.join(" / ")} image`;
    return result;
  }

  if (file.size > 50000) {
    result.isValid = false;
    result.message = "size must not exceed 5MB";
    return result;
  }

  let img = new Image();
  img.src = window.URL.createObjectURL(file);
  img.onload = function () {
    if (img.naturalWidth < 70 || img.naturalHeight < 70) {
      result.isValid = false;
      result.message = "resolution at least 70x70px";
    }
  };

  return result;
};
