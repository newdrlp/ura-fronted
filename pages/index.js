// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch('https://ura-backend.vercel.app/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    setAnswer(data.answer || 'Erro ao obter resposta');
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>URA Médica - Dr. Lucas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Digite sua pergunta"
          style={{ width: '300px', padding: '0.5rem' }}
        />
        <button type="submit" style={{ marginLeft: '1rem' }}>Enviar</button>
      </form>
      {answer && (
        <div style={{ marginTop: '2rem' }}>
          <strong>Resposta:</strong> {answer}
        </div>
      )}
    </div>
  );
}
