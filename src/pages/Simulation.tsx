import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

// Simulated trajectory data
const trajectoryData = Array.from({ length: 50 }, (_, i) => {
  const t = i * 0.6;
  const alt = t < 6 ? 500 * t * t / 36 : 3200 - 4.9 * Math.pow(t - 15, 2) + 1600;
  return {
    time: t.toFixed(1),
    altitude: Math.max(0, Math.round(alt)),
  };
});

const velocityData = Array.from({ length: 50 }, (_, i) => {
  const t = i * 0.6;
  const v = t < 6 ? 280 * t / 6 : Math.max(0, 280 - 9.8 * (t - 6));
  return {
    time: t.toFixed(1),
    velocity: Math.max(0, Math.round(v)),
  };
});

const dragData = Array.from({ length: 20 }, (_, i) => {
  const mach = i * 0.05;
  const cd = mach < 0.8 ? 0.45 + 0.05 * mach : 0.45 + 0.3 * Math.pow(mach - 0.8, 0.5) + 0.05 * mach;
  return {
    mach: mach.toFixed(2),
    cd: parseFloat(cd.toFixed(3)),
  };
});

const simParams = [
  { param: "Motor", value: "CTI K660", unit: "" },
  { param: "Total Impulse", value: "2,100", unit: "N·s" },
  { param: "Burn Time", value: "3.2", unit: "s" },
  { param: "Liftoff Mass", value: "8.4", unit: "kg" },
  { param: "Peak Altitude", value: "3,180", unit: "m" },
  { param: "Max Velocity", value: "274", unit: "m/s" },
  { param: "Max Acceleration", value: "12.3", unit: "g" },
  { param: "Time to Apogee", value: "18.6", unit: "s" },
];

const Simulation = () => {
  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Section 05"
            title="Flight Simulation"
            description="6-DOF trajectory simulation results using OpenRocket and custom MATLAB scripts. Atmospheric model: ISA standard."
          />

          {/* Sim parameters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="tech-border p-6 mb-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-4">Simulation Parameters</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {simParams.map((s) => (
                <div key={s.param}>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{s.param}</div>
                  <div className="font-mono text-lg font-bold">
                    {s.value}
                    {s.unit && <span className="text-xs text-muted-foreground ml-1">{s.unit}</span>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="tech-border p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Altitude vs Time</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={trajectoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 90%)" />
                  <XAxis dataKey="time" tick={{ fontSize: 10, fontFamily: "JetBrains Mono" }} label={{ value: "t (s)", position: "insideBottom", offset: -5, fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10, fontFamily: "JetBrains Mono" }} label={{ value: "Alt (m)", angle: -90, position: "insideLeft", fontSize: 10 }} />
                  <Tooltip contentStyle={{ fontFamily: "JetBrains Mono", fontSize: 11 }} />
                  <Area type="monotone" dataKey="altitude" stroke="hsl(4, 85%, 55%)" fill="hsl(4, 85%, 55%)" fillOpacity={0.08} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="tech-border p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Velocity vs Time</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={velocityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 90%)" />
                  <XAxis dataKey="time" tick={{ fontSize: 10, fontFamily: "JetBrains Mono" }} label={{ value: "t (s)", position: "insideBottom", offset: -5, fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10, fontFamily: "JetBrains Mono" }} label={{ value: "v (m/s)", angle: -90, position: "insideLeft", fontSize: 10 }} />
                  <Tooltip contentStyle={{ fontFamily: "JetBrains Mono", fontSize: 11 }} />
                  <Area type="monotone" dataKey="velocity" stroke="hsl(0, 0%, 20%)" fill="hsl(0, 0%, 20%)" fillOpacity={0.05} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tech-border p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Drag Coefficient vs Mach Number</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dragData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 90%)" />
                <XAxis dataKey="mach" tick={{ fontSize: 10, fontFamily: "JetBrains Mono" }} label={{ value: "Mach", position: "insideBottom", offset: -5, fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10, fontFamily: "JetBrains Mono" }} label={{ value: "Cd", angle: -90, position: "insideLeft", fontSize: 10 }} domain={[0.4, 0.7]} />
                <Tooltip contentStyle={{ fontFamily: "JetBrains Mono", fontSize: 11 }} />
                <Line type="monotone" dataKey="cd" stroke="hsl(4, 85%, 55%)" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Simulation;
