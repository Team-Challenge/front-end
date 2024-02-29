import { Navigate, Route, Routes } from 'react-router-dom';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import { useAppSelector } from '@/hooks/reduxHook';
import {
  Orders,
  Products,
  Messages,
  Reviews,
  StoreManagement,
  StorePage,
} from '@/pages';
import { StorePanel } from '../sidebarNav/StorePanel';

export const StorePanelRoutes = () => {
  const { width } = useWindowDimensions();
  const { linkToStore } = useAppSelector((state) => state.storeProfile);

  return (
    <main>
      <div className='container user-panel-page'>
        {width >= 991.98 && <StorePanel />}
        <Routes>
          <Route path='products' element={<Products />} />
          <Route path='settings' element={<StoreManagement />} />
          <Route path='orders' element={<Orders />} />
          <Route path='messages' element={<Messages />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path={`/store/${linkToStore}`} element={<StorePage />} />
          <Route path='*' element={<Navigate to='products' />} />
        </Routes>
      </div>
    </main>
  );
};
