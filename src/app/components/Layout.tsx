import { Outlet } from 'react-router';
import { NavbarMultiPage } from './NavbarMultiPage';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
<<<<<<< HEAD
import { ScrollRestoration } from './ScrollRestoration';
=======
>>>>>>> 4f1aecad8e5c42a185b371afee2ebc0387bacdd7

export function Layout() {
  return (
    <div className="min-h-screen bg-black">
<<<<<<< HEAD
      <ScrollRestoration />
=======
>>>>>>> 4f1aecad8e5c42a185b371afee2ebc0387bacdd7
      <NavbarMultiPage />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
