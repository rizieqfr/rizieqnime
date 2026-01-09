'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import { Moon, Sun, Languages, ArrowRight, CheckCircle2, Clapperboard } from 'lucide-react';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-bg-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  position: relative;
  font-family: var(--font-outfit);
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--color-border) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.1;
  pointer-events: none;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  svg {
    width: 40px;
    height: 40px;
    color: var(--color-primary);
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 16px;
  line-height: 1.1;
  letter-spacing: -1px;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: var(--color-text-secondary);
  margin: 0 0 16px;
  font-weight: 500;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Author = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 13px;
  color: var(--color-text-muted);
  margin-bottom: 40px;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 40px;
  max-width: 540px;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: var(--color-primary);
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FeaturesSection = styled.div`
  margin-top: 64px;
  width: 100%;
  max-width: 800px;
`;

const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  font-size: 14px;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;

  svg {
    color: var(--color-primary);
    width: 16px;
    height: 16px;
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  gap: 12px;
  z-index: 20;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 40px;
  padding: 0 12px;
  gap: 8px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-outfit);
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: var(--color-bg-card);
    border-color: var(--color-border);
    color: var(--color-text-primary);
  }
`;

export function WelcomeView({ mode, language, toggleTheme, toggleLanguage, t, features }) {
  return (
    <PageWrapper>
      <BackgroundPattern />

      <Controls>
        <ControlButton onClick={toggleLanguage}>
          <Languages size={16} />
          {language === 'en' ? 'English' : 'Indonesia'}
        </ControlButton>
        <ControlButton onClick={toggleTheme}>
          {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </ControlButton>
      </Controls>

      <Content>
        <LogoWrapper>
          <Clapperboard strokeWidth={1.5} />
        </LogoWrapper>

        <Title>{t('welcome.title')}</Title>
        <Subtitle>{t('welcome.subtitle')}</Subtitle>
        <Author>{t('welcome.author')}</Author>

        <Description>{t('welcome.description')}</Description>

        <CTAButton href="/home">
          {t('welcome.cta')} <ArrowRight size={18} />
        </CTAButton>

        <FeaturesSection>
          <FeaturesList>
            {Array.isArray(features) &&
              features.map((feature, index) => (
                <FeatureItem key={index}>
                  <CheckCircle2 />
                  {feature}
                </FeatureItem>
              ))}
          </FeaturesList>
        </FeaturesSection>
      </Content>
    </PageWrapper>
  );
}
