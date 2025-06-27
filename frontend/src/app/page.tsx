// import Image from "next/image";
import { ProjectStatusCard } from "@/src/components/ui/expandable-card";

export default function Home() {
  return (
   <div className="expansive-card">
      <ProjectStatusCard
        title="UI Component Library"
        progress={75}
        dueDate="Jan 15, 2024"
        contributors={[
          { name: "Pele Jhonson" },
          { name: "Poze" },
          { name: "Mc Tigrinho da Baxada" }
        ]}
        tasks={[
          { title: "Update Button Components", completed: true },
          { title: "Add Dark Mode Support", completed: true },
          { title: "Write Documentation", completed: false }
        ]}
        githubStars={128}
        openIssues={5}
      />
   </div> 
  );
}
