import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'

function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID="29618e68-cb5a-4242-b62c-48d3c098273f"
      userName="sara-mahmoud"
      userSecret="123456789"
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    />
      
  );
}

export default App;
