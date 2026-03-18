const GridBackground = ({ children, dense = false }: { children: React.ReactNode; dense?: boolean }) => (
  <div className={`min-h-screen ${dense ? "grid-bg-dense" : "grid-bg"}`}>
    {children}
  </div>
);

export default GridBackground;
