import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Asavari Ambavane",
    greeting: {
        title: "Hey there, I am Asavari.",
        subtitle: "Usually, when I am not caught up with my college assignments, I like to try my hand at web development and I think I have gotten pretty good at it!"
    },
    about: {
        title: "About Me",
        subtitle: "I am Asavari, a student at VJTI, Mumbai. I am currently pursuing my bachelor's degree in electronic engineering. I aim to gain maximum technical knowledge during the course of my eduction and hopefully apply the same for the benefit of the society in future. Other than that, you are most likely to find me with a book in one hand and tea in other. I also like to groove to upbeat music whenever I feel happy!",
        resume: "https://drive.google.com/file/d/1zWIQP531V9P8ZL5aV9DDrqQIuIFoodn-/view?usp=sharing"
    },
    capabilities: [
        {
            category: "Frontend",
            skills: ["HTML5, CSS3, JS", "React JS, Next JS", "SASS", "Flutter"]
        },
        {
            category: "Backend",
            skills: ["NodeJS", "ExpressJS", "Python"]
        },
        {
            category: "Database",
            skills: ["Firebase", "MongoDB"]
        },
    ],
    contact: {
        email: 'ambavaneasavari@gmail.com',
        phone: '0123456789',
        countrycode: '+91'
    },
    mainSocials: [
        { type: 'github', link: '', icon: faGithubAlt },
        { type: 'linkedin', link: '', icon: faLinkedinIn },
        { type: 'medium', link: '', icon: faMediumM },
    ],
    allSocials: [
        { type: 'instagram', link: '', icon: faInstagram },
        { type: 'linkedin', link: '', icon: faLinkedinIn },
        { type: 'github', link: '', icon: faGithubAlt },
        { type: 'facebook', link: '', icon: faFacebook },
        { type: 'twitter', link: '', icon: faTwitter },
        { type: 'medium', link: '', icon: faMediumM },
        { type: 'youtube', link: '', icon: faYoutube },
        { type: 'behance', link: '', icon: faBehance },
    ]
}