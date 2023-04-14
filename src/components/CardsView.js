import ShopCard from "./ShopCard";
import { v4 as uuidv4 } from 'uuid';

export default function CardsView({ cards }) {
  return (
    <div className="cards">
      {cards.map(c => <ShopCard card={c} key={uuidv4()} />)}
    </div>
  );
}
