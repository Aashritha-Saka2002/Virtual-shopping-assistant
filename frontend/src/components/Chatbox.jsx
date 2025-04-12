import React, { useState } from 'react';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognition = new window.webkitSpeechRecognition();

  const handleTextSubmit = async () => {
    // Call AI backend here with `message`
    setResponse(`Response for: ${message}`);
  };

  const handleVoiceInput = () => {
    setIsListening(true);
    recognition.start();
    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      setMessage(speech);
      setIsListening(false);
    };
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Ask AI Assistant</h2>
      <textarea
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your question..."
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <div>
        <button onClick={handleTextSubmit}>Send</button>
        <button onClick={handleVoiceInput} style={{ marginLeft: '10px' }}>
          {isListening ? 'Listening...' : 'Speak'}
        </button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <strong>AI Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatBox;
