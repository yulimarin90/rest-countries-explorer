interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

function ErrorState({
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <section>
      <p>{message}</p>

      <button type="button" onClick={onRetry}> 
        Reintentar
      </button>
    </section>
  );
}

export default ErrorState;

//onClick={onRetry} el botón no recarga la pagina