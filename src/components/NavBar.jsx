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


const NavBar = (props) => {
    
    // const links = [
    //     { id: 1, text: 'Characters', url: '#', current: false },
    //     { id: 2, text: 'Comics', url: '#', current: true },
    //     { id: 3, text: 'Movies', url: '#', current: false },
    //     { id: 4, text: 'TV', url: '#', current: false },
    //     { id: 5, text: 'Games', url: '#', current: false },
    //     { id: 6, text: 'Collectibles', url: '#', current: false },
    //     { id: 7, text: 'Videos', url: '#', current: false },
    //     { id: 8, text: 'Fans', url: '#', current: false },
    //     { id: 9, text: 'News', url: '#', current: false },
    //     { id: 10, text: 'Shop', url: '#', current: false },
    // ];

    const { arraylinkNav } = props;
    return (

        <ul className="nav">

            {arraylinkNav.map((e) => {
                return <li li key = { e.id } className={ e.current ? 'active' : '' }  > <a className =" nav-link text-dark fw-bold "  href={e.url}>{e.text}</a></li>
            })}

        </ul>


    )


}

export default NavBar