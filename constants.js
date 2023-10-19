const IP = 'localhost';
const PORT = 50541;

// message to be displayed upon succesful server connection
const welcomeMessage = `
🔥💀 WELCOME  TO 💀🔥
 ⚔️🐍🔥💥 SNEK 💥🔥🐍⚔️
  🐍 hisssssssss 🐍
`;

// message to be displayed upon death/idleing too long
const idleMessage = `
       🐍
🔥💀 U HAVE DIED 💀🔥
  too many idleing
  🐍 hisssssssss 🐍
`;

// message to be displayed upon exiting server
const exitMessage = `
    You have left
🐍 the snek kingdom 🐍
  🖖 safe travels 🖖
`;

// export constants to allow usage with other files
module.exports = {
  IP,
  PORT,
  welcomeMessage,
  idleMessage,
  exitMessage
};