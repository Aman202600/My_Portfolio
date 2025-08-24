// Aman Kumar Mishra — Single‑file React Portfolio
// Tailwind classes used for styling (no external CSS needed)
// You can tweak colors, sections, and data below.

import { useMemo, useState, useEffect } from "react";

// ====== DATA ======
const INFO = {
  name: "Aman Kumar Mishra",
  role: "B.Tech (IT) Student | Web & AI Enthusiast",
  location: "Gorakhpur, Uttar Pradesh",
  email: "amanmishra1632003@gmail.com",
  phone: "+91 7905109948",
  objective:
    "Motivated BTech IT student seeking a summer internship to apply theoretical knowledge, enhance technical skills, and gain practical experience in software development and emerging technologies.",
};

const LINKS = {
  resume: "#", // replace with a PDF link later
  github: "#", // add when available
  linkedin: "#", // add when available
};

const SKILLS = [
  { group: "Programming", items: ["C", "C++", "Python", "Java"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"] },
  { group: "Database", items: ["MongoDB"] },
  { group: "Soft Skills", items: ["Communication", "Teamwork", "Leadership", "Management", "Perseverance"] },
];

const GROUPPROJECTS = [
  {
    title: "Patient Management System",
    desc: "AI‑based system to manage patients efficiently.",
    tags: ["AI", "Full‑stack"],
  },
  {
    title: "Bolgify (MERN)",
    desc: "MERN blog platform to write and share posts.",
    tags: ["MongoDB", "Express", "React", "Node"],
  },
  {
    title: "FormXpert (MERN)",
    desc: "AI‑assisted exercise form checker (posture / rep quality).",
    tags: ["Computer Vision", "MERN"],
  },
  {
    title: "Smart Campus Solutions (Frontend)",
    desc: "Modern UI to manage campus operations.",
    tags: ["Frontend", "UI"],
  },
];

const PROJECTS = [
  {
    title:"SpeedWings ✈️",
    desc: "SpeedWings is a modern, responsive web application showcasing premium travel and lifestyle services such as private jets, helicopters, luxury cars, and yachts. The site features a sleek hero section with immersive backgrounds, interactive navigation, and well-structured components to deliver an elegant user experience. Built with performance and scalability in mind, SpeedWings demonstrates expertise in front-end development, responsive design, and modern tooling.",
    tags:["React", "TailwindCss","ResponsiveUI","FrontedProject"]
  },
  {
    title:"MERN Stack Chat App (Socket.IO)",
    desc:"A real-time chat application built on the MERN stack with Socket.IO for bi-directional messaging. It supports instant message delivery, authentication, persistent chat history in MongoDB, and a responsive React UI. The backend exposes REST APIs for auth and chats while Socket.IO handles live events (message send/receive, typing, presence).",
    tags:["MERN","Socket.IO","WebSockets","ChatApp"]
  }
]

const EDUCATION = [
  {
    school: "SRMSCET, Bareilly (AKTU)",
    program: "B.Tech in Information Technology",
    time: "Sep 2022 – Present",
    detail: "CGPA: 7.16 (upto 5th semester)",
  },
  {
    school: "St. Xavier’s Public School, Gorakhpur",
    program: "Intermediate",
    time: "2020",
    detail: "Percentage: 75.8%",
  },
];

const ACHIEVEMENTS = [
  "Participated in hackathons (college & zonal levels)",
  "MERN internship",
  "Participated in TechVyom (annual tech fest)",
  "NTPC Electron Quiz 2025",
  "State‑level sports certificate",
  "Strong organizing & time‑management skills",
  "Effective team player; ensures timely completion",
];

const EXTRAS = {
  strengths: ["Problem‑solving", "Adaptability", "Teamwork", "Time Management", "Dedication"],
  languages: ["English", "Hindi"],
  courses: ["IBM SkillsBuild"],
};

// ====== UTIL ======
function classNames(...s) {
  return s.filter(Boolean).join(" ");
}

// ====== SMALL COMPONENTS ======
const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mb-6">{title}</h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition">
    {children}
  </span>
);

const Card = ({ children, className }) => (
  <div className={classNames(
    "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_6px_30px_-12px_rgba(0,0,0,0.6)]",
    "transition hover:translate-y-[-2px] hover:bg-white/10",
    className
  )}>
    <div className="p-5 sm:p-6">{children}</div>
  </div>
);

const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-2 mt-3">
    {tags.map((t, i) => (
      <Pill key={i}>{t}</Pill>
    ))}
  </div>
);

// ====== MAIN ======
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // For gradient accent based on name hash
  const accent = useMemo(() => {
    const h = Array.from(INFO.name).reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
    return `hsl(${h} 90% 60%)`;
  }, []);

  useEffect(() => {
    // Close menu on hash change
    const onHash = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className={classNames(dark ? "dark" : "", "min-h-screen font-sans")}
      style={{
        // Layered background gradients
        background:
          "radial-gradient(1200px 600px at 70% -10%, rgba(99,102,241,0.18) 0%, rgba(10,12,20,0) 60%)," +
          "radial-gradient(1000px 500px at -10% 10%, rgba(16,185,129,0.18) 0%, rgba(10,12,20,0) 60%)," +
          "linear-gradient(180deg, #0a0d16 0%, #0b0f17 100%)",
      }}
    >
      {/* NAV */}
      
      {/* HERO */}
      <div id="top" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
                Available for Summer Internship
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {INFO.name}
              </h1>
              <p className="mt-3 text-xl text-slate-300">{INFO.role}</p>
              <p className="mt-4 text-slate-300/90 max-w-prose">{INFO.objective}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                
              </div>
              <div className="mt-6 text-slate-400 text-sm">
                {INFO.location} • {INFO.email}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 shadow-[0_50px_120px_-20px_rgba(0,0,0,0.6)]" />
              <div className="absolute inset-0 -z-10 blur-3xl opacity-50"
                   style={{ background: `radial-gradient(600px 300px at 80% 20%, ${accent}20 0%, transparent 60%)` }} />
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" title="About">
        <Card>
          <p className="text-slate-200 leading-relaxed">
            I'm a curious and dedicated B.Tech IT student who enjoys building practical web apps and exploring AI. I’ve led and contributed to MERN projects, prototyped computer‑vision ideas, and love turning ideas into fast, elegant interfaces. I thrive in teams, ship on time, and keep learning every day.
          </p>
        </Card>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s) => (
            <Card key={s.group}>
              <h3 className="text-lg font-semibold text-white">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <Pill key={it}>{it}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title=" PROJECTS">
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-slate-300">{p.desc}</p>
                  <TagList tags={p.tags} />
                </div>
                
              </div>
            </Card>
          ))}
        </div>
      </Section>

            {/* PROJECTS */}
      <Section id="projects" title="GROUP PROJECTS">
        <div className="grid md:grid-cols-2 gap-5">
          {GROUPPROJECTS.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-slate-300">{p.desc}</p>
                  <TagList tags={p.tags} />
                </div>
               
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-5">
          {EDUCATION.map((e) => (
            <Card key={e.school}>
              <h3 className="text-lg font-semibold text-white">{e.school}</h3>
              <p className="text-slate-300 mt-1">{e.program}</p>
              <p className="text-slate-400 mt-1">{e.time}</p>
              <p className="text-slate-300 mt-2">{e.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" title="Achievements & Extra‑curricular">
        <Card>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 list-disc list-inside text-slate-200">
            {ACHIEVEMENTS.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-200">Strengths</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {EXTRAS.strengths.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-200">Languages</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {EXTRAS.languages.map((l) => (
                  <Pill key={l}>{l}</Pill>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-200">Courses</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {EXTRAS.courses.map((c) => (
                  <Pill key={c}>{c}</Pill>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <Card>
          <div className="grid sm:grid-cols-3 gap-4 text-slate-200">
            <div>
              <div className="text-sm uppercase tracking-wider text-slate-400">Email</div>
              <a className="mt-1 inline-block hover:underline" href={`mailto:${INFO.email}`}>{INFO.email}</a>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider text-slate-400">Phone</div>
              <a className="mt-1 inline-block hover:underline" href={`tel:${INFO.phone.replace(/\s/g, "")}`}>{INFO.phone}</a>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider text-slate-400">Location</div>
              <div className="mt-1">{INFO.location}</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={LINKS.github} className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 text-slate-100">GitHub</a>
            <a href={LINKS.linkedin} className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 text-slate-100">LinkedIn</a>
          </div>
        </Card>
      </Section>

      {/* FOOTER */}
      <footer className="mt-16 py-10 border-t border-white/10 text-center text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {INFO.name}. Crafted with <span style={{color: accent}}>passion</span> & purpose.
          </p>
        </div>
      </footer>
    </div>
  );
}
