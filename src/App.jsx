import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"


function App() {
  
  const arraylinkNav =
  [
      { text: "Characters" },
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

    <>
    <Header arraylinkNav={ arraylinkNav } />
    <Main />
    <Footer />

    </>
  )
}

export default App
