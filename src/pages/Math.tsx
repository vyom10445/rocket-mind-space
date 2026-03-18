import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const equations = [
  {
    title: "Tsiolkovsky Rocket Equation",
    equation: "Δv = Isp · g₀ · ln(m₀ / mf)",
    variables: [
      { sym: "Δv", desc: "Change in velocity (m/s)" },
      { sym: "Isp", desc: "Specific impulse (s)" },
      { sym: "g₀", desc: "Standard gravity (9.81 m/s²)" },
      { sym: "m₀", desc: "Initial mass (kg)" },
      { sym: "mf", desc: "Final mass (kg)" },
    ],
    note: "Fundamental equation governing the velocity budget. For our K660 motor with Isp ≈ 214s, Δv ≈ 340 m/s.",
  },
  {
    title: "Drag Force",
    equation: "Fd = ½ · ρ · v² · Cd · A",
    variables: [
      { sym: "Fd", desc: "Drag force (N)" },
      { sym: "ρ", desc: "Air density (kg/m³)" },
      { sym: "v", desc: "Velocity (m/s)" },
      { sym: "Cd", desc: "Drag coefficient (dimensionless)" },
      { sym: "A", desc: "Reference area (m²)" },
    ],
    note: "Cd varies with Mach number and angle of attack. At Mach 0.8, transonic drag rise increases Cd by ~40%.",
  },
  {
    title: "Stability — Static Margin",
    equation: "SM = (Xcp − Xcg) / d",
    variables: [
      { sym: "SM", desc: "Static margin (calibers)" },
      { sym: "Xcp", desc: "Center of pressure location (m)" },
      { sym: "Xcg", desc: "Center of gravity location (m)" },
      { sym: "d", desc: "Reference diameter (m)" },
    ],
    note: "A positive SM > 1.5 calibers ensures passive aerodynamic stability. Our design: SM = 2.1 cal at liftoff.",
  },
  {
    title: "Thrust Equation",
    equation: "F = ṁ · ve + (pe − pa) · Ae",
    variables: [
      { sym: "F", desc: "Thrust force (N)" },
      { sym: "ṁ", desc: "Mass flow rate (kg/s)" },
      { sym: "ve", desc: "Exhaust velocity (m/s)" },
      { sym: "pe", desc: "Exit pressure (Pa)" },
      { sym: "pa", desc: "Ambient pressure (Pa)" },
      { sym: "Ae", desc: "Nozzle exit area (m²)" },
    ],
    note: "For solid motors, thrust is primarily momentum-driven. Pressure thrust term is significant at altitude.",
  },
  {
    title: "Barrowman Equations — Cp of Conical Nose",
    equation: "Xcp_nose = 0.466 · Ln",
    variables: [
      { sym: "Xcp_nose", desc: "Cp location of nose cone (m)" },
      { sym: "Ln", desc: "Nose cone length (m)" },
    ],
    note: "For a tangent ogive nose. Combined with fin Cp via Barrowman superposition to determine total vehicle Cp.",
  },
  {
    title: "Terminal Descent Velocity",
    equation: "vt = √(2mg / (ρ · Cd · A))",
    variables: [
      { sym: "vt", desc: "Terminal velocity (m/s)" },
      { sym: "m", desc: "Vehicle mass (kg)" },
      { sym: "g", desc: "Gravitational acceleration (m/s²)" },
      { sym: "Cd", desc: "Parachute drag coefficient" },
      { sym: "A", desc: "Parachute projected area (m²)" },
    ],
    note: "Target descent rate of 5.2 m/s under main chute. Kinetic energy at landing: < 75 J per NAR safety code.",
  },
];

const Math = () => {
  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Section 06"
            title="Mathematical Framework"
            description="Core equations governing rocket flight dynamics, stability analysis, and recovery system design."
          />

          <div className="space-y-6">
            {equations.map((eq, i) => (
              <motion.div
                key={eq.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="tech-border p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-sm">EQ.{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-mono text-sm font-semibold">{eq.title}</h3>
                </div>

                {/* Equation display */}
                <div className="bg-secondary/50 border border-border rounded-sm px-6 py-4 mb-4 overflow-x-auto">
                  <code className="font-mono text-lg md:text-xl font-medium text-foreground">{eq.equation}</code>
                </div>

                {/* Variables table */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-4">
                  {eq.variables.map((v) => (
                    <div key={v.sym} className="flex items-baseline gap-2">
                      <code className="font-mono text-xs text-primary font-semibold w-12 shrink-0">{v.sym}</code>
                      <span className="text-xs text-muted-foreground">{v.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Application note */}
                <div className="border-t border-border pt-3">
                  <p className="text-xs text-muted-foreground italic">
                    <span className="text-primary font-mono not-italic mr-1">NOTE:</span>
                    {eq.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Math;
