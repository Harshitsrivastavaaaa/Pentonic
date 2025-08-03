import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi Welcome to Pentonic ! How can I assist you today ?' }
  ]);
  const [input, setInput] = useState('');
  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    const botResponse = simulateBotResponse(input);
    setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    setInput('');
  };

  const simulateBotResponse = (userInput) => {
    if (userInput.toLowerCase().includes('hello')) {
      return 'Hi Welcome to Pentonic !';
    } else if (userInput.toLowerCase().includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else if (userInput.toLowerCase().includes('Tell me about the company')) {
      return 'Pentonic is a leading automotive parts manufacturer, known for its commitment to quality and innovation. We specialize in producing components that meet rigorous industry standards, including safety, durability, and performance requirements. Our product portfolio includes engine components, transmission parts, suspension systems, electrical components, and interior fixtures. We leverage advanced manufacturing technologies and materials to ensure our parts contribute to vehicle efficiency, safety, and comfort.';
    }else {
      return "This is just a demo, will work properly when connected with API!";
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.sender === 'user' ? '#DCF8C6' : '#E5E5E5'
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
        />
        <button style={styles.button} onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '450px',
    fontFamily: 'Arial, sans-serif',
    margin: '80px auto',
    
  },
  chatBox: {
    flex: 2,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  message: {
    padding: '8px 12px',
    borderRadius: '20px',
    maxWidth: '70%',
    margin: '5px 0'
  },
  inputContainer: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ccc'
  },
  input: {
    flex: 1,
    padding: '8px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  button: {
    marginLeft: '10px',
    padding: '8px 16px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: 'rgb(168, 26, 26)',
    color: 'white',
    cursor: 'pointer'
  }
};

export default Chatbot;