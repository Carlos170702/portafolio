export const Projects = ({ proyects }) => {
    return (
        <>
            <div className="conteiner Projects" id="projects">
                <h2 className="proyects__titulo">Projects</h2>
                <p className="proyects__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veritatis debitis neque fugiat eligendi pariatur molestias, ex ducimus consequatur saepe doloremque eaque laboriosam ipsum explicabo iusto, adipisci iste, impedit nobis alias repudiandae laborum. Quia voluptatibus deleniti consectetur ab cupiditate. Consectetur nostrum neque iure deleniti distinctio recusandae explicabo mollitia officiis totam numquam inventore est culpa illo, eius, ullam tempora nisi ducimus.</p>

                <div className="proyects__tabs">
                    <button
                        className="proyects__btnTabs"
                    >Tab 1</button>
                    <button
                        className="proyects__btnTabs"
                    >Tab 2</button>
                    <button
                        className="proyects__btnTabs"
                    >Tab 3</button>
                </div>
                <div className="projects__contentImg">
                    {
                        proyects.map(item => (
                            <div key={item.id} className="projects__img">
                                <h3 className="projects__name">{item.name}</h3>
                                <img className="projects__imgas" src={item.url} alt={item.name} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
