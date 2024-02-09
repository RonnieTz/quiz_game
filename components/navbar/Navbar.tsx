import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="link" href={'/new_game'}>
        New Game
      </Link>
    </nav>
  );
};
export default Navbar;
