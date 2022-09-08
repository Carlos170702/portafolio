import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { hookAppData } from './hooks/hookAppData'

function App() {

  const { links, proyects, skills, size, left, tamaño, animationDelay } = hookAppData();
  return (
    <div className="App">
      <NavBar links={links} />
      <Header />
      <Skills skills={skills} />
      <Projects proyects={proyects} />
    </div>
  )
}

export default App
