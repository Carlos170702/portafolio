import { Header } from './components/Header'
import { NavBar } from './components/NavBar'

function App() {

  const links = [
    { id: 1, url: "/Home", name: "Home" },
    { id: 2, url: "/skills", name: "Skills" },
    { id: 3, url: "/contact", name: "Contact" },
  ]

  return (
    <div className="App">
      <div className="pagina">
        <NavBar links={links} />
        <Header />
      </div>
    </div>
  )
}

export default App
