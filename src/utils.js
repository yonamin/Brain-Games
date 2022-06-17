export default function getRandomNum(max, min = 1) {
  const a = Math.ceil(min);
  const b = Math.floor(max);
  return Math.floor(Math.random() * (a - b)) + b;
}
