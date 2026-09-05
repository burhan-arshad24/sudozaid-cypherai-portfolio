import footerBg from '../assets/Footer/Footer.png';

const Footer = () => {
  return (
    <footer className="relative bg-[#070711] text-white py-12 px-6 md:px-16 h-screen flex flex-col justify-between overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        <div
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />

        {/* Dark Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070711] via-[#070711]/75 to-[#070711]/20"></div>

        {/* Purple / Pink Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/30 via-transparent to-pink-950/20"></div>

      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-10">

          <div className="flex flex-col gap-6 w-full md:w-auto">

            <div>
              <p className="text-purple-400 text-xs tracking-widest uppercase mb-2">
                Connect with me
              </p>

              <a
                href="mailto:sudozaid0x@gmail.com"
                className="text-xl md:text-5xl font-medium hover:text-purple-300 transition-colors break-words"
              >
                sudozaid0x@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4">

              <a
                href="#home"
                className="hover:text-purple-300 transition-colors"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-purple-300 transition-colors"
              >
                About
              </a>

              <a
                href="#services"
                className="hover:text-purple-300 transition-colors"
              >
                Services
              </a>

              <a
                href="#project"
                className="hover:text-purple-300 transition-colors"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-purple-300 transition-colors"
              >
                Contact
              </a>

            </div>

          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-4 md:mt-0">

            <h3 className="text-lg md:text-2xl font-medium mb-2">
              Find. Prove. Build.
            </h3>

            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Finding and validating real-world vulnerabilities across web
              applications, APIs, authentication systems, and LLM-powered
              applications.
            </p>

            <a
              href="#contact"
              className="bg-purple-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-purple-600 transition-colors shadow-[0_0_25px_rgba(139,92,246,0.25)]"
            >
              Get in touch
            </a>

          </div>

        </div>

        {/* Middle Section - Socials */}
        <div className="flex flex-wrap justify-between items-center gap-5 py-6 border-t border-purple-500/20 mb-4 text-sm md:text-lg font-medium">

          <a
            href="https://www.linkedin.com/in/sudo-zaid/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Sudo-Zaid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://tryhackme.com/p/MZaid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors"
          >
            TryHackMe
          </a>

          <a
            href="https://ctf.hackthebox.com/user/profile/1078776"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors"
          >
            HackTheBox
          </a>

          <a
            href="https://wa.me/923277751004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors"
          >
            WhatsApp
          </a>

        </div>

        {/* Huge Text Section */}
        <div className="w-full text-center flex-1 flex items-center justify-center min-h-0">

          <h1
            className="text-[13vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-300 to-purple-900"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            SUDO-ZAID
          </h1>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-6 border-t border-purple-500/10">

          <p>
            © {new Date().getFullYear()} Muhammad Zaid. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;