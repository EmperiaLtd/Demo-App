import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="20px"
      bg="#08101D"
      color="white"
    >
      <Text
        fontSize="30px"
        position="fixed"
        top="20px"
        left="50%"
        transform="translateX(-50%)"
      >
        Demo App
      </Text>
      <Button
        variant="outline"
        h="50px"
        w="200px"
        bg="#08101D"
        color="white"
        _hover={{ bg: "white", color: "#08101D" }}
        padding="0px 10px"
        onClick={() => navigate("/iframe")}
      >
        Embed using Iframe
      </Button>
      <Button
        variant="outline"
        h="50px"
        w="200px"
        bg="#08101D"
        color="white"
        _hover={{ bg: "white", color: "#08101D" }}
        padding="0px 10px"
        onClick={() => navigate("/sdk")}
      >
        Embed using SDK
      </Button>
    </Box>
  );
}

export default Home;
