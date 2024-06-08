import { HStack, Text } from "@chakra-ui/react";
import { Message } from "../domain/entities/Message"

interface MessageProps {
    message: Message;
    senderColor: string;
    senderBackground: string;

}
export const BotMessageComponent = ({
    message
}: MessageProps) => {
    return (
        <HStack
          textAlign={"start"}
          maxW={500}
          color={"black"}
          bg={message.similaridade >= 95 ? "#4AD897": "orange"}
          padding={2}
          borderRadius={10}
        >
          <Text fontSize={"md"}>{message.text}</Text>
        </HStack>
      );
}