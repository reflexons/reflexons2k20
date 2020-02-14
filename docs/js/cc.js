const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">schedule</span>, <span class="code">rules</span>, <span class="code">home</span>, <span class="code">register</span>',
  about:
    "Hello there, welcome to CodeCombat! This is the competitive programming event of Reflexons 2K20. Hope you will enjoy this years competition so all the best to you and rember this.....you are CODE BLOODED",
  rules:
    '<span class="code">Languages allowed:</span> Python, Java, C, CPP, Fortan<br><span class="code">Time limit:</span> TBA<br><span class="code">Topics: </span> TBA',
  schedule:
    '<span class="code">DATE:</span>  18th March 2020<br><span class="code">Location:</span> Comfort of your home<br><span class="code">Misc: </span> TBA',
  register:
    "You can by filling out this google form:<br><a href='troll.html' class='success link'>REGISTER</a> ",
  home:
    "Wanna leave? really? ok click here :( :<br><a href='index.html' class='success link'>HOME</a> "
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").getAnimations(0).focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
