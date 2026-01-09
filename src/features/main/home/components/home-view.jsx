"use client"

import styled from '@emotion/styled'
import { AnimeListContainer } from '../containers/anime-list'
import { AnimeSearchContainer } from '../containers/anime-search'
import { Container } from '@/shared/components/ui/container'

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-bg-dark);
  padding: 24px 0 48px;
`

const Header = styled.header`
  margin-bottom: 32px;
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 4px;
  
  @media (min-width: 768px) {
    font-size: 36px;
  }
`

const Subtitle = styled.p`
  color: var(--color-text-secondary);
  font-size: 14px;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export function HomeView({ title, subtitle }) {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        
        <AnimeSearchContainer />
        
        <AnimeListContainer />
      </Container>
    </PageWrapper>
  )
}
