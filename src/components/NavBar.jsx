function NavBar({ valueClick, onProfileClick }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <i className="bi bi-lightning-charge-fill"></i>
          <a
            onClick={() => {
              onProfileClick(true);
            }}
            className="navbar-brand"
            href="#"
          >
            three pics
          </a>
        </span>
        <button
          className="navbar-toggler"
          onClick={() => {
            onProfileClick(false);
          }}
        >
          <span className="bi bi-person-circle"></span>
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
