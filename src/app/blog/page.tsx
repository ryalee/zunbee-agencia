import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PostDestaque from "../../components/PostDestaque";
import Image from "next/image";

function getArticles() {
  const articlesDirectory = path.join(process.cwd(), "articles");
  if (!fs.existsSync(articlesDirectory)) return [];

  const files = fs.readdirSync(articlesDirectory);

  const allPosts = files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const fileContent = fs.readFileSync(
        path.join(articlesDirectory, filename),
        "utf-8",
      );
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        tag: data.tag,
      };
    });

  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export default function BlogPage() {
  const posts = getArticles();
  const postMaisRecente = posts[0];
  const demaisPosts = posts.slice(1);

  return (
    <main className="mx-auto min-h-screen">
      <header className="py-5 px-10 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image src="/logo.webp" alt="logo" width={70} height={55} />
          <p className="font-black text-[30pt]">
            Zun
            <span className="text-main [text-shadow:2px_1px_0px_#4e4e4e]">
              Bee
            </span>
          </p>
        </div>

        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-main transition-colors mb-8 inline-flex items-center gap-1"
        >
          ← Voltar
        </Link>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-[30pt] font-bold tracking-tight mx-auto flex md:text-[45pt] md:mx-0 items-center">
            Radar Zun
            <span className="text-main [text-shadow:2px_1px_0px_#4e4e4e]">
              Bee
            </span>
            <Image
              src="/radar.webp"
              alt="Radar ZunBee"
              width={50}
              height={50}
            />
          </h1>

          <p className="mt-4 text-[19pt] leading-relaxed md:text-[25pt] md:w-full">
            Artigos práticos sobre tecnologia, engenharia de software e como
            escalar seu negócio digital.
          </p>
        </div>

        {/* Card de Destaque Real */}
        <div className="flex flex-col mx-auto">
          {postMaisRecente ? (
            <PostDestaque post={postMaisRecente} />
          ) : (
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center text-gray-400 bg-white">
              Nenhum artigo publicado ainda na pasta /articles.
            </div>
          )}
        </div>
      </section>

      {/* SEÇÃO DEMAIS POSTS */}
      {demaisPosts.length > 0 && (
        <section className="border-t border-gray-200 pt-12">
          <h3 className="text-xl font-bold mb-6">Próximas leituras</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demaisPosts.map((post) => (
              <div
                key={post.slug}
                className="border border-gray-100 rounded-xl p-5 bg-white shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs">{post.date}</span>
                  <h4 className="font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-sm  line-clamp-2 mb-4">{post.excerpt}</p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-yellow-600 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Acessar post →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
