window.URL = window.URL || window.webkitURL;

export const phoneValidator = (val) => {
  const result = {
    isValid: true,
    message: "",
  };

  if (!val.match(/\+38\ \(\d{3}\)\ \d{3}-\d{2}-\d{2}/g)) {
    result.isValid = false;
    result.message = " user phone number, should fit a template below.";
  }
  return result;
  //return !!val.match(/\+38\ \(\d{3}\)\ \d{3}-\d{2}-\d{2}/g); //? true : false;
};

export const nameValidator = (val) => {
  const result = {
    isValid: true,
    message: "",
  };

  if (!(val.length >= 2 && val.length <= 60)) {
    console.log("IN valid name err");
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
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    )
  ) {
    result.isValid = false;
    result.message = "user email, must be a valid email according to RFC2822";
  }
  return result;

  // return !!val.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  // );
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
    result.message = `user photo should be ${allowed.join(" / ")} image`; //.push(`${allowed.join(" / ")} required`);
    return result;
  }

  if (file.size > 50000) {
    result.isValid = false;
    result.message = "size must not exceed 5MB"; //.push("too big image size");
    return result;
  }

  let img = new Image();
  img.src = window.URL.createObjectURL(file);
  img.onload = function () {
    if (img.naturalWidth < 70 || img.naturalHeight < 70) {
      result.isValid = false;
      result.message = "resolution at least 70x70px"; //.push("resolution at least 70x70");
    }
  };

  return result;
};
