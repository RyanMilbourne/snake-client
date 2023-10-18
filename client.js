const net = require("net");
const { IP, PORT, welcomeMessage, idleMessage } = require("./constants");

const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log(idleMessage)
  });

  conn.on("connect", () => {

    console.log(welcomeMessage);

    conn.write("Name:  Neo");

  });

  /* Experiment moving our snake with 'hard-coding' using setTimeout and setInterval

  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: up');
      setTimeout(() => {
        conn.write('Move: left');
      }, 50);
    }, 50);
  });

    conn.on('connect', () => {
    setInterval(() => {
      conn.write('Move: left')
    }, 50)
  })
*/
  return conn
}

module.exports = {
  connect
}