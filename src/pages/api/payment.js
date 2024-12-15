import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let bodyObject = JSON.parse(req.body);
    axios
      .post(`https://api.cashfree.com/pg/orders`, bodyObject, {
        headers: {
          "x-api-version": "2022-09-01",
          "x-client-id": `${process.env.PAYMENT_GATEWAY_CLIENT}`,
          "x-client-secret": `${process.env.PAYMENT_GATEWAY_SECRET}`,
        },
      })
      .then((response) => {
        res.status(response.status).send(response.data);
      })
      .catch((err) => {
        res.status(err.response.status).send(err.response.data);
      });
  } else if (req.method === "GET") {
    const response = await axios.get(
      `https://api.cashfree.com/pg/orders/${req.query.order_id}`,
      {
        headers: {
          "x-api-version": "2022-09-01",
          "x-client-id": process.env.PAYMENT_GATEWAY_CLIENT,
          "x-client-secret": process.env.PAYMENT_GATEWAY_SECRET,
        },
      }
    );
    res.status(response.status).send(response.data);
  }
}
