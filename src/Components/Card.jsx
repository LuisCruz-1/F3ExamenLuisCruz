function Card({ input1, input2 }) {
  return (
    <div className="Card">
      <p>Hola {input1}!</p>
      <p>Sabemos que tu animal favorito es:</p>
      <p><strong>{input2}</strong></p>
    </div>
  );
}

export default Card;
