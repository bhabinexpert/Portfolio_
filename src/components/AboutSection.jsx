import { Briefcase, Code, User } from "lucide-react"

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Developer with the Hunger to Learn.
            </h3>
            <p className="text-muted-foreground">
              I am a BIT student and a self-driven developer who is always learning and 
              experimenting with new technologies. I enjoy solving real-world problems 
              with clean and scalable solutions, while continuously improving my skills.
            </p>

            <p className="text-muted-foreground">
              My main focus is on building modern web applications, backend systems, 
              and experimenting with AI/ML. I believe in working smart, learning fast, 
              and providing real value through technology. My goal is to grow as a 
              freelancer and product-based entrepreneur while helping people with 
              reliable tech solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch!
              </a>

              <a
                href="/projects/resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Skilled in building responsive and user-friendly websites using
                    HTML, CSS, JavaScript, and React. I focus on creating clean UI/UX
                    designs that not only look good but also perform well.
                  </p>
                </div>
              </div>
            </div>

            {/* AI/ML */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Currently exploring AI and machine learning to understand how 
                    intelligent systems work. I aim to combine my development skills 
                    with AI to build innovative and useful projects in the future.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Comfortable working with Node.js, Express, and MongoDB. I focus on
                    building secure, scalable, and reliable backend systems that power
                    modern applications, including authentication, APIs, and data
                    handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
