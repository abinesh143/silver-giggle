import { toastProvider } from "@/helpers/utils";
import React, { useRef, useEffect } from "react";

export default function Paypal(props) {
  const paypal = useRef();

  const updatePlan = async () => {
    const userData = localStorage.getItem("appMaker");
    const parsedData = userData ? JSON.parse(userData) : null;

    const data = {
      isPremium: true,
      userEmail: parsedData.userEmail,
      amount: props.amount,
    };
    try {
      let res = await fetch("/api/userData", {
        method: "PATCH",
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        localStorage.setItem(
          "appMaker",
          JSON.stringify({
            ...parsedData,
            isPremium: true,
            amount: props.amount,
          })
        );
        toastProvider("success", "Premium Plan Activated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: props.amount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order && order["status"] === "COMPLETED") {
            updatePlan();
          }
        },
        onError: (err) => {
          console.log(err, "err");
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
