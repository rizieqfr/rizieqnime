'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '../components/ui/back-button';

export function BackButtonContainer({ href = '/home', children }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return <BackButton onClick={handleClick}>{children}</BackButton>;
}
