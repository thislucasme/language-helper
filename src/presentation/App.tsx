import React from "react";
import { Chat } from "../presentation/Chat";
import { Box, Center, Link, Text, VStack } from "@chakra-ui/react";

export const App: React.FC = () => {
  return (
    <Box >
   <VStack w={"full"} h={"65px"} bgGradient="linear(to-r, white, blue, red)">
<Center h={"65px"}>
<Link href="https://www.instagram.com/thislucasme?igsh=MTZydHJwa213bzdpbw==" isExternal>
<Text fontWeight={"bold"} fontSize={"large"} color={"white"}>Dev @thislucasme</Text>
</Link>
</Center>
      </VStack>
      <Box p={5}>
        <Chat />
        </Box>
    </Box>
  );
};
