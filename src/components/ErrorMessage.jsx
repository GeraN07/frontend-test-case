export default function ErrorMessage({ message, onRetry }) {
  return (
    <div style={{ padding: "16px", color: "#b00020" }}>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry}>
          Повторить
        </button>
      )}
    </div>
  );
}
