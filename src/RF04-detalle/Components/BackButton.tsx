interface BackButtonProps {
  onBack: () => void
}

function BackButton({ onBack }: BackButtonProps) {
  return (
    <button type="button" onClick={onBack}>
      Volver al listado
    </button>
  )
}

export default BackButton