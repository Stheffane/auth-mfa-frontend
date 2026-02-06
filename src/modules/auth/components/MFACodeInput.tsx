import { useEffect, useRef } from 'react';
import { useMFA } from './hooks/useMFA';
import {
  Container,
  CodeInput,
  FeedbackText,
} from './MFACodeInput.styles';

type Props = {
  onSubmit: (code: string) => Promise<void>;
};

export function MFACodeInput({ onSubmit }: Props) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const { code, error, updateDigit, setCodeFromPaste, isSubmitting } = useMFA(onSubmit);

  function handleChange(index: number, value: string) {
    if (isSubmitting) return

    updateDigit(index, value);

    if (value && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, event: React.KeyboardEvent) {
    if (isSubmitting) return

    if (event.key === 'Backspace') {
      if (code[index]) {
        updateDigit(index, '')
      } else {
        inputsRef.current[index - 1]?.focus();

      }
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    if (isSubmitting) return;

    e.preventDefault();

    const pasted = e.clipboardData
      .getData('text')
      .replace(/\s/g, '')
      .slice(0, 6);

    if (!/^\d+$/.test(pasted)) return;

    setCodeFromPaste(pasted);

    inputsRef.current[pasted.length - 1]?.focus();
  }

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  return (
    <div className="animated-entry">
      <Container style={{ display: 'flex', gap: 8 }}>
        {code.map((digit, index) => (
          <CodeInput
            key={index}
            ref={(e) => { inputsRef.current[index] = e }}
            value={digit}
            maxLength={1}
            inputMode="numeric"
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={isSubmitting}
            $hasError={!!error}
            $isSubmitting={isSubmitting}
          />
        ))}
      </Container>

      {isSubmitting && !error && (
        <FeedbackText style={{ color: '#666', marginTop: 8 }}>
          Checking code…
        </FeedbackText>
      )}

      {error && (
        <FeedbackText style={{ color: 'red', marginTop: 8 }}>
          {error}
        </FeedbackText>
      )}

    </div>
  );
}
