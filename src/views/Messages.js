import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeWrapper from '../ThemeWrapper';
import ClipLoader from 'react-spinners/ClipLoader'; // Import the spinner component

const Messages = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true); // Loading state
  const [messages, setMessages] = useState([]); // Messages state

  useEffect(() => {
    // Simulate fetching messages from an API
    const fetchMessages = async () => {
      setLoading(true); // Start loading
      // Simulating network request delay
      setTimeout(() => {
        // Here you would fetch data from an API
        const fetchedMessages = [
          { id: 1, text: 'Hello, this is the first message!' },
          { id: 2, text: 'This is the second message!' },
          { id: 3, text: 'Here is another message!' },
        ];
        setMessages(fetchedMessages); // Set the fetched messages
        setLoading(false); // Stop loading
      }, 2000); // Simulate a 2-second fetch delay
    };

    fetchMessages();
  }, []); // Empty dependency array to run once when the component mounts

  if (loading) {
    // Show loading spinner while fetching messages
    return (
      <ThemeWrapper>
        <ClipLoader size={50} color={theme === 'light' ? '#000' : '#fff'} loading={loading} />
        <p>Loading messages...</p>
      </ThemeWrapper>
    );
  }

  return (
    <ThemeWrapper>
      <h1>Messages</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </ThemeWrapper>
  );
};

export default Messages;
