import { type ChangeEvent } from "react";

type MessageInputProps = {
  inputMessage: string;
  onMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
};
const MessageInput = ({
  inputMessage,
  onMessageChange,
  onSend,
}: MessageInputProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Message..."
        value={inputMessage}
        onChange={onMessageChange}
      />
      <button onClick={onSend}>Send</button>
    </div>
  );
};

export default MessageInput;
