import { Box } from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [makeVisible, setMakeVisible] = useState(false);

  const eventMap = {
    openBox: () => openBox(),
    openBoxWithArg: (arg1: string) => console.log(arg1),
    openBoxWithArgs: (arg1: string, arg2: string) =>
      openBoxWithArgsFunction(arg1, arg2),
  };

  const openBox = () => {
    setMakeVisible(true);
  };

  const openBoxWithArgsFunction = (arg1: string, arg2: string) => {
    console.log(arg1 + " " + arg2);
  };

  useEffect(() => {
    const eventListener = (event: Event) => {
      const interceptedEvent = event as CustomEvent;
      console.log(interceptedEvent);

      if (["OpenPDP", "OpenInfo"].includes(interceptedEvent.detail.name)) {
        event.stopImmediatePropagation();
      }

      const eventType = interceptedEvent.detail.name as keyof typeof eventMap;
      const eventData = interceptedEvent.detail.data;
      const additionalData = interceptedEvent.detail.additionalData;

      if (eventMap[eventType]) {
        eventMap[eventType](eventData, additionalData);
      }
    };
    const target = window?.emperia?.events || window;
    target.removeEventListener("fromExperience", eventListener);
    target.addEventListener("fromExperience", eventListener);
    return () => {
      target.removeEventListener("fromExperience", eventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      {makeVisible && (
        <Box position="absolute" top="10px">
          Display ME
        </Box>
      )}
    </Box>
  );
}

export default App;
