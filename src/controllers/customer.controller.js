const db = require("../db/db");

class customerController {
  async createCustomer(req, res) {
    const { name, surname, phone } = req.body;
    if (!(name && surname)) throw res.json("Неверно заполнены данные");
    const newPerson = await db.query(
      `INSERT INTO customer (name, surname,phone) values ($1,$2,$3) returning *`,
      [name, surname, phone]
    );
    res.json(newPerson.rows[0]);
  }

  async getCustomer(req, res) {
    const { id } = req.params;
    const customer = await db.query(`select * from customer where id = $1`, [
      id,
    ]);
    res.json(customer.rows[0]);
  }
  async getAllCustomers(req, res) {
    const customers = await db.query(`select * from customer`);
    res.json(customers.rows);
  }
  async updateCustomer(req, res) {
    const { name, surname, phone } = req.body;
    const { id } = req.params;
    const customer = await db.query(
      `UPDATE customer set name = $1, surname = $2, phone = $3 where id = $4 returning *`,
      [name, surname, phone, id]
    );
    res.json(customer.rows[0]);
  }
  async deleteCustomer(req, res) {
    const { id } = req.params;
    const customer = await db.query(`delete from customer where id = $1`, [id]);
    res.json(customer.status);
  }
}
module.exports = new customerController();
