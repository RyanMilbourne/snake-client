const net = require("net");
const { IP, PORT, welcomeMessage, idleMessage } = require("./constants");

const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log(idleMessage);
  });

  conn.on("connect", () => {

    console.log(welcomeMessage);

    conn.write("Name:  Neo");

  });

  return conn;
};

module.exports = {
  connect
};