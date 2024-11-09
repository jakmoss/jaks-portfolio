export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Jane Doe</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* About Section */}
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                I'm a passionate web developer with expertise in React, Node.js, and modern web technologies.
                With 5 years of experience, I love creating responsive and user-friendly web applications.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Skills</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    React, Next.js, Node.js, TypeScript, Tailwind CSS, GraphQL
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "E-commerce Platform", description: "A full-stack e-commerce solution built with Next.js and Stripe" },
              { title: "Task Management App", description: "A React-based task manager with drag-and-drop functionality" },
              { title: "Weather Dashboard", description: "A weather app using React and OpenWeatherMap API" }
            ].map((project, index) => (
              <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{project.title}</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={3} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">© 2023 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
