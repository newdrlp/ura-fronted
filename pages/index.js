import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://ura-backend.vercel.app/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer || 'Erro ao obter resposta.');
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Fale com a URA do Dr. Lucas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Digite sua pergunta"
          style={{ width: '300px', marginRight: '10px' }}
        />
        <button type="submit">Enviar</button>
      </form>
      <p><strong>Resposta:</strong> {answer}</p>
    </div>
  );
}
