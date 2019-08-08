import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Navbar = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Index</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
  </div>
);

export default Navbar;
