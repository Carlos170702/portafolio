import { FiArrowRightCircle } from 'react-icons/fi';


export const Header = () => {

    return (
        <>
            <div className="conteiner header">
                <div className="header__info">
                    <h2 className="header__Welcome">Let's go to my portafolio</h2>
                    <h1 className="header__titulo">Hi! I'm carlos Web Design </h1>
                    <p className="header__about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur doloribus aut, vero quidem eos labore, esse repudiandae sunt hic dolorum ut reprehenderit voluptates nulla facere reiciendis pariatur amet eum eaque necessitatibus perspiciatis. Adipisci deserunt iure ad, eaque molestias consectetur facere vero, reiciendis veniam ab sit! Sequi repellendus, officiis obcaecati quas beatae dolore mollitia,</p>
                    <button
                    className='header__btn'
                        type='submit'
                    >
                        let's Connect    <FiArrowRightCircle />
                    </button>
                </div>

                <div className="herader__pefil">
                    <div className="header__img"></div>
                </div>
            </div>
        </>
    )
}
