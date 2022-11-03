const db = require("../db/db");

class statisticController {
  // получение выручки
  async getProceeds(req, res) {
    const { start_date, end_date } = req.body;
    const proceeds = await db.query(
      `select sum(price) as proceeds
             from deal
             where date_deal >= $1
               and date_deal <= $2`,
      [start_date, end_date]
    );

    proceeds.rows[0].proceeds = proceeds.rows[0].proceeds
      ? proceeds.rows[0].proceeds
      : 0;
    res.json(proceeds.rows[0]);
  }

  // получение массива данных
  async getDeals(req, res) {
    const deals = await db.query(
      `select c.surname, c.name, c.phone, d.price, to_char(date_deal ::date,'yyyy-mm-dd') as date_deal, a.brand, a.model, d.amount  from deal d join customer c on c.id=d.customer_id join auto a on a.id=d.auto_id order by d.date_deal,c.surname,c.name, d.price;`
    );

    res.json(deals.rows);
  }
}

module.exports = new statisticController();
