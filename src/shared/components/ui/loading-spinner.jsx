"use client"

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  gap: 16px;
`

const Spinner = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 3px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

const LoadingText = styled.span`
  color: var(--color-text-secondary);
  font-size: 14px;
`

export function LoadingSpinner({ size, text = "Loading..." }) {
  return (
    <SpinnerWrapper>
      <Spinner size={size} />
      {text && <LoadingText>{text}</LoadingText>}
    </SpinnerWrapper>
  )
}
