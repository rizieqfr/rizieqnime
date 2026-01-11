import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: var(--color-bg-card);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;
  text-decoration: none;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--color-border);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: var(--color-skeleton);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const RatingBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  background: ${
    props => {
      const rating = parseFloat(props.rating);
      if (rating >= 80) return 'rgba(76, 175, 80, 0.8)'; // Green
      if (rating >= 60) return 'rgba(255, 193, 7, 0.8)'; // Yellow
      return 'rgba(244, 67, 54, 0.8)'; // Red
    }
  };          
  backdrop-filter: blur(4px);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

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
`;

const TitleJapanese = styled.p`
  color: var(--color-text-muted);
  font-size: 12px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
`;

const MetaItem = styled.span`
  color: var(--color-text-secondary);
  font-size: 10px;
  text-transform: uppercase;
  padding: 2px 6px;
  background: var(--color-bg-dark);
  border-radius: 4px;
  font-weight: 500;
`;

export function AnimeCard({ anime }) {
  const { id, attributes } = anime;
  const { titles, posterImage, averageRating, subtype, episodeCount } = attributes;

  const englishTitle = titles?.en || titles?.en_jp || 'Unknown Title';
  const japaneseTitle = titles?.ja_jp || '';
  const imageUrl = posterImage?.medium || posterImage?.small || '/placeholder.jpg';

  return (
    <Card to={`/anime/${id}`}>
      <ImageWrapper>
        <Image src={imageUrl} alt={englishTitle} loading="lazy" />
        {averageRating && <RatingBadge rating={averageRating}>★ {parseFloat(averageRating).toFixed(1)}</RatingBadge>}
      </ImageWrapper>
      <Content>
        <TitleEnglish>{englishTitle}</TitleEnglish>
        {japaneseTitle && <TitleJapanese>{japaneseTitle}</TitleJapanese>}
        <Meta>
          {subtype && <MetaItem>{subtype}</MetaItem>}
          {episodeCount && <MetaItem>{episodeCount} EPS</MetaItem>}
        </Meta>
      </Content>
    </Card>
  );
}
