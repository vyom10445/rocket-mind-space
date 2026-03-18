import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import GridBackground from "@/components/GridBackground";
import Index from "./pages/Index.tsx";
import Team from "./pages/Team.tsx";
import Timeline from "./pages/Timeline.tsx";
import Structure from "./pages/Structure.tsx";
import Simulation from "./pages/Simulation.tsx";
import Math from "./pages/Math.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GridBackground>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/structure" element={<Structure />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/math" element={<Math />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GridBackground>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
