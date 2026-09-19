interface FavoriteCounterProps {
  count: number;
}

function FavoriteCounter({ count }: FavoriteCounterProps) {
  return (
    <p>
      Favoritos: {count}
    </p>
  );
}

export default FavoriteCounter;