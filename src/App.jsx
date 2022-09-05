import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { hookAppData } from './hooks/hookAppData'

function App() {

  const { links, proyects, skills, size, left, tamaño, animationDelay } = hookAppData();
  return (
    <div className="App">
      <div className="pagina" id="home">
        <NavBar links={links} />
        <Header />
        {
          tamaño.map(item => (
            <div
              key={item}
              className="pagina__burbuja"
              style={{ width: `${size()}px`, height: `${size()}px`, left: `${left()}px`, animationDelay: `${animationDelay()}s` }}
            >
              <p className='borbuja'></p>
            </div>
          ))
        }
      </div>
      <Skills skills={skills} />
      <Projects proyects={proyects} />
    </div>
  )
}

export default App
