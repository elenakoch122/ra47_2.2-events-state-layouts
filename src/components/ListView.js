import ShopItem from "./ShopItem";
import { v4 as uuidv4 } from 'uuid';

export default function ListView({ items }) {
  return (
    <div className="items">
      {items.map(i => <ShopItem item={i} key={uuidv4()} />)}
    </div>
  );
}
