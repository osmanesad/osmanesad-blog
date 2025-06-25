import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 max-w-4xl mx-auto font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="text-xl font-bold">☕</div>
        <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
          Mason Dase
        </button>
      </header>

      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Hello, <br />
          I’m Osman and I love to{" "}
          <span className="text-green-400">write, code, and draw.</span>
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
        I continue my personal development by gaining knowledge and experience in business management, customer satisfaction, marketing, sales, and entrepreneurship. My goal is to specialize in these fields and establish a successful business of my own.
        </p>
      </section>

      {/* Blog Section */}
      <section className="mb-16">
        <h2 className="uppercase text-xs text-gray-500 mb-2">Blog</h2>
        <div className="space-y-4">
          {[{
            date: '16 MART 2025',
            title: 'Unutmak',
            tag: 'Writing',
            url: 'https://medium.com/@osmanesad/unutmak-f3d26ea1dba6'
          },
          {
            date: '05 MART 2025',
            title: 'bad dogs',
            tag: 'Art',
            url: 'https://www.artstation.com/artwork/4Ndz6W'
          },
          {
            date: '26 MART 2025',
            title: 'kitap_stok_takip_py',
            tag: 'Code',
            url: 'https://github.com/osmanesad/kitap_stok_takip_py'
          }].map((post, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-gray-500 w-32">{post.date}</span>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 hover:underline"
              >
                {post.title}
              </a>
              <span className="text-xs px-2 py-0.5 bg-gray-200 rounded-full">{post.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="text-sm text-gray-500">
        <p className="mb-2">info@pagebrew.co</p>
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/masondase/">Instagram</Link>
          <Link href="https://github.com/osmanesad">GitHub</Link>
          <Link href="https://www.behance.net/osmanesad">Behance</Link>
          <Link href="https://www.linkedin.com/in/osmanesad/">LinkedIn</Link>
          <Link href="https://www.pinterest.com/g0324d/">Pinterest</Link>
        </div>
      </footer>
    </main>
  );
}
