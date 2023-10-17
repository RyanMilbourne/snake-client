const net = require("net");
const connect = function() {

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log("🐍 hsssssssssss 🐍\n🔥💀 u r dead 💀🔥\n u idled 4 2 long\n🐍 hsssssssssss 🐍");
  });

  return conn
}

module.exports = {
  connect
}