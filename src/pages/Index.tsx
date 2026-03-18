import { motion } from "framer-motion";
import { ArrowRight, Rocket, Target, Cpu, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Target, label: "Mission", desc: "Design, build, and launch a high-power model rocket", link: "/timeline" },
  { icon: Cpu, label: "Simulation", desc: "CFD analysis and trajectory simulation", link: "/simulation" },
  { icon: Calculator, label: "Mathematics", desc: "Orbital mechanics & propulsion equations", link: "/math" },
];

const Index = () => {
  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Decorative grid coordinates */}
        <div className="absolute top-8 left-6 font-mono text-[10px] text-muted-foreground/40 hidden md:block">
          x: 0.00 y: 0.00
        </div>
        <div className="absolute bottom-8 right-6 font-mono text-[10px] text-muted-foreground/40 hidden md:block">
          REF: IEEE-SB-2026-ROCKETRY
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="section-label mb-4"
            >
              IEEE Student Branch — Rocketry Division
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
            >
              Project{" "}
              <span className="text-primary">Ascent</span>
              <span className="text-muted-foreground font-light">_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              A multidisciplinary model rocketry initiative combining aerodynamics, 
              propulsion engineering, and embedded systems to push the boundaries 
              of student-led aerospace research.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/timeline"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-mono text-sm rounded-sm hover:bg-foreground/90 transition-colors"
              >
                View Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border font-mono text-sm rounded-sm hover:bg-secondary transition-colors"
              >
                Meet the Team
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative rocket SVG */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.06, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <Rocket className="w-[400px] h-[400px] text-foreground" strokeWidth={0.5} />
        </motion.div>
      </section>

      {/* Features strip */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link to={f.link} className="tech-border block p-6 hover:bg-secondary/50 transition-colors group">
                  <f.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-mono text-sm font-semibold mb-1">{f.label}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                  <ArrowRight className="w-4 h-4 mt-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12", unit: "Members" },
              { value: "3.2", unit: "km Target Alt." },
              { value: "Mach 0.8", unit: "Max Velocity" },
              { value: "6", unit: "Months" },
            ].map((stat, i) => (
              <motion.div
                key={stat.unit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-mono text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.unit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            © 2026 IEEE Student Branch — Rocketry Division
          </div>
          <div className="font-mono text-[10px] text-muted-foreground/50">
            DOC_REV: 1.0.0 | LAST_UPDATED: 2026-03-13
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
