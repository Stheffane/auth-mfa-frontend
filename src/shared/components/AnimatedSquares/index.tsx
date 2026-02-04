import { useState } from "react";
import { Square, SquaresWrapper } from "./styles";

type SquareData = {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  timing: string;
};

const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

function generateSquares(amount: number): SquareData[] {
  return Array.from({ length: amount }).map((_, index) => {
    const size = Math.floor(random(10, 120));

    return {
      id: index,
      size,
      left: random(1, 99),
      delay: random(0.1, 5),
      duration: random(12, 24),
      timing: `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`,
    };
  });
}

export function AnimatedSquares() {
  const [squares] = useState<SquareData[]>(() =>
    generateSquares(51)
  );

  return (
    <SquaresWrapper aria-hidden>
      {squares.map(square => (
        <Square
          key={square.id}
          $size={square.size}
          $left={square.left}
          $delay={square.delay}
          $duration={square.duration}
          $timing={square.timing}
        />
      ))}
    </SquaresWrapper>
  );
}
