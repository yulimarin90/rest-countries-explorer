
import type { Item } from "../../RF02-Estado/Types/item";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <article>
      <h2>{item.names.common}</h2>
      <p>
        <strong>Región:</strong> {item.region}
      </p>
      <p>
        <strong>Capital: </strong> {' '}
        {item.capitals.length > 0
          ? item.capitals.map((capital) => capital.name).join(", ")
          : "No tiene una capital registrada"}
      </p>
        <p>
            <strong>Idiomas: </strong> {' '}
            {item.languages.length > 0
                ? item.languages.map((language) => language.name).join(", ") //usamos .map() porque capitals es un arreglo y recorre capitales
                : "Sin información disponible"}
        </p>
    </article>
  )
}

export default ItemCard;