'use client';

import styled from '@emotion/styled';

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

export function Container({ children, className }) {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
}
