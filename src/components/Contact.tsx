import React from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    // Get form data
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    // Construct mailto link
    const mailtoLink = `mailto:jan04bremec@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(
      email
    )}%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

    // Open mailto link
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-4">
            <Mail size={32} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>
                <a
                  href="mailto:jan04bremec@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  jan04bremec@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin size={32} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p>
                <a
                  href="https://linkedin.com/in/jan-bremec-3b2644306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  linkedin.com/in/JanBremec
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Github size={32} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold">GitHub</h3>
              <p>
                <a
                  href="https://github.com/JanBremec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/JanBremec
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Send Message
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
