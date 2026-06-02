import { useState, type ChangeEvent } from "react";
import ConversationItem from "./ConversationItem";
import MessagetList from "./MessagetList";
import MessageInput from "./MessageInput";

const initialConversations = [
  { id: 1, name: "john" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Mike" },
];

const initialMessages = [
  {
    id: 1,
    conversationId: 1,
    text: "Hellow",
    sender: "Mike",
    timestamp: "2026-06-01T10:00:00Z",
  },
  {
    id: 2,
    conversationId: 1,
    text: "How are you",
    sender: "John",
    timestamp: "2026-06-01T10:05:00Z",
  },
  {
    id: 3,
    conversationId: 2,
    text: "Hi there",
    sender: "Sarah",
    timestamp: "2026-06-01T10:05:00Z",
  },
];

const ConversationList = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [messages, setMessages] = useState(initialMessages);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [inputMessage, setInputMessage] = useState("");

  const selectedMessages = messages.filter(
    (msg) => msg.conversationId === selectedChat,
  );

  const lastMessage = conversations.find((c) => c.id === selectedChat);

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSend = () => {
    if (!inputMessage.trim() || selectedChat === null) return;
    setMessages((prev) => [
      {
        id: Date.now(),
        conversationId: selectedChat!,
        text: inputMessage,
        sender: lastMessage?.name ?? "unknown",
        timestamp: new Date().toISOString(),
      },
      ...prev,
    ]);
    setInputMessage("");
  };

  return (
    <>
      <ConversationItem
        conversations={conversations}
        onSelectChat={setSelectedChat}
      />
      <div>
        <p>{lastMessage?.name ?? "No messages"}</p>
        <MessagetList messages={selectedMessages} />
        <MessageInput
          inputMessage={inputMessage}
          onMessageChange={handleMessageChange}
          onSend={handleSend}
        />
      </div>
    </>
  );
};

export default ConversationList;
