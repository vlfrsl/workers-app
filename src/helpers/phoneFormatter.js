export const formatPhone = (number) => {
  let splitted = number.split("");

  splitted.splice(3, "", " (");
  splitted.splice(7, "", ") ");
  splitted.splice(11, "", " ");
  splitted.splice(14, "", " ");

  return splitted.join("");
};
