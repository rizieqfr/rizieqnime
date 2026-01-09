'use client';

import styled from '@emotion/styled';
import { Star, Calendar, Layers, Activity, Clock } from 'lucide-react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`;

const PosterWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0;
    position: sticky;
    top: 100px;
  }
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: var(--color-skeleton);
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 24px;
`;

const TitleEnglish = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const TitleJapanese = styled.p`
  font-size: 18px;
  color: var(--color-text-muted);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  svg {
    color: var(--color-text-muted);
    margin-bottom: 4px;
  }
`;

const InfoLabel = styled.span`
  font-size: 12px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const InfoValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
`;

const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
`;

const Synopsis = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
  white-space: pre-line;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  padding: 6px 12px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary);
`;

export function AnimeInfo({ anime, t }) {
  const { attributes } = anime;
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
  } = attributes;

  const englishTitle = titles?.en || titles?.en_jp || 'Unknown Title';
  const japaneseTitle = titles?.ja_jp || '';
  const imageUrl = posterImage?.large || posterImage?.medium || '/placeholder.jpg';
  const synopsisText = synopsis || description || t('detail.noSynopsis');

  const year = startDate ? new Date(startDate).getFullYear() : 'N/A';

  const getStatusText = (s) => {
    if (s === 'finished') return t('detail.finished');
    if (s === 'current') return t('detail.ongoing');
    return s || 'N/A';
  };

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

        <GridSection>
          <InfoItem>
            <InfoLabel>{t('detail.rating')}</InfoLabel>
            <InfoValue>
              {averageRating ? `${parseFloat(averageRating).toFixed(1)}/100` : 'N/A'}
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>{t('detail.episodes')}</InfoLabel>
            <InfoValue>{episodeCount || 'N/A'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>{t('detail.year')}</InfoLabel>
            <InfoValue>{year}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>{t('detail.status')}</InfoLabel>
            <InfoValue>{getStatusText(status)}</InfoValue>
          </InfoItem>
        </GridSection>

        <BodySection>
          <SectionTitle>Details</SectionTitle>
          <Tags>
            {subtype && <Tag>{subtype}</Tag>}
            {ageRating && <Tag>{ageRating}</Tag>}
            {ageRatingGuide && <Tag>{ageRatingGuide}</Tag>}
          </Tags>
        </BodySection>

        <BodySection>
          <SectionTitle>{t('detail.synopsis')}</SectionTitle>
          <Synopsis>{synopsisText}</Synopsis>
        </BodySection>
      </Content>
    </Wrapper>
  );
}
