import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ label, title, description }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <span className="section-label">{label}</span>
    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">{title}</h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl">{description}</p>
    )}
    <div className="mt-4 flex items-center gap-2">
      <div className="h-px w-12 bg-primary" />
      <div className="h-px flex-1 bg-border" />
    </div>
  </motion.div>
);

export default SectionHeader;
