// store the active TCP connection object
const { exitMessage } = require("./constants");
let connection;
let intervalID;

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
  // if user inputs q or ctrl+c, exit server
  if (key === 'q' || key === "\x03") {
    console.log(exitMessage, '\n')
    process.exit();
  }
  // clear current interval (movement) before starting NEW interval (movement)
  if (intervalID) {
    clearInterval(intervalID);
  }
  // switch key with the following cases
  switch (key) {
    // WASD controls to move up/left/down/right
    // if setInterval returns true, snake continues movement in direction
    case 'w': intervalID = setInterval(() => { connection.write("Move: up"); }, 100);
      break;
    case 'a': intervalID = setInterval(() => { connection.write("Move: left"); }, 100);
      break;
    case 's': intervalID = setInterval(() => { connection.write("Move: down"); }, 100)
      break;
    case 'd': intervalID = setInterval(() => { connection.write("Move: right"); }, 100);
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