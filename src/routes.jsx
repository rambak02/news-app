
import { NotFoundPage } from './pages/404/NotFoundPage';
import { MainPage } from "./pages/MainPage/MainPage"
import { constRoutes } from './paths';
import { NewsPage } from "./pages/NewsPage/NewsPage" 
import { Route, Routes } from 'react-router-dom';



export const AppRoutes = () => {
    return (
        <Routes>
         <Route path={constRoutes.HOME} element={<MainPage />}/>
         <Route path={constRoutes.NEWS} element={<NewsPage/>}/>
         <Route path={constRoutes.NOT_FOUND} element={<NotFoundPage/>}/>
        </Routes>
    );
  }
