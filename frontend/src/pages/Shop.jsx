import { useState } from 'react';

export default function Shop() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [listening, setListening] = useState(false);

  // Web Speech API setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    try {
      const res = await fetch('http://localhost:5000/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setMessage('');
  };

  const handleVoiceInput = () => {
    if (!recognition) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    setListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
      setListening(false);
    };

    recognition.onerror = (err) => {
      console.error('Voice Error:', err);
      setListening(false);
    };
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Welcome to the Shop 🛒</h2>
      <p>Ask anything below using text or voice:</p>

      <form onSubmit={handleTextSubmit} style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Ask something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 16px', borderRadius: '8px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Send
        </button>
        <button
          type="button"
          onClick={handleVoiceInput}
          style={{
            padding: '10px 14px',
            borderRadius: '8px',
            background: listening ? '#dc3545' : '#28a745',
            color: '#fff',
            border: 'none',
            cursor: 'pointer' 
          }}
        >
          🎤
        </button>
      </form>

      {/* AI Response Display */}
      {response && (
        <div style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '8px' }}>
          <strong>AI:</strong> {response}
        </div>
      )}
    </div>
  );
}
