import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useWindowDimensions } from './hooks/useWindowDimensions';
import { useAppDispatch, useAppSelector } from './hooks/reduxHook';
import { checkAuth } from './store/auth/authActions';
import { getUserInfo } from './store/userProfile/userProfileThunks';
import { PageNotFound, Home } from './pages';
import { Header } from './components/Header';
import { UserPanelRoutes } from './components/routes/UserPanelRoutes';
import { StorePanelRoutes } from './components/routes/StorePanelRoutes';
import { BurgerMenu } from './components/BurgerMenu';

export const App = () => {
  const { width } = useWindowDimensions();
  const { isAuth } = useAppSelector((state) => state.auth);
  const isBurgerMenuOpen = useAppSelector((state) => state.overlayState.isBurgerMenu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
      dispatch(getUserInfo());
    }
  }, []);

  return (
    <div>
      <Header />
      {width <=991.98 && isBurgerMenuOpen && <BurgerMenu />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        {isAuth && <Route path='/account/*' element={<UserPanelRoutes />} />}
        {/* {isAuth && <Route path='/account/store/*' element={<StorePanelRoutes />} />} */}
      </Routes>
    </div>
  );
};
