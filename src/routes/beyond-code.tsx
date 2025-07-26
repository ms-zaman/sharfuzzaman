import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/beyond-code')({
  component: BeyondCode,
})

function BeyondCode() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Life beyond 
            <span className="block text-blue-600">the screen</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Where curiosity meets creativity in the real world
          </p>
        </div>
      </section>

      {/* Cricket Connection Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Cricket Connection
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  They say cricket is a game of glorious uncertainties, and I've found the same to be true about 
                  frontend development. Both require patience, strategy, and the ability to adapt when things 
                  don't go according to plan.
                </p>
                <p>
                  Whether I'm watching a nail-biting last over or playing weekend league cricket, the sport has 
                  taught me invaluable lessons about teamwork, persistence, and those magical moments when 
                  everything just clicks. Much like debugging that one stubborn component at 2 AM – frustrating 
                  until it's not, then absolutely euphoric.
                </p>
                <p>
                  There's something beautifully meditative about watching the ball come down the pitch – it's the 
                  same calm focus I feel when I'm deep in code, solving that one problem that's been nagging me all week.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏏</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">What cricket teaches me about code:</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Strategy matters, but so does the ability to think on your feet</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Small adjustments can make huge differences</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Patience and persistence pay off</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Teamwork amplifies individual talent</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Celebrate the small victories along the way</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Thoughts Section */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 md:order-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">What I write about:</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Frontend development insights and tutorials</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">User experience observations from real-world projects</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Thoughts on balancing technical excellence with human needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Lessons learned from failures (because let's be honest, there are many)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">The beautiful chaos of working in tech</p>
                </div>
              </div>
            </div>
            
            <div className="md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Writing Thoughts
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  I believe the best ideas are born from curiosity and nurtured through conversation. That's why I 
                  spend time writing – not just about code and technology, but about the intersections between 
                  digital experiences and human behavior.
                </p>
                <p>
                  My notebook is where half-baked ideas go to become fully-formed thoughts. It's where I process 
                  the lessons learned from projects, explore new approaches to familiar problems, and sometimes 
                  just wonder aloud about the future of frontend development.
                </p>
                <p>
                  Writing helps me think more clearly, communicate more effectively, and stay connected to the 
                  bigger picture of why we build what we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Wanderlust & Wonder
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Travel isn't just about collecting passport stamps – it's about collecting perspectives. Every 
                  journey adds something valuable to my approach to problem-solving and my understanding of how 
                  different people interact with technology.
                </p>
                <p>
                  Whether it's the way light filters through ancient architecture or how street vendors in a 
                  bustling market organize their displays, I'm constantly observing patterns and principles that 
                  find their way into my digital work.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">What travel teaches me about design:</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Different cultures approach problems in wonderfully unexpected ways</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Simplicity often trumps complexity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Context matters more than we think</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Universal doesn't always mean one-size-fits-all</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">Inspiration is everywhere if you're paying attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Intersection Section */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            The Beautiful Intersection
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              Here's what I've learned: my passions outside of code aren't distractions from my work – they're 
              enhancements to it. The strategic thinking from cricket helps me architect better solutions. The 
              storytelling instincts from writing help me create more intuitive user experiences. The cultural 
              awareness from travel helps me build interfaces that work for real people in the real world.
            </p>
            <p>
              These aren't just hobbies – they're sources of inspiration that keep my work fresh, my mind curious, 
              and my approach wonderfully unpredictable.
            </p>
            <p className="text-xl font-semibold text-slate-900 italic">
              Because the best digital experiences are built by people who understand that life happens both on screen and off.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Connect Over Common Interests
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Whether you want to discuss the latest cricket season, share writing tips, or swap travel stories – 
            I'm always up for a good conversation. Because sometimes the most interesting projects come from the 
            most unexpected conversations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            Let's Chat
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
