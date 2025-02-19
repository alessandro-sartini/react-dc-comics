import logoHeader from "../assets/img/dc-logo.png"
import NavBar from "./NavBar"


const Header = (props) => {

    return (
        
        <header className="container d-flex justify-content-between align-items-center py-3">
        <figure>
            <img src={logoHeader} alt="logo" />
        </figure>
        <NavBar arraylinkNav={props.arraylinkNav}/>
        </header>
            
        // <header className="bg-white shadow-sm py-3">
        //     <div className="container d-flex justify-content-between align-items-center">
        //         <div className="logo">
        //         <img src={logoHeader} alt="" />
        //         </div>
        //         <nav>
        //             <NavBar arraylinkNav={props.arraylinkNav} />
        //         </nav>
        //     </div>
        // </header>
    
    
    )

}

export default Header


