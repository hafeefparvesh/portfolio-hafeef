import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";

const skills = [
  { title: "Networking", icon: Network, items: ["TCP/IP", "IPv4 & IPv6", "OSPF", "VLANs", "Inter-VLAN", "ACLs", "DHCP / DNS", "NAT / PAT"] },
  { title: "Linux", icon: Terminal, items: ["RHEL", "Users & Groups", "Permissions", "LVM", "systemd", "SELinux", "firewalld", "Bash"] },
  { title: "AWS Cloud", icon: Cloud, items: ["EC2", "VPC", "IAM", "S3", "RDS", "EBS", "ELB", "Auto Scaling"] },
  { title: "Tools", icon: Code2, items: ["Cisco IOS", "Packet Tracer", "VMware", "Git / GitHub", "PuTTY", "MobaXterm", "Python", "SQL"] },
];

const projects = [
  {
    number: "01",
    title: "Enterprise Network Design",
    description: "Designed and simulated a secure enterprise network with Cisco routers and switches, combining segmentation, dynamic routing and access controls.",
    stack: ["Cisco IOS", "OSPF", "VLAN", "DHCP", "NAT", "ACL"],
  },
  {
    number: "02",
    title: "Linux Server Administration",
    description: "Built a RHEL home lab across VMware and cloud VMs with secure access, permissions, storage, services, firewalling and Bash automation.",
    stack: ["RHEL", "VMware", "SSH", "Bash", "LVM", "SELinux"],
  },
  {
    number: "03",
    title: "AWS Cloud Infrastructure",
    description: "Deployed Linux infrastructure using AWS networking and compute services, with storage, database, load balancing and scaling concepts.",
    stack: ["EC2", "VPC", "IAM", "S3", "RDS", "ELB"],
  },
];

const experience = [
  {
    period: "MAR 2026 — AUG 2026",
    role: "Junior Network Engineer",
    company: "Soften Technologies · Kochi, Kerala",
    points: [
      "Configured and troubleshot Cisco routers and switches for stable network connectivity.",
      "Assisted with VLANs, inter-VLAN routing, trunking, DHCP, DNS, NAT and IP addressing.",
      "Administered RHEL users, groups, permissions, SSH access, services and packages.",
      "Supported AWS EC2, VPC, IAM and S3 infrastructure activities.",
    ],
  },
];

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = ["home", "about", "skills", "work", "contact"];
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom > 140;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="noise" />
      <div className="grid-bg" />

      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <button className="brand" onClick={() => go("home")} aria-label="Go home">
          <span className="brand-mark">H</span>
          <span>HAFEEF<span className="dim">.</span></span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "work", "contact"].map((id) => (
            <button key={id} className={activeSection === id ? "active" : ""} onClick={() => go(id)}>
              {id}
            </button>
          ))}
        </nav>

        <a className="nav-cta" href="mailto:hafeefparveshmp@gmail.com">
          Let's talk <ArrowUpRight size={15} />
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="hero-badge-row">
              <span className="status-badge">
                <span className="status-dot" /> Available for opportunities
              </span>
              <span className="location-pill">Kerala, IN · Open to UAE / Remote</span>
            </div>

            <div className="hero-name-block">
              <div className="hero-salutation">
                <span className="salutation-dash">—</span>
                <span>Hello, I'm</span>
              </div>
              <h1 className="hero-main-title">
                <span className="first-name">HAFEEF</span>
                <span className="last-name">PARVESH<span className="period-dot">.</span></span>
              </h1>
              <div className="hero-role-pill">
                <span className="role-bullet">⚡</span>
                <span className="role-text">IT Infrastructure & Cloud Engineer</span>
                <span className="role-divider">/</span>
                <span className="role-sub">Cisco · Linux · AWS</span>
              </div>
            </div>

            <p className="hero-lead">
              Architecting secure <strong>enterprise networks, automated Linux servers, and scalable AWS cloud infrastructure</strong> — built for 99.9% uptime, seamless performance, and modern cyber-readiness.
            </p>

            <div className="hero-actions">
              <button className="button primary" onClick={() => go("work")}>View my work <ArrowDown size={16} /></button>
              <a className="button secondary" href="mailto:hafeefparveshmp@gmail.com">Get in touch <Mail size={16} /></a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <strong>CCNA & AWS</strong>
                <span>Core Competence</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>RHEL & Bash</strong>
                <span>Systems & Automation</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>B.Tech ECE</strong>
                <span>2021 — 2025</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-photo-container">
              <div className="hero-photo-glow" />
              
              <div className="photo-identity-badge">
                <span className="verified-dot"><CheckCircle2 size={13} /></span>
                <span>HAFEEF PARVESH</span>
                <small>INFRA · CLOUD</small>
              </div>

              <div className="hero-photo-frame">
                <img
                  src="/profile.png"
                  alt="Hafeef Parvesh M P - IT Infrastructure & Cloud Specialist"
                  className="hero-photo"
                />
                <div className="hero-photo-overlay" />
              </div>

              <div className="terminal-card hero-terminal-card">
                <div className="terminal-top">
                  <span /><span /><span />
                  <small>infra.sh</small>
                </div>
                <div className="terminal-body">
                  <p><b>$</b> systemctl status infrastructure</p>
                  <p className="ok">● network.service — active</p>
                  <p className="ok">● cloud-agent — connected</p>
                  <p className="muted">uptime: 99.9% · 18ms</p>
                </div>
              </div>

              <div className="floating-tag tag-one"><Server size={14} /> Linux</div>
              <div className="floating-tag tag-two"><Cloud size={14} /> AWS</div>
              <div className="floating-tag tag-three"><Network size={14} /> Cisco</div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-head">
            <span className="section-number">01</span>
            <h2>About <em>me</em></h2>
          </div>
          <div className="about-grid">
            <div>
              <p className="big-copy">I work at the intersection of <span>networks, systems and cloud.</span></p>
            </div>
            <div className="about-text">
              <p>I'm Hafeef Parvesh M P, a B.Tech graduate in Electronics and Communication Engineering with hands-on experience in IT infrastructure.</p>
              <p>My work spans Cisco networking, Red Hat Enterprise Linux administration and AWS Cloud services. I enjoy troubleshooting systems, learning new technologies and building practical infrastructure solutions.</p>
              <div className="facts">
                <div><strong>01</strong><span>B.Tech ECE<br />2021 — 2025</span></div>
                <div><strong>06+</strong><span>Months<br />Industry Experience</span></div>
                <div><strong>03</strong><span>Core Areas<br />Network · Linux · Cloud</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <span className="section-number">02</span>
            <h2>Technical <em>stack</em></h2>
          </div>
          <div className="skill-grid">
            {skills.map(({ title, icon: Icon, items }) => (
              <article className="skill-card" key={title}>
                <div className="skill-icon"><Icon size={21} /></div>
                <h3>{title}</h3>
                <div className="chips">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-head">
            <span className="section-number">03</span>
            <h2>Selected <em>work</em></h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <span className="project-no">{project.number}</span>
                <div className="project-main">
                  <h3>{project.title} <ArrowUpRight size={20} /></h3>
                  <p>{project.description}</p>
                  <div className="chips">{project.stack.map((x) => <span key={x}>{x}</span>)}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="experience">
            <div className="mini-label">EXPERIENCE</div>
            {experience.map((item) => (
              <article className="experience-row" key={item.role}>
                <span className="period">{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <ul>{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-glow" />
          <span className="section-number">04</span>
          <h2>Let's build something<br /><em>reliable.</em></h2>
          <p>Have an opportunity, project or just want to connect?</p>
          <a className="contact-email" href="mailto:hafeefparveshmp@gmail.com">hafeefparveshmp@gmail.com <ArrowUpRight /></a>
          <div className="socials">
            <a href="https://linkedin.com/in/hafeefparvesh" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Hafeef Parvesh M P</span>
        <span>NETWORK · LINUX · CLOUD</span>
        <span className="back-top" onClick={() => go("home")}><ArrowUp size={15} /> Back to top</span>
      </footer>
    </div>
  );
}