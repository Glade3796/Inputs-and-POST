import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        name TEXT,
        content TEXT
    )
`);

const insMsg = db.prepare(`
INSERT INTO messages (name, content) VALUES (? , ?)`);
insMsg.run("userT1", "test message 1");
insMsg.run("userT2", "test message 2");
insMsg.run("userT3", "test message 3");
insMsg.run("userT1", "test message 4");
insMsg.run("userT2", "test message 5");
insMsg.run("userT1", "test message 6");
insMsg.run("userT3", "test message 7");
