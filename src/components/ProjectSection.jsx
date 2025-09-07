import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1, 
        title: "Library Management System",
        description: "This Library Management System  demonstrates how the **MERN stack** can be applied to solve real-world problems.",
        image: "/projects/Lms.png",
        tags: ["React", "TailwindCSS", "MongoDB", "Node.JS"],
        demoUrl: "https://gyankosh-lms.netlify.app/",
        githubUrl: "https://github.com/bhabinexpert/Library-Management-System"
    },
    {
        id:2, 
        title: "Inventory Management System",
        description: " The CLI based program where users can view and buy cosmetics items and admin can sell and generates bill for the customer also can restock the goods and products.",
        image: "/projects/Cli-based.png",
        tags: ["Python"],
        demoUrl: "#",
        githubUrl: "https://github.com/bhabinexpert/Inventory-Management-System---second-semester-CLI-"
    },
    {
        id:3,
        title: "Movie App",
        description: "The movie app which currently shows  about the movie details using TMDB and filters trending movies according to search results",
        image:"/projects/movieApp.png",
        tags: ["TypeScript", "React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl:"https://github.com/bhabinexpert/Movie-APP"
    }

]

export const Project = ()=>{
    return <section id="projects" className="py-24 px-4 realtive">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key)=>(
                    <div
                    key={key}
                    className=" group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl}
                                target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20}/>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/bhabinexpert/"
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank">
                Check my Github <ArrowRight size={18}/>
                </a>
            </div>
        </div>


    </section>
}