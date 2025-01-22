import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function EmbedThroughSDK() {
  const [experienceLoading, setExperienceLoading] = useState(true);
  useEffect(() => {
    setExperienceLoading(true);

    setTimeout(() => {
      window.emperia.init({
        id: "experience-root",
        experience_url:
          "https://experience.emperiavr.com/f5c7b9a4-d1ef-491e-9650-6824a9eabb16/public/4cdc7760-1012-48da-9fb6-2dd79903d8a6/experience.html",
        ui_url:
          "https://ui.emperiavr.com/Hugoboss-UI/Development/latest/static/",
        attach_ui: true,
        debug: false,
        organization_id: "587accae-22f4-41e4-86c6-fa83d20e7f65",
      });
      setExperienceLoading(false);
    }, 1000);

    return () => {
      const uiElementToRemove = document.getElementById("ui-root");
      if (uiElementToRemove) {
        document.body.removeChild(uiElementToRemove);
      }
    };
  }, []);

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
        opacity={experienceLoading ? 1 : 0}
        visibility={experienceLoading ? "visible" : "hidden"}
        transition="all 0.2s"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="20px">Loading your experience</Text>
      </Box>
      <Box id="experience-root" w="100%" h="100%" />
    </Box>
  );
}

export default EmbedThroughSDK;
