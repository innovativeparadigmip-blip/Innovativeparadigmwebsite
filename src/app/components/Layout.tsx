import { Outlet } from 'react-router';
import { NavbarMultiPage } from './NavbarMultiPage';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ScrollRestoration } from './ScrollRestoration';

export function Layout() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollRestoration />
      <NavbarMultiPage />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
