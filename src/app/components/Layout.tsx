import { Outlet } from 'react-router';
import { NavbarMultiPage } from './NavbarMultiPage';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="min-h-screen bg-black">
      <NavbarMultiPage />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
