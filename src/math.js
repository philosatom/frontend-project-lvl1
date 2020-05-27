export default getRandomNumbers = (min, max, numsCount) => {
  const nums = [];

  for (let i = 0; i < numsCount; i += 1) {
    const num = Math.floor(Math.random() * (max + 1 - min)) + min;
    nums.push(num);
  }

  return nums;
};
