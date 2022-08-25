import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Skills } from './components/Skills'

function App() {

  const links = [
    { id: 1, url: "/Home", name: "Home" },
    { id: 2, url: "/skills", name: "Skills" },
    { id: 3, url: "/contact", name: "Contact" },
  ]

  const skills = [
    {id: 1, name: "Html", percentage: 90},
    {id: 2, name: "Css", percentage: 80},
    {id: 3, name: "JavaScript", percentage: 50},
    {id: 4, name: "React", percentage: 50},
  ]

  return (
    <div className="App">
      <div className="pagina">
        <NavBar links={links} />
        <Header />
        <Skills skills={skills}/>
      </div>
    </div>
  )
}

export default App
