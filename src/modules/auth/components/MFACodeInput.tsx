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
  const { code, error, updateDigit, isSubmitting } = useMFA(onSubmit);

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

  function handlePaste(e: React.ClipboardEvent) {
    const pasted = e.clipboardData.getData('text').slice(0, 6);

    if (!/^\d+$/.test(pasted)) return;

    pasted.split('').forEach((digit, index) => {
      updateDigit(index, digit);
      inputsRef.current[index]?.focus();
    });
  }

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  return (
    <div>
      <Container style={{ display: 'flex', gap: 8 }} onPaste={handlePaste}>
        {code.map((digit, index) => (
          <CodeInput
            key={index}
            ref={(e) => { inputsRef.current[index] = e }}
            value={digit}
            maxLength={1}
            inputMode="numeric"
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            disabled={isSubmitting}
            $hasError={!!error}
            $isSubmitting={isSubmitting}
          />
        ))}
      </Container>

      {isSubmitting && !error && (
        <FeedbackText style={{ color: '#666', marginTop: 8 }}>
          Verificando código…
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
