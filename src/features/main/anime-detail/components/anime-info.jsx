"use client"

import styled from '@emotion/styled'
import { Star, Calendar, Layers, Activity, Clock } from 'lucide-react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 48px;
  }
`

const PosterWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -20px;
    background: var(--color-primary);
    opacity: 0.2;
    filter: blur(40px);
    z-index: -1;
  }
  
  @media (min-width: 768px) {
    margin: 0;
    position: sticky;
    top: 100px;
  }
`

const Poster = styled.img`
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
  border: 4px solid var(--color-bg-card);
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const TitleEnglish = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0;
  line-height: 1.2;
  letter-spacing: -1px;
  
  @media (min-width: 768px) {
    font-size: 48px;
  }
`

const TitleJapanese = styled.p`
  font-size: 18px;
  color: var(--color-primary);
  margin: 0;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const MetaCard = styled.div`
  background: var(--color-bg-card);
  padding: 16px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-primary);
  }
  
  svg {
    color: var(--color-text-muted);
    margin-bottom: 4px;
  }
`

const MetaLabel = styled.span`
  display: block;
  font-size: 11px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
`

const MetaValue = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.color || 'var(--color-text-primary)'};
`

const SynopsisSection = styled.div`
  margin-top: 24px;
  background: var(--color-bg-card);
  padding: 32px;
  border-radius: 24px;
  border: 1px solid var(--color-border);
`

const SynopsisTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: var(--color-primary);
    border-radius: 4px;
  }
`

const Synopsis = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0;
  white-space: pre-line;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const Tag = styled.span`
  padding: 8px 16px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all 0.2s;
  
  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
  }
`

function getRatingColor(rating) {
  const value = parseFloat(rating)
  if (value >= 75) return 'var(--color-rating-high)'
  if (value >= 60) return 'var(--color-rating-medium)'
  return 'var(--color-rating-low)'
}

export function AnimeInfo({ anime, t }) {
  const { attributes } = anime
  const {
    titles,
    synopsis,
    description,
    posterImage,
    averageRating,
    subtype,
    status,
    episodeCount,
    ageRating,
    ageRatingGuide,
    startDate,
  } = attributes

  const englishTitle = titles?.en || titles?.en_jp || 'Unknown Title'
  const japaneseTitle = titles?.ja_jp || ''
  const imageUrl = posterImage?.large || posterImage?.medium || '/placeholder.jpg'
  const synopsisText = synopsis || description || t('detail.noSynopsis')
  
  const year = startDate ? new Date(startDate).getFullYear() : 'N/A'
  
  const getStatusText = (s) => {
    if (s === 'finished') return t('detail.finished')
    if (s === 'current') return t('detail.ongoing')
    return s || 'N/A'
  }

  return (
    <Wrapper>
      <PosterWrapper>
        <Poster src={imageUrl} alt={englishTitle} />
      </PosterWrapper>
      
      <Content>
        <Header>
          <TitleEnglish>{englishTitle}</TitleEnglish>
          {japaneseTitle && <TitleJapanese>{japaneseTitle}</TitleJapanese>}
        </Header>
        
        <MetaGrid>
          <MetaCard>
            <Star size={24} />
            <MetaLabel>{t('detail.rating')}</MetaLabel>
            <MetaValue color={averageRating ? getRatingColor(averageRating) : undefined}>
              {averageRating ? `${parseFloat(averageRating).toFixed(1)}` : 'N/A'}
            </MetaValue>
          </MetaCard>
          <MetaCard>
            <Layers size={24} />
            <MetaLabel>{t('detail.episodes')}</MetaLabel>
            <MetaValue>{episodeCount || 'N/A'}</MetaValue>
          </MetaCard>
          <MetaCard>
            <Calendar size={24} />
            <MetaLabel>{t('detail.year')}</MetaLabel>
            <MetaValue>{year}</MetaValue>
          </MetaCard>
          <MetaCard>
            {status === 'current' ? <Activity size={24} /> : <Clock size={24} />}
            <MetaLabel>{t('detail.status')}</MetaLabel>
            <MetaValue>{getStatusText(status)}</MetaValue>
          </MetaCard>
        </MetaGrid>
        
        <Tags>
          {subtype && <Tag>{subtype}</Tag>}
          {ageRating && <Tag>{ageRating}</Tag>}
          {ageRatingGuide && <Tag>{ageRatingGuide}</Tag>}
        </Tags>
        
        <SynopsisSection>
          <SynopsisTitle>{t('detail.synopsis')}</SynopsisTitle>
          <Synopsis>{synopsisText}</Synopsis>
        </SynopsisSection>
      </Content>
    </Wrapper>
  )
}
