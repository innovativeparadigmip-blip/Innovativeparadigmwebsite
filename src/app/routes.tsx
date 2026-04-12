import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { LecturioPage } from './pages/LecturioPage';
import { KSAFormationPage } from './pages/KSAFormationPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'services', Component: ServicesPage },
      { path: 'lecturio', Component: LecturioPage },
      { path: 'ksa-formation', Component: KSAFormationPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
