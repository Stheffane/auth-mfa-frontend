import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { getSessionExpiration } from '../utils/session';

type CountdownTimerProps = {
  onExpire: () => void;
  onEnd?: Dispatch<SetStateAction<boolean>>;
};

export function CountdownTimer({ onExpire, onEnd }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(0);
  const hasEndedRef = useRef(false);

  useEffect(() => {
    const expiresAt = getSessionExpiration();
    if (!expiresAt) return;

    const updateTime = () => {
      const remaining = Math.max(
        0,
        Math.floor((expiresAt - Date.now()) / 1000)
      );

      setTimeLeft(remaining);

      if (remaining <= 2 && onEnd && !hasEndedRef.current) {
        hasEndedRef.current = true;
        onEnd(true);
      }

      if (remaining === 0) {
        clearInterval(interval);
        onExpire();
      }
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [onExpire, onEnd]);

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
