import { Link} from 'react-router-dom';
import ArgentBankLogo from '../../img/argent-bank-logo.webp';
import { useSelector, useDispatch } from "react-redux";
import { selectAuthToken, selectUserData } from '../../redux/selectors';
import { setSignOut } from '../../redux/slices/authSlice';
import { resetData } from '../../redux/slices/userSlice';

export default function Header() {

  const token = useSelector(selectAuthToken);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  return (
    <nav className='main-nav'>
      <Link to='./' className='main-nav_logo'>
        <img
          className='main-nav_logo_image'
          src={ArgentBankLogo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className='fa fa-user-circle'></i> {userData.userName}
            </Link>
            <Link to='./' className='main-nav_item'
              onClick={() => { dispatch(setSignOut()); dispatch(resetData()); }}>
              <i className="fa fa-sign-out"></i>Sign Out
            </Link>
          </>
        ) : (
          <Link to='./SignIn' className='main-nav_item'>
            <i className='fa fa-user-circle'></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}