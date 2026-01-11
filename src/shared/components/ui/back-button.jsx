import styled from '@emotion/styled';
import { ArrowLeft } from 'lucide-react';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms ease;
  font-family: var(--font-outfit);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    background: var(--color-bg-card-hover);
    border-color: var(--color-primary);
    transform: translateX(-4px);
    color: var(--color-primary);
  }
`;

export function BackButton({ onClick, children = 'Back' }) {
  return (
    <Button onClick={onClick} type="button">
      <ArrowLeft size={18} />
      {children}
    </Button>
  );
}
