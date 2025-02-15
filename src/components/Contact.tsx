import React from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

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
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Seamless Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-950 opacity-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      ></motion.div>

      {/* Subtle Particle Effect */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{ x: Math.random() * 1000, y: Math.random() * 1000, opacity: 0 }}
            animate={{ x: Math.random() * 1000, y: Math.random() * 1000, opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: 'linear' }}
          ></motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <ContactInfoCard
            icon={<Mail size={32} className="text-blue-500" />}
            title="Email"
            content={
              <a
                href="mailto:jan04bremec@gmail.com"
                className="text-blue-400 hover:underline"
              >
                jan04bremec@gmail.com
              </a>
            }
          />
          <ContactInfoCard
            icon={<Linkedin size={32} className="text-blue-500" />}
            title="LinkedIn"
            content={
              <a
                href="https://linkedin.com/in/jan-bremec-3b2644306"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/JanBremec
              </a>
            }
          />
          <ContactInfoCard
            icon={<Github size={32} className="text-blue-500" />}
            title="GitHub"
            content={
              <a
                href="https://github.com/JanBremec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/JanBremec
              </a>
            }
          />
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800/20 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
            <Send size={18} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

function ContactInfoCard({ icon, title, content }: ContactInfoCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="bg-gray-800/20 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-lg hover:shadow-xl transition-shadow transform transition-all hover:scale-105"
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-400">{content}</p>
        </div>
      </div>
    </motion.div>
  );
}