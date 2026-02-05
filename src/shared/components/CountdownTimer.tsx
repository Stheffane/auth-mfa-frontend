import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

type CountdownTimerProps = {
  durationInSeconds: number;
  onExpire: () => void;
  onEnd?: Dispatch<SetStateAction<boolean>>;
};

export function CountdownTimer({
  durationInSeconds,
  onExpire,
  onEnd,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    if (timeLeft <= 2 && onEnd) {
      onEnd(true)
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onExpire]);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  }

  return (
    <span aria-live="polite">
      {formatTime(timeLeft)}
    </span>
  );
}
