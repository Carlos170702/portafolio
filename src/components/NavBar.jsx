export const NavBar = ({ links }) => {
    return (
        <>
            <nav className="conteiner nav">
                <div className="nav__img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-c6563.appspot.com/o/logo.png?alt=media&token=42f4cd2d-e548-4a1d-abc3-32b08e99182d" alt="Logo" className="nav__logo" />
                </div>

                <ul className="nav__list">
                    {
                        links.map(item => (
                            <li key={item.id}>
                                <a className="nav__link" href={item.url}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}
