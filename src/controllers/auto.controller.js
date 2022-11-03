const db = require("../db/db");

class autoController {
  async createAuto(req, res) {
    const { brand, model } = req.body;
    const auto = await db.query(
      `INSERT INTO auto (brand, model)
             values ($1, $2)
             returning *`,
      [brand, model]
    );
    res.json(auto.rows[0]);
  }

  async getAuto(req, res) {
    const { id } = req.params;
    const auto = await db.query(
      `select *
             from auto
             where id = $1`,
      [id]
    );
    res.json(auto.rows[0]);
  }

  async getAllAuto(req, res) {
    const autos = await db.query(`select *
                                      from auto`);
    res.json(autos.rows);
  }

  async updateAuto(req, res) {
    const { brand, model } = req.body;
    const { id } = req.params;
    const auto = await db.query(
      `UPDATE auto
             set brand = $1,
                 model = $2
             where id = $3
             returning *`,
      [brand, model, id]
    );
    res.json(auto.rows[0]);
  }

  async deleteAuto(req, res) {
    const { id } = req.params;
    const auto = await db.query(
      `delete
             from auto
             where id = $1`,
      [id]
    );
    res.json(auto.status);
  }
}

module.exports = new autoController();
