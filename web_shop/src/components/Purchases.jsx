import { useSelector } from "react-redux";
import Card from "./Card";

export default function Purchases() {
  const basket = useSelector((state) => state.basket.items);

  return (
    <div className="row">
      {basket.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  );
}
