import { Menu, X, Mail, Phone, MapPin, Award, Users, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">VietH Consulting</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-red-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <section id="home" className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business
                <span className="block text-red-600 mt-2">With Expert Consulting</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We provide strategic guidance and innovative solutions to help your business thrive in today's competitive landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold">
                  Get Started
                </a>
                <a href="#services" className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-semibold border-2 border-gray-200">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive consulting solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Planning</h3>
                <p className="text-gray-600">
                  Develop comprehensive strategies to achieve your business objectives and drive sustainable growth.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Growth</h3>
                <p className="text-gray-600">
                  Accelerate your business expansion with proven methodologies and market insights.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Team Development</h3>
                <p className="text-gray-600">
                  Build high-performing teams through training, coaching, and organizational development.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Process Optimization</h3>
                <p className="text-gray-600">
                  Streamline operations and improve efficiency through systematic process analysis and improvement.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Market Analysis</h3>
                <p className="text-gray-600">
                  Gain competitive advantage with in-depth market research and analysis.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Advisory</h3>
                <p className="text-gray-600">
                  Make informed decisions with expert financial planning and advisory services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose VietH Consulting?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  With years of experience and a proven track record, we deliver results that matter. Our team of experts combines deep industry knowledge with innovative thinking to solve your most challenging business problems.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-700">Proven track record of successful projects</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-700">Customized solutions for your unique needs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-700">Expert team with diverse industry experience</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-700">Commitment to your long-term success</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business? Contact us today for a consultation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@viethconsulting.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">123 Business Street<br />Suite 100<br />City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-red-600" />
                <span className="ml-2 text-lg font-bold">VietH Consulting</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses through strategic consulting and innovative solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Strategic Planning</a></li>
                <li><a href="#" className="hover:text-white transition">Business Growth</a></li>
                <li><a href="#" className="hover:text-white transition">Team Development</a></li>
                <li><a href="#" className="hover:text-white transition">Process Optimization</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VietH Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
