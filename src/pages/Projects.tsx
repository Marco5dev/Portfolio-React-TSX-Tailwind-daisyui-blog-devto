import SideBar from "../components/Header";
import Head from "../components/Head";
import GridContainer from "../components/Projects/GridContainer";
import { projects } from "../../config";

function Projects() {

  return (
    <main className={"flex lg:items-center"}>
      <Head />
      <SideBar />
      <section className="projects">
        <h2 className="text-4xl title font-semibold p-10">Projects</h2>
        <GridContainer cards={projects} />
      </section>
    </main>
  );
}

export default Projects;
