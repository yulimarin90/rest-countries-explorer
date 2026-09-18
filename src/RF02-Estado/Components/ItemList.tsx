import ItemCard from "../../RF02-Estado/Components/ItemCard";
import type { Item } from "../../RF02-Estado/Types/item";

interface ItemListProps {
  items: Item[];
}

function ItemList({ items }: ItemListProps) {
  return (
    <div>
      {items.map((item) => (
        <ItemCard 
            key={item.names.common} //se identifica cada elemento con un key único, en este caso el nombre común del país
            item={item} 
        />
      ))}
    </div>
  );
}

export default ItemList;