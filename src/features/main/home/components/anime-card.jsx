"use client"

import styled from '@emotion/styled'
import Link from 'next/link'

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: var(--color-bg-card);
  border-radius: 12px;
  overflow: hidden;
  transition: all 250ms ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.2);
    background: var(--color-bg-card-hover);
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  background: var(--color-skeleton);
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const RatingBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  background: ${props => {
    const rating = parseFloat(props.rating)
    if (rating >= 75) return 'var(--color-rating-high)'
    if (rating >= 60) return 'var(--color-rating-medium)'
    return 'var(--color-rating-low)'
  }};
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-bg-dark);
`

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const TitleEnglish = styled.h3`
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`

const TitleJapanese = styled.p`
  color: var(--color-text-muted);
  font-size: 12px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`

const MetaItem = styled.span`
  color: var(--color-text-secondary);
  font-size: 11px;
  text-transform: uppercase;
  padding: 2px 6px;
  background: var(--color-bg-dark);
  border-radius: 4px;
`

export function AnimeCard({ anime }) {
  const { id, attributes } = anime
  const { titles, posterImage, averageRating, subtype, episodeCount } = attributes
  
  const englishTitle = titles?.en || titles?.en_jp || 'Unknown Title'
  const japaneseTitle = titles?.ja_jp || ''
  const imageUrl = posterImage?.medium || posterImage?.small || '/placeholder.jpg'
  
  return (
    <Card href={`/anime/${id}`}>
      <ImageWrapper>
        <Image src={imageUrl} alt={englishTitle} loading="lazy" />
        {averageRating && (
          <RatingBadge rating={averageRating}>
            ★ {parseFloat(averageRating).toFixed(1)}
          </RatingBadge>
        )}
      </ImageWrapper>
      <Content>
        <TitleEnglish>{englishTitle}</TitleEnglish>
        {japaneseTitle && <TitleJapanese>{japaneseTitle}</TitleJapanese>}
        <Meta>
          {subtype && <MetaItem>{subtype}</MetaItem>}
          {episodeCount && <MetaItem>{episodeCount} eps</MetaItem>}
        </Meta>
      </Content>
    </Card>
  )
}
