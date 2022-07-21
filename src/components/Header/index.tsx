import { HeaderPage } from "./styles";
import { useState, useRef, useEffect } from "react";
import quack from "./sounds/quack.mp3";
import useSound from "use-sound";
import Confetti from "react-confetti";

interface IHeaderProps {
  handleStartAnimation: () => void;
}
export function Header({ handleStartAnimation }: IHeaderProps) {
  const [play] = useSound(quack);
  return (
    <HeaderPage>
      <span className="red"></span>
      <span
        className="yellow"
        onClick={() => {
          play();
        }}
      ></span>
      <span
        className="green"
        onClick={() => {
          handleStartAnimation();
        }}
      ></span>
    </HeaderPage>
  );
}
