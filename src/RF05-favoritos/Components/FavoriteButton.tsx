interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}

function FavoriteButton({
  isFavorite,
  onToggle,
}: FavoriteButtonProps) {
  return (
    <button type="button" onClick={onToggle}>
      {isFavorite ? "★ Favorito" : "☆ Favorito"}
    </button>
  );
}

export default FavoriteButton;