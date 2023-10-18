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
  if (key === 'w') { connection.write("Move: up"); }
  if (key === 'a') { connection.write("Move: left"); }
  if (key === 's') { connection.write("Move: down"); }
  if (key === 'd') { connection.write("Move: right"); }
};

module.exports = {
  setupInput
}