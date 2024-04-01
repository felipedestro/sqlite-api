const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./src/db/sqlite.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    db.run(
      "CREATE TABLE IF NOT EXISTS person (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTERGER)",
      (err) => {
        if (err) {
          console.log(err.message);
        }
      }
    );
  }

  process.on("SIGINT", () => {
    db.close();
  });
});

module.exports = db;
