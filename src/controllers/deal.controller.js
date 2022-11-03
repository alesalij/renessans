const db = require("../db/db");

class dealController {
  async createDeal(req, res) {
    const { customer_id, auto_id, amount, price, date_deal } = req.body;
    const deal = await db.query(
      `INSERT INTO deal (customer_id, auto_id,amount,price,date_deal ) values ($1,$2,$3,$4,$5) returning *`,
      [customer_id, auto_id, amount, price, date_deal]
    );
    res.json(deal.rows[0]);
  }

  async getDeal(req, res) {
    const { id } = req.params;
    const deal = await db.query(`select * from deal where id = $1`, [id]);
    res.json(deal.rows[0]);
  }
  async getAllDeals(req, res) {
    const deals = await db.query(`select * from deal`);
    res.json(deals.rows);
  }
  async updateDeal(req, res) {
    const { customer_id, auto_id, amount, price, date_deal } = req.body;
    const { id } = req.params;
    const deal = await db.query(
      `UPDATE deal set customer_id = $1, auto_id = $2, amount = $3 ,price=$4,date_deal=$5 where id = $6 returning *`,
      [customer_id, auto_id, amount, price, date_deal, id]
    );
    res.json(deal.rows[0]);
  }
  async deleteDeal(req, res) {
    const { id } = req.params;
    const deal = await db.query(`delete from deal where id = $1`, [id]);
    res.json(deal.status);
  }
}
module.exports = new dealController();
