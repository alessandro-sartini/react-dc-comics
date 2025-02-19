import twitter from "../assets/img/footer-twitter.png"
import facebook from "../assets/img/footer-facebook.png"
import youtube from "../assets/img/footer-youtube.png"
import pinterest from "../assets/img/footer-pinterest.png"
import periscope from "../assets/img/footer-periscope.png"
import logoDc from "../assets/img/dc-logo-bg.png"
    // dc-logo-bg.png
const Footer = () => {
    
    return (

        <footer className="py-3">

            <div className="background row row-cols-4 py-3">

            <div className="back">
                <div className="row p-3">
                        <div className="col-4 ">
                            <h6 className="text-white">DC COMICS</h6>
                            <ul className="d-flex flex-column">
                                <li className=""><a className="text-white" href="#">Characters</a></li>
                                <li className=""><a className="text-white" href="#">Comics</a></li>
                                <li className=""><a className="text-white" href="#">Movies</a></li>
                                <li className=""><a className="text-white" href="#">TV</a></li>
                                <li className=""><a className="text-white" href="#">Games</a></li>
                                <li className=""><a className="text-white" href="#">Videos</a></li>
                                <li className=""><a className="text-white" href="#">News</a></li>
                            </ul>
                        </div>
                        <div className="col-4 text-left">
                            <h6 className="text-white">DC COMICS</h6>
                                <ul className="d-flex flex-column">
                                    <li className=""><a className="text-white" href="#">Characters</a></li>
                                    <li className=""><a className="text-white" href="#">Comics</a></li>
                                    <li className=""><a className="text-white" href="#">Movies</a></li>
                                    <li className=""><a className="text-white" href="#">TV</a></li>
                                    <li className=""><a className="text-white" href="#">Games</a></li>
                                    <li className=""><a className="text-white" href="#">Videos</a></li>
                                    <li className=""><a className="text-white" href="#">News</a></li>
                                </ul> 
                        </div>
                        <div className="col-4">


                        <h6 className="text-white">SITE</h6>
                                <ul className="d-flex flex-column">
                                    <li className=""><a className="text-white" href="#">Characters</a></li>
                                    <li className=""><a className="text-white" href="#">Comics</a></li>
                                    <li className=""><a className="text-white" href="#">Movies</a></li>
                                    <li className=""><a className="text-white" href="#">TV</a></li>
                                    <li className=""><a className="text-white" href="#">Games</a></li>
                                    <li className=""><a className="text-white" href="#">Videos</a></li>
                                    <li className=""><a className="text-white" href="#">News</a></li>
                                </ul> 

                        </div>
                        <div className="col-4">
                        <h6 className="text-white">SHOP</h6>
                                <ul className="d-flex flex-column">
                                    <li className=""><a className="text-white" href="#">Characters</a></li>
                                    <li className=""><a className="text-white" href="#">Comics</a></li>
                                </ul> 


                        </div>

                    </div>


                </div>

                {/* 
                <div className="col-8">


                </div> */
                }



            </div>
            <section className="d-flex bg-dark justify-content-between ">
                <button type="button" class="btn btn-outline-primary m-3" >Sign-up</button>
                
                <div className="d-flex ">
                <h5 className="text-primary align-self-center">FOLLOW US</h5>
                <ul className="text-white d-flex mx-5 list-unstyled">
                    <li className="mx-5 py-3"><img src={facebook} alt="" /></li>
                    <li className="mx-5 py-3"><img src={twitter} alt="" /></li>
                    <li className="mx-5 py-3"><img src={periscope} alt="" /></li>
                    <li className="mx-5 py-3"><img src={pinterest} alt="" /></li>
                    <li className="mx-5 py-3"><img src={youtube} alt="" /></li>

                </ul>

                </div>
                <div className="logo-bg">
                </div> 
                {/* <img src={logoDc} alt="DC Logo"  /> */}
            </section>


        </footer>




    )




}

export default Footer