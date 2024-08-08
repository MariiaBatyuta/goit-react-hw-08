import './App.css';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { selectRefreshUser } from '../redux/auth/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { PuffLoader } from 'react-spinners';

const HomePage = lazy(() => import("../pages/Home/Home"));
const ContactsPage = lazy(() => import("../pages/Contacts/Contacts"));
const RegisterPage = lazy(() => import("../pages/Registration/Registration"));
const LoginPage = lazy(() => import("../pages/Login/Login"));

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectRefreshUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]); 

  return isRefresh
    ? (<PuffLoader size={40} color="red"/>)
    : (
      <Layout>
        <Toaster position="top-center" reverseOrder={false}/>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/" />} />
            <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/contacts" />} />
            <Route path="/login" element={<RestrictedRoute  component={<LoginPage />} redirectTo="/contacts" />} />
            
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    );
    
  
}

export default App;