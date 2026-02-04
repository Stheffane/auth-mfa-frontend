import styled, { css } from 'styled-components';
import type { InputProps } from '../../../shared/components/PageBody/styles';
import { PRIMARY_COLOR } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;

export const CodeInput = styled.input<InputProps>`
  width: 40px;
  height: 48px;
  text-align: center;
  font-size: 20px;
  color: ${PRIMARY_COLOR};

  border-radius: 6px;
  border: 2px solid #9e9e9e;
  outline: none;

  transition: border-color 0.2s ease, opacity 0.2s ease;

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: #e53935;
    `}

  ${({ $isSubmitting }) =>
    $isSubmitting &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}

  &:focus {
    border-color: ${({ $hasError }) =>
    $hasError ? '#e53935' : PRIMARY_COLOR};
  }
`;

export const FeedbackText = styled.p<{ $error?: boolean }>`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ $error }) => ($error ? '#e53935' : '#666')};
`;
