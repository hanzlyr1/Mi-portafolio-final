
import { useState } from 'react'
import './App.css'


function App() {
  const [navbar, setNavbar] = useState(false)




  return (
    <div className="App">
      <div className='app'>

        <header className='header'>
          <div className='container logo-nav-container'>
            <div className='logo'>
              <img className='logo-img' src="./logo.png" alt="text " />
            </div>
            <button onClick={() => setNavbar(!navbar)} className='nav-toogle'>
              <a className='btn btn__open' href="#"><ion-icon className="nav__icon nav__icon-menu" name="list-outline"></ion-icon></a>
            </button>

            <nav className={`navigation ${navbar && "display"}`}>
              <ul className="uls">
                <li className="nav-menu-item">
                  <a className='nav-menu-link nav-link' href="#">Inicio</a>
                </li>
                <li className='nav-menu-item'>
                  <a className="nav-menu-link nav-link" href="#">Sobre mí</a>
                </li>
                <li className='nav-menu-item'>
                  <a className="nav-menu-link nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-menu-item">
                  <a className="nav-menu-link nav-link" href="#">Conocimientos</a>
                </li>
                <li className="nav-menu-item">
                  <a className='nav-menu-link nav-link' href="#">Contacto</a>
                </li>
              </ul>
            </nav>
          </div>
        </header >
        <div className='section-description'>
          <article className='description'>

            <div className="grid-container">
              <div className='grid-1'>

                <div className='grid-1-1'>
                  <h2 className='description__title'>Programador <br /> Front-End</h2>
                </div>

                <div className='div-1-2'>
                  <p className='description__info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio exercitationem amet error harum nobis delectus ad recu</p>
                </div>
                <div className='redes'>
                  <div>
                    <i class="fa-brands fa-linkedin-in linkedin"></i>

                  </div>
                  <div>
                    <i className="fa-brands fa-instagram instagran"></i>
                  </div>
                  <div>
                    <i class="fa-brands fa-twitter twitter"></i>
                  </div>
                </div>
                <div className='btn-grid'>
                  <button>Contactame</button>
                </div>

              </div>
              <div className='grid-2'>
                <img className='img-des' src="https://img.blogs.es/anexom/wp-content/uploads/2021/12/perfil-1024x754.jpg" alt="" />

              </div>
            </div>
          </article>
          <article className='article-tecno'>
            <h2 className='h2-tecnologia'>Tecnologias:</h2>
            <div className='tecnologia'>
              <div className='div-tecno'>
                <i className="fa-brands fa-html5 icons-link"></i>
                <h3>HTML5</h3>
              </div>
              <div className='div-tecno'>
                <i className="fa-brands fa-css3-alt icons-link"></i>
                <h3>CSS3</h3>
              </div>
              <div className='div-tecno'>
                <i className="fa-brands fa-js icons-link"></i>
                <h3>JavaScript</h3>
              </div>
              <div className='div-tecno'>
                <i className="fa-brands fa-react  icons-link"></i>
                <h3>React</h3>
              </div>

            </div>
          </article>
          <article className='soft-skills'>
            <div className='soft'>
              <div className='soft-grid'>
                <h2 className='grid-title'>Acerca de Mí</h2>
                <p className='grid-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eligendi et est illum doloremque architecto numquam facilis ex, aspernatur reprehenderit totam minima iure quam quod fugiat dolore rerum nobis vero!</p>
              </div>


            </div>
          </article>
          <article>
            <div className='soft-grid'>
              <h2 className='grid-title-H'>Habilidades:</h2>
              <div className='div-habilidades'>
                <p className='parrafo'>Desarrollo Web</p>
                <p className='parrafo'>Autodidacta</p>
                <p className='parrafo'>Creativo</p>
                <p className='parrafo'>Trabajo en equipo</p>
              </div>
            </div>

          </article>
        </div >



      </div>

      <footer className='footer'>
        <h2>My footer</h2>
      </footer>


    </div >
  )
}

export default App
