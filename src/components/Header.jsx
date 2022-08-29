import { FiArrowRightCircle } from 'react-icons/fi';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';

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
                    <div className="header__card">
                        <div className="header__imgBx">
                            <img className="header__img" src='https://www.elsoldemexico.com.mx/doble-via/xoiaw8-cuales-son-las-razas-de-gato-mas-grandes-del-mundo.jpg/ALTERNATES/LANDSCAPE_768/%C2%BFCua%CC%81les%20son%20las%20razas%20de%20gato%20ma%CC%81s%20grandes%20del%20mundo.jpg' />
                            <div className='header__data'>
                                <h1 className='header__name'>carlos daniel cruz perez</h1>
                                <h2 className='header__dev'>Web Developer Desing</h2>
                                <div className="header__icons">
                                    <a className='header__icono'>
                                        <IoLogoFacebook className='header__icon' />
                                    </a>

                                    <a className='header__icono'>
                                        <IoLogoLinkedin className='header__icon' />
                                    </a>

                                    <a className='header__icono'>
                                        <IoLogoTwitter className='header__icon' />
                                    </a>

                                    <a className='header__icono'>
                                        <IoLogoInstagram className='header__icon' />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
