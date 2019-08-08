import Navbar from '../components/navbar';

// Style to be applied to the layout
const layoutStyle = {
  fontFamily: 'monospace',
};

const Layout = props => (
  // div that'll wrap everything
  <div style={layoutStyle}>

    {/* Navbar component */}
    <Navbar />

    {/* Whatever the content is passed to us as props */}
    { props.children }
  </div>
)

export default Layout;
