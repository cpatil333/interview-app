import type { Conversation } from "../../types/conversationTypes";

type ChatsProps = {
  conversations: Conversation[];
  onSelectChat: (id: number) => void;
};

const ConversationItem = ({ conversations, onSelectChat }: ChatsProps) => {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      {conversations.map((conver: Conversation) => (
        <div key={conver.id}>
          <h3
            style={{ marginLeft: "-150px" }}
            onClick={() => onSelectChat(conver.id)}
          >
            {conver.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ConversationItem;
