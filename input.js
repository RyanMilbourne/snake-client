const handleUserInput = function(key) {
  const exitMessage = `
      You have left
  🐍 the snek kingdom 🐍
    🖖 safe travels 🖖
  `;
  // if user inputs q or ctrl+c, exit server
  if (key === 'q' || key === "\x03") {
    console.log(exitMessage, '\n')
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();

module.exports = {
  setupInput
}