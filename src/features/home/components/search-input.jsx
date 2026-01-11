'use client';

import styled from '@emotion/styled';
import { Search, X } from 'lucide-react';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 48px;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 20px 18px 56px;
  background: var(--color-bg-card);
  border: 2px solid var(--color-border);
  border-radius: 20px;
  color: var(--color-text-primary);
  font-size: 16px;
  font-family: var(--font-outfit);
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: var(--color-text-muted);
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 8px 24px rgba(220, 38, 38, 0.15);
    background: var(--color-bg-dark);
  }

  &:hover:not(:focus) {
    border-color: var(--color-text-secondary);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-bg-card-hover);
  border: none;
  color: var(--color-text-secondary);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: var(--color-rating-low);
    color: white;
  }
`;

export function SearchInput({ value, onChange, placeholder = 'Search anime...' }) {
  return (
    <InputWrapper>
      <SearchIconWrapper>
        <Search size={20} />
      </SearchIconWrapper>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <ClearButton onClick={() => onChange('')} aria-label="Clear search">
          <X size={16} />
        </ClearButton>
      )}
    </InputWrapper>
  );
}
