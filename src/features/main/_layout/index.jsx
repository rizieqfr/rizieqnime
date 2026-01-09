'use client';

import { NavbarContainer } from '@/shared/containers/navbar-container';

export default function MainLayout({ children }) {
  return (
    <>
      <NavbarContainer />
      <main>{children}</main>
    </>
  );
}
