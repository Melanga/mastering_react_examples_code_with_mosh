//stateless functional component
const NavBar = (props) => {
  // object destructuring
  const { totalCounters } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="badge rounded-pill bg-secondary m-2">
            {totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
