const net = require("net");
const connect = function() {

  const welcomeMessage = `
  🔥💀 WELCOME TO: 💀🔥
   ⚔️🐍🔥💥 SNEK 💥🔥🐍⚔️
    🐍 hisssssssss 🐍
`;
  const idleMessage = `
         🐍
🔥💀 U HAVE DIED 💀🔥
  too many idleing
  🐍 hisssssssss 🐍
`;

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
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