import type { Message } from "../../types/MessageTypes";

type MessageListProps = {
  messages: Message[];
};

const MessagetList = ({ messages }: MessageListProps) => {
  return (
    <div>
      {messages.length === 0 ? (
        <p>Select a conversation</p>
      ) : (
        messages.map((msg) => (
          <div key={msg.id}>
            <p>{msg.sender}</p>
            <p>{msg.text}</p>
            <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default MessagetList;
