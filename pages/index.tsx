import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>{`Zaki Samson's Portfolio`}</title>
        <meta name="description" content="Made with love" />
      </Head>

      <Header />

      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      <section id="skills" className='snap-center'>
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className='snap-center'>
        <Hero />
      </section>
      {/* Contact Me */}
      <section id="contact" className='snap-center'>
        <Hero />
      </section>
    </div>
  )
}
