export const getDate = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const month = date.getMonth() + 1;
  const today = date.getDate();
  if (month < 10) {
    let dayNow = `${today}/0${month}/${currentYear}`;
    return dayNow;
  } else {
    let dayNow = `${today}/1${month}/${currentYear}`;
    return dayNow;
  }
};
