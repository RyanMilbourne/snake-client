const net = require("net");
const { IP, PORT, welcomeMessage, idleMessage } = require("./constants");

const connect = function() {

  const conn = net.createConnection({
    // establish connection between IP and PORT
    host: IP,
    port: PORT
  });

  // establish compatible encoding, UTF8
  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log(idleMessage);
  });

  conn.on("connect", () => {
    // print welcomeMessage upon succesful connection
    console.log(welcomeMessage);
    // indicate player namme
    conn.write("Name:  Neo");

  });

  // return conn (object) to allow proper usage across files
  return conn;
};

// export connect function to allow usage across files
module.exports = {
  connect
};