import React from 'react';

const projects = [
  {
    name: 'HTB CYBER APOCALYPSE 2026',
    title: (
      <>
        CYBER{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          apocalypse
        </span>
        <br />
        CTF 2026
      </>
    ),
    description:
      'A complete 43-scenario writeup repository from HTB Cyber Apocalypse 2026. Completed solo, placing 385th out of 6,744 teams with 74 of 136 flags and 36,650 points across DFIR, OSINT, cryptography, AI/LLM, web, pwn, cloud, mobile, blockchain, hardware, and reverse engineering challenges.',
    type: 'CTF WRITEUPS',
    accent: 'purple',
  },
  {
    name: 'ADVANCED API ATTACK TOOLKIT',
    title: (
      <>
        ADVANCED API{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          attack
        </span>
        <br />
        TOOLKIT
      </>
    ),
    description:
      'An offensive API security toolkit for active exploitation, GraphQL introspection, SQL injection, NoSQL injection, command injection, SSTI, mass assignment, excessive data exposure, and CI-friendly vulnerability reporting.',
    type: 'API SECURITY',
    accent: 'purple',
  },
  {
    name: 'JWT WEAKNESS SCANNER',
    title: (
      <>
        JWT{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          weakness
        </span>
        <br />
        SCANNER
      </>
    ),
    description:
      'A zero-dependency pure Python JWT auditing and attack-forging tool covering alg:none attacks, weak-secret cracking, RS256 to HS256 algorithm confusion, kid path traversal, and SQL injection testing.',
    type: 'AUTH SECURITY',
    accent: 'pink',
  },
  {
    name: 'CVE-TRIAGE',
    title: (
      <>
        CVE{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          risk
        </span>
        <br />
        TRIAGE
      </>
    ),
    description:
      'A vulnerability prioritization tool combining CISA KEV, FIRST EPSS, asset inventory, exploitability signals, and business context to identify vulnerabilities that require real-world attention.',
    type: 'VULNERABILITY TRIAGE',
    accent: 'purple',
  },
  {
    name: 'API AUTHZ FUZZER',
    title: (
      <>
        API{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          authz
        </span>
        <br />
        FUZZER
      </>
    ),
    description:
      'A high-speed authorization testing tool designed to build access-control matrices and identify BOLA, BFLA, broken authentication, privilege escalation, and other authorization weaknesses.',
    type: 'ACCESS CONTROL',
    accent: 'pink',
  },
  {
    name: 'LLM API PROXY INTERCEPTOR',
    title: (
      <>
        LLM API{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          proxy
        </span>
        <br />
        INTERCEPTOR
      </>
    ),
    description:
      'A real-time LLM traffic inspection proxy designed to detect secrets, PII, prompt injection, and sensitive data exposure while providing DLP controls and LLM firewall capabilities.',
    type: 'LLM SECURITY',
    accent: 'purple',
  },
  {
    name: 'LLM RED-TEAM FRAMEWORK',
    title: (
      <>
        LLM{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          red-team
        </span>
        <br />
        FRAMEWORK
      </>
    ),
    description:
      'A structured security testing framework for red-teaming LLM-powered applications against OWASP LLM Top 10 risks including prompt injection, sensitive information disclosure, insecure integrations, and memory-related attacks.',
    type: 'AI SECURITY',
    accent: 'pink',
  },
];

const ProjectPreview = ({ project, index }) => {
  const isPink = project.accent === 'pink';

  return (
    <div
      className={`relative w-full aspect-[16/10] overflow-hidden rounded-2xl border ${
        isPink
          ? 'border-pink-500/20'
          : 'border-purple-500/20'
      } bg-[#090912] shadow-[0_20px_60px_rgba(0,0,0,0.45)]`}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Glow */}
      <div
        className={`absolute -top-32 ${
          isPink ? '-right-32' : '-left-32'
        } w-80 h-80 rounded-full blur-[100px] ${
          isPink ? 'bg-pink-600/20' : 'bg-purple-600/20'
        }`}
      />

      {/* Terminal Window */}
      <div
        className="
          absolute
          inset-3
          sm:inset-5
          md:inset-7
          rounded-xl
          overflow-hidden
          border
          border-white/10
          bg-[#06060c]/95
          shadow-2xl
        "
      >
        {/* Terminal Header */}
        <div
          className="
            h-7
            sm:h-9
            md:h-10
            border-b
            border-white/10
            bg-white/[0.03]
            flex
            items-center
            px-2
            sm:px-3
            md:px-4
            gap-1
            sm:gap-1.5
          "
        >
          <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400/60" />
          <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400/60" />

          <div className="ml-2 sm:ml-3 flex-1 min-w-0">
            <span className="font-mono text-[5px] sm:text-[7px] md:text-[8px] text-white/30 whitespace-nowrap">
              sudozaid@kali: ~/security
            </span>
          </div>

          <span className="font-mono text-[5px] sm:text-[7px] text-purple-400/60 whitespace-nowrap">
            SEC_{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Terminal Content */}
        <div
          className="
            p-2.5
            sm:p-4
            md:p-6
            font-mono
            text-[6px]
            sm:text-[8px]
            md:text-[10px]
            leading-relaxed
          "
        >
          <div className="text-purple-400 mb-1 sm:mb-2 truncate">
            $ ./security-tool --target
          </div>

          <div className="text-white/40 mb-0.5 sm:mb-1 truncate">
            [*] Initializing security assessment...
          </div>

          <div className="text-white/40 mb-0.5 sm:mb-1 truncate">
            [*] Loading offensive security modules...
          </div>

          <div className="text-green-400/70 mb-2 sm:mb-3 truncate">
            [+] Security engine initialized
          </div>

          <div className="grid grid-cols-2 gap-1 sm:gap-2 mt-2 sm:mt-3">
            <div className="border border-white/10 rounded-md p-1.5 sm:p-2 bg-white/[0.02] min-w-0">
              <div className="text-white/30 text-[5px] sm:text-[7px]">
                MODULE
              </div>

              <div className="text-purple-300 mt-0.5 sm:mt-1 truncate text-[6px] sm:text-[8px] md:text-[10px]">
                {project.type}
              </div>
            </div>

            <div className="border border-white/10 rounded-md p-1.5 sm:p-2 bg-white/[0.02] min-w-0">
              <div className="text-white/30 text-[5px] sm:text-[7px]">
                STATUS
              </div>

              <div className="text-green-400 mt-0.5 sm:mt-1 text-[6px] sm:text-[8px] md:text-[10px]">
                ACTIVE
              </div>
            </div>

            <div className="border border-white/10 rounded-md p-1.5 sm:p-2 bg-white/[0.02] min-w-0">
              <div className="text-white/30 text-[5px] sm:text-[7px]">
                TARGET
              </div>

              <div className="text-white/60 mt-0.5 sm:mt-1 text-[6px] sm:text-[8px] md:text-[10px] truncate">
                APPLICATION
              </div>
            </div>

            <div className="border border-white/10 rounded-md p-1.5 sm:p-2 bg-white/[0.02] min-w-0">
              <div className="text-white/30 text-[5px] sm:text-[7px]">
                MODE
              </div>

              <div className="text-pink-300 mt-0.5 sm:mt-1 text-[6px] sm:text-[8px] md:text-[10px] truncate">
                RED TEAM
              </div>
            </div>
          </div>

          <div className="mt-2 sm:mt-4 text-white/30 overflow-hidden whitespace-nowrap">
            --------------------------------------------
          </div>

          <div className="mt-1 sm:mt-2 text-green-400/70 truncate">
            [+] Assessment ready
          </div>

          <div className="text-white/30 truncate">
            [+] Research by Sudo-Zaid
          </div>
        </div>

        {/* Scan Line */}
        <div
          className={`absolute left-0 right-0 top-1/2 h-px ${
            isPink ? 'bg-pink-500/20' : 'bg-purple-500/20'
          }`}
        />
      </div>

      {/* Project Number */}
      <div className="absolute top-2.5 left-2.5 sm:top-5 sm:left-5 md:top-7 md:left-7 z-20">
        <span className="font-mono text-[6px] sm:text-[8px] md:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] text-white/60 bg-black/50 backdrop-blur-md px-2 py-1.5 sm:px-3 sm:py-2 rounded-full border border-white/10">
          PROJECT_{String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Bottom Status */}
      <div className="absolute bottom-2.5 right-2.5 sm:bottom-5 sm:right-5 md:bottom-7 md:right-7 z-20 flex items-center gap-1 sm:gap-2">
        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400 animate-pulse" />

        <span className="font-mono text-[5px] sm:text-[7px] md:text-[8px] tracking-[0.1em] sm:tracking-[0.15em] text-white/40 whitespace-nowrap">
          SECURITY SYSTEM ONLINE
        </span>
      </div>
    </div>
  );
};

const Project = ({ onCtaClick }) => {
  return (
    <section
      id="project"
      className="relative w-full bg-[#070711] text-white overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-purple-500" />

            <span className="font-mono text-xs tracking-[0.3em] text-purple-400">
              SYS.04 // PROJECTS
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9]">
            SELECTED
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600">
              PROJECTS.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm md:text-base text-gray-400 leading-relaxed">
            A selection of offensive security tools, penetration testing
            research, CTF work, API security tooling, vulnerability
            prioritization, and LLM security projects built through hands-on
            security research and continuous experimentation.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {projects.map((proj, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={proj.name}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Project Preview */}
                <div
                  className={`${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ProjectPreview
                    project={proj}
                    index={index}
                  />
                </div>

                {/* Project Information */}
                <div
                  className={`${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs text-purple-400">
                      0{index + 1}
                    </span>

                    <div className="h-px w-8 bg-purple-500/50" />

                    <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500">
                      {proj.type}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="mt-7 text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <a
                      href={getGithubUrl(proj.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 text-white text-sm font-semibold transition-all duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View More */}
        <div className="max-w-7xl mx-auto mt-24 md:mt-32 flex justify-center">
          <a
            href="https://github.com/Sudo-Zaid"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 rounded-full border border-purple-500/40 hover:border-purple-400 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-purple-300">
              VIEW MORE PROJECTS
            </span>

            <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

const getGithubUrl = (name) => {
  const urls = {
    'HTB CYBER APOCALYPSE 2026':
      'https://github.com/Sudo-Zaid/Cyber-Apocalypse-CTF-2026',

    'ADVANCED API ATTACK TOOLKIT':
      'https://github.com/Sudo-Zaid/advanced-api-attack-toolkit',

    'JWT WEAKNESS SCANNER':
      'https://github.com/Sudo-Zaid/jwt-weakness-scanner',

    'CVE-TRIAGE':
      'https://github.com/Sudo-Zaid/cve-triage',

    'API AUTHZ FUZZER':
      'https://github.com/Sudo-Zaid/api-authz-fuzzer',

    'LLM API PROXY INTERCEPTOR':
      'https://github.com/Sudo-Zaid/llm-api-proxy-interceptor',

    'LLM RED-TEAM FRAMEWORK':
      'https://github.com/Sudo-Zaid/llm-redteam-framework',
  };

  return urls[name] || 'https://github.com/Sudo-Zaid';
};

export default Project;