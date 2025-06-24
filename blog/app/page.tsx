import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 max-w-4xl mx-auto font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="text-xl font-bold">☕</div>
        <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
          Remix
        </button>
      </header>

      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Hello, <br />
          I’m Osman and I love to{" "}
          <span className="text-yellow-500">write, code, and draw.</span>
        </h1>
        <p className="text-lg text-gray-600">
          My passion lies at the intersection of creativity and technology—
          sharing ideas, visuals, and tools.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="uppercase text-xs text-gray-500 mb-4">Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/project1.png",
            "/project2.png",
            "/project3.png",
            "/project1.png",
            "/project2.png",
            "/project3.png",
          ].map((src, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded overflow-hidden"
            >
              <Image
                src={src}
                alt={`Project ${i + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="uppercase text-xs text-gray-500 mb-2">About</h2>
        <p className="text-gray-700">
          I’m currently building personal tools and writing about ideas that
          combine aesthetics and function. Previously studied finance, now
          focused on design and technology.
        </p>
      </section>

      {/* Blog Section */}
      <section className="mb-16">
        <h2 className="uppercase text-xs text-gray-500 mb-2">Blog</h2>
        <div className="space-y-4">
          {[
            {
              date: "12 JUN 2025",
              title: "Why I Document Everything",
              tag: "Writing",
            },
            {
              date: "03 JUN 2025",
              title: "Drawing as Mindfulness",
              tag: "Art",
            },
            {
              date: "24 MAY 2025",
              title: "My Favorite Python Snippets",
              tag: "Code",
            },
          ].map((post, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-gray-500 w-32">{post.date}</span>
              <span className="flex-1">{post.title}</span>
              <span className="text-xs px-2 py-0.5 bg-gray-200 rounded-full">
                {post.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="text-sm text-gray-500">
        <p className="mb-2">info@osmanesad.com</p>
        <div className="flex gap-4">
          <Link href="#">Instagram</Link>
          <Link href="#">GitHub</Link>
          <Link href="#">Dribbble</Link>
          <Link href="#">LinkedIn</Link>
        </div>
      </footer>
    </main>
  );
}
