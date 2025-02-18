import logoHeader from "../assets/img/dc-logo.png"



const Header = () => {

    return (
            
        <header className="bg-white shadow-sm py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                <img src={logoHeader} alt="" />
                </div>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">Characters</a></li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">Comics</a></li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">Movies</a></li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">TV</a></li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">Games</a></li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">Collectibles</a></li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">Videos</a></li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">Fans</a></li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">News</a></li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">Shop</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    




        )





}

export default Header

