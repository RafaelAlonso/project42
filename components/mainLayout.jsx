import Navbar from '../components/navbar';

const layoutStyle = {
  fontFamily: 'monospace',
};

const Layout = props => {
  return (
    <div style={layoutStyle}>
      <Navbar />
      { props.children }
    </div>
  )
}

export default Layout;
