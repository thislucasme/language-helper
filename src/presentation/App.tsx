import React from "react";
import { Chat } from "../presentation/Chat";
import { Box } from "@chakra-ui/react";

export const App: React.FC = () => {
  return (
    <Box p={5}>
        <Chat />
    </Box>
  );
};
