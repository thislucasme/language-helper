import React from "react";
import { Message } from "../domain/entities/Message";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { MessageComponent } from "./Message";
import { BotMessageComponent } from "./BotMessage";

interface MessageListProps {
  messages: Message[];
  senderColor: string;
  senderBackground: string;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, senderBackground, senderColor }) => {
  
    return (
    <VStack align={"end"}>
    {messages.map((message, index) => {
      if(message.sender === 'user'){
        return (
            <MessageComponent
        key={index}
        message={message}
        senderColor={senderColor}
        senderBackground={senderBackground}
      />
        )
      }if(message.sender === 'bot'){
        return <BotMessageComponent message={message}
        senderColor={senderColor}
        senderBackground={senderBackground}/>
      }
})}
  </VStack>
  );
};
