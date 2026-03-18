import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { User, Linkedin, Github } from "lucide-react";

const teams = [
  {
    division: "Propulsion",
    members: [
      { name: "Arjun Mehta", role: "Lead — Propulsion", speciality: "Solid motor design" },
      { name: "Fatima Al-Rashid", role: "Propellant Engineer", speciality: "Grain geometry optimization" },
    ],
  },
  {
    division: "Aerodynamics",
    members: [
      { name: "Chen Wei", role: "Lead — Aerodynamics", speciality: "CFD & fin flutter analysis" },
      { name: "Sofia Petrov", role: "Aero Engineer", speciality: "Nose cone optimization" },
    ],
  },
  {
    division: "Avionics",
    members: [
      { name: "James Okonkwo", role: "Lead — Avionics", speciality: "Flight computer design" },
      { name: "Priya Sharma", role: "Embedded Systems", speciality: "Sensor fusion & telemetry" },
    ],
  },
  {
    division: "Recovery",
    members: [
      { name: "Lucas Fernandez", role: "Lead — Recovery", speciality: "Dual deployment systems" },
      { name: "Aiko Tanaka", role: "Parachute Design", speciality: "Descent rate modeling" },
    ],
  },
  {
    division: "Structures",
    members: [
      { name: "Omar Hassan", role: "Lead — Structures", speciality: "Composite airframe design" },
      { name: "Emily Rhodes", role: "Materials Engineer", speciality: "FEA & load analysis" },
    ],
  },
  {
    division: "Project Management",
    members: [
      { name: "Kavya Nair", role: "Project Lead", speciality: "Systems integration" },
      { name: "David Kim", role: "Documentation Lead", speciality: "Technical writing & outreach" },
    ],
  },
];

const Team = () => {
  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Section 02"
            title="Team Roster"
            description="Cross-functional teams organized by engineering discipline, each contributing to the integrated rocket system."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, ti) => (
              <motion.div
                key={team.division}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ti * 0.08, duration: 0.5 }}
                className="tech-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">{team.division}</h3>
                </div>

                <div className="space-y-4">
                  {team.members.map((m) => (
                    <div key={m.name} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-sm bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-mono text-sm font-medium">{m.name}</div>
                        <div className="text-xs text-primary font-mono">{m.role}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{m.speciality}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-border flex gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  <Github className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
