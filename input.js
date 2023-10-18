// store the active TCP connection object
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

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
  // switch key with the following cases
  switch (key) {
    // WASD controls to move up/left/down/right
    case 'w': connection.write("Move: up");
      break;
    case 'a': connection.write("Move: left");
      break;
    case 's': connection.write("Move: down");
      break;
    case 'd': connection.write("Move: right");
      break;
    // canned messages
    case 'o': connection.write("Say: pardon me!");
      break;
    case 'p': connection.write("Say: Hssss")
  }
};

module.exports = {
  setupInput
}