import { Briefcase, Code, User } from "lucide-react"

export const About = ()=>{
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Passionate Developer with the Hunger to learn.</h3>
                    <p className="text-muted-foreground">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi commodi, quidem atque sint impedit officia minima cumque at eos voluptates beatae magni sequi debitis voluptatibus! Laudantium dolor suscipit eaque? Tempora.
                    </p>

                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates nisi aliquid ipsa dignissimos at rem esse eaque ex veniam eius commodi aut inventore iste, libero quidem quam corrupti magni?
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch!
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className='text-primary h-6 w-6'/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium porro dolores rem nihil corrupti vel iusto mollitia quas. Voluptas ab reiciendis, quis veritatis nulla optio libero harum eius voluptatibus?</p>
                            </div>

                        </div>
                    </div>


                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className='text-primary h-6 w-6'/>
                            </div>

                             <div className="text-left">
                                <h4 className="font-semibold text-lg">AI/ML</h4>
                                <p className="text-muted-foreground"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium porro dolores rem nihil corrupti vel iusto mollitia quas. Voluptas ab reiciendis, quis veritatis nulla optio libero harum eius voluptatibus?</p>
                            </div>

                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className='text-primary h-6 w-6'/>
                            </div>

                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Backend Developer</h4>
                                <p className="text-muted-foreground"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium porro dolores rem nihil corrupti vel iusto mollitia quas. Voluptas ab reiciendis, quis veritatis nulla optio libero harum eius voluptatibus?</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

}