import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_section/about_section.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = [
  'Burp Suite',
  'OWASP ZAP',
  'Postman',
  'SQLMap',
  'GraphQL',
  'BOLA / BFLA',
];

const backendSkills = [
  'Python',
  'Bash',
  'MySQL',
  'PostgreSQL',
  'FastAPI',
  'API Security',
  'JWT Auditing',
];

const aiSkills = [
  'LLM Red-Teaming',
  'Prompt Injection',
  'OWASP LLM Top 10',
  'LLM Firewalls',
  'DLP',
  'AI Security',
  'Vulnerability Triage',
  'CISA KEV',
  'FIRST EPSS',
  'Security Automation',
];

const toolsSkills = [
  'Nmap',
  'Nessus',
  'Wireshark',
  'Metasploit',
  'Hydra',
  'Hashcat',
  'Linux',
  'Kali Linux',
  'Git',
  'GitHub',
  'Docker',
  'VS Code',
];

const aboutWords = [
  { text: "I'm" },
  {
    text: 'Muhammad',
    className:
      'font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-fuchsia-400',
  },
  {
    text: 'Zaid.',
    className:
      'font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-fuchsia-400',
  },
  { text: 'A' },
  { text: 'Computer' },
  { text: 'Science' },
  { text: 'student' },
  { text: 'and' },
  { text: 'offensive' },
  { text: 'security' },
  { text: 'researcher' },
  { text: 'specializing' },
  { text: 'in' },
  { text: 'Web,' },
  { text: 'API,' },
  { text: 'and' },
  { text: 'LLM' },
  { text: 'penetration' },
  { text: 'testing.' },

  { text: 'My' },
  { text: 'mission' },
  { text: 'is' },
  { text: 'simple:' },

  {
    text: 'find',
    className: 'text-white font-medium',
  },
  {
    text: 'and',
    className: 'text-white font-medium',
  },
  {
    text: 'prove',
    className: 'text-white font-medium',
  },
  {
    text: 'the',
    className: 'text-white font-medium',
  },
  {
    text: 'bugs',
    className: 'text-white font-medium',
  },
  {
    text: 'that',
    className: 'text-white font-medium',
  },
  {
    text: 'matter,',
    className: 'text-white font-medium',
  },
  { text: 'then' },
  { text: 'build' },
  { text: 'the' },
  { text: 'tools' },
  { text: 'to' },
  { text: 'catch' },
  { text: 'them.' },

  { text: 'I' },
  { text: 'focus' },
  { text: 'on' },
  { text: 'Web' },
  { text: 'Application' },
  { text: 'Security,' },
  { text: 'API' },
  { text: 'Security,' },
  { text: 'Authentication' },
  { text: '&' },
  { text: 'Authorization,' },
  { text: 'and' },
  { text: 'LLM' },
  { text: 'Security.' },

  { text: 'I' },
  { text: 'use' },
  { text: 'industry' },
  { text: 'frameworks' },
  { text: 'including' },
  { text: 'OWASP' },
  { text: 'Web/API/LLM' },
  { text: 'Top' },
  { text: '10,' },
  { text: 'MITRE' },
  { text: 'ATT&CK,' },
  { text: 'and' },
  { text: 'PTES' },
  { text: 'to' },
  { text: 'approach' },
  { text: 'security' },
  { text: 'testing' },
  { text: 'systematically.' },

  { text: 'Alongside' },
  { text: 'penetration' },
  { text: 'testing,' },
  { text: 'I' },
  { text: 'build' },
  { text: 'open-source' },
  { text: 'security' },
  { text: 'tools' },
  { text: 'for' },
  { text: 'API' },
  { text: 'exploitation,' },
  { text: 'JWT' },
  { text: 'auditing,' },
  { text: 'LLM' },
  { text: 'red-teaming,' },
  { text: 'and' },
  { text: 'vulnerability' },
  { text: 'triage.' },
];

const profileStats = [
  {
    label: 'CURRENT STATUS',
    value: 'BS COMPUTER SCIENCE',
    detail: 'University of the Punjab',
  },
  {
    label: 'PRIMARY FOCUS',
    value: 'OFFENSIVE SECURITY',
    detail: 'Web • API • LLM Pentesting',
  },
  {
    label: 'SECURITY RANK',
    value: 'TRYHACKME TOP 2%',
    detail: 'CTF Competitor',
  },
  {
    label: 'APPROACH',
    value: 'FIND & PROVE',
    detail: 'Build tools to catch bugs',
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const philosophyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const headings = [
        introMobileRef.current,
        introDesktopRef.current,
      ];

      headings.forEach((heading) => {
        if (!heading) return;

        gsap.fromTo(
          heading,
          {
            y: 100,
            opacity: 0,
            filter: 'blur(10px)',
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
            rotationY: -12,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.word');

        gsap.fromTo(
          words,
          {
            color: '#52525b',
            opacity: 0.2,
          },
          {
            color: '#ffffff',
            opacity: 1,
            stagger: 0.06,
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
              end: 'bottom 45%',
              scrub: true,
            },
          }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll('.stat-card'),
          {
            y: 60,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (philosophyRef.current) {
        gsap.fromTo(
          philosophyRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: philosophyRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        min-h-screen
        bg-[#070711]
        text-white
        pt-24
        pb-0
        px-6
        md:px-12
        lg:px-16
        overflow-hidden
      "
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            top-[15%]
            left-[-10%]
            w-[450px]
            h-[450px]
            rounded-full
            bg-purple-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            top-[40%]
            right-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-fuchsia-600/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[15%]
            left-[35%]
            w-[350px]
            h-[350px]
            rounded-full
            bg-violet-600/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(139,92,246,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.5)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />

            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-purple-400 uppercase">
              SYS.01 // ABOUT
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-white/40 tracking-widest">
            <span className="px-2 py-1 border border-white/10 rounded bg-black/20">
              WEB
            </span>

            <span className="px-2 py-1 border border-white/10 rounded bg-black/20">
              API
            </span>

            <span className="px-2 py-1 border border-white/10 rounded bg-black/20">
              LLM
            </span>

            <span className="px-2 py-1 border border-white/10 rounded bg-black/20">
              RED TEAM
            </span>
          </div>
        </div>

        <h2
          ref={introMobileRef}
          className="
            lg:hidden
            text-center
            text-[20vw]
            md:text-[8rem]
            font-black
            tracking-tighter
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-white
            via-purple-300
            to-purple-900
            drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]
            leading-none
            mb-10
          "
        >
          About
        </h2>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-10
            items-center
          "
        >

          {/* Left Image */}
          <div
            ref={imageRef}
            className="
              lg:col-span-5
              flex
              justify-center
              lg:justify-start
              perspective-[1200px]
            "
          >
            <div className="relative group">

              <div
                className="
                  absolute
                  -inset-5
                  bg-gradient-to-r
                  from-purple-600/30
                  via-fuchsia-500/20
                  to-violet-600/10
                  rounded-[2rem]
                  blur-3xl
                  opacity-70
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  -inset-2
                  rounded-[1.7rem]
                  border
                  border-purple-500/20
                  pointer-events-none
                "
              />

              <div
                className="
                  relative
                  p-3
                  bg-[#0d1020]/90
                  backdrop-blur-2xl
                  rounded-3xl
                  border
                  border-purple-500/30
                  shadow-[0_40px_80px_rgba(0,0,0,0.7)]
                  overflow-hidden
                "
              >

                <div
                  className="
                    absolute
                    top-6
                    left-6
                    z-20
                    px-3
                    py-1.5
                    bg-purple-600
                    text-white
                    font-mono
                    text-[9px]
                    font-bold
                    tracking-[0.18em]
                    rounded
                    shadow-[0_0_25px_rgba(139,92,246,0.5)]
                  "
                >
                  OFFENSIVE SECURITY
                </div>

                <img
                  src={aboutImage}
                  alt="Muhammad Zaid - Offensive Security Researcher"
                  className="
                    relative
                    w-64
                    md:w-80
                    lg:w-[390px]
                    max-w-full
                    object-contain
                    rounded-2xl
                    drop-shadow-[0_20px_50px_rgba(139,92,246,0.3)]
                    transition-transform
                    duration-700
                    group-hover:scale-[1.025]
                  "
                />

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2
                    bg-[#070711]/80
                    backdrop-blur-md
                    border
                    border-white/10
                    rounded-lg
                  "
                >
                  <span className="font-mono text-[8px] tracking-widest text-purple-300">
                    M. ZAID
                  </span>

                  <span className="font-mono text-[8px] tracking-widest text-white/40">
                    ONLINE
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="
              lg:col-span-7
              flex
              flex-col
              justify-center
              space-y-7
            "
          >

            <div className="hidden lg:flex items-end justify-between">
              <h2
                ref={introDesktopRef}
                className="
                  text-[8rem]
                  xl:text-[10rem]
                  font-black
                  tracking-tighter
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-b
                  from-white
                  via-purple-300
                  to-purple-900
                  drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]
                  leading-[0.8]
                "
              >
                About
              </h2>

              <span className="font-mono text-xs text-white/30 pb-3">
                [ 01 / 05 ]
              </span>
            </div>

            <div
              className="
                relative
                bg-[#0d1020]/70
                backdrop-blur-2xl
                p-6
                md:p-9
                rounded-2xl
                border
                border-purple-500/20
                shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                overflow-hidden
                group
              "
            >

              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-24
                  h-px
                  bg-gradient-to-r
                  from-purple-500
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  w-32
                  h-px
                  bg-gradient-to-l
                  from-fuchsia-500/50
                  to-transparent
                "
              />

              <p
                ref={textRef}
                className="
                  text-gray-300
                  text-base
                  md:text-lg
                  lg:text-[1.08rem]
                  leading-[1.9]
                  font-light
                "
              >
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span
                      className={`word ${
                        wordObj.className || ''
                      }`}
                    >
                      {wordObj.text}
                    </span>

                    {index < aboutWords.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </p>

            </div>

            <div
              ref={philosophyRef}
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-5
                px-1
              "
            >
              <div>
                <p className="font-mono text-[9px] tracking-[0.3em] text-purple-400 uppercase mb-2">
                  Philosophy
                </p>

                <h3 className="text-xl md:text-2xl font-black tracking-tight">
                  Find. Prove. Build. Break. Improve.
                </h3>
              </div>

              <div className="hidden sm:block w-20 h-px bg-gradient-to-r from-purple-500 to-transparent" />
            </div>

          </div>
        </div>

        {/* Technical Profile */}
        <div
          ref={statsRef}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
            mt-16
            lg:mt-20
          "
        >
          {profileStats.map((stat, index) => (
            <div
              key={index}
              className="
                stat-card
                group
                relative
                p-5
                bg-[#0b0b18]/80
                backdrop-blur-xl
                border
                border-white/10
                rounded-xl
                overflow-hidden
                hover:border-purple-500/40
                hover:bg-purple-500/[0.04]
                transition-all
                duration-500
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-12
                  h-px
                  bg-purple-500
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              />

              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/40">
                  {stat.label}
                </span>

                <span className="font-mono text-[9px] text-purple-400">
                  0{index + 1}
                </span>
              </div>

              <h4 className="text-lg font-black tracking-tight text-white">
                {stat.value}
              </h4>

              <p className="text-xs text-white/40 mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-5 p-5 md:p-6 bg-[#0b0b18]/70 border border-purple-500/10 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center gap-5">

            <div className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />

              <span className="font-mono text-[9px] tracking-[0.25em] text-white/40 uppercase">
                Security Focus
              </span>
            </div>

            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-purple-500/30 via-white/10 to-transparent" />

            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-mono">
              <span className="text-purple-300">
                WEB
              </span>

              <span className="text-white/20">→</span>

              <span className="text-purple-300">
                API
              </span>

              <span className="text-white/20">→</span>

              <span className="text-purple-300">
                AUTH
              </span>

              <span className="text-white/20">→</span>

              <span className="text-pink-300">
                LLM
              </span>

              <span className="text-white/20">→</span>

              <span className="text-pink-300">
                RED TEAM
              </span>

              <span className="text-white/20">→</span>

              <span className="text-pink-300">
                EXPLOITATION
              </span>

              <span className="text-white/20">→</span>

              <span className="text-white/70">
                TOOLING
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Skills Marquee */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          border-t
          border-purple-500/10
          bg-[#0b0b18]/90
          backdrop-blur-xl
          py-4
          mt-16
          lg:mt-20
          -mx-6
          md:-mx-12
          lg:-mx-16
        "
      >

        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 mb-3">
          <span className="font-mono text-[9px] tracking-[0.3em] text-purple-400 uppercase">
            Security Stack
          </span>

          <span className="font-mono text-[9px] tracking-widest text-white/30">
            // SYSTEM CAPABILITIES
          </span>
        </div>

        {/* Row 1 */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[
              ...frontendSkills,
              ...frontendSkills,
              ...frontendSkills,
              ...frontendSkills,
            ].map((item, i) => (
              <div
                key={`front-${i}`}
                className="flex items-center"
              >
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">
                  {item}
                </span>

                <span className="text-purple-500 font-bold px-2 md:px-4">
                  .
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[
              ...backendSkills,
              ...backendSkills,
              ...backendSkills,
              ...backendSkills,
            ].map((item, i) => (
              <div
                key={`back-${i}`}
                className="flex items-center"
              >
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">
                  {item}
                </span>

                <span className="text-pink-500 font-bold px-2 md:px-4">
                  .
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[
              ...aiSkills,
              ...aiSkills,
              ...aiSkills,
              ...aiSkills,
            ].map((item, i) => (
              <div
                key={`ai-${i}`}
                className="flex items-center"
              >
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">
                  {item}
                </span>

                <span className="text-purple-500 font-bold px-2 md:px-4">
                  .
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[
              ...toolsSkills,
              ...toolsSkills,
              ...toolsSkills,
              ...toolsSkills,
            ].map((item, i) => (
              <div
                key={`tools-${i}`}
                className="flex items-center"
              >
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">
                  {item}
                </span>

                <span className="text-pink-500 font-bold px-2 md:px-4">
                  .
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;