import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { LecturioPage } from './pages/LecturioPage';
import { KSAFormationPage } from './pages/KSAFormationPage';
<<<<<<< HEAD
import { MRWGPage } from './pages/MRWGPage';
import { MRWGRegisterPage } from './pages/MRWGRegisterPage';
=======
>>>>>>> 4f1aecad8e5c42a185b371afee2ebc0387bacdd7
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
<<<<<<< HEAD
      { path: 'mrwg', Component: MRWGPage },
      { path: 'mrwg/register', Component: MRWGRegisterPage },
=======
>>>>>>> 4f1aecad8e5c42a185b371afee2ebc0387bacdd7
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
