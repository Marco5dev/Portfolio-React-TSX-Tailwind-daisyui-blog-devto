import Head from "../components/Head";
import SideBar from "../components/Header";

function NotFound() {
  return (
    <main className={"flex lg:items-center"}>
      <Head />
      <SideBar />
      <section className="main">
        <h1 className="text-6xl font-bold font-gradient">
          404
        </h1>
        <p>Not Found</p>
        
      </section>
    </main>
  );
}

export default NotFound;
