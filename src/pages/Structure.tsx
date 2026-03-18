import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const components = [
  {
    name: "Nose Cone",
    spec: "Von Kármán ogive, L/D = 5:1",
    material: "Fiberglass layup (3-ply)",
    detail: "Optimized for minimum drag at transonic speeds. Tip radius: 2mm. Internal bulkhead at base for recovery harness attachment.",
  },
  {
    name: "Payload Bay",
    spec: "Ø 98mm × 200mm",
    material: "Carbon fiber tube, G12 bulkheads",
    detail: "Houses avionics stack: flight computer, IMU, barometric altimeter, GPS module, and 900MHz telemetry transmitter.",
  },
  {
    name: "Airframe",
    spec: "Ø 98mm × 1200mm, 2mm wall",
    material: "Filament-wound carbon fiber",
    detail: "Manufactured using a wet-layup mandrel process. Coupler sections at drogue and main chute bays with shear pins for separation events.",
  },
  {
    name: "Fin Can Assembly",
    spec: "3 trapezoidal fins, 120° spacing",
    material: "G10 fiberglass, epoxy fillets",
    detail: "Through-the-wall construction bonded to motor mount. Flutter margin calculated per NACA TN-4197. Fin cant: 0° (no spin stabilization).",
  },
  {
    name: "Motor Mount",
    spec: "54mm ID, forward & aft centering rings",
    material: "Phenolic tube, plywood rings",
    detail: "Designed for CTI Pro54 motor cases. Thrust plate rated to 2000N peak. Aft closure retainer with quick-release mechanism.",
  },
  {
    name: "Recovery System",
    spec: "Dual-deploy: drogue @ apogee, main @ 300m AGL",
    material: "Ripstop nylon, Kevlar shock cord",
    detail: "Drogue chute: Ø 0.5m (Cd = 1.5). Main chute: Ø 1.8m toroidal design. Descent rate: 5.2 m/s. Black powder charges: 2g primary, 3g backup.",
  },
];

const Structure = () => {
  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Section 04"
            title="Structural Design"
            description="Component-level breakdown of the rocket assembly with material specifications and engineering rationale."
          />

          {/* Rocket schematic placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 p-8 border border-border rounded-sm bg-card"
          >
            <svg viewBox="0 0 800 120" className="w-full h-auto">
              {/* Simplified rocket profile */}
              <motion.path
                d="M 50 60 L 100 30 L 120 30 L 120 90 L 100 90 Z"
                fill="none"
                stroke="hsl(4, 85%, 55%)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.rect
                x="120" y="30" width="120" height="60" rx="0"
                fill="none"
                stroke="hsl(0, 0%, 20%)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.rect
                x="240" y="25" width="350" height="70" rx="0"
                fill="none"
                stroke="hsl(0, 0%, 20%)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.rect
                x="590" y="30" width="100" height="60" rx="0"
                fill="none"
                stroke="hsl(0, 0%, 20%)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              {/* Fins */}
              <motion.polygon
                points="690,30 730,5 730,30"
                fill="none"
                stroke="hsl(4, 85%, 55%)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              <motion.polygon
                points="690,90 730,115 730,90"
                fill="none"
                stroke="hsl(4, 85%, 55%)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              {/* Labels */}
              <text x="70" y="110" className="font-mono text-[8px] fill-muted-foreground">NOSE CONE</text>
              <text x="140" y="110" className="font-mono text-[8px] fill-muted-foreground">PAYLOAD</text>
              <text x="380" y="110" className="font-mono text-[8px] fill-muted-foreground">AIRFRAME</text>
              <text x="610" y="110" className="font-mono text-[8px] fill-muted-foreground">MOTOR</text>
              <text x="710" y="110" className="font-mono text-[8px] fill-muted-foreground">FINS</text>
            </svg>
          </motion.div>

          {/* Component cards */}
          <div className="space-y-4">
            {components.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="tech-border p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-48 shrink-0">
                    <h3 className="font-mono text-sm font-semibold">{c.name}</h3>
                    <div className="font-mono text-[10px] text-primary mt-1">{c.spec}</div>
                    <div className="font-mono text-[10px] text-muted-foreground">{c.material}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Structure;
