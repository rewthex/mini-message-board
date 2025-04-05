const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export function getMessages() {
  return messages;
}

export function addMessage(user, text) {
  return messages.push({ user, text, added: new Date() });
}
