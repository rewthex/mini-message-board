const messages = [
  {
    text: "Deja vu. It's a glitch in the system.",
    user: "Wh1teRabbi7",
    added: new Date(Date.now() - 86400000 * 6.8).toUTCString(), // ~6.8 days ago
  },
  {
    text: "There is no spoon.",
    user: "Child0fZ10n",
    added: new Date(Date.now() - 86400000 * 3.1).toUTCString(), // ~3.1 days ago
  },
  {
    text: "I saw Agent Smith in my terminal logs.",
    user: "0verseerX",
    added: new Date(Date.now() - 86400000 * 4.6).toUTCString(), // ~4.6 days ago
  },
  {
    text: "Wake up, Neo. The Matrix has you.",
    user: "M0rpheus77",
    added: new Date(Date.now() - 86400000 * 2.5).toUTCString(), // ~2.5 days ago
  },
  {
    text: "Zion must be warned.",
    user: "R3b00t",
    added: new Date(Date.now() - 86400000 * 1.9).toUTCString(), // ~1.9 days ago
  },
  {
    text: "The machines are listening...",
    user: "L337HAXXer",
    added: new Date(Date.now() - 86400000 * 1.2).toUTCString(), // ~1.2 days ago
  },
  {
    text: "They're tracking us through the code.",
    user: "Gl1tch3d",
    added: new Date(Date.now() - 86400000 * 0.7).toUTCString(), // ~0.7 days ago
  },
];


export function getMessages() {
  return messages;
}

export function addMessage(user, text) {
  return messages.push({ user, text, added: new Date().toUTCString() });
}
