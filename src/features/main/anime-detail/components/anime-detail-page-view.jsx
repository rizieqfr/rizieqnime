"use client"

import styled from '@emotion/styled'
import { AnimeDetailContainer } from '../containers/anime-detail'
import { BackButtonContainer } from '@/shared/containers/back-button-container'
import { Container } from '@/shared/components/ui/container'

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-bg-dark);
  padding: 24px 0 48px;
`

const Header = styled.header`
  margin-bottom: 24px;
`

export function AnimeDetailPageView({ id, backText }) {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <BackButtonContainer href="/home">{backText}</BackButtonContainer>
        </Header>
        
        <AnimeDetailContainer id={id} />
      </Container>
    </PageWrapper>
  )
}
