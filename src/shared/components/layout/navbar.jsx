'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import { Moon, Sun, Languages, Clapperboard } from 'lucide-react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: var(--color-bg-card);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding: 0 48px;
  }
`;

const Brand = styled(Link)`
  font-size: 24px;
  font-weight: 800;
  color: var(--color-text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.5px;

  svg {
    color: var(--color-primary);
  }

  span {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-bg-card-hover);
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const LanguageButton = styled(IconButton)`
  width: auto;
  padding: 0 16px;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  font-family: var(--font-outfit);
`;

const Spacer = styled.div`
  height: 72px;
`;

export function Navbar({ mode, language, brandText, onToggleTheme, onToggleLanguage }) {
  return (
    <>
      <Nav>
        <Brand href="/home">
          <Clapperboard size={28} strokeWidth={2.5} />
          <span>{brandText}</span>
        </Brand>

        <Controls>
          <LanguageButton onClick={onToggleLanguage} title="Toggle language">
            <Languages size={18} />
            {language === 'en' ? 'EN' : 'ID'}
          </LanguageButton>

          <IconButton onClick={onToggleTheme} title="Toggle theme">
            {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
        </Controls>
      </Nav>
      <Spacer />
    </>
  );
}
