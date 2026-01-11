import { BrowserRouter, Routes as RouterRoutes, Route, Outlet, useParams } from 'react-router-dom';
import { WelcomeContainer } from '@/features/welcome/containers/welcome-container';
import MainLayout from '@/shared/components/layout/MainLayout';
import Home from '@/features/home';
import AnimeDetail from '@/features/anime-detail';

const LayoutWrapper = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const AnimeDetailWrapper = () => {
  const { id } = useParams();
  return <AnimeDetail id={id} />;
};

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<WelcomeContainer />} />
        <Route element={<LayoutWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/anime/:id" element={<AnimeDetailWrapper />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
}
