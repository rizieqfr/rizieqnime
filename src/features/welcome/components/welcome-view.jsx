"use client"

import styled from '@emotion/styled'
import Link from 'next/link'
import { keyframes } from '@emotion/react'
import { Moon, Sun, Languages, ArrowRight, CheckCircle2, Clapperboard } from 'lucide-react'

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(2deg); }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-bg-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  position: relative;
  overflow: hidden;
  font-family: var(--font-outfit);
`

const BackgroundGlow = styled.div`
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 80vw;
  max-width: 800px;
  max-height: 800px;
  background: radial-gradient(circle, var(--color-primary-light) 0%, transparent 60%);
  opacity: 0.08;
  pointer-events: none;
  animation: ${pulse} 8s ease-in-out infinite;
`

const BackgroundCircle = styled.div`
  position: absolute;
  bottom: -100px;
  right: -50px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--color-accent);
  filter: blur(80px);
  opacity: 0.05;
  pointer-events: none;
`

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 10;
  animation: ${fadeIn} 0.8s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoWrapper = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--color-bg-card), var(--color-bg-card-hover));
  border: 1px solid var(--color-border);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  animation: ${float} 4s ease-in-out infinite;
  box-shadow: 0 10px 40px -10px var(--color-primary-light);
  
  svg {
    width: 64px;
    height: 64px;
    color: var(--color-primary);
  }
`

const Title = styled.h1`
  font-size: 56px;
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 12px;
  line-height: 1.1;
  letter-spacing: -1.5px;
  
  @media (max-width: 640px) {
    font-size: 36px;
  }
`
const GradientText = styled.span`
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtitle = styled.p`
  font-size: 24px;
  color: var(--color-text-secondary);
  margin: 0 0 16px;
  font-weight: 600;
  
  @media (max-width: 640px) {
    font-size: 18px;
  }
`

const Author = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 48px;
  font-weight: 500;
`

const Description = styled.p`
  font-size: 18px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0 0 48px;
  max-width: 600px;
  
  @media (max-width: 640px) {
    font-size: 16px;
  }
`

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 40px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 9999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px -10px var(--color-primary);
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 40px -15px var(--color-primary);
  }
  
  &:active {
    transform: translateY(-1px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`

const FeaturesSection = styled.div`
  margin-top: 80px;
  width: 100%;
  max-width: 800px;
`

const FeaturesTitle = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: 0 0 32px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: center;
`

const FeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const FeatureItem = styled.li`
  font-size: 15px;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  font-weight: 500;
  
  svg {
    color: var(--color-rating-high);
    flex-shrink: 0;
  }
`

const Controls = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  gap: 12px;
  z-index: 20;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-bg-card-hover);
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }
`

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  gap: 8px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-outfit);
  
  &:hover {
    background: var(--color-bg-card-hover);
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }
`

export function WelcomeView({ 
  mode, 
  language, 
  toggleTheme, 
  toggleLanguage, 
  t, 
  features 
}) {
  return (
    <PageWrapper>
      <BackgroundGlow />
      <BackgroundCircle />
      
      <Controls>
        <LanguageButton onClick={toggleLanguage}>
          <Languages size={18} />
          {language === 'en' ? 'EN' : 'ID'}
        </LanguageButton>
        <IconButton onClick={toggleTheme}>
          {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </IconButton>
      </Controls>
      
      <Content>
        <LogoWrapper>
            <Clapperboard strokeWidth={1.5} />
        </LogoWrapper>
        
        <Title>
            <GradientText>{t('welcome.title')}</GradientText>
        </Title>
        <Subtitle>{t('welcome.subtitle')}</Subtitle>
        <Author>{t('welcome.author')}</Author>
        
        <Description>
          {t('welcome.description')}
        </Description>
        
        <CTAButton href="/home">
          {t('welcome.cta')} <ArrowRight size={20} />
        </CTAButton>
        
        <FeaturesSection>
          <FeaturesTitle>{t('welcome.features.title')}</FeaturesTitle>
          <FeaturesList>
            {Array.isArray(features) && features.map((feature, index) => (
              <FeatureItem key={index}>
                <CheckCircle2 size={18} />
                {feature}
              </FeatureItem>
            ))}
          </FeaturesList>
        </FeaturesSection>
      </Content>
    </PageWrapper>
  )
}
