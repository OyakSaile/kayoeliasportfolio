import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { Header } from "../../components/Header";
import { Container } from "./styles";
export function HomePage() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [conffetiAnimation, setConffetiAnimation] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  function handleStartAnimation() {
    setConffetiAnimation(!conffetiAnimation);
  }

  console.log(windowSize);
  return (
    <Container>
      <Header handleStartAnimation={handleStartAnimation} />
      {conffetiAnimation && (
        <ReactConfetti
          width={windowSize.innerWidth}
          height={windowSize.innerHeight}
        />
      )}
    </Container>
  );
}
