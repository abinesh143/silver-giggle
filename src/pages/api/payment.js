import axios from "axios";

export default async function handler(req, res) {
  console.log(process.env.NODE_ENV, "process.env.NODE_ENV");
  if (req.method === "POST") {
    let bodyObject = JSON.parse(req.body);
    axios
      .post(
        `${
          process.env.NODE_ENV === "development"
            ? "https://sandbox.cashfree.com"
            : "https://api.cashfree.com"
        }/pg/orders`,
        bodyObject,
        {
          headers: {
            "x-api-version": "2022-09-01",
            "x-client-id": `${
              process.env.NODE_ENV === "development"
                ? process.env.PAYMENT_GATEWAY_DEVCLIENT
                : process.env.PAYMENT_GATEWAY_CLIENT
            }`,
            "x-client-secret": `${
              process.env.NODE_ENV === "development"
                ? process.env.PAYMENT_GATEWAY_DEVSECRET
                : process.env.PAYMENT_GATEWAY_SECRET
            }`,
          },
        }
      )
      .then((response) => {
        res.status(response.status).send(response.data);
      })
      .catch((err) => {
        res.status(err.response.status).send(err.response.data);
      });
  } else if (req.method === "GET") {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === "development"
          ? "https://sandbox.cashfree.com"
          : "https://api.cashfree.com"
      }/pg/orders/${req.query.order_id}`,
      {
        headers: {
          "x-api-version": "2022-09-01",
          "x-client-id": `${
            process.env.NODE_ENV === "development"
              ? process.env.PAYMENT_GATEWAY_DEVCLIENT
              : process.env.PAYMENT_GATEWAY_CLIENT
          }`,
          "x-client-secret": `${
            process.env.NODE_ENV === "development"
              ? process.env.PAYMENT_GATEWAY_DEVSECRET
              : process.env.PAYMENT_GATEWAY_SECRET
          }`,
        },
      }
    );
    res.status(response.status).send(response.data);
  }
}
