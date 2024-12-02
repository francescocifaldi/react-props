import Card from "./components/card/Card.jsx"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default App