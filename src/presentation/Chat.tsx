import React, { useRef, useState } from "react";
import { ChatService } from "../application/ChatService";
import { Message } from "../domain/entities/Message";
import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";
import { Box, Flex } from "@chakra-ui/react";

export const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [dialogues, setDialogues] = useState<any[]>([]);
    const chatService = new ChatService();
    const messageListRef = useRef<HTMLDivElement>(null);

    const sendMessage = async (message: string) => {
        const newMessages = await chatService.sendMessage(message, dialogues);
        setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
          }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const content = e.target?.result;
                    if (content) {
                        const parsedContent = JSON.parse(content.toString());
                        setDialogues(parsedContent);
                    }
                } catch (error) {
                    console.error("Error parsing JSON file:", error);
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <Flex direction="column" height="80vh">
            <Box flex="1" overflowY="auto" maxHeight="calc(100vh - 100px)" ref={messageListRef}>
                <MessageList senderColor="#000000" senderBackground="#D3D6D6" messages={messages} />
            </Box>
            <Box>
                <input type="file" onChange={handleFileUpload} />
                <MessageInput sendMessage={sendMessage} />
            </Box>
        </Flex>
    );
};
