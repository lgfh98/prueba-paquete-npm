const messages = [
  "Camilo",
  "Luis",
  "Yenny",
  "Manolo",
  "Laura",
  "Guillemo",
  "Claudia",
];
const randomMsg = () => {
  const message = messages[parseInt(Math.random() * (messages.length - 0) + 0)];
  console.log(message);
};

module.exports = {
  randomMsg,
};
