import { Link } from 'react-router-dom';
import ArgentBankLogo from '../../img/argent-bank-logo.webp';

export default function Header() {

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
        <Link to='./SignIn' className='main-nav_item'>
          <i className='fa fa-user-circle'></i> Sign In
        </Link>
      </div>
    </nav>
  );
}