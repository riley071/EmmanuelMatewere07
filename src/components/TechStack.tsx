import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDatabase,
  faLayerGroup,
  faVectorSquare,
  faCubes,
  faSwatchbook,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/TechStack.scss";

type Tech = { name: string; si?: string; color?: string; fa?: IconDefinition };
type Group = { title: string; color: string; items: Tech[] };

const GROUPS: Group[] = [
  {
    title: "Frontend",
    color: "#61dafb",
    items: [
      { name: "React", si: "react", color: "61dafb" },
      { name: "JavaScript", si: "javascript", color: "f7df1e" },
      { name: "TypeScript", si: "typescript", color: "3178c6" },
      { name: "HTML5", si: "html5", color: "e34f26" },
      { name: "CSS3 / Sass", si: "sass", color: "cc6699" },
      { name: "Tailwind CSS", si: "tailwindcss", color: "06b6d4" },
      { name: "Framer Motion", si: "framer", color: "ffffff" },
    ],
  },
  {
    title: "Backend",
    color: "#00d4aa",
    items: [
      { name: "PHP", si: "php", color: "777bb4" },
      { name: "Python", si: "python", color: "3776ab" },
      { name: "MySQL", si: "mysql", color: "4479a1" },
      { name: "SQL", fa: faDatabase },
      { name: "Supabase", si: "supabase", color: "3ecf8e" },
    ],
  },
  {
    title: "Tools",
    color: "#ff8a4c",
    items: [
      { name: "Git", si: "git", color: "f05032" },
      { name: "Vite", si: "vite", color: "646cff" },
      { name: "Vercel", si: "vercel", color: "ffffff" },
      { name: "WordPress", si: "wordpress", color: "21759b" },
      { name: "Claude", si: "anthropic", color: "d97757" },
      { name: "OpenAI Codex", si: "openai", color: "ffffff" },
    ],
  },
  {
    title: "Design",
    color: "#a78bfa",
    items: [
      { name: "Figma", si: "figma", color: "f24e1e" },
      { name: "UI / UX", fa: faLayerGroup },
      { name: "Wireframing", fa: faVectorSquare },
      { name: "Prototyping", fa: faCubes },
      { name: "Visual Identity", fa: faSwatchbook },
      { name: "Accessibility", fa: faUniversalAccess },
    ],
  },
];

const groupVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.7, rotateX: -50 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

function TechIcon({ tech }: { tech: Tech }) {
  const [failed, setFailed] = useState(false);
  if (tech.fa) return <FontAwesomeIcon icon={tech.fa} />;
  if (failed) return <span>{tech.name[0]}</span>;
  return (
    <img
      src={`https://cdn.simpleicons.org/${tech.si}/${tech.color ?? "ffffff"}`}
      alt=""
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}

function TiltGroup({ group }: { group: Group }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0); // -0.5 → 0.5
  const py = useMotionValue(0);

  const spring = { stiffness: 180, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), spring);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    px.set(x - 0.5);
    py.set(y - 0.5);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      className="tech-stack-group"
      ref={ref}
      variants={groupVariants}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        {
          "--stack-color": group.color,
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
          transformStyle: "preserve-3d",
        } as unknown as CSSProperties
      }
    >
      <span className="tech-stack-spotlight" aria-hidden />
      <h4>{group.title}</h4>
      <ul className="tech-stack-badges">
        {group.items.map((tech, i) => (
          <motion.li
            key={tech.name}
            className="tech-chip"
            variants={reduced ? undefined : chipVariants}
            style={
              {
                "--float-delay": `${(i * 0.37) % 3}s`,
                "--float-dur": `${3.6 + (i % 3) * 0.7}s`,
              } as CSSProperties
            }
          >
            <div className="tech-chip-inner">
              <span className="tech-chip-icon">
                <TechIcon tech={tech} />
              </span>
              <span className="tech-chip-label">{tech.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="tech-stack" aria-labelledby="tech-stack-title">
      <h3 id="tech-stack-title">My tech stack</h3>
      <p className="tech-stack-intro">
        The technologies and practices I use to take a product from idea to
        launch.
      </p>
      <div className="tech-stack-grid">
        {GROUPS.map((g) => (
          <TiltGroup key={g.title} group={g} />
        ))}
      </div>
    </section>
  );
}
