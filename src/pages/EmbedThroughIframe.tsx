import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

function EmbedThroughIframe() {
  const experienceUrl =
    "https://experience.emperiavr.com/f5c7b9a4-d1ef-491e-9650-6824a9eabb16/public/4cdc7760-1012-48da-9fb6-2dd79903d8a6/index.html";
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#08101D"
      color="white"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        w="100%"
        h="100%"
        bg="#08101D"
        opacity={!iframeLoaded ? 1 : 0}
        visibility={!iframeLoaded ? "visible" : "hidden"}
        transition="all 0.2s"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="20px">Loading your experience</Text>
      </Box>
      <Box
        bg="blue"
        id="viewer-iframe"
        flex="1"
        style={{ visibility: iframeLoaded ? "unset" : "hidden" }}
        w="100%"
        h="100%"
        as="iframe"
        title="Experience"
        src={experienceUrl}
        onLoad={
          experienceUrl.length > 0 ? () => setIframeLoaded(true) : undefined
        }
      />
    </Box>
  );
}

export default EmbedThroughIframe;
