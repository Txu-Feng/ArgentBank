import { Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../redux/slices/authSlice';
import User from '../pages/User';

export default function Router() {
  return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path="/user" element={
              useSelector(selectAuthToken) ? <User /> : <Navigate to="/SignIn" />
            }/>
        </Routes>
  );
}