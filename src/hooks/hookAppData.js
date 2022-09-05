export const hookAppData = () => {

    const links = [
        { id: 1, url: "#home", name: "Home" },
        { id: 2, url: "#skills", name: "Skills" },
        { id: 3, url: "#projects", name: "Projects" },
        { id: 4, url: "#contact", name: "Contact" },
    ]

    const skills = [
        { id: 1, name: "Html", percentage: 90 },
        { id: 2, name: "Css", percentage: 80 },
        { id: 3, name: "JavaScript", percentage: 50 },
        { id: 4, name: "React", percentage: 50 },
    ]

    const proyects = [
        {
            id: 1, name: 'proyect 1', url: "https://firebasestorage.googleapis.com/v0/b/portafolio-c6563.appspot.com/o/img1.jpg?alt=media&token=9fbf51c8-3628-4d75-8d44-fe29f7a9541d"
        },
        {
            id: 2, name: 'proyect 2', url: "https://firebasestorage.googleapis.com/v0/b/portafolio-c6563.appspot.com/o/img2.webp?alt=media&token=b3749d99-7510-4db8-8053-e80181615b1a"
        },
        {
            id: 3, name: 'proyect 3', url: "https://firebasestorage.googleapis.com/v0/b/portafolio-c6563.appspot.com/o/img3.webp?alt=media&token=74c96216-ecb6-44ee-b5d3-8ce3943056a3"
        },
        {
            id: 4, name: 'proyect 4', url: "https://firebasestorage.googleapis.com/v0/b/portafolio-c6563.appspot.com/o/img4.jpg?alt=media&token=7c355366-ea04-4d40-94ac-fe7253457dd9"
        },
        {
            id: 5, name: 'proyect 5', url: "https://firebasestorage.googleapis.com/v0/b/portafolio-c6563.appspot.com/o/img5.jpg?alt=media&token=8b6bd1d8-17d5-432b-ae17-919e3899b29a"
        },
        {
            id: 6, name: 'proyect 6', url: "https://firebasestorage.googleapis.com/v0/b/portafolio-c6563.appspot.com/o/img6.webp?alt=media&token=e01ebfdf-4925-489b-a6a4-6b3499f16f44"
        },
    ]

    const size = () => {
        return 50 + Math.random() * 10;
    }

    const left = () => {
        return Math.floor(Math.random() * window.innerWidth);
    }

    const animationDelay = () => {
        return Math.random() * -20;
    }

    return {
        links,
        size,
        skills,
        proyects,
        left,
        tamaño: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        animationDelay,
    }
}
