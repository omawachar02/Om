// import Link from "next/link";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// import {
//   ArrowDown,
//   ArrowDownToLine,
//   ArrowRight,
//   ArrowUpRight,
//   Mail,
//   Code2,
//   Sparkles,
// } from "lucide-react";


// const projects = [
//   {
//     number: "01",
//     title: "01Slab Translator",
//     description:
//       "A translation application designed to make multilingual communication simple and accessible.",
//     technologies: ["React.js", "Tailwind CSS", "API Integration", "Rapid API"],
//     github: "https://github.com/omawachar02",
//     demo: "#projects",
//   },
//   {
//     number: "02",
//     title: "SoundWave",
//     description:
//       "A modern music player featuring playlists, favorites, search, and recently played tracks.",
//     technologies: ["React.js", "JavaScript", "LocalStorage", "Rapid API"],
//     github: "https://github.com/omawachar02",
//     demo: "#projects",
//   },
//   {
//     number: "03",
//     title: "AI Cybersecurity Bot",
//     description:
//       "An AI-driven cybersecurity project focused on exploring intelligent security solutions.",
//     technologies: ["AI", "JavaScript", "Backend"],
//     github: "https://github.com/omawachar02",
//     demo: "#projects",
//   },
// ];

// const skills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "Python",
//   "React.js",
//   "Next.js",
//   "Node.js",
//   "OOP",
//   "Tailwind CSS",
//   "Bootstrap",
//   "Redux Toolkit",
//   "Git",
//   "GitHub",
// ];

// export default function Home() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-[#070b14] text-white">

//       {/* HERO SECTION */}
//       <section
//         id="home"
//         className="relative flex min-h-screen scroll-mt-24 items-center px-6 pb-16 pt-32 sm:px-10 lg:px-16"
//       >
//         {/* Background effects */}
//         <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

//         <div className="pointer-events-none absolute right-0 top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

//         <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
//           {/* Hero content */}
//           <div className="animate-[fadeUp_0.8s_ease-out_both]">
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
//               </span>

//               Open to Work · Frontend Developer Internships, Software Developement , AI Developer
//             </div>

//             <p className="mb-3 text-sm font-medium tracking-[0.25em] text-cyan-400">
//               HELLO, WORLD! I'M
//             </p>

//             <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
//               Om
//               <br />

//               <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Awachar.
//               </span>
//             </h1>

//             <h2 className="mt-6 text-xl font-medium text-slate-200 sm:text-2xl">
//               Frontend Developer
//               <span className="text-cyan-400"> & </span>
//               UI Enthusiast
//             </h2>

//             <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
//               I build modern, responsive, and user-friendly web experiences
//               using React.js, Next.js, and modern frontend technologies.
//               I love turning ideas into clean, functional interfaces.
//             </p>

//             {/* Action buttons */}
//             <div className="mt-9 flex flex-wrap gap-4">
//               <Link
//                 href="#projects"
//                 className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
//               >
//                 Explore Projects

//                 <ArrowRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <a
//                 href="/Om Awachar Resume O.pdf"
//                 download
//                 className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/5"
//               >
//                 Download Resume
//                 <ArrowDownToLine size={18} />
//               </a>
//             </div>

//             {/* Social links */}
//             <div className="mt-10 flex items-center gap-5">
//               <span className="text-sm text-slate-500">
//                 Connect with me
//               </span>

//               <a
//                 href="https://github.com/omawachar02"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="GitHub profile"
//                 className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
//               >
//                 <FaGithub size={22} />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/om-awachar-b12418296/"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="LinkedIn profile"
//                 className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
//               >
//                 <FaLinkedin size={22} />
//               </a>

//               <a
//                 href="mailto:omawachar18@gmail.com"
//                 aria-label="Send me an E-mail"
//                 className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
//               >
//                 <Mail size={22} />
//               </a>
//             </div>
//           </div>

//           {/* Developer visual */}
//           <div className="relative mx-auto w-full max-w-md animate-[fadeUp_1s_ease-out_both]">
//             <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-[90px]" />

//             <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
//               {/* Window header */}
//               <div className="flex items-center justify-between border-b border-white/10 pb-5">
//                 <div className="flex items-center gap-2">
//                   <span className="h-3 w-3 rounded-full bg-red-400" />
//                   <span className="h-3 w-3 rounded-full bg-yellow-400" />
//                   <span className="h-3 w-3 rounded-full bg-emerald-400" />
//                 </div>

//                 <span className="text-xs text-slate-500">
//                   developer.js
//                 </span>

//                 <Code2 size={18} className="text-cyan-400" />
//               </div>

//               {/* Code-inspired card */}
//               <div className="space-y-5 py-8 font-mono text-sm leading-7 sm:text-base">
//                 <p className="text-slate-500">
//                   {"// A little about me"}
//                 </p>

//                 <p>
//                   <span className="text-purple-400">const</span>{" "}
//                   <span className="text-cyan-300">developer</span>{" "}
//                   <span className="text-white">= {"{"}</span>
//                 </p>

//                 <div className="space-y-2 pl-5">
//                   <p>
//                     <span className="text-slate-400">name:</span>{" "}
//                     <span className="text-emerald-300">
//                       "Om Awachar"
//                     </span>
//                     <span className="text-white">,</span>
//                   </p>

//                   <p>
//                     <span className="text-slate-400">role:</span>{" "}
//                     <span className="text-emerald-300">
//                       "Frontend Developer"
//                     </span>
//                     <span className="text-white">,</span>
//                   </p>

//                   <p>
//                     <span className="text-slate-400">stack:</span>{" "}
//                     <span className="text-emerald-300">
//                       ["React", "Next.js", "Node.js"]
//                     </span>
//                     <span className="text-white">,</span>
//                   </p>

//                   <p>
//                     <span className="text-slate-400">passion:</span>{" "}
//                     <span className="text-emerald-300">
//                       "Building great UIs"
//                     </span>
//                   </p>
//                 </div>

//                 <p className="text-white">{"};"}</p>

//                 <div className="flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-slate-400 sm:text-sm">
//                   <Sparkles size={16} className="text-cyan-400" />
//                   Always learning. Always building.
//                 </div>
//               </div>
//             </div>

//             {/* Floating card */}
//             <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-cyan-400/20 bg-[#0c1727]/95 p-4 shadow-xl sm:block">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
//                   <Code2 size={22} />
//                 </div>

//                 <div>
//                   <p className="text-sm font-semibold text-white">
//                     Clean Code
//                   </p>
//                   <p className="text-xs text-slate-400">
//                     Thoughtful interfaces
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -right-3 -top-5 hidden rounded-xl border border-white/10 bg-[#101827] px-4 py-3 text-sm text-cyan-300 shadow-xl sm:block">
//               {"<Hello World />"}
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <a
//           href="#about"
//           aria-label="Scroll to About section"
//           className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 transition-colors hover:text-cyan-400 sm:block"
//         >
//           <ArrowDown size={22} />
//         </a>
//       </section>

//       {/* ABOUT SECTION */}
//       <section
//         id="about"
//         className="scroll-mt-28 border-t border-white/[0.06] px-6 py-24 sm:px-10 lg:px-16"
//       >
//         <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
//           <div>
//             <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-400">
//               ABOUT ME
//             </p>

//             <h2 className="text-3xl font-bold sm:text-4xl">
//               Turning ideas into{" "}
//               <span className="text-cyan-400">experiences.</span>
//             </h2>

//             <p className="mt-6 leading-8 text-slate-400">
//               I'm a Computer Science and Engineering student specializing
//               in Artificial Intelligence, graduating in 2027. I'm passionate
//               about frontend development and building web interfaces that
//               are both visually appealing and easy to use.
//             </p>

//             <p className="mt-4 leading-8 text-slate-400">
//               I enjoy learning modern technologies, solving problems, and
//               improving my development skills through practical projects.
//             </p>

//             <Link
//               href="#contact"
//               className="mt-7 inline-flex items-center gap-2 font-medium text-cyan-400 transition-colors hover:text-cyan-300"
//             >
//               Let's connect <ArrowUpRight size={18} />
//             </Link>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {[
//               {
//                 title: "Frontend",
//                 description: "Modern web interfaces",
//               },
//               {
//                 title: "Responsive",
//                 description: "Mobile-first layouts",
//               },
//               {
//                 title: "Problem Solving",
//                 description: "Practical solutions",
//               },
//               {
//                 title: "Continuous Learning",
//                 description: "Growing every day",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
//               >
//                 <Code2 className="mb-5 text-cyan-400" size={25} />

//                 <h3 className="font-semibold text-white">
//                   {item.title}
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-slate-400">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SKILLS SECTION */}
//       <section
//         id="skills"
//         className="scroll-mt-28 border-t border-white/[0.06] px-6 py-24 sm:px-10 lg:px-16"
//       >
//         <div className="mx-auto max-w-6xl">
//           <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-400">
//             MY TOOLKIT
//           </p>

//           <h2 className="text-3xl font-bold sm:text-4xl">
//             Technologies I <span className="text-cyan-400">use.</span>
//           </h2>

//           <p className="mt-4 max-w-xl leading-7 text-slate-400">
//             The tools and technologies I use to design, develop, and improve
//             web experiences.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-3">
//             {skills.map((skill) => (
//               <div
//                 key={skill}
//                 className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
//               >
//                 <span className="h-2 w-2 rounded-full bg-cyan-400 transition-shadow group-hover:shadow-[0_0_10px_#22d3ee]" />

//                 <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
//                   {skill}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS SECTION */}
//       <section
//         id="projects"
//         className="scroll-mt-28 border-t border-white/[0.06] px-6 py-24 sm:px-10 lg:px-16"
//       >
//         <div className="mx-auto max-w-6xl">
//           <div className="flex flex-wrap items-end justify-between gap-5">
//             <div>
//               <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-400">
//                 SELECTED WORK
//               </p>

//               <h2 className="text-3xl font-bold sm:text-4xl">
//                 Featured <span className="text-cyan-400">projects.</span>
//               </h2>
//             </div>

//             <a
//               href="https://github.com/omawachar02"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
//             >
//               More on GitHub <ArrowUpRight size={17} />
//             </a>
//           </div>

//           <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project) => (
//               <article
//                 key={project.number}
//                 className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-950/20"
//               >
//                 <div className="mb-7 flex items-center justify-between">
//                   <span className="text-sm font-medium text-cyan-400">
//                     PROJECT_{project.number}
//                   </span>

//                   <Code2
//                     size={23}
//                     className="text-slate-500 transition-colors group-hover:text-cyan-400"
//                   />
//                 </div>

//                 <h3 className="text-xl font-semibold text-white">
//                   {project.title}
//                 </h3>

//                 <p className="mt-4 flex-1 leading-7 text-slate-400">
//                   {project.description}
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {project.technologies.map((technology) => (
//                     <span
//                       key={technology}
//                       className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
//                     >
//                       {technology}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-cyan-400"
//                   >
//                     <FaGithub size={17} />
//                     Source Code
//                   </a>

//                   <a
//                     href={project.demo}
//                     className="inline-flex items-center gap-1 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
//                   >
//                     Details <ArrowUpRight size={16} />
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section
//         id="contact"
//         className="scroll-mt-28 border-t border-white/[0.06] px-6 py-24 sm:px-10 lg:px-16"
//       >
//         <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.09] via-[#0b1220] to-blue-500/[0.07] p-8 sm:p-12 lg:p-16">
//           <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]" />

//           <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
//             <div>
//               <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-400">
//                 GET IN TOUCH
//               </p>

//               <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
//                 Have an idea?
//                 <br />
//                 <span className="text-cyan-400">Let's build it.</span>
//               </h2>

//               <p className="mt-5 max-w-lg leading-7 text-slate-400">
//                 I'm interested in frontend development opportunities,
//                 internships, and meaningful projects. Let's connect.
//               </p>
//             </div>

//             <a
//               href="https://www.linkedin.com/in/om-awachar-b12418296/"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
//             >
//               Let's Talk
//               <ArrowUpRight size={19} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="border-t border-white/[0.06] px-6 py-8 sm:px-10 lg:px-16">
//         <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
//           <Link href="#home" className="text-xl font-bold">
//             Om<span className="text-cyan-400">.</span>
//           </Link>

//           <p className="text-sm text-slate-500">
//             © 2026 Om Awachar. Built with Next.js.
//           </p>

//           <a
//             href="https://github.com/omawachar02"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="GitHub profile"
//             className="text-slate-400 transition-colors hover:text-cyan-400"
//           >
//             <FaGithub size={21} />
//           </a>
//         </div>
//       </footer>

//       {/* Entrance animation */}

//     </main>
//   );
// }


import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Code2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "01Slab Translator",
    description:
      "A translation application designed to make multilingual communication simple and accessible.",
    technologies: ["React.js", "Tailwind CSS", "API Integration", "Rapid API"],
    github: "https://github.com/omawachar02",
    demo: "#projects",
  },
  {
    number: "02",
    title: "SoundWave",
    description:
      "A modern music player featuring playlists, favorites, search, and recently played tracks.",
    technologies: ["React.js", "JavaScript", "LocalStorage", "Rapid API"],
    github: "https://github.com/omawachar02",
    demo: "#projects",
  },
  {
    number: "03",
    title: "AI Cybersecurity Bot",
    description:
      "An AI-driven cybersecurity project focused on exploring intelligent security solutions.",
    technologies: ["AI", "JavaScript", "Backend"],
    github: "https://github.com/omawachar02",
    demo: "#projects",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React.js",
  "Next.js",
  "Node.js",
  "OOP",
  "Tailwind CSS",
  "Bootstrap",
  "Redux Toolkit",
  "Git",
  "GitHub",
];

const highlights = [
  { title: "Frontend", description: "Modern web interfaces" },
  { title: "Responsive", description: "Mobile-first layouts" },
  { title: "Problem Solving", description: "Practical solutions" },
  { title: "Continuous Learning", description: "Growing every day" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#070b14] text-white">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative isolate flex scroll-mt-20 items-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:min-h-screen lg:px-8 lg:pt-28 xl:px-12"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-24 top-32 -z-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-[90px] sm:-left-32 sm:h-80 sm:w-80 sm:blur-[120px]" />

        <div className="pointer-events-none absolute -right-20 top-28 -z-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px] sm:right-0 sm:h-96 sm:w-96 sm:blur-[130px]" />

        <div className="mx-auto grid w-full max-w-6xl min-w-0 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 xl:gap-16">
          {/* Hero content */}
          <div className="min-w-0 animate-[fadeUp_0.8s_ease-out_both]">
            {/* Open to Work badge */}
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium leading-5 text-emerald-300 sm:px-4 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span>
                Open to Work · Frontend Developer Internships, Software
                Development, AI Developer
              </span>
            </div>

            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-cyan-400 sm:text-sm sm:tracking-[0.25em]">
              HELLO, WORLD! I&apos;M
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Om
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Awachar.
              </span>
            </h1>

            <h2 className="mt-5 text-lg font-medium leading-snug text-slate-200 sm:mt-6 sm:text-2xl">
              Frontend Developer
              <span className="text-cyan-400"> &amp; </span>
              UI Enthusiast
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-lg sm:leading-8">
              I build modern, responsive, and user-friendly web experiences
              using React.js, Next.js, and modern frontend technologies. I love
              turning ideas into clean, functional interfaces.
            </p>

            {/* Action buttons */}
            <div className="mt-7 flex w-full flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-9 sm:gap-4">
              <Link
                href="#projects"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 min-[420px]:w-auto sm:px-6 sm:text-base"
              >
                Explore Projects

                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/Om Awachar Resume O.pdf"
                download
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/5 min-[420px]:w-auto sm:px-6 sm:text-base"
              >
                Download Resume
                <ArrowDownToLine size={18} className="shrink-0" />
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 sm:mt-10 sm:gap-x-5">
              <span className="text-sm text-slate-500">
                Connect with me
              </span>

              <a
                href="https://github.com/omawachar02"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="inline-flex min-h-10 min-w-10 items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/om-awachar-b12418296/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex min-h-10 min-w-10 items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:omawachar18@gmail.com"
                aria-label="Send me an email"
                className="inline-flex min-h-10 min-w-10 items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Developer visual */}
          <div className="relative mx-auto w-full min-w-0 max-w-md animate-[fadeUp_1s_ease-out_both] lg:max-w-none">
            <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-[70px] sm:blur-[90px]" />

            <div className="relative min-w-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:rounded-3xl sm:p-7">
              {/* Window header */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-5">
                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 sm:h-3 sm:w-3" />
                </div>

                <span className="truncate text-xs text-slate-500">
                  developer.js
                </span>

                <Code2 size={18} className="shrink-0 text-cyan-400" />
              </div>

              {/* Code-inspired card */}
              <div className="space-y-4 overflow-hidden py-6 font-mono text-xs leading-6 sm:space-y-5 sm:py-8 sm:text-sm sm:leading-7">
                <p className="text-slate-500">
                  {"// A little about me"}
                </p>

                <p className="break-words">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  <span className="text-white">= {"{"}</span>
                </p>

                <div className="space-y-2 pl-3 sm:pl-5">
                  <p className="break-words">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Om Awachar&quot;
                    </span>
                    <span className="text-white">,</span>
                  </p>

                  <p className="break-words">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Frontend Developer&quot;
                    </span>
                    <span className="text-white">,</span>
                  </p>

                  <p className="break-words">
                    <span className="text-slate-400">stack:</span>{" "}
                    <span className="text-emerald-300">
                      [&quot;React&quot;, &quot;Next.js&quot;, &quot;Node.js&quot;]
                    </span>
                    <span className="text-white">,</span>
                  </p>

                  <p className="break-words">
                    <span className="text-slate-400">passion:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Building great UIs&quot;
                    </span>
                  </p>
                </div>

                <p className="text-white">{"};"}</p>

                <div className="flex items-start gap-2 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400 sm:items-center sm:pt-5 sm:text-sm">
                  <Sparkles
                    size={16}
                    className="mt-0.5 shrink-0 text-cyan-400 sm:mt-0"
                  />

                  <span>Always learning. Always building.</span>
                </div>
              </div>
            </div>

            {/* Floating cards: hidden on smaller screens to prevent overflow */}
            <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-cyan-400/20 bg-[#0c1727]/95 p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Code2 size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Clean Code
                  </p>

                  <p className="text-xs text-slate-400">
                    Thoughtful interfaces
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 -top-5 hidden rounded-xl border border-white/10 bg-[#101827] px-4 py-3 text-sm text-cyan-300 shadow-xl md:block">
              {"<Hello World />"}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 transition-colors hover:text-cyan-400 lg:block"
        >
          <ArrowDown size={22} />
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl min-w-0 gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-cyan-400 sm:text-sm">
              ABOUT ME
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Turning ideas into{" "}
              <span className="text-cyan-400">experiences.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
              I&apos;m a Computer Science and Engineering student specializing
              in Artificial Intelligence, graduating in 2027. I&apos;m
              passionate about frontend development and building web interfaces
              that are both visually appealing and easy to use.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I enjoy learning modern technologies, solving problems, and
              improving my development skills through practical projects.
            </p>

            <Link
              href="#contact"
              className="mt-6 inline-flex min-h-10 items-center gap-2 font-medium text-cyan-400 transition-colors hover:text-cyan-300 sm:mt-7"
            >
              Let&apos;s connect <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] sm:p-5"
              >
                <Code2
                  className="mb-4 text-cyan-400 sm:mb-5"
                  size={25}
                />

                <h3 className="break-words font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="scroll-mt-24 border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-cyan-400 sm:text-sm">
            MY TOOLKIT
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I <span className="text-cyan-400">use.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            The tools and technologies I use to design, develop, and improve
            web experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group inline-flex max-w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] sm:px-5 sm:py-3"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 transition-shadow group-hover:shadow-[0_0_10px_#22d3ee]" />

                <span className="break-words text-xs font-medium text-slate-300 transition-colors group-hover:text-white sm:text-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="scroll-mt-24 border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-5">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-cyan-400 sm:text-sm">
                SELECTED WORK
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Featured <span className="text-cyan-400">projects.</span>
              </h2>
            </div>

            <a
              href="https://github.com/omawachar02"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              More on GitHub <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex min-w-0 flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-950/20 sm:p-6 md:hover:-translate-y-2"
              >
                <div className="mb-5 flex items-center justify-between sm:mb-7">
                  <span className="text-sm font-medium text-cyan-400">
                    PROJECT_{project.number}
                  </span>

                  <Code2
                    size={23}
                    className="shrink-0 text-slate-500 transition-colors group-hover:text-cyan-400"
                  />
                </div>

                <h3 className="break-words text-lg font-semibold text-white sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="max-w-full break-words rounded-lg border border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-300 sm:px-3"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-7 sm:pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 text-sm text-slate-300 transition-colors hover:text-cyan-400"
                  >
                    <FaGithub size={17} />
                    Source Code
                  </a>

                  <a
                    href={project.demo}
                    className="inline-flex min-h-10 items-center gap-1 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    Details <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.09] via-[#0b1220] to-blue-500/[0.07] p-5 sm:rounded-3xl sm:p-8 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-[80px] sm:h-64 sm:w-64 sm:blur-[90px]" />

          <div className="relative flex min-w-0 flex-col items-start justify-between gap-7 md:flex-row md:items-center md:gap-8">
            <div className="min-w-0">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-400 sm:text-sm">
                GET IN TOUCH
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Have an idea?
                <br />
                <span className="text-cyan-400">Let&apos;s build it.</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
                I&apos;m interested in frontend development opportunities,
                internships, and meaningful projects. Let&apos;s connect.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/om-awachar-b12418296/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 sm:w-auto sm:px-6 sm:text-base"
            >
              Let&apos;s Talk
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:gap-5 sm:text-left">
          <Link href="#home" className="text-xl font-bold">
            Om<span className="text-cyan-400">.</span>
          </Link>

          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © 2026 Om Awachar. Built with Next.js.
          </p>

          <a
            href="https://github.com/omawachar02"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex min-h-10 min-w-10 items-center justify-center text-slate-400 transition-colors hover:text-cyan-400"
          >
            <FaGithub size={21} />
          </a>
        </div>
      </footer>
    </main>
  );
}
