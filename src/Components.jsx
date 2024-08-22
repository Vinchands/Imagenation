export function Header() {
    return (
        <nav className="d-flex justify-content-between align-items-center bg-dark p-3" data-bs-theme="dark">
            <a href="#" className="navbar-brand">
                <img src="./src/assets/imagenation-logo.png" alt="Imagenation Logo" width={52} className="d-inline d-sm-none me-1" />
                <span className="d-none d-sm-inline fw-light fs-4 text-white">Image<span className="d-none d-sm-inline fw-bold text-info">nation</span></span>
            </a>
            <nav className="d-none d-sm-inline nav">
                <a className="btn btn-sm btn-outline-info rounded-0 border-0 border-bottom border-info active" href="#">Home</a>
                <a className="btn btn-sm btn-outline-info rounded-0 border-0 border-bottom border-info ms-2" href="#">Sign Up</a>
                <a className="btn btn-sm btn-outline-info rounded-0 border-0 border-bottom border-info ms-2" href="#">Register</a>
                <a className="btn btn-sm btn-outline-info rounded-0 border-0 border-bottom border-info ms-2">About</a>
            </nav>
        </nav>
    )
}

export function Banner() {
    
    const styles = {
        banner: {
            backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-night-sky-with-shiny-stars_53876-23326.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724198400&semt=ais_hybrid')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "#282c34",
            minHeight: "326px"
        },
        brand: {
            
        },
        brandText: {
            maxWidth: "600px"
        }
    };
    
    return (
        <div className="container-fluid d-md-flex justify-content-center align-items-center" style={styles.banner}>
            <div className="d-sm-flex justify-content-center align-items-center p-3">
                <img src="./src/assets/imagenation-logo.png" alt="Logo" width={120} className="d-block img mx-auto mx-sm-2" />
                <h1 className="h1 fw-light text-center text-white">
                    Image<span className="text-info fw-bold">nation</span>
                </h1>
            </div>
            <div className="text-center text-md-start mx-auto mx-md-0 p-3" style={styles.brandText}>
                <p className="lead text-white">
                    A digital platform for sharing and discovering images from around the world.
                    <span className="fw-bold"> Find your inspiration</span> or create your own!
                </p>
                <div className="d-grid d d-sm-inline">
                    <button className="d-block d-sm-inline btn btn-info rounded-pill me-sm-2 mt-3 mx-auto mx-sm-0">Sign Up</button>
                    <button className="d-block d-sm-inline btn btn-outline-info rounded-pill mt-2 mt-sm-3 mx-auto mx-sm-0">Discover More</button>
                </div>
            </div>
        </div>
    );
}

export function SearchBar({ onSearchBarChange, onSearchButtonClick }) {
    
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control rounded-0 border-0 border-bottom border-black shadow-none" 
                            placeholder="Search for images..."
                            onChange={ onSearchBarChange } />
                        <button className="btn border-0 border-bottom border-black rounded-0" onClick={ onSearchBarChange }>
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
