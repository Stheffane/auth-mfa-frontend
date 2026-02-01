import { useState } from 'react';

const CODE_LENGTH = 6;

export function useMFA(onComplete: (code: string) => Promise<void>) {
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''));
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(finalCode: string) {
    try {
      setIsSubmitting(true);
      setError(null);
      await onComplete(finalCode);
    } catch {
      setError('Código inválido. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateDigit(index: number, value: string) {
    if (!/^\d?$/.test(value) || isSubmitting) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (newCode.every(Boolean)) {
      submit(newCode.join(''));
    }
  }

  function reset() {
    setCode(Array(CODE_LENGTH).fill(''));
    setError(null);
  }

  return {
    code,
    error,
    isSubmitting,
    updateDigit,
    reset,
  };
}
