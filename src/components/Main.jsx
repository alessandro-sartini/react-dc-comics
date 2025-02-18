import digital from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import shop from "../assets/img/buy-comics-shop-locator.png"
import subScription from "../assets/img/buy-comics-subscriptions.png"
import power from "../assets/img/buy-dc-power-visa.svg"

const Main = () => {

    return (
            
        <main className="">

            <section className="bg-dark ">

                <h2 className="p-5 fw-bold text-white ">  Content goes here... </h2>


            </section>
            <section class="bg-primary text-white py-3">
                <div class="container text-center">
                    <ul class="list-inline m-3">
                        <img src={digital} alt="" height={"50px"} /><li class="list-inline-item px-3"><a class="text-white text-decoration-none" href="#">Digital Comics</a></li>
                        <img src={merch} alt="" height={"50px"}/><li class="list-inline-item px-3"><a class="text-white text-decoration-none" href="#">DC Merchandise</a></li>
                        <img src={shop} alt="" height={"50px"}/><li class="list-inline-item px-3"><a class="text-white text-decoration-none" href="#">Subscription</a></li>
                        <img src={subScription} alt="" height={"50px"}/><li class="list-inline-item px-3"><a class="text-white text-decoration-none" href="#">Comic Shop Locator</a></li>
                        <img src={power} alt="" height={"30px"}/><li class="list-inline-item px-3"><a class="text-white text-decoration-none" href="#">DC Power Visa</a></li>
                    </ul>
                </div>
            </section>
        </main>
    




    )





}

export default Main

