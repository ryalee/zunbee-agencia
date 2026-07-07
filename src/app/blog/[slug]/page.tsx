import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  try {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'articles', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      title: `${data.title} | Radar ZunBee`,
      description: data.excerpt,
    };
  } catch {
    return { title: 'Artigo não encontrado | Radar ZunBee' };
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'articles');
  if (!fs.existsSync(postsDirectory)) return [];
  
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace(/\.mdx?$/, ''),
    }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'articles', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8 inline-flex items-center gap-1">
          ← Voltar para o Radar ZunBee
        </Link>

        <header className="mb-8">
          <span className="bg-yellow-400/10 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {data.tag || 'Tecnologia'}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-955 mt-3 mb-4 leading-tight">
            {data.title}
          </h1>
          <p className="text-sm text-gray-400">Publicado em {data.date}</p>
        </header>

        {/* Corpo do Artigo aplicando espaçamentos padrões para o Markdown */}
        <article className="prose text-gray-800 leading-relaxed space-y-6 text-lg">
          <MDXRemote source={content} />
        </article>
        
      </div>
    </div>
  );
}