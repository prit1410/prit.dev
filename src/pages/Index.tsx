
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
