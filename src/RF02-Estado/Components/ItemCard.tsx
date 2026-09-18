
import type { Item } from "../../RF02-Estado/Types/item";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <article>
      <h2>{item.name}</h2>
      <p>ID: {item.id}</p>
      <p>{item.description}</p>
    </article>
  );
}

export default ItemCard;