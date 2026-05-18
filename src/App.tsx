import { motion } from 'framer-motion'

const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

  const phoneNumber = "919999999999"; // replace with your WhatsApp number

  const whatsappMessage = `
Hello, my name is ${name}

Email: ${email}

Message:
${message}
`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");
};

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

const techGroups = [
  {
    title: 'Base Languages',
    items: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend / DB',
    items: ['Node.js', 'Express.js',  'MongoDB', ]
  },
  {
    title: 'Tools',
    items: ['GitHub', 'Postman', 'Visual Studio Code']
  }
]

function App() {
  return (
    <div className="min-h-screen bg-background text-[#2d2d2b]">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
          <div className="font-semibold tracking-[0.22em] text-sm uppercase text-[#2d2d2b]/70">Aman Choudhary</div>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#2d2d2b]/70 transition duration-300 hover:text-accent hover:shadow-[0_0_0_0_rgba(255,205,178,0.25)] hover:shadow-[0_0_12px_8px_rgba(255,205,178,0.08)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="/Resume_Aman Updated.pdf"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#2d2d2b] transition duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_12px_4px_rgba(255,205,178,0.12)]"
          >
            Download Resume
          </a>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-8 pt-32 pb-32">
        <section className="grid gap-14 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-4 text-2xl font-bold uppercase tracking-[0.3em] text-[#2d2d2b]/50">Full Stack Developer</p>
            <h1 className="gap-4 max-w-3xl text-4xl font-semibold leading-tight text-[#2d2d2b] sm:text-4xl">
             I’m <span className='sm:text-5xl text-surface font-bold'>Aman Choudhary</span><br /> <br />I build high-performance web systems that bridge the gap between robust backends and elegant interfaces.
            </h1>
            <p className="mt-6 max-w-2xl  text-base leading-8 text-[#2d2d2b]/75 sm:text-lg">
              Currently specializing in the MERN stack and .NET ecosystem. Based in Jaipur, Rajasthan.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-black bg-surface px-5 py-3 text-sm text-[#2d2d2b] transition duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_14px_6px_rgba(255,205,178,0.12)]"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-black bg-surface px-5 py-3 text-sm text-[#2d2d2b] transition duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_14px_6px_rgba(255,205,178,0.18)]"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface/80 p-1 shadow-soft"
          >
            <div className="absolute inset-0 bg-grain opacity-30" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[30px] bg-[#111827] ">
              <img
                src="/desktop image.avif"
                alt="Aman Choudhary"
                className="h-[400px] w-full object-cover object-center brightness-90 mix-blend-screen"
              />
            </div>
          </motion.div>
        </section>

        <section className="mt-16 rounded-[32px] border border-white/10 bg-surface/85 p-10 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-2xl font-bold uppercase tracking-[0.3em] text-[#2d2d2b]/50">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d2d2b]">A human-centered approach to engineering.</h2>
            </div>
            <p className="text-[#2d2d2b]/70">
              I’m Aman Choudhary, a Full Stack Developer who builds polished web products with a focus on performance, clarity, and long-term maintainability. I love turning complex backend logic into intuitive front-end experiences, especially with the MERN stack and the .NET ecosystem.
            </p>
          </div>
          <div className="mt-6 grid gap-4 text-[#2d2d2b]/70 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold text-[#2d2d2b]">Design-led engineering</p>
              <p className="mt-2 text-sm leading-7">I bring a designer’s eye to technical decisions so interfaces feel thoughtful and easy to use.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold text-[#2d2d2b]">Built for people</p>
              <p className="mt-2 text-sm leading-7">My work is about creating systems that are not just functional, but also elegant, maintainable, and built for real users.</p>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          {techGroups.map(group => (
            <div key={group.title} className="rounded-3xl border border-white/10 bg-surface/80 p-8 backdrop-blur-xl">
              <h2 className="mb-6 text-xl font-semibold text-white">{group.title}</h2>
              <div className="grid gap-3 text-sm leading-7 text-black sm:grid-cols-2">
                {group.items.map(item => (
                  <div key={item} className="rounded-2xl border border-black bg-white px-4 py-3 transition hover:border-accent/40 hover:bg-white/5">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="work" className="mt-24 scroll-mt-28">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-bold uppercase tracking-[0.3em] text-[#2d2d2b]/50">Work Experience</p>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-surface/85 p-10 shadow-soft">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#2d2d2b]">Full Stack Developer Intern at Codeashion</h3>
                  <p className="mt-1 text-sm text-[#2d2d2b]/50">Jan 2026 – April 2026</p>
                </div>
              </div>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-[#2d2d2b]/70">
                <li>Developed responsive UIs using Angular and ASP.NET, increasing user engagement by 30%.</li>
                <li>Optimized backend services with .NET and SQL Server, cutting data retrieval time by 50%.</li>
                <li>Implemented RESTful APIs for high-volume transactions and ensured stability via automated unit testing.</li>
              </ul>
            </div>
          </div>
       


          <div className="mt-12 space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-surface/85 p-10 shadow-soft">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#2d2d2b]">Full Stack Developer Intern at Car Dekho/h3>
                  <p className="mt-1 text-sm text-[#2d2d2b]/50">May 2026 – Current</p>
                </div>
              </div>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-[#2d2d2b]/70">
                <li>Learned and implemented REST API development, API integration, and backend fundamentals in real-world projects.</li>
                <li>Strengthened understanding of core web development fundamentals including authentication, routing, CRUD operations</li>

              </ul>
            </div>
          </div>
        </section>
        

        

        <section id="projects" className="mt-24 scroll-mt-28">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-bold uppercase tracking-[0.3em] text-[#2d2d2b]/50">Projects</p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="group will-change-transform rounded-[32px] border border-white/10 bg-surface/80 p-8 shadow-soft transition duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-semibold text-[#2d2d2b]">Employee Directory</h3>
                  <p className="mt-4 text-[#2d2d2b]/70">A secure internal directory built with React that supports advanced filtering, role-based access control, and an intuitive admin experience.</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/aman1316github/Project_Management_system"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Employee Directory GitHub repository"
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-[#2d2d2b] transition hover:border-accent hover:text-accent hover:shadow-[0_0_10px_4px_rgba(255,205,178,0.12)]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.235 1.84 1.235 1.07 1.835 2.805 1.305 3.49.998.108-.775.42-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.103.81 2.222 0 1.605-.015 2.9-.015 3.295 0 .32.21.695.825.575C20.565 21.795 24 17.305 24 12 24 5.37 18.63 0 12 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://employee-directory.example.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Employee Directory live site"
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-[#2d2d2b] transition hover:border-accent hover:text-accent hover:shadow-[0_0_10px_4px_rgba(255,205,178,0.12)]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="group will-change-transform rounded-[32px] border border-white/10 bg-surface/80 p-8 shadow-soft transition duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-semibold text-[#2d2d2b]">Cricpulse Cricket Live</h3>
                  <p className="mt-4 text-[#2d2d2b]/70">A real-time MERN stack platform deployed on AWS Cloud, delivering live scores, player stats, and match analytics with fast socket updates and responsive mobile layouts.</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/aman-choudhary/cricpulse-live"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Cricpulse Cricket Live GitHub repository"
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-[#2d2d2b] transition hover:border-accent hover:text-accent hover:shadow-[0_0_10px_4px_rgba(255,205,178,0.12)]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.235 1.84 1.235 1.07 1.835 2.805 1.305 3.49.998.108-.775.42-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.103.81 2.222 0 1.605-.015 2.9-.015 3.295 0 .32.21.695.825.575C20.565 21.795 24 17.305 24 12 24 5.37 18.63 0 12 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://cricpulse-live.example.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Cricpulse Cricket Live site"
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-[#2d2d2b] transition hover:border-accent hover:text-accent hover:shadow-[0_0_10px_4px_rgba(255,205,178,0.12)]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-surface/80 p-8 shadow-soft">
            <p className="text-2xl font-bold uppercase tracking-[0.3em] text-[#2d2d2b]/50">Education</p>
            <div className="mt-6 space-y-6 text-[#2d2d2b]/70">
              <div>
                <h3 className="font-semibold text-[#2d2d2b]">Master of Computer Applications (MCA)</h3>
                <p className="mt-1">JECRC University (2024–2026)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2d2d2b]">Bachelor of Computer Applications (BCA)</h3>
                <p className="mt-1">JNU — 7.5 CGPA</p>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-surface/80 p-8 shadow-soft">
            <p className="text-2xl font-bold uppercase tracking-[0.3em] text-[#2d2d2b]/50">Certifications</p>
            <ul className="mt-6 space-y-4 text-black">
              <li>Full Stack Development — CollegeDekho</li>
              <li>HackerRank DSA — Intermediate & Basic</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mt-24 scroll-mt-28 rounded-[32px] border border-white/10 bg-surface/85 p-10 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-2xl font-bold uppercase tracking-[0.3em] text-[#2d2d2b]/50">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d2d2b]">Let’s build something meaningful.</h2>
              <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-[#2d2d2b]/80">
                <p>Aman Choudhary</p>
                <p>
                  GitHub: <a href="https://github.com/aman1316github" target="_blank" rel="noreferrer" className="text-accent hover:text-secondary">github.com/aman1316github</a>
                </p>
                <p>
                  LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-accent hover:text-secondary">linkedin.com/in/aman-choudhary</a>
                </p>
                <p>Email: <a href="mailto:asrawag1316@gmail.com" className="text-accent hover:text-secondary">asrawag1316@gmail.com</a></p>
              </div>
            </div>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" name="name" placeholder="Name" className="w-full rounded-3xl border border-white/10 bg-black/20 p-4 text-[#2d2d2b] outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
                <input type="email"   name="email" placeholder="Email" className="w-full rounded-3xl border border-white/10 bg-black/20 p-4 text-[#2d2d2b] outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
              </div>
              <textarea rows={5} name="message" placeholder="Message" className="w-full rounded-3xl border border-white/10 bg-black/20 p-4 text-[#2d2d2b] outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
              <button type="submit" className="inline-flex items-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-secondary hover:shadow-[0_0_18px_10px_rgba(255,205,178,0.22)]">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#2d2d2b] bg-surface/80 py-8 text-center text-sm text-[#2d2d2b]/50">
        Built by Aman Choudhary in 2026.
      </footer>
    </div>
  )
}

export default App
