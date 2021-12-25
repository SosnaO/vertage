const validateValue = value => {
  let res;
  for (let key in value) {
    res = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value[key]);
    if (!res) {
      return res;
    }
  }
  return res;
};
export default validateValue;
