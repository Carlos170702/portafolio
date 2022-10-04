import { useState } from 'react'
import { FiAlignJustify, FiX } from 'react-icons/fi'
import { NavList } from './NavList'

export const NavBar = ({ links }) => {

    const [menu, setMenu] = useState(true)

    return (
        <>
            <nav className="conteiner nav">
                <div className="nav__img">
                    <a href="#home"><img src="https://firebasestorage.googleapis.com/v0/b/portafolio-c6563.appspot.com/o/logo.png?alt=media&token=42f4cd2d-e548-4a1d-abc3-32b08e99182d" alt="Logo" className="nav__logo" /></a>
                </div>

                <ul className="nav__list">
                    {
                        links.map(item => (
                            <NavList key={item.id} item={item} />
                        ))
                    }
                </ul>
                <div
                    onClick={() => setMenu(!menu)}
                    className="nav__hamburger"
                >
                    {
                        menu
                            ? <div className='nav__menu'>
                                <FiAlignJustify className='nav__hamburger' />
                            </div>
                            : <>
                                <div className='nav__menu'>
                                    <FiX className='nav__exit' />
                                </div>
                            </>
                    }
                </div>
            </nav>
        </>
    )
}
