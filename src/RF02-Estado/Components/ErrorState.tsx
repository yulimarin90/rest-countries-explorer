

//cumple con la exigencia de tener props tipadas. function ErrorState(props: any) any esta prohibido
interface ErrorStateProps {
  message: string;
}

function ErrorState({ message }: ErrorStateProps) {
  return (
    <div role="alert">
      <h1>Ocurrió un error</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default ErrorState;