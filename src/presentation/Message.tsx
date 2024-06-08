import { HStack, Text } from "@chakra-ui/react";
import { Message } from "../domain/entities/Message"

interface MessageProps {
    message: Message;
    senderColor: string;
    senderBackground: string;

}
export const MessageComponent = ({
    message, senderColor, senderBackground
}: MessageProps) => {
    return (
        <HStack
          textAlign={"start"}
          maxW={500}
          color={message.sender === "user" ? senderColor : "black"}
          bg={message.sender === "user" ? senderBackground : "#D3D6D6"}
          padding={2}
          borderRadius={10}
        >
          <Text fontSize={"md"}>{message.text}</Text>
        </HStack>
      );
}