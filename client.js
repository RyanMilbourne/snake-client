const net = require("net");
const connect = function() {

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log(
      `
              🐍
      🔥💀 U HAVE DIED 💀🔥
        too many idleing
        🐍 hissssssss 🐍
      `
    )
  });

  conn.on("connect", () => {
    console.log(
      `
      Congratulations Player!
       You have successfully
       entered the kigndom of
          ⚔️🐍🔥 SNEK 🔥🐍⚔️`
    )
    conn.write("Name:  Neo")
  })

  return conn
}

module.exports = {
  connect
}