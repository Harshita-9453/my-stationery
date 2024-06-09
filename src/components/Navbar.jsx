/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Navbar = ({ NavData, filterProduct }) => {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          My Stationary
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NavData.map((currElem) => {
                return (
                  <div key={currElem}>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={() => filterProduct(currElem)}
                      >
                        {currElem}
                      </a>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
