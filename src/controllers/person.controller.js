const db = require("../db/connection");
const select = (req, res) => {
  const sql = "SELECT * FROM person";
  db.all(sql, (error, rows) => {
    if (error) {
      res.status(404).json({ message: "Error: not found date in database" });
    }
    res.status(200).json(rows);
  });
};

const create = (req, res) => {
  const sql = "INSERT INTO person (nome, idade) VALUES (?,?)";
  const params = [req.body.nome, req.body.idade];
  db.run(sql, params, (error) => {
    if (error) {
      res.status(401).json({ message: error.message });
    }
    res.status(200).json({ message: "record inserted successfully!" });
  });
};

const update = (req, res) => {
  const sql = "UPDATE person SET nome = ?, idade = ? WHERE id = ?";
  const params = [req.body.nome, req.body.idade, req.params.id];
  db.run(sql, params, (error) => {
    if (error) {
      res.status(404).json({ message: error.message });
    }
    res.status(200).json(req.body);
  });
};

const erase = (req, res) => {
  const sql = "DELETE FROM person WHERE id = ?";
  const params = req.params.id;
  db.run(sql, params, (error) => {
    if (error) {
      res.status(404).json({ message: error.message });
    }
    res.status(200).json({ sucess: "record deleted sucessfully" });
  });
};

module.exports = { select, create, update, erase };
