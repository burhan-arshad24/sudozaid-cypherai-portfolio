import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import centerImage from '../assets/hero_assets/hero_center.png';

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState('CYPHERAI');

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const target = 'M. ZAID';
    const start = 'CYPHERAI';

    let iterations = 0;
    let intervalId;
    let timeoutId;

    const imageLoadPromise = new Promise((resolve) => {
      const img = new window.Image();
      img.src = centerImage;

      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 1000);
    });

    let isMounted = true;

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (!isMounted) return;

      intervalId = setInterval(() => {
        setText(() => {
          const newText = target
            .split('')
            .map((letter, index) => {
              if (index < Math.floor(iterations)) {
                return target[index];
              }

              if (index < start.length) {
                return start[index];
              }

              return '';
            })
            .join('');

          return newText;
        });

        if (iterations >= target.length) {
          clearInterval(intervalId);

          const isMobile = window.innerWidth < 768;

          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = 'auto';

              if (onPreloadComplete) {
                onPreloadComplete();
              }
            },
          });

          tl.to(
            containerRef.current,
            {
              top: isMobile ? '30%' : '45%',
              duration: 1.5,
              ease: 'power3.inOut',
            },
            '+=0.2'
          );

          tl.fromTo(
            [subtitleRef.current, buttonsRef.current],
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.2,
              ease: 'power3.out',
            },
            '-=1.0'
          );

          tl.fromTo(
            imageRef.current,
            {
              y: '100vh',
            },
            {
              y: 0,
              duration: 1.5,
              ease: 'power3.out',
            },
            '-=1.2'
          );
        }

        iterations += 1 / 3;
      }, 50);
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = 'auto';

      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-end justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at center, #171329 0%, #0b0b18 45%, #05050c 100%)',
      }}
    >
      <div className="absolute inset-0 bg-[#05050c]/40 backdrop-blur-[2px]" />

      <div
        ref={containerRef}
        className="
          absolute
          top-[50%]
          left-5
          -translate-y-1/2
          z-20
          md:z-0
          pointer-events-none
          select-none
          flex
          flex-col
          items-start
          text-left
          w-max
          md:left-12
          md:-translate-x-0
          lg:left-16
        "
      >
        <h1
          ref={textRef}
          className="
            text-[25vw]
            sm:text-[23vw]
            md:text-[10rem]
            lg:text-[14rem]
            font-black
            tracking-tighter
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-white
            via-purple-200
            to-purple-700
            drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]
            [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]
            pr-4
            md:pr-8
            leading-none
            uppercase
            text-left
          "
        >
          {text}
        </h1>

        <p
          ref={subtitleRef}
          className="
            absolute
            -bottom-7
            left-0
            text-white
            text-sm
            md:text-xl
            lg:text-2xl
            drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]
            z-10
            opacity-0
            w-max
            md:-bottom-10
            md:left-0
            text-left
          "
        >
          <span className="font-bold">
            Offensive Security Researcher
          </span>
        </p>

        <div
          ref={buttonsRef}
          className="
            absolute
            -bottom-20
            left-0
            flex
            items-center
            gap-2
            md:gap-4
            pointer-events-auto
            z-10
            opacity-0
            w-max
            md:-bottom-12
            md:left-auto
            md:right-20
          "
        >
          {/* Keep your existing buttons here */}
        </div>
      </div>

      <div
        ref={imageRef}
        className="
          absolute
          bottom-[-7%]
          left-1/2
          -translate-x-1/2
          z-10
          text-center
          text-white
          flex
          flex-col
          items-center
          w-full
          pointer-events-none
          translate-y-[100vh]
          md:relative
          md:bottom-auto
          md:left-auto
          md:translate-x-0
          md:w-full
        "
      >
        <img
          src={centerImage}
          alt="M. Zaid - Offensive Security Researcher"
          className="
            w-[115vw]
            max-w-[500px]
            sm:w-[105vw]
            sm:max-w-[520px]
            md:w-full
            md:max-w-md
            object-contain
            drop-shadow-[0_20px_50px_rgba(139,92,246,0.3)]
          "
        />
      </div>
    </section>
  );
};

export default Hero;