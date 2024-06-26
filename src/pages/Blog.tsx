import SideBar from "../components/Header";
import Head from "../components/Head";
import BlogContainer from "../components/blog/container";

function Blog() {
  return (
    <main className={"flex lg:items-center"}>
      <Head />
      <SideBar />
      <section className="blog">
        <h2 className="text-4xl title text-center font-semibold p-10">Blog</h2>
        <div className="">
          <BlogContainer />
        </div>
      </section>
    </main>
  );
}

export default Blog;
