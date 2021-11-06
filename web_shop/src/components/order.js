import axios from "axios";

export default async function (basket, totalPrice) {
  if (!basket || !basket.length) {
    alert("Košarica je prazna.");
    return false;
  }
  console.log(basket);
  const inputs = document.querySelectorAll("form input");
  const data = { totalPrice };
  /* for (const input of Array.from(inputs)) {
    if (!input.value || !input.value.trim()) {
      alert("Ispravno ispunite vaše podatke.");
      return false;
    }
    data[input.name] = input.value;
  }
  try {
    const reply = await axios({
      method: "post",
      url: "http://localhost:3000/products/orders/id",
      data,
    });
    const { id } = reply.data;
    await axios({
      method: "post",
      url: "http://localhost:3000/products/orders/lines",
      data: { id, basket },
    });
    return true;
  } catch (err) {
    console.log(err);
    alert("Something went wrong...");
    return false;
  } */
}
