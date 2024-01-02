import { toast } from "react-hot-toast";
import { authHeader } from "./apiAuth";

import { backendURL } from "./backend";

// export const stripeCheckout = (data) => {
//   fetch(`${backendURL}/api/v1/stripe/checkout`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       items: data.cartItems,
//       customerName: data.firstName,
//       customerEmail: data.email,
//     }),
//   })
//     .then((r) => r.text())

//     .then((r) => (window.location.href = r));
// };

export const stripeCheckout = async (data) => {
  try {
    const response = await fetch(`${backendURL}/api/v1/stripe/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeader() },
      body: JSON.stringify({
        items: data.cartItems,
        customerName: data.firstName,
        customerEmail: data.email,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const redirectURL = await response.text();
    window.location.href = redirectURL;
  } catch (error) {
    toast.error("Error during checkout. Please try again.");
  }
};
