import { Box, Input } from "@chakra-ui/react";
import React from "react";
import AudioRecorder from "../componentes/AudioRecorder";
import YourComponent from "../componentes/AudioRecorderAPI";

interface MessageInputProps {
    sendMessage: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ sendMessage }) => {
    const [inputValue, setInputValue] = React.useState("");
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };
    const handleSendMessage = () => {
        sendMessage(inputValue);
        setInputValue("");
    };

    return (
        <div>
            <Box>
                <Input
                    placeholder="Digite sua mensagem..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {/* <button onClick={handleSpeak} disabled={!supported || speaking}>
                  Говори!
                </button>
                <AudioRecorder/>
                <YourComponent/> */}
            </Box>

        </div>
    );
};
