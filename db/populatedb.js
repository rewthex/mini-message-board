import pkg from "pg";

const DATABASE_URL = process.argv[2];

if (!DATABASE_URL) {
  console.error("Please provide a database URL.");
  process.exit(1);
}

const { Client } = pkg;

const messages = [
  {
    id: 1,
    text: "Deja vu. It's a glitch in the system.",
    user: "Wh1teRabbi7",
    added: new Date(Date.now() - 86400000 * 6.8).toUTCString(),
  },
  {
    id: 2,
    text: "There is no spoon.",
    user: "Child0fZ10n",
    added: new Date(Date.now() - 86400000 * 3.1).toUTCString(),
  },
  {
    id: 3,
    text: "I saw Agent Smith in my terminal logs.",
    user: "0verseerX",
    added: new Date(Date.now() - 86400000 * 4.6).toUTCString(),
  },
  {
    id: 4,
    text: "Wake up, Neo. The Matrix has you.",
    user: "M0rpheus77",
    added: new Date(Date.now() - 86400000 * 2.5).toUTCString(),
  },
  {
    id: 5,
    text: "Zion must be warned.",
    user: "R3b00t",
    added: new Date(Date.now() - 86400000 * 1.9).toUTCString(),
  },
  {
    id: 6,
    text: "The machines are listening...",
    user: "L337HAXXer",
    added: new Date(Date.now() - 86400000 * 1.2).toUTCString(),
  },
  {
    id: 7,
    text: "They're tracking us through the code.",
    user: "Gl1tch3d",
    added: new Date(Date.now() - 86400000 * 0.7).toUTCString(),
  },
];

const values = messages
  .map((msg) => {
    const text = msg.text.replace(/'/g, "''"); 
    const user = msg.user.replace(/'/g, "''");
    const added = new Date(msg.added).toISOString().split("T")[0];
    return `('${text}', '${user}', '${added}')`;
  })
  .join(",\n  ");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  "user" VARCHAR ( 255 ),
  added TEXT
);

INSERT INTO messages (text, "user", added)
VALUES
  ${values}
  ;
`;

async function main() {
  try {
    console.log("seeding...");
    const client = new Client({
      connectionString: DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
