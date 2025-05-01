import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'pritvekariya111@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_wcyf5hp', // Replace with your EmailJS service ID
        'template_q2pfit4', // Replace with your EmailJS template ID
        templateParams,
        'eEd6V48oWVIJLw50l' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container bg-muted/30 dark:bg-gray-900/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">📬 Contact Me</h2>
        <div className="w-20 h-1 bg-portfolio-primary mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-1 space-y-6">
            <motion.a
              href="mailto:pritvekariya111@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 rounded-xl glassmorphism dark:bg-gray-800/60 dark:border-white/10"
            >
              <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-4 dark:bg-portfolio-primary/20">
                <Mail size={24} className="text-portfolio-primary dark:text-portfolio-accent" />
              </div>
              <h3 className="font-medium mb-1 dark:text-white">Email</h3>
              <p className="text-sm text-muted-foreground text-center dark:text-gray-400">pritvekariya111@gmail.com</p>
            </motion.a>
            
            <motion.a
              href="tel:+919574649662"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 rounded-xl glassmorphism dark:bg-gray-800/60 dark:border-white/10"
            >
              <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-4 dark:bg-portfolio-primary/20">
                <Phone size={24} className="text-portfolio-primary dark:text-portfolio-accent" />
              </div>
              <h3 className="font-medium mb-1 dark:text-white">Phone</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">+91 9574649662</p>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/prit-vekariya-3b2b23251/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 rounded-xl glassmorphism dark:bg-gray-800/60 dark:border-white/10"
            >
              <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-4 dark:bg-portfolio-primary/20">
                <Linkedin size={24} className="text-portfolio-primary dark:text-portfolio-accent" />
              </div>
              <h3 className="font-medium mb-1 dark:text-white">LinkedIn</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">Connect with me</p>
            </motion.a>
            
            <div className="text-center mt-6">
              <p className="text-lg mb-1 dark:text-white">📍 Location</p>
              <p className="text-muted-foreground dark:text-gray-400">Surat, Gujarat, India</p>
            </div>
          </div>
          
          <motion.div
            className="md:col-span-2 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20 dark:bg-gray-800/50 dark:border-white/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium dark:text-gray-200">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full dark:bg-gray-700/60 dark:text-white dark:border-gray-600"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium dark:text-gray-200">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full dark:bg-gray-700/60 dark:text-white dark:border-gray-600"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium dark:text-gray-200">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-32 dark:bg-gray-700/60 dark:text-white dark:border-gray-600"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-primary hover:bg-portfolio-secondary dark:bg-portfolio-accent dark:hover:bg-portfolio-accent/80"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
