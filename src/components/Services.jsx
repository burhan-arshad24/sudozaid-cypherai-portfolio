import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    number: "01",
    title: "Web Application Penetration Testing",
    text: "Identifying and validating web application vulnerabilities using industry-standard security tools and the OWASP Web Application Security Testing methodology.",
    tag: "WEB SECURITY",
    gradient: "from-[#100d1c] via-[#0d1020] to-[#080812]"
  },
  {
    number: "02",
    title: "API Security Testing",
    text: "Testing APIs for GraphQL abuse, SQL injection, NoSQL injection, command injection, SSTI, mass assignment, excessive data exposure, and other critical weaknesses.",
    tag: "API SECURITY",
    gradient: "from-[#0e0d1a] via-[#0d1020] to-[#080812]"
  },
  {
    number: "03",
    title: "Authentication & Authorization Auditing",
    text: "Finding broken access control, BOLA, BFLA, broken authentication, JWT weaknesses, privilege escalation, and other authorization vulnerabilities.",
    tag: "AUTH & ACCESS CONTROL",
    gradient: "from-[#120d1c] via-[#0d1020] to-[#080812]"
  },
  {
    number: "04",
    title: "LLM & AI System Security",
    text: "Red-teaming AI systems against OWASP LLM Top 10 risks including prompt injection, sensitive data exposure, memory poisoning, and insecure AI integrations.",
    tag: "LLM SECURITY",
    gradient: "from-[#100d1c] via-[#0d1020] to-[#080812]"
  },
  {
    number: "05",
    title: "Vulnerability Triage & Risk Prioritization",
    text: "Prioritizing vulnerabilities using real-world exploitability signals including CISA KEV, FIRST EPSS, asset context, and business impact rather than relying on CVSS alone.",
    tag: "VULNERABILITY TRIAGE",
    gradient: "from-[#0e0d1a] via-[#0d1020] to-[#080812]"
  },
  {
    number: "06",
    title: "Security Tool Development",
    text: "Building custom open-source offensive security tools for API exploitation, JWT auditing, LLM red-teaming, authorization testing, vulnerability triage, and security automation.",
    tag: "SECURITY TOOLING",
    gradient: "from-[#120d1c] via-[#0d1020] to-[#080812]"
  }
];

const Expertise = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (!isMobile) {
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.92 - index * 0.025,
          y: -15 - index * 8,
          filter: "blur(6px)",
          opacity: 0.4,
          scrollTrigger: {
            trigger: card,
            start: `top ${90 + index * 20}px`,
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;

      const listener = (e) => handleMouseMove(e, card);

      card.addEventListener('mousemove', listener);

      card._mouseMoveListener = listener;
    });

    return () => {
      cards.forEach((card) => {
        if (card?._mouseMoveListener) {
          card.removeEventListener('mousemove', card._mouseMoveListener);
        }
      });

      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full bg-[#070711] text-white py-20 px-6 md:px-12 select-none overflow-hidden"
    >

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#8b5cf6]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">

          <div className="space-y-3 max-w-xl">

            {/* Section Tab */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0d1020]/90 backdrop-blur-xl border border-[#8b5cf6]/30 text-[11px] font-mono uppercase tracking-widest text-white shadow-[0_0_25px_rgba(139,92,246,0.08)]">

              <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc] shadow-[0_0_8px_rgba(192,132,252,0.8)] animate-ping"></span>

              <span className="text-[#c084fc] font-bold">
                SYS.02
              </span>

              <span className="text-white/25">
                |
              </span>

              <span className="text-[#9295a8]">
                SERVICES
              </span>

            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">

              OFFENSIVE SECURITY <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#f472b6] drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]">
                SERVICES.
              </span>

            </h2>

          </div>

          <p className="text-[#9295a8] text-xs md:text-sm font-light leading-relaxed max-w-xs">
            Offensive security services focused on finding, validating, and prioritizing real-world vulnerabilities across web applications, APIs, authentication systems, and LLM-powered applications.
          </p>

        </div>

        {/* Stacking Cards */}
        <div className="relative flex flex-col gap-8 pb-20">

          {expertiseData.map((item, index) => (

            <div
              key={index}
              ref={addToRefs}
              className={`sticky w-full p-6 md:p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[230px] md:min-h-[250px] transform-gpu transition-all overflow-hidden group hover:border-[#8b5cf6]/50`}
              style={{
                zIndex: index + 1,
                top: `${95 + index * 16}px`
              }}
            >

              {/* Dynamic Mouse Spotlight */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: 'radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(139,92,246,0.16), transparent 70%)'
                }}
              ></div>

              {/* Accent Stripe */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent z-10 shadow-[0_0_10px_rgba(139,92,246,0.35)]"></div>

              {/* Card Header */}
              <div className="flex items-center justify-between w-full mb-4 relative z-10">

                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c084fc] px-2.5 py-0.5 rounded bg-[#8b5cf6]/[0.08] border border-[#8b5cf6]/25 shadow-[inset_0_0_12px_rgba(139,92,246,0.04)]">
                  {item.tag}
                </span>

                <span className="text-2xl md:text-3xl font-mono font-black text-white/[0.12]">
                  {item.number}
                </span>

              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center my-auto relative z-10">

                <div className="lg:col-span-5">

                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-[#c084fc] transition-colors duration-300">
                    {item.title}
                  </h3>

                </div>

                <div className="lg:col-span-7">

                  <p className="text-xs md:text-sm text-[#9295a8] font-light leading-relaxed">
                    {item.text}
                  </p>

                </div>

              </div>

              {/* Corner Dot */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-[#8b5cf6] group-hover:shadow-[0_0_10px_#8b5cf6] z-10 transition-all"></div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Expertise;