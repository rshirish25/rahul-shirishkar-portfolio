import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileDown,
  Rocket,
  Wrench,
  Cpu,
  BookOpen,
  Search,
  Filter,
  ChevronRight,
} from "lucide-react";

/**
 * Rahul Aerospace Portfolio — Single-file React + Tailwind template
 * -----------------------------------------------------------------
 * How to use
 * 1) Replace the data objects below (projects, writings, links, skills).
 * 2) Add your resume to /public and update resumeUrl.
 * 3) Run: npm install && npm run dev
 * 4) Deploy with GitHub Pages, Netlify, or Vercel.
 */

// -------------------- SITE CONFIG --------------------
const resumeUrl = "/Rahul_Shirishkar_Resume.pdf"; // put your real file in /public
const profile = {
  name: "Rahul Shirishkar",
  tagline: "Aerospace Engineering @ University of Michigan — Class of 2026",
  blurb:
    "I build simulations, analyze flight systems, and communicate results clearly. My interests span trajectory design, Guidance, Control and Navigation, and engineering problem-solving as a whole",
  email: "rshirish@umich.edu",
  github: "https://github.com/rshirish25", // update
  linkedin: "https://www.linkedin.com/in/rahul-shirishkar-26baa7304/", // update
};

// -------------------- DATA: PROJECTS --------------------
const projects = [
  {
  title: "SpaceAGORA",
  year: "2025",
  tagline: "Space-FALCON Lab's Julia-based simulator for aerobraking mission design",
  summary:
    "Contributed to Space-AGORA, an open-source Julia simulator for aerobraking missions. Focused on debugging routines, improving algorithm efficiency, and running large simulation sets across varied spacecraft and mission parameters to test accuracy and performance.",
  skills: ["Julia", "GNC", "Trajectory Design", "Monte Carlo", "Simulation"],
  links: [
    { label: "GitHub", href: "#", icon: Github },
    { label: "Project Notes", href: "#", icon: ExternalLink },
  ],
  },
  {
  title: "PERCI: Uranus Moon Penetrator Mission Concept",
  year: "2025",
  tagline: "Secondary payload concept for NASA’s Uranus mission",
  summary:
    "Proposed a penetrator probe to enable in-situ science on Uranian moons. Collaborated with NASA JPL mentors on mission concept and requirements, built the Science Traceability Matrix linking Decadal Survey goals to payload capabilities, performed instrument trade studies, and supported subsystem design for payload, structures, trajectory, and thermal.",
  skills: ["Mission Design", "Trade Studies", "Science Traceability Matrix", "Subsystem Design"],
  links: [{ label: "Report", href: "/files/PERCIreport.pdf", icon: BookOpen }],
  },
  {
    title: "6‑DOF Spacecraft Simulator (MATLAB)",
    year: "2025",
    tagline: "Rigid‑body dynamics with visualization and tuning presets",
    summary:
      "ODE‑based simulator supporting parameter sweeps, trail plots, and Simulink integration for control testing.",
    skills: ["MATLAB", "Simulink", "Controls", "Visualization"],
    links: [
      { label: "GitHub", href: "#", icon: Github },
      { label: "Demo", href: "#", icon: ExternalLink },
    ],
  },
  {
    title: "Meredith Effect Radiator Concept",
    year: "2025",
    tagline: "Intake‑embedded radiator for aerodynamic/thermal synergy",
    summary:
      "Wind‑tunnel supported design exploration coupling pressure recovery, heat addition, and potential thrust augmentation.",
    skills: ["Aerodynamics", "Thermal", "Wind Tunnel", "Data Analysis"],
    links: [{ label: "Report (AIAA style)", href: "#", icon: BookOpen }],
  },
];

// -------------------- DATA: WRITING --------------------
const writings = [
  {
    title: "Seminar Report: Non‑thermal EM Sensing for Space Debris (AEROSP 585)",
    year: "2025",
    href: "#",
  },
  { title: "Novel Radiator Using the Meredith Effect (AERO 305)", year: "2025", href: "#" },
  { title: "Germanium RTD Trade Study (Uranus Penetrator)", year: "2025", href: "#" },
];

// -------------------- DATA: SKILLS --------------------
const skills = [
  { name: "MATLAB / Simulink", icon: Wrench },
  { name: "Julia", icon: Cpu },
  { name: "Python", icon: Cpu },
  { name: "R", icon: Cpu },
  { name: "Orbital Mechanics", icon: Rocket },
  { name: "Aerodynamics / Cp", icon: Rocket },
  { name: "Thermal / Heat Transfer", icon: Wrench },
  { name: "Trade Studies & FMEA", icon: BookOpen },
];

// -------------------- UI HELPERS --------------------
const section = { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24" };

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// -------------------- COMPONENT --------------------
export default function Portfolio() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const allTags = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => p.skills.forEach((k) => s.add(k)));
    return ["All", ...Array.from(s).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = [p.title, p.tagline, p.summary, p.skills.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesTag = filter === "All" || p.skills.includes(filter);
      return matchesQuery && matchesTag;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />

      {/* Hero */}
      <section id="home" className={section.className}>
        <motion.div {...fadeIn} className="grid gap-8 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-slate-700">{profile.tagline}</p>
            <p className="mt-4 max-w-2xl text-slate-600">{profile.blurb}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md transition"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md transition"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md transition"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm hover:opacity-90 shadow"
              >
                <FileDown size={16} /> Download Resume
              </a>
            </div>
          </div>

          <div className="rounded-3xl border bg-white/60 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-slate-800">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <span className="font-medium">Location:</span> {profile.location}
              </li>
              <li>
                <span className="font-medium">Focus:</span> Trajectory design, aero/thermal, simulation
              </li>
              <li>
                <span className="font-medium">Looking for:</span> 2026 new‑grad & internship roles
              </li>
              <li>
                <span className="font-medium">Coursework:</span> Orbital Mech, Aero, Heat Transfer, Controls
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className={section.className}>
        <motion.div {...fadeIn}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>

            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects"
                  className="pl-9 pr-3 py-2 text-sm rounded-xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="appearance-none pl-9 pr-8 py-2 text-sm rounded-xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  {allTags.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold leading-tight">{p.title}</h3>
                    <p className="text-sm text-slate-500">{p.tagline}</p>
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-100 rounded-full px-2 py-1">{p.year}</span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.skills.map((s) => (
                    <span key={s} className="text-xs rounded-full border px-2 py-1 bg-slate-50">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-800 hover:underline"
                    >
                      {l.icon ? <l.icon size={16} /> : <ExternalLink size={16} />} {l.label}
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Writing */}
      <section id="writing" className={section.className}>
        <motion.div {...fadeIn}>
          <h2 className="text-2xl md:text-3xl font-semibold">Writing & Reports</h2>
          <ul className="mt-6 space-y-3">
            {writings.map((w) => (
              <li key={w.title} className="group">
                <a
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
                >
                  <div>
                    <p className="font-medium">{w.title}</p>
                    <p className="text-sm text-slate-500">{w.year}</p>
                  </div>
                  <ChevronRight className="opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className={section.className}>
        <motion.div {...fadeIn}>
          <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition flex items-center gap-3"
              >
                <s.icon />
                <span className="text-sm font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className={section.className}>
        <motion.div {...fadeIn} className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Interested in research, internships, or early‑career roles? I’m happy to share code, discuss results, and walk through project decisions.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md transition"
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md transition"
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* Floating anchor nav */}
      <nav className="fixed bottom-6 inset-x-0 mx-auto w-fit z-40">
        <div className="flex gap-2 rounded-full border bg-white/90 backdrop-blur px-3 py-2 shadow-lg">
          <Anchor href="#home">Home</Anchor>
          <Anchor href="#projects">Projects</Anchor>
          <Anchor href="#writing">Writing</Anchor>
          <Anchor href="#skills">Skills</Anchor>
          <Anchor href="#contact">Contact</Anchor>
        </div>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="" />
          <span className="font-semibold">Rahul Shirishkar • Aerospace</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm hover:opacity-90 shadow"
          >
            <FileDown size={16} /> Resume
          </a>
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-6 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, and Framer Motion.
          </p>
          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1">
              <Github size={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hover:underline inline-flex items-center gap-1">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Anchor({ href, children }) {
  return (
    <a href={href} className="text-sm rounded-full px-3 py-1.5 hover:bg-slate-100 border">
      {children}
    </a>
  );
}
