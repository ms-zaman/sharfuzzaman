import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            From curious coder to 
            <span className="block text-blue-600">frontend craftsman</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            The journey of turning curiosity into clean code
          </p>
        </div>
      </section>

      {/* My Story Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            My Story
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              You know how some people collect vinyl records or vintage cameras? Well, I collect "aha!" moments – 
              those satisfying instances when a tricky piece of code finally clicks into place, or when a design 
              element transforms from concept to pixel-perfect reality.
            </p>
            <p>
              My journey into frontend development wasn't exactly linear. It started with tinkering (like most of us), 
              breaking things just to see if I could fix them again. What began as casual curiosity slowly evolved 
              into genuine passion, and eventually into a career where I get to build things that matter, one line 
              of code at a time.
            </p>
            <p>
              I've learned that being a frontend developer isn't just about knowing the latest frameworks or writing 
              flawless JavaScript (though that helps). It's about understanding people – how they think, how they 
              interact, what frustrates them, and what delights them. Every project teaches me something new about 
              the beautiful complexity of human experience.
            </p>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            My Approach
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            I believe the best digital experiences are built on a foundation of empathy, curiosity, and attention to detail. 
            Here's how I approach my work:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Start with Why</h3>
              <p className="text-slate-700 leading-relaxed">
                Before I write a single line of code, I ask: Who is this for? What problem are we solving? 
                How can this make someone's day just a little bit better?
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0h3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Build with Intention</h3>
              <p className="text-slate-700 leading-relaxed">
                Every design decision, every line of code, every interaction – nothing happens by accident. 
                I craft interfaces that feel intentional and purposeful.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Embrace the Details</h3>
              <p className="text-slate-700 leading-relaxed">
                That perfectly timed animation, the subtle hover effect, the way a form feels when it just works – 
                these details aren't just polish, they're poetry.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Stay Curious</h3>
              <p className="text-slate-700 leading-relaxed">
                Technology evolves fast, and I wouldn't have it any other way. I'm always experimenting, learning, 
                and pushing myself to grow as a developer and as a creator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Code Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Beyond the Code
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              When I'm not building interfaces, you'll still find me building – just in different ways. Whether I'm 
              strategizing my next cricket innings, crafting thoughts in my notebook, or mapping out my next adventure, 
              I'm always creating something.
            </p>
            <p>
              These experiences don't just fill my time – they inform my work. The patience I learn from watching a 
              20-over innings translates to debugging complex components. The storytelling instincts from my writing 
              help me create more intuitive user flows. The problem-solving mindset from travel mishaps (yes, those 
              teach you a lot!) helps me architect better solutions.
            </p>
            <p>
              I've come to realize that being a well-rounded person makes me a better developer, and vice versa.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            I'm always excited to meet fellow creators, collaborate on interesting projects, or simply chat about 
            the intersection of technology and human experience.
          </p>
          <p className="text-lg mb-8 opacity-90">
            Whether you're looking to bring a digital vision to life, need a fresh perspective on an existing project, 
            or just want to talk about the latest in frontend development – I'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            Let's Have a Conversation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
