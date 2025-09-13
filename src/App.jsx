import { useMemo } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, CheckCircle } from "lucide-react";

// ---- Quick start ----
// 1) Click "Open in editor" (top-right) to preview.
// 2) Replace RESUME_PDF_URL with your hosted resume file.
// 3) Deploy steps are in the chat.

const RESUME_PDF_URL = "https://example.com/Anirudh_Aheer_Resume.pdf"; // TODO: replace with your resume link

export default function Portfolio() {
  const experience = useMemo(
    () => [
      {
        role: "Technical Lead",
        org: "Qryde",
        location: "Gurgaon, India",
        period: "Jul 2023 – Present",
        promoNote: "Promoted from Software Developer within 1.5 years",
        bullets: [
          "Architected a scheduling engine for 15 US counties; automates 50–70K trips/day (largest client ~2K/day).",
          "Cut dispatcher scheduling time from hours to <10 minutes per 2K trips.",
          "Optimized routing to reduce fleet size while meeting SLAs; resolved passenger 'hostage' routing issues.",
          "Streamlined OSRM + custom routing core (C++/Python/JS) for efficiency and stability.",
          "Mentored 3 engineers; introduced code review/testing standards, reducing PR turnaround by 30%.",
        ],
        tags: ["C++", "Python", "JavaScript", "SQL", "Docker", "AWS", "OSRM", "Distributed Systems"],
      },
      {
        role: "Software Developer",
        org: "Veybit Technologies Pvt. Ltd.",
        location: "Delhi, India",
        period: "May 2022 – Jul 2022",
        bullets: [
          "Built a Virtual Try‑On system overlaying garments on user poses using YOLO/OpenCV.",
        ],
        tags: ["Python", "OpenCV", "YOLO", "Computer Vision"],
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "Scheduling Engine",
        tech: ["C++", "Python", "JavaScript", "OSRM", "Microservices"],
        desc:
          "Customized an open-source routing engine with continuous auto‑scheduling, standing orders, and break rules; production‑hardened for US paratransit.",
        link: null,
      },
      {
        title: "Nuclei Detection",
        tech: ["Python", "TensorFlow", "U‑Net"],
        desc: "U‑Net segmentation for microscopic nuclei in medical imaging.",
        link: null,
      },
      {
        title: "AI Virtual Mouse",
        tech: ["Python", "OpenCV", "MediaPipe"],
        desc: "Gesture‑controlled virtual mouse for UI navigation.",
        link: null,
      },
      {
        title: "Sentiment Analysis",
        tech: ["Python", "scikit‑learn"],
        desc: "Bag‑of‑Words/TF‑IDF pipelines for text classification.",
        link: null,
      },
    ],
    []
  );

  const skills = [
    { group: "Languages", items: ["C++", "Python", "JavaScript", "SQL", "Bash"] },
    { group: "Frameworks / Infra", items: ["Docker", "React", "Node.js", "Flask", "FastAPI", "Git", "AWS", "OSRM", "Microservices"] },
    { group: "Data / Concepts", items: ["TensorFlow", "PyTorch", "OpenCV", "Pandas", "Algorithms", "Data Structures", "High Availability", "Scalability"] },
  ];

  const achievements = [
    "IEEE paper on RL‑based stock market models (2022)",
    "Bronze Medalist, International Mathematics Olympiad (IMO)",
    "Smart India Hackathon finalist: led a 6‑person team building YOLOv3‑based crime detection",
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="max-w-5xl mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Anirudh Aheer</h1>
            <p className="mt-2 text-gray-600">Tech Lead · Software Development Engineer (SDE‑2 focus)</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <a href="tel:+919166625124" className="inline-flex items-center gap-1 hover:text-gray-900"><Phone className="w-4 h-4"/> +91 9166625124</a>
              <span className="text-gray-300">•</span>
              <a href="mailto:anirudh.aheer@gmail.com" className="inline-flex items-center gap-1 hover:text-gray-900"><Mail className="w-4 h-4"/> anirudh.aheer@gmail.com</a>
              <span className="text-gray-300">•</span>
              <a href="https://www.linkedin.com/in/anirudhaheer" target="_blank" className="inline-flex items-center gap-1 hover:text-gray-900"><Linkedin className="w-4 h-4"/> /in/anirudhaheer</a>
              <span className="text-gray-300">•</span>
              <a href="https://github.com/AKA2501" target="_blank" className="inline-flex items-center gap-1 hover:text-gray-900"><Github className="w-4 h-4"/> github.com/AKA2501</a>
              <span className="text-gray-300">•</span>
              <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4"/> Gurgaon, India</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={RESUME_PDF_URL} target="_blank" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-black text-white hover:bg-gray-800"><Download className="w-4 h-4"/> Download Resume</a>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <h2 className="text-xl font-semibold mb-3">Summary</h2>
        <p className="leading-7 text-gray-700">
          Software Developer promoted to <strong>Tech Lead</strong> in 1.5 years. Built and scaled a scheduling system deployed in <strong>15 US counties</strong>,
          automating <strong>50–70K trips/day</strong> and reducing dispatch time from hours to <strong>&lt;10 minutes</strong> per 2K trips. Strong in
          <strong> C++</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, <strong>SQL</strong>, <strong>Docker</strong>, <strong>AWS</strong>, <strong>OSRM</strong>, and
          designing <strong>high‑availability, low‑latency, scalable</strong> systems.
        </p>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="grid gap-6">
          {experience.map((e, i) => (
            <article key={i} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3 className="text-lg font-bold">{e.role} · {e.org}</h3>
                <p className="text-sm text-gray-500">{e.period} · {e.location}</p>
              </div>
              {e.promoNote && (
                <p className="mt-1 text-sm italic text-gray-600">{e.promoNote}</p>
              )}
              <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-gray-400">
                {e.bullets.map((b, j) => (
                  <li key={j} className="leading-7">{b}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tags?.map((t, k) => (
                  <span key={k} className="text-xs rounded-full bg-gray-100 px-3 py-1 border">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold flex items-center gap-2">{p.title}
                {p.link && (
                  <a href={p.link} target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"><ExternalLink className="w-4 h-4"/>Demo</a>
                )}
              </h3>
              <p className="mt-2 text-gray-700 leading-7">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, k) => (
                  <span key={k} className="text-xs rounded-full bg-gray-100 px-3 py-1 border">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <h2 className="text-xl font-semibold mb-3">Technical Skills</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
              <p className="text-sm font-semibold mb-2">{s.group}</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {s.items.map((it, j) => (
                  <li key={j} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5"/>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <h2 className="text-xl font-semibold mb-3">Achievements</h2>
        <ul className="list-disc pl-5 marker:text-gray-400 space-y-2 text-gray-700">
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <footer className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-700">Open to SDE‑2 roles. Best reached via email or LinkedIn.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <a href="mailto:anirudh.aheer@gmail.com" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-gray-900 text-white hover:bg-black"><Mail className="w-4 h-4"/> Email</a>
            <a href="https://www.linkedin.com/in/anirudhaheer" target="_blank" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-gray-50"><Linkedin className="w-4 h-4"/> LinkedIn</a>
            <a href="https://github.com/AKA2501" target="_blank" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-gray-50"><Github className="w-4 h-4"/> GitHub</a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">© {new Date().getFullYear()} Anirudh Aheer</p>
      </footer>
    </main>
  );
}
