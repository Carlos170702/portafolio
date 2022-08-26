import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'

export const Skills = ({ skills }) => {
    return (
        <>
            <div className="conteiner skills" id="skills">
                <h2 className="skills__titulo">Skills</h2>
                <p className="skills__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ducimus expedita tempore deleniti vitae, at esse? Beatae veniam sapiente sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ducimus expedita tempore deleniti vitae, at esse? Beatae veniam sapiente sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ducimus expedita tempore deleniti vitae, at esse? Beatae veniam sapiente sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ducimus expedita tempore deleniti vitae, at esse? </p>
                <div className="skills__contentSkills">
                    <FiArrowLeftCircle className='skills__iconArrow'/>
                    <div className="Skills__skill">
                        {
                            skills.map(item => (
                                <div key={item.id} className="skills__container">
                                    <div className="skills__fondo">
                                        <div className="skills__contentPercentage">
                                            <p className="skills__Percentage" >{item.percentage}</p>
                                        </div>
                                    </div>
                                    <p className="skills__technology" >{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <FiArrowRightCircle className='skills__iconArrow'/>
                </div>
            </div>
        </>
    )
}