{/* <nav>
<ul className="nav">
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#"></a></li>
</ul>
</nav> */}


const NavBar = () => {
    
    const arraylinkNav = [{ text: "Characters" },
        { text: "Comics"  ,url:"#"},
        {text:  "TV" ,url:"#"},
        {text:  "Movies" ,url:"#"},
        {text:  "Games" ,url:"#"},
        {text:  "Collectibles" ,url:"#"},
        {text:  "Videos" ,url:"#"},
        {text:  "Fans" ,url:"#"},
        {text:  "News" ,url:"#"},
        {text:  "Shop" ,url:"#"}
    ];
    return (

        <ul className="nav">

            {arraylinkNav.map((e, index)=>{

               return <li className="nav-item"><a className="nav-link text-dark fw-bold" key={index} href={e.url}>{e.text }</a></li>

                
            })}

        </ul>


    )


}

export default NavBar