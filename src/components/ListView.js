import ShopItem from "./ShopItem";

export default function ListView({ items }) {
  return (
    <div className="items">
      {items.map(i => <ShopItem item={i} />)}
    </div>
  );
}
