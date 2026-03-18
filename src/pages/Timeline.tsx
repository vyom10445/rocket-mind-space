import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle, Circle, Clock } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Conceptual Design",
    date: "Oct 2025 — Nov 2025",
    status: "complete" as const,
    items: [
      "Mission requirements definition",
      "Preliminary trade studies",
      "Team formation & role assignment",
      "Literature review of similar projects",
    ],
  },
  {
    phase: "Phase 2",
    title: "Preliminary Design Review",
    date: "Dec 2025 — Jan 2026",
    status: "complete" as const,
    items: [
      "Aerodynamic coefficient estimation",
      "Motor selection & thrust curve analysis",
      "Initial structural layout",
      "Avionics architecture design",
    ],
  },
  {
    phase: "Phase 3",
    title: "Detailed Design & Simulation",
    date: "Feb 2026 — Mar 2026",
    status: "active" as const,
    items: [
      "CFD simulations (OpenFOAM)",
      "FEA on airframe & fin can",
      "Flight trajectory optimization",
      "Recovery system sizing",
    ],
  },
  {
    phase: "Phase 4",
    title: "Fabrication & Assembly",
    date: "Apr 2026 — May 2026",
    status: "upcoming" as const,
    items: [
      "Composite layup for airframe",
      "CNC machining of bulkheads",
      "PCB fabrication & soldering",
      "Integration & fit checks",
    ],
  },
  {
    phase: "Phase 5",
    title: "Testing & Launch",
    date: "Jun 2026",
    status: "upcoming" as const,
    items: [
      "Ground testing (static fire)",
      "Avionics dry run",
      "Launch day operations",
      "Post-flight data analysis",
    ],
  },
];

const statusIcon = (status: "complete" | "active" | "upcoming") => {
  switch (status) {
    case "complete":
      return <CheckCircle className="w-5 h-5 text-primary" />;
    case "active":
      return <Clock className="w-5 h-5 text-primary animate-pulse" />;
    case "upcoming":
      return <Circle className="w-5 h-5 text-muted-foreground" />;
  }
};

const Timeline = () => {
  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Section 03"
            title="Project Timeline"
            description="A phased approach from conceptual design through launch, following a systems engineering V-model."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {phases.map((p, i) => (
                <motion.div
                  key={p.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 relative z-10 mt-1 hidden md:block">
                    {statusIcon(p.status)}
                  </div>

                  <div className={`tech-border p-6 flex-1 ${p.status === "active" ? "border-primary/30 bg-primary/[0.02]" : ""}`}>
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold">{p.phase}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">{p.date}</span>
                    </div>
                    <h3 className="font-mono text-base font-semibold mb-3">{p.title}</h3>
                    <ul className="space-y-1.5">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5 shrink-0">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
