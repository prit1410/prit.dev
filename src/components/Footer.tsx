
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">Designed & Built by Prit Vekariya</p>
        <p className="text-sm text-gray-400">&copy; {currentYear} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
