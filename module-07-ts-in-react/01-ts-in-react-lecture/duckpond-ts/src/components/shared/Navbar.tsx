import { Link, NavLink } from 'react-router';
import { useAuth } from '../../context';

const Navbar = () => {
  const { signedIn, handleSignOut } = useAuth();

  const showActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'menu-active' : '';
  return (
    <div className='navbar bg-slate-800'>
      <div className='navbar-start'>
        <Link className='font-bold' to='/'>
          The Duck Pond
        </Link>
      </div>
      <nav className='navbar-end'>
        <ul className='menu menu-horizontal items-baseline gap-2'>
          <li>
            <NavLink className={showActive} to='/'>
              Home
            </NavLink>
          </li>

          {signedIn ? (
            <>
              <li>
                <NavLink className={showActive} to='/myPond'>
                  My Pond
                </NavLink>
              </li>
              <li>
                <button className='btn btn-primary' onClick={handleSignOut}>
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link className='btn btn-primary' to='/signin'>
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
