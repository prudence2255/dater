const minAge = () => {
  let date = new Date();
  let minAge = 18;
  let year = date.getFullYear() - minAge;
  date.setFullYear(year);
  return date;
};

const ageMin = minAge();

export { ageMin };
