import info from "@/content/info.json";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <div className="p-6">
      
      <Intro name ={info.name} about = {info.heroAbout}/>
      {/* <h2 className="text-xl font-semibold mt-4">Projects</h2>
      <ul className="list-disc ml-5">
        {Object.values(info.projects).map((project, index) => (
          <li key={index} className="mt-2">
            <strong>{project.name}</strong> - {project.desc}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
