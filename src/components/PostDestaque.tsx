import Link from "next/link";

interface PostProps {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tag?: string;
  };
}

export default function PostDestaque({ post }: PostProps) {
  if (!post) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6 w-full flex flex-col justify-between transition-all duration-300 hover:shadow-md">
      
      {/* Imagem de Capa */}
      <div className="relative h-60 w-full mb-5 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
        {post.coverImage ? (
          <img  
            src={post.coverImage} 
            alt={post.title}
            className="object-cover w-full h-full transform hover:scale-102 transition-transform duration-500"
          />
        ) : (
          <span className="text-sm text-gray-400 italic">Sem imagem de capa</span>
        )}
      </div>

      {/* Categoria e Data */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-yellow-600 bg-yellow-400/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
          {post.tag || "Tecnologia"}
        </span>
        <span className="text-xs text-gray-400">
          {post.date}
        </span>
      </div>

      {/* Título */}
      <h3 className="text-2xl font-bold text-gray-950 leading-tight mb-2 hover:text-yellow-600 transition-colors">
        <Link href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h3>

      {/* Resumo */}
      <p className="text-sm text-gray-600 mb-5 line-clamp-2 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Botão de Ação */}
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-950 text-white font-medium text-sm rounded-xl hover:bg-gray-800 transition-colors gap-2 group"
      >
        Ler artigo completo
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </Link>

    </div>
  );
}