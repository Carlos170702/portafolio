export const NavList = ({item}) => {
    return (
        <>
            <li>
                <a className="nav__link" href={item.url}>{item.name}</a>
            </li>
        </>
    )
}
