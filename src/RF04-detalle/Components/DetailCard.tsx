import type { Item } from '../Types/item'

interface DetailCardProps {
  item: Item
}

function DetailCard({ item }: DetailCardProps) {
  const capitals = item.capitals ?? []
  const languages = item.languages ?? []

  return (
    <article>
      <h2>{item.names.common}</h2>

      <p>
        <strong>Región:</strong> {item.region}
      </p>

      <p>
        <strong>Capital:</strong>{' '}
        {capitals.length > 0
          ? capitals.map((capital) => capital.name).join(', ')
          : 'No registrada'}
      </p>

      <p>
        <strong>Idiomas:</strong>{' '}
        {languages.length > 0
          ? languages.map((language) => language.name).join(', ')
          : 'No registrados'}
      </p>
    </article>
  )
}

export default DetailCard