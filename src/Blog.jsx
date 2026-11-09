import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Plus, Trash2, Edit3, Eye, EyeOff, ArrowLeft, ArrowRight, Calendar, Bold, Italic, Heading2, Heading3, List, ListOrdered, Link2, Image as ImageIcon, Video, Newspaper, X, Upload, Clock, Star } from 'lucide-react';
// ============================================================================
// CONSTANTES, UTILIDADES Y DATOS INICIALES
// ============================================================================
export const BLOG_CATEGORIES = [
    'Noticias de Aromaluxe',
    'Novedades y lanzamientos',
    'Guías de perfumería',
    'El mundo de los perfumes árabes',
    'Consejos y recomendaciones',
    'Curiosidades sobre fragancias'
];
const CATEGORY_GRADIENTS = {
    'Noticias de Aromaluxe': 'linear-gradient(135deg,#0A0B11 0%,#2a2113 55%,#D1B27E 160%)',
    'Novedades y lanzamientos': 'linear-gradient(135deg,#1a1410 0%,#5a3d1b 60%,#E0C48F 160%)',
    'Guías de perfumería': 'linear-gradient(135deg,#0d1218 0%,#233342 60%,#D1B27E 170%)',
    'El mundo de los perfumes árabes': 'linear-gradient(135deg,#1b0f0a 0%,#6b3a1e 60%,#D1B27E 160%)',
    'Consejos y recomendaciones': 'linear-gradient(135deg,#0f1612 0%,#274233 60%,#D1B27E 170%)',
    'Curiosidades sobre fragancias': 'linear-gradient(135deg,#150f1a 0%,#3d2a52 60%,#D1B27E 170%)'
};
export const slugify = (text) => (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
export const formatBlogDate = (iso) => {
    if (!iso)
        return '';
    const d = new Date(iso + 'T12:00:00');
    if (isNaN(d.getTime()))
        return iso;
    return d.toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
};
const todayISO = () => {
    const d = new Date();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${m}-${day}`;
};
const stripHtml = (html) => (html || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const readingMinutes = (html) => Math.max(1, Math.round(stripHtml(html).split(' ').filter(Boolean).length / 200));
// Reduce imágenes subidas para no llenar el almacenamiento del navegador
export const fileToResizedDataUrl = (file, maxW = 1400, quality = 0.82) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('No se pudo leer la imagen'));
    reader.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error('Imagen no válida'));
        img.onload = () => {
            const scale = Math.min(1, maxW / img.width);
            const canvas = document.createElement('canvas');
            canvas.width = Math.round(img.width * scale);
            canvas.height = Math.round(img.height * scale);
            const ctx = canvas.getContext('2d');
            if (!ctx)
                return reject(new Error('Canvas no disponible'));
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
});
// Convierte un enlace de YouTube / Vimeo en URL de inserción segura
export const toEmbedUrl = (raw) => {
    const url = (raw || '').trim();
    let m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{6,})/i);
    if (m)
        return `https://www.youtube.com/embed/${m[1]}`;
    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    if (m)
        return `https://player.vimeo.com/video/${m[1]}`;
    return null;
};
// Sanitizador: el contenido del blog solo puede contener etiquetas seguras
export const sanitizeHtml = (html) => {
    if (typeof DOMParser === 'undefined')
        return '';
    const doc = new DOMParser().parseFromString(`<div id="root">${html || ''}</div>`, 'text/html');
    const src = doc.getElementById('root');
    const out = document.createElement('div');
    const ALLOWED = new Set(['P', 'H2', 'H3', 'H4', 'STRONG', 'B', 'EM', 'I', 'U', 'UL', 'OL', 'LI', 'A', 'IMG', 'BR', 'BLOCKQUOTE', 'DIV', 'SPAN', 'IFRAME', 'HR']);
    const DROP = new Set(['SCRIPT', 'STYLE', 'OBJECT', 'EMBED', 'FORM', 'INPUT', 'BUTTON', 'LINK', 'META', 'TEXTAREA', 'SELECT', 'SVG', 'MATH']);
    const safeUrl = (u) => /^(https?:|mailto:|#|\/)/i.test((u || '').trim());
    const walk = (from, to) => {
        from.childNodes.forEach((node) => {
            if (node.nodeType === 3) {
                to.appendChild(document.createTextNode(node.textContent || ''));
                return;
            }
            if (node.nodeType !== 1)
                return;
            const el = node;
            const tag = el.tagName;
            if (DROP.has(tag))
                return;
            if (!ALLOWED.has(tag)) {
                walk(el, to);
                return;
            }
            const clean = document.createElement(tag);
            if (tag === 'A') {
                const href = el.getAttribute('href') || '';
                if (safeUrl(href)) {
                    clean.setAttribute('href', href);
                    clean.setAttribute('target', '_blank');
                    clean.setAttribute('rel', 'noopener noreferrer');
                }
            }
            else if (tag === 'IMG') {
                const s = el.getAttribute('src') || '';
                if (!/^(https?:|data:image\/(png|jpe?g|gif|webp);)/i.test(s))
                    return;
                clean.setAttribute('src', s);
                clean.setAttribute('alt', el.getAttribute('alt') || '');
                clean.setAttribute('loading', 'lazy');
            }
            else if (tag === 'IFRAME') {
                const s = el.getAttribute('src') || '';
                if (!/^https:\/\/(www\.youtube\.com\/embed\/|player\.vimeo\.com\/video\/)/i.test(s))
                    return;
                clean.setAttribute('src', s);
                clean.setAttribute('allowfullscreen', 'true');
                clean.setAttribute('frameborder', '0');
                clean.setAttribute('loading', 'lazy');
                to.appendChild(clean);
                return;
            }
            else if (tag === 'DIV' && el.className === 'blog-video') {
                clean.className = 'blog-video';
            }
            walk(el, clean);
            to.appendChild(clean);
        });
    };
    if (src)
        walk(src, out);
    return out.innerHTML;
};
const BLOG_CSS = `
  .blog-content { color:#1d1e26; font-size:16px; line-height:1.8; }
  .blog-content > * + * { margin-top: 1em; }
  .blog-content h2 { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.9rem; font-weight:700; line-height:1.2; margin-top:1.8em; color:#0A0B11; }
  .blog-content h3 { font-family:'Cormorant Garamond',Georgia,serif; font-size:1.5rem; font-weight:700; margin-top:1.5em; color:#0A0B11; }
  .blog-content a { color:#9E7B42; text-decoration:underline; }
  .blog-content ul { list-style:disc; padding-left:1.4em; }
  .blog-content ol { list-style:decimal; padding-left:1.4em; }
  .blog-content li + li { margin-top:.35em; }
  .blog-content img { max-width:100%; height:auto; border-radius:10px; margin:1.2em auto; display:block; }
  .blog-content blockquote { border-left:3px solid #D1B27E; padding-left:1em; color:#555; font-style:italic; }
  .blog-content .blog-video { position:relative; width:100%; padding-top:56.25%; border-radius:10px; overflow:hidden; background:#000; margin:1.2em 0; }
  .blog-content .blog-video iframe, .blog-content > iframe { position:absolute; inset:0; width:100%; height:100%; border:0; }
  .blog-content > iframe { position:relative; height:420px; max-width:100%; }
  .blog-editor:empty:before { content: attr(data-placeholder); color:#9a9a9a; }
  .blog-editor { outline:none; }
`;
const mkPost = (p) => ({
    subtitle: '', cover: '', author: 'Equipo Aromaluxe', seoTitle: '', seoDescription: '',
    status: 'published', featured: false, updatedAt: '', ...p
});
export const INITIAL_BLOG_POSTS = [
    mkPost({
        id: 'post-1', slug: 'el-arte-de-la-perfumeria-arabe', title: 'El arte de la perfumería árabe',
        subtitle: 'Una tradición de siglos que hoy conquista a Chile: fragancias intensas, resinas, maderas y una fijación fuera de lo común.',
        category: 'Noticias de Aromaluxe', date: '2026-11-03', featured: true,
        content: '<p>La perfumería árabe se distingue por la riqueza de sus materias primas y por una forma distinta de entender el perfume: más concentrado, más duradero y con una personalidad que se nota desde el primer momento.</p><h2>Ingredientes que cuentan una historia</h2><p>Oud, ámbar, almizcle, rosa, azafrán y vainilla son parte de un lenguaje olfativo que combina notas orientales con técnicas modernas. El resultado son fragancias de gran estela y larga duración.</p><h2>Por qué cada vez más personas la eligen</h2><p>Quienes prueban su primera fragancia árabe suelen coincidir en lo mismo: la fijación y la proyección sorprenden. En <strong>Aromaluxe</strong> seleccionamos perfumes originales para que descubras esa experiencia con total confianza.</p>'
    }),
    mkPost({
        id: 'post-2', slug: 'que-es-el-oud-y-por-que-es-tan-especial', title: '¿Qué es el Oud y por qué es tan especial?',
        subtitle: 'Conoce el ingrediente más emblemático de la perfumería oriental y cómo reconocerlo en una fragancia.',
        category: 'Guías de perfumería', date: '2026-10-28',
        content: '<p>El oud es una resina aromática que se forma en la madera de ciertos árboles y que da lugar a un aroma profundo, amaderado y ligeramente ahumado. Es uno de los ingredientes más valorados de la perfumería oriental.</p><h2>¿A qué huele?</h2><p>Su perfil es cálido, balsámico y complejo. Dependiendo de la fragancia, puede sentirse más seco y ahumado o más suave y dulce, acompañado de rosa, ámbar o vainilla.</p><h3>Cómo empezar</h3><ul><li>Si recién te inicias, busca fragancias donde el oud esté suavizado con notas frutales o dulces.</li><li>Aplica pocas pulverizaciones: son perfumes concentrados.</li><li>Pruébalo siempre sobre la piel antes de decidir.</li></ul>'
    }),
    mkPost({
        id: 'post-3', slug: 'como-hacer-que-tu-perfume-dure-mas', title: 'Cómo hacer que tu perfume dure más tiempo en la piel',
        subtitle: 'Cinco hábitos simples para mejorar la fijación y la proyección de tu fragancia favorita.',
        category: 'Consejos y recomendaciones', date: '2026-10-20',
        content: '<p>La duración de un perfume depende de su composición, pero también de cómo lo uses. Con estos consejos puedes aprovecharlo al máximo.</p><ol><li><strong>Hidrata tu piel:</strong> una piel seca absorbe el perfume más rápido. Usa una crema sin aroma antes de aplicarlo.</li><li><strong>Aplica en puntos de pulso:</strong> cuello, muñecas y detrás de las orejas generan calor que ayuda a proyectar.</li><li><strong>No frotes las muñecas:</strong> hacerlo altera las notas de salida.</li><li><strong>Guárdalo bien:</strong> lejos de la luz directa y del calor.</li><li><strong>Elige la concentración adecuada:</strong> los extractos y eau de parfum suelen durar más que las eau de toilette.</li></ol>'
    }),
    mkPost({
        id: 'post-4', slug: 'nuevas-fragancias-arabes-de-temporada', title: 'Llegan nuevas fragancias árabes para esta temporada',
        subtitle: 'Frescura cítrica y notas acuáticas para el calor, y dulces especiados para las noches.',
        category: 'Novedades y lanzamientos', date: '2026-10-12',
        content: '<p>Con la llegada de los días más cálidos, ampliamos nuestro catálogo con fragancias frescas, cítricas y acuáticas, ideales para el día, junto a opciones dulces y especiadas para las noches.</p><p>Revisa el catálogo para conocer los acordes, la pirámide olfativa, la longevidad y el momento de uso recomendado de cada perfume.</p>'
    }),
    mkPost({
        id: 'post-5', slug: 'curiosidades-sobre-el-ambar-en-perfumeria', title: 'Curiosidades sobre el ámbar en perfumería',
        subtitle: 'Lo que casi nadie sabe sobre uno de los acordes más usados en fragancias orientales.',
        category: 'Curiosidades sobre fragancias', date: '2026-10-05',
        content: '<p>Cuando una fragancia menciona "ámbar", normalmente no se refiere a la piedra fósil, sino a un acorde cálido y dulce que suele combinar resinas como el ládano o el benjuí con vainilla.</p><p>Existe además el <strong>ámbar gris</strong>, una sustancia de origen natural que históricamente se usó como fijador y hoy se recrea con moléculas sintéticas. Es una de las razones por las que muchas fragancias orientales tienen un fondo tan envolvente.</p>'
    }),
    mkPost({
        id: 'post-6', slug: 'guia-para-elegir-tu-primer-perfume-arabe', title: 'Guía para elegir tu primer perfume árabe',
        subtitle: 'Cómo orientarte por familias olfativas, ocasiones y presupuesto.',
        category: 'Guías de perfumería', date: '2026-11-09', status: 'draft',
        content: '<p>Borrador en preparación: guía para elegir tu primer perfume árabe según tus gustos y el momento del día.</p>'
    })
];
// ============================================================================
// PIEZAS COMPARTIDAS
// ============================================================================
const Cover = ({ post, className = '', big = false }) => post.cover ? (<img src={post.cover} alt={post.title} className={`object-cover w-full h-full ${className}`} loading="lazy"/>) : (<div className={`w-full h-full flex items-center justify-center ${className}`} style={{ background: CATEGORY_GRADIENTS[post.category] || CATEGORY_GRADIENTS['Noticias de Aromaluxe'] }}>
      <div className="text-center px-4">
        <Newspaper className={`mx-auto text-[#D1B27E] ${big ? 'w-10 h-10' : 'w-7 h-7'}`}/>
        <div className={`font-serif-luxury text-[#D1B27E] tracking-[0.25em] uppercase mt-2 ${big ? 'text-lg' : 'text-xs'}`}>
          AromaLuxe
        </div>
      </div>
    </div>);
const ArticleBody = ({ post }) => {
    const html = useMemo(() => sanitizeHtml(post.content), [post.content]);
    return (<article className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
      <div className="aspect-[16/7] bg-neutral-100">
        <Cover post={post} big/>
      </div>
      <div className="px-5 sm:px-10 py-8 max-w-3xl mx-auto">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-wider text-[#686868]">
          <span className="px-2 py-0.5 rounded-full bg-[#D1B27E]/20 text-[#9E7B42] font-bold">{post.category}</span>
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/>{formatBlogDate(post.date)}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{readingMinutes(post.content)} min de lectura</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold leading-tight text-[#0A0B11] mt-3">{post.title || 'Sin título'}</h1>
        {post.subtitle && <p className="text-base sm:text-lg text-[#686868] mt-3 leading-relaxed">{post.subtitle}</p>}
        <div className="text-xs text-[#686868] mt-4 pb-5 border-b border-neutral-200">Por <strong className="text-[#0A0B11]">{post.author || 'Equipo Aromaluxe'}</strong></div>
        <div className="blog-content mt-6" dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    </article>);
};
// ============================================================================
// BLOG PÚBLICO (solo muestra artículos con estado "Publicado")
// ============================================================================
export const BlogPublic = ({ posts, slug, navigate, gold = '#D1B27E', onCatalog }) => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('TODAS');
    const published = useMemo(() => posts.filter((p) => p.status === 'published').sort((a, b) => (b.date || '').localeCompare(a.date || '')), [posts]);
    const current = slug ? published.find((p) => p.slug === slug) : null;
    // SEO: título y descripción para Google en cada artículo
    useEffect(() => {
        if (!current)
            return;
        const prevTitle = document.title;
        document.title = `${current.seoTitle || current.title} | Aromaluxe`;
        let meta = document.querySelector('meta[name="description"]');
        const created = !meta;
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }
        const prevDesc = meta.content;
        meta.content = current.seoDescription || current.subtitle || stripHtml(current.content).slice(0, 155);
        return () => {
            document.title = prevTitle;
            if (created)
                meta.remove();
            else
                meta.content = prevDesc;
        };
    }, [current]);
    useEffect(() => { window.scrollTo({ top: 0 }); }, [slug]);
    // ---- Vista de artículo ----
    if (slug) {
        const related = published.filter((p) => current && p.id !== current.id && p.category === current.category).slice(0, 3);
        return (<main className="flex-grow">
        <style>{BLOG_CSS}</style>
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
          <button onClick={() => navigate('blog')} className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#686868] hover:text-[#0A0B11] mb-5">
            <ArrowLeft className="w-4 h-4"/> Volver al blog
          </button>
          {current ? (<>
              <ArticleBody post={current}/>
              {related.length > 0 && (<div className="mt-10">
                  <h3 className="font-serif-luxury text-2xl font-bold mb-4">Artículos relacionados</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {related.map((p) => (<button key={p.id} onClick={() => navigate('blog', p.slug)} className="text-left bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition">
                        <div className="aspect-[16/9]"><Cover post={p}/></div>
                        <div className="p-3 text-sm font-semibold leading-snug">{p.title}</div>
                      </button>))}
                  </div>
                </div>)}
              <div className="mt-10 rounded-xl bg-[#0A0B11] text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="font-serif-luxury text-xl">¿Listo para encontrar tu fragancia?</div>
                <button onClick={onCatalog} style={{ backgroundColor: gold }} className="text-[#0A0B11] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md">Ver catálogo</button>
              </div>
            </>) : (<div className="bg-white border border-neutral-200 rounded-xl p-10 text-center">
              <h2 className="font-serif-luxury text-2xl font-bold">Este artículo no está disponible</h2>
              <p className="text-sm text-[#686868] mt-2">Puede que haya sido retirado o que la dirección no sea correcta.</p>
            </div>)}
        </div>
      </main>);
    }
    // ---- Vista de listado ----
    const q = query.trim().toLowerCase();
    const filtering = q !== '' || category !== 'TODAS';
    const filtered = published.filter((p) => {
        if (category !== 'TODAS' && p.category !== category)
            return false;
        if (!q)
            return true;
        return `${p.title} ${p.subtitle} ${p.category} ${stripHtml(p.content)}`.toLowerCase().includes(q);
    });
    const featured = !filtering ? (published.find((p) => p.featured) || published[0]) : null;
    const grid = featured ? filtered.filter((p) => p.id !== featured.id) : filtered;
    const Card = ({ p }) => (<article className="bg-white border border-neutral-200 rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <button onClick={() => navigate('blog', p.slug)} className="aspect-[16/10] bg-neutral-100 block overflow-hidden">
        <Cover post={p} className="hover:scale-105 transition-transform duration-500"/>
      </button>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-2 text-[10px] uppercase tracking-wider">
          <span className="px-2 py-0.5 rounded-full bg-[#D1B27E]/20 text-[#9E7B42] font-bold truncate">{p.category}</span>
          <span className="text-[#686868] flex items-center gap-1 shrink-0"><Calendar className="w-3 h-3"/>{formatBlogDate(p.date)}</span>
        </div>
        <h3 className="font-serif-luxury text-2xl font-bold leading-tight mt-3 text-[#0A0B11]">{p.title}</h3>
        <p className="text-sm text-[#686868] mt-2 leading-relaxed line-clamp-3 flex-grow">{p.subtitle || stripHtml(p.content).slice(0, 140) + '…'}</p>
        <button onClick={() => navigate('blog', p.slug)} className="mt-4 inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-wider text-[#0A0B11] border-b-2 border-[#D1B27E] pb-0.5 hover:gap-3 transition-all">
          Leer artículo <ArrowRight className="w-3.5 h-3.5"/>
        </button>
      </div>
    </article>);
    return (<main className="flex-grow">
      <style>{BLOG_CSS}</style>
      {/* Encabezado */}
      <section className="bg-[#0A0B11] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#D1B27E]">Journal</span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold mt-2">Blog Aromaluxe</h1>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Novedades, consejos y curiosidades del mundo de la perfumería árabe.
          </p>
          <div className="relative max-w-xl mx-auto mt-6">
            <Search className="w-4 h-4 text-[#686868] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"/>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar publicaciones..." className="aroma-input w-full pl-10 pr-9 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#D1B27E]"/>
            {query && (<button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#686868]" aria-label="Limpiar búsqueda">
                <X className="w-4 h-4"/>
              </button>)}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Filtros por categoría */}
        <div className="flex flex-wrap gap-2 justify-center">
          {['TODAS', ...BLOG_CATEGORIES].map((c) => (<button key={c} onClick={() => setCategory(c)} className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold border transition ${category === c ? 'bg-[#0A0B11] text-white border-[#0A0B11]' : 'bg-white text-[#686868] border-neutral-200 hover:border-[#D1B27E]'}`}>
              {c === 'TODAS' ? 'Todas' : c}
            </button>))}
        </div>

        {/* Artículo principal destacado */}
        {featured && (<article className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
            <button onClick={() => navigate('blog', featured.slug)} className="aspect-[16/10] lg:aspect-auto lg:min-h-[340px] block overflow-hidden bg-neutral-100">
              <Cover post={featured} big className="hover:scale-105 transition-transform duration-700"/>
            </button>
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider">
                <span className="flex items-center gap-1 text-[#9E7B42] font-bold"><Star className="w-3 h-3"/> Destacado</span>
                <span className="px-2 py-0.5 rounded-full bg-[#D1B27E]/20 text-[#9E7B42] font-bold">{featured.category}</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold leading-tight mt-3">{featured.title}</h2>
              <p className="text-[#686868] mt-3 leading-relaxed">{featured.subtitle}</p>
              <div className="text-xs text-[#686868] mt-4 flex items-center gap-1"><Calendar className="w-3 h-3"/>{formatBlogDate(featured.date)}</div>
              <button onClick={() => navigate('blog', featured.slug)} style={{ backgroundColor: gold }} className="mt-6 self-start text-[#0A0B11] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md inline-flex items-center gap-2">
                Leer artículo <ArrowRight className="w-4 h-4"/>
              </button>
            </div>
          </article>)}

        {/* Cuadrícula de publicaciones */}
        {grid.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((p) => <Card key={p.id} p={p}/>)}
          </div>) : (!featured && (<div className="text-center py-16 text-[#686868]">
              <Newspaper className="w-10 h-10 mx-auto text-neutral-300"/>
              <p className="mt-3 text-sm">No encontramos publicaciones con esos filtros.</p>
              <button onClick={() => { setQuery(''); setCategory('TODAS'); }} className="mt-3 text-xs font-bold uppercase tracking-wider border-b-2 border-[#D1B27E]">Ver todas</button>
            </div>))}
      </div>
    </main>);
};
// ============================================================================
// EDITOR DE TEXTO ENRIQUECIDO
// ============================================================================
const RichEditor = ({ postId, initialHtml, onChange, onToast }) => {
    const ref = useRef(null);
    const fileRef = useRef(null);
    const savedRange = useRef(null);
    useEffect(() => {
        if (ref.current)
            ref.current.innerHTML = initialHtml || '';
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId]);
    const saveRange = () => {
        const sel = window.getSelection();
        if (sel && sel.rangeCount && ref.current?.contains(sel.anchorNode))
            savedRange.current = sel.getRangeAt(0).cloneRange();
    };
    const restoreRange = () => {
        ref.current?.focus();
        const sel = window.getSelection();
        if (sel && savedRange.current) {
            sel.removeAllRanges();
            sel.addRange(savedRange.current);
        }
    };
    const emit = () => { if (ref.current)
        onChange(ref.current.innerHTML); };
    const exec = (cmd, value) => {
        restoreRange();
        document.execCommand(cmd, false, value);
        saveRange();
        emit();
    };
    const addLink = () => {
        saveRange();
        const url = window.prompt('Dirección del enlace (https://...)');
        if (!url)
            return;
        exec('createLink', /^(https?:|mailto:)/i.test(url) ? url : `https://${url}`);
    };
    const addImageUrl = () => {
        saveRange();
        const url = window.prompt('Dirección (URL) de la imagen');
        if (url && /^https?:/i.test(url))
            exec('insertImage', url);
    };
    const addVideo = () => {
        saveRange();
        const raw = window.prompt('Pega el enlace del video (YouTube o Vimeo)');
        if (!raw)
            return;
        const embed = toEmbedUrl(raw);
        if (!embed) {
            onToast('Enlace no válido: usa un enlace de YouTube o Vimeo');
            return;
        }
        exec('insertHTML', `<div class="blog-video"><iframe src="${embed}" allowfullscreen></iframe></div><p><br></p>`);
    };
    const onFile = async (e) => {
        const file = e.target.files?.[0];
        e.target.value = '';
        if (!file)
            return;
        try {
            const data = await fileToResizedDataUrl(file, 1200);
            exec('insertImage', data);
        }
        catch {
            onToast('No se pudo insertar la imagen');
        }
    };
    const Btn = ({ title, onClick, children }) => (<button type="button" title={title} onMouseDown={(e) => { e.preventDefault(); saveRange(); }} onClick={onClick} className="p-2 rounded hover:bg-neutral-200 text-neutral-700 transition">
      {children}
    </button>);
    return (<div className="border border-neutral-300 rounded-lg bg-white overflow-hidden">
      <div className="flex flex-wrap items-center gap-0.5 p-1.5 bg-neutral-100 border-b border-neutral-300">
        <Btn title="Título" onClick={() => exec('formatBlock', 'H2')}><Heading2 className="w-4 h-4"/></Btn>
        <Btn title="Subtítulo" onClick={() => exec('formatBlock', 'H3')}><Heading3 className="w-4 h-4"/></Btn>
        <Btn title="Párrafo" onClick={() => exec('formatBlock', 'P')}><span className="text-xs font-bold px-1">P</span></Btn>
        <span className="w-px h-5 bg-neutral-300 mx-1"/>
        <Btn title="Negrita" onClick={() => exec('bold')}><Bold className="w-4 h-4"/></Btn>
        <Btn title="Cursiva" onClick={() => exec('italic')}><Italic className="w-4 h-4"/></Btn>
        <span className="w-px h-5 bg-neutral-300 mx-1"/>
        <Btn title="Lista con viñetas" onClick={() => exec('insertUnorderedList')}><List className="w-4 h-4"/></Btn>
        <Btn title="Lista numerada" onClick={() => exec('insertOrderedList')}><ListOrdered className="w-4 h-4"/></Btn>
        <span className="w-px h-5 bg-neutral-300 mx-1"/>
        <Btn title="Insertar enlace" onClick={addLink}><Link2 className="w-4 h-4"/></Btn>
        <Btn title="Subir imagen" onClick={() => { saveRange(); fileRef.current?.click(); }}><Upload className="w-4 h-4"/></Btn>
        <Btn title="Imagen desde URL" onClick={addImageUrl}><ImageIcon className="w-4 h-4"/></Btn>
        <Btn title="Insertar video" onClick={addVideo}><Video className="w-4 h-4"/></Btn>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile}/>
      </div>
      <div ref={ref} contentEditable suppressContentEditableWarning data-placeholder="Escribe aquí el contenido del artículo..." onInput={emit} onBlur={() => { saveRange(); emit(); }} onKeyUp={saveRange} onMouseUp={saveRange} className="blog-editor blog-content min-h-[320px] max-h-[560px] overflow-y-auto p-4 text-sm"/>
    </div>);
};
// ============================================================================
// PANEL DE ADMINISTRACIÓN DEL BLOG
// ============================================================================
const emptyPost = () => mkPost({
    id: 'post-' + Date.now(), title: '', slug: '', content: '', category: BLOG_CATEGORIES[0],
    date: todayISO(), status: 'draft'
});
const inputCls = 'w-full border border-neutral-300 rounded-md px-3 py-2 text-xs bg-white text-[#0A0B11] focus:outline-none focus:ring-2 focus:ring-[#D1B27E]';
const labelCls = 'block text-[11px] font-semibold text-[#686868] mb-1';
export const BlogAdmin = ({ posts, setPosts, logAdminAction, showToast, gold = '#D1B27E', onViewPost }) => {
    const [editing, setEditing] = useState(null);
    const [slugTouched, setSlugTouched] = useState(false);
    const [preview, setPreview] = useState(false);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');
    const coverRef = useRef(null);
    const counts = useMemo(() => ({
        total: posts.length,
        published: posts.filter((p) => p.status === 'published').length,
        drafts: posts.filter((p) => p.status !== 'published').length
    }), [posts]);
    const list = useMemo(() => posts
        .filter((p) => filter === 'all' || (filter === 'published' ? p.status === 'published' : p.status !== 'published'))
        .filter((p) => !search.trim() || `${p.title} ${p.category}`.toLowerCase().includes(search.trim().toLowerCase()))
        .sort((a, b) => (b.date || '').localeCompare(a.date || '')), [posts, filter, search]);
    const openNew = () => { setEditing(emptyPost()); setSlugTouched(false); setPreview(false); };
    const openEdit = (p) => { setEditing({ ...p }); setSlugTouched(true); setPreview(false); };
    const set = (patch) => setEditing((prev) => ({ ...prev, ...patch }));
    const uniqueSlug = (base, id) => {
        let slug = base || 'articulo';
        let n = 2;
        while (posts.some((p) => p.slug === slug && p.id !== id))
            slug = `${base}-${n++}`;
        return slug;
    };
    const save = (status) => {
        if (!editing.title.trim()) {
            showToast('Escribe un título para el artículo');
            return;
        }
        if (status === 'published' && !stripHtml(editing.content)) {
            showToast('Agrega contenido antes de publicar');
            return;
        }
        const slug = uniqueSlug(slugify(editing.slug || editing.title), editing.id);
        const final = {
            ...editing, slug, status, title: editing.title.trim(),
            updatedAt: new Date().toLocaleString('es-CL')
        };
        const exists = posts.some((p) => p.id === final.id);
        setPosts((prev) => exists ? prev.map((p) => (p.id === final.id ? final : p)) : [final, ...prev]);
        logAdminAction(`Blog: ${exists ? 'artículo actualizado' : 'artículo creado'} (${status === 'published' ? 'publicado' : 'borrador'}) · ${final.title}`);
        showToast(status === 'published' ? 'Artículo publicado en el blog' : 'Borrador guardado');
        setEditing(null);
    };
    const toggleStatus = (p) => {
        const next = p.status === 'published' ? 'draft' : 'published';
        setPosts((prev) => prev.map((x) => (x.id === p.id ? { ...x, status: next, updatedAt: new Date().toLocaleString('es-CL') } : x)));
        logAdminAction(`Blog: ${next === 'published' ? 'publicado' : 'despublicado'} · ${p.title}`);
        showToast(next === 'published' ? 'Artículo publicado' : 'Artículo despublicado (ya no es visible)');
    };
    const remove = (p) => {
        if (!window.confirm(`¿Eliminar definitivamente "${p.title}"?`))
            return;
        setPosts((prev) => prev.filter((x) => x.id !== p.id));
        logAdminAction(`Blog: artículo eliminado · ${p.title}`);
        showToast('Artículo eliminado');
    };
    const onCover = async (e) => {
        const file = e.target.files?.[0];
        e.target.value = '';
        if (!file)
            return;
        try {
            set({ cover: await fileToResizedDataUrl(file, 1400) });
        }
        catch {
            showToast('No se pudo cargar la imagen');
        }
    };
    // ---------------- Editor ----------------
    if (editing) {
        const isExisting = posts.some((p) => p.id === editing.id);
        return (<div className="space-y-5 text-[#0A0B11]">
        <style>{BLOG_CSS}</style>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7B42] font-bold">BLOG · {isExisting ? 'EDITAR' : 'NUEVA'} PUBLICACIÓN</span>
            <h2 className="font-serif-luxury text-2xl font-bold">{isExisting ? 'Editar publicación' : 'Crear nueva publicación'}</h2>
          </div>
          <button onClick={() => setEditing(null)} className="text-xs text-[#686868] hover:text-[#0A0B11] flex items-center gap-1"><ArrowLeft className="w-4 h-4"/> Volver al listado</button>
        </div>

        {preview ? (<div className="space-y-4">
            <div className="bg-[#D1B27E]/15 border border-[#D1B27E]/40 rounded-lg px-4 py-2.5 text-xs flex items-center justify-between">
              <span>Vista previa: así verán los visitantes este artículo.</span>
              <button onClick={() => setPreview(false)} className="font-bold underline">Seguir editando</button>
            </div>
            <ArticleBody post={editing}/>
          </div>) : (<div className="bg-white border border-neutral-200 rounded-xl p-5 space-y-4">
            <div>
              <label className={labelCls}>Título *</label>
              <input value={editing.title} onChange={(e) => set({ title: e.target.value, ...(slugTouched ? {} : { slug: slugify(e.target.value) }) })} placeholder="Ej. ¿Qué es el Oud y por qué es tan especial?" className={inputCls + ' text-sm font-semibold'}/>
            </div>
            <div>
              <label className={labelCls}>Subtítulo (breve introducción)</label>
              <textarea value={editing.subtitle} onChange={(e) => set({ subtitle: e.target.value })} rows={2} className={inputCls}/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4">
              <div>
                <label className={labelCls}>Imagen de portada</label>
                <div className="aspect-[16/10] rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100"><Cover post={editing}/></div>
                <div className="flex gap-2 mt-2">
                  <button type="button" onClick={() => coverRef.current?.click()} className="flex-1 text-[11px] font-semibold border border-neutral-300 rounded-md py-1.5 hover:bg-neutral-100 flex items-center justify-center gap-1"><Upload className="w-3.5 h-3.5"/> Subir</button>
                  {editing.cover && <button type="button" onClick={() => set({ cover: '' })} className="text-[11px] border border-neutral-300 rounded-md px-2.5 hover:bg-neutral-100" title="Quitar portada"><X className="w-3.5 h-3.5"/></button>}
                </div>
                <input ref={coverRef} type="file" accept="image/*" className="hidden" onChange={onCover}/>
                <input value={editing.cover?.startsWith('data:') ? '' : editing.cover || ''} onChange={(e) => set({ cover: e.target.value })} placeholder="o pega una URL de imagen" className={inputCls + ' mt-2'}/>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
                <div>
                  <label className={labelCls}>Categoría</label>
                  <select value={editing.category} onChange={(e) => set({ category: e.target.value })} className={inputCls}>
                    {BLOG_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Autor</label>
                  <input value={editing.author} onChange={(e) => set({ author: e.target.value })} className={inputCls}/>
                </div>
                <div>
                  <label className={labelCls}>Fecha de publicación</label>
                  <input type="date" value={editing.date} onChange={(e) => set({ date: e.target.value })} className={inputCls}/>
                </div>
                <div>
                  <label className={labelCls}>Estado</label>
                  <select value={editing.status} onChange={(e) => set({ status: e.target.value })} className={inputCls}>
                    <option value="draft">Borrador (no visible)</option>
                    <option value="published">Publicado</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>URL personalizada</label>
                  <div className="flex items-center border border-neutral-300 rounded-md bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#D1B27E]">
                    <span className="px-2.5 text-[11px] text-[#686868] bg-neutral-100 self-stretch flex items-center border-r border-neutral-300">/blog/</span>
                    <input value={editing.slug} onChange={(e) => { setSlugTouched(true); set({ slug: slugify(e.target.value) }); }} placeholder="se-genera-desde-el-titulo" className="flex-1 px-3 py-2 text-xs focus:outline-none"/>
                  </div>
                </div>
                <label className="sm:col-span-2 flex items-center gap-2 text-xs cursor-pointer select-none">
                  <input type="checkbox" checked={!!editing.featured} onChange={(e) => set({ featured: e.target.checked })} className="accent-[#D1B27E]"/>
                  Mostrar como artículo principal destacado
                </label>
              </div>
            </div>

            <div>
              <label className={labelCls}>Contenido</label>
              <RichEditor postId={editing.id} initialHtml={editing.content} onChange={(html) => set({ content: html })} onToast={showToast}/>
            </div>

            <div className="grid grid-cols-1 gap-3 bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#9E7B42]">SEO · Cómo aparece en Google</div>
              <div>
                <label className={labelCls}>Título SEO <span className="font-normal">({(editing.seoTitle || '').length}/60)</span></label>
                <input value={editing.seoTitle} onChange={(e) => set({ seoTitle: e.target.value })} placeholder={editing.title} className={inputCls}/>
              </div>
              <div>
                <label className={labelCls}>Descripción SEO <span className="font-normal">({(editing.seoDescription || '').length}/155)</span></label>
                <textarea value={editing.seoDescription} onChange={(e) => set({ seoDescription: e.target.value })} rows={2} className={inputCls}/>
              </div>
            </div>
          </div>)}

        <div className="flex flex-wrap justify-end gap-3 sticky bottom-0 bg-[#F7F6F3] py-3 border-t border-neutral-200">
          <button onClick={() => setEditing(null)} className="px-4 py-2 border border-neutral-300 rounded-lg text-xs bg-white">Cancelar</button>
          <button onClick={() => setPreview((v) => !v)} className="px-4 py-2 border border-neutral-300 rounded-lg text-xs bg-white flex items-center gap-1.5"><Eye className="w-3.5 h-3.5"/> {preview ? 'Editar' : 'Vista previa'}</button>
          <button onClick={() => save('draft')} className="px-4 py-2 border border-neutral-300 rounded-lg text-xs bg-white font-semibold">Guardar borrador</button>
          <button onClick={() => save('published')} style={{ backgroundColor: gold, color: '#0A0B11' }} className="px-6 py-2 rounded-lg text-xs font-bold">
            {editing.status === 'published' && isExisting ? 'Guardar y mantener publicado' : 'Publicar'}
          </button>
        </div>
      </div>);
    }
    // ---------------- Listado ----------------
    return (<div className="space-y-5 text-[#0A0B11]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7B42] font-bold">CONTENIDO DE LA TIENDA · BLOG</span>
          <h2 className="font-serif-luxury text-2xl font-bold">Administrar publicaciones</h2>
        </div>
        <button onClick={openNew} style={{ backgroundColor: gold, color: '#0A0B11' }} className="font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 self-start">
          <Plus className="w-4 h-4"/> Crear nueva publicación
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[{ k: 'total', label: 'Publicaciones', v: counts.total }, { k: 'published', label: 'Publicadas', v: counts.published }, { k: 'drafts', label: 'Borradores', v: counts.drafts }].map((s) => (<div key={s.k} className="bg-white border border-neutral-200 rounded-xl p-4">
            <div className="text-3xl font-bold font-serif-luxury">{s.v}</div>
            <div className="text-[11px] uppercase tracking-wider text-[#686868] mt-0.5">{s.label}</div>
          </div>))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#686868] absolute left-3 top-1/2 -translate-y-1/2"/>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar publicación..." className={inputCls + ' pl-9'}/>
        </div>
        <div className="flex gap-1.5">
          {[['all', 'Todas'], ['published', 'Publicadas'], ['draft', 'Borradores']].map(([id, label]) => (<button key={id} onClick={() => setFilter(id)} className={`px-3 py-2 rounded-md text-xs font-semibold border ${filter === id ? 'border-[#0A0B11]' : 'bg-white text-[#686868] border-neutral-300'}`} style={filter === id ? { backgroundColor: '#0A0B11', color: '#fff' } : undefined}>{label}</button>))}
        </div>
      </div>

      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-neutral-200 text-xs font-bold uppercase tracking-wider text-[#686868]">Publicaciones recientes</div>
        {list.length === 0 ? (<div className="p-10 text-center text-sm text-[#686868]">No hay publicaciones para mostrar.</div>) : (<ul className="divide-y divide-neutral-100">
            {list.map((p) => (<li key={p.id} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 hover:bg-neutral-50">
                <div className="w-full sm:w-24 aspect-[16/10] sm:aspect-[4/3] rounded-md overflow-hidden bg-neutral-100 shrink-0"><Cover post={p}/></div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{p.title}</div>
                  <div className="text-[11px] text-[#686868] mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>{p.category}</span><span>·</span>
                    <span className={`px-1.5 py-0.5 rounded font-bold ${p.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{p.status === 'published' ? 'Publicado' : 'Borrador'}</span>
                    <span>·</span><span>{formatBlogDate(p.date)}</span>
                    {p.featured && <span className="text-[#9E7B42] font-bold flex items-center gap-0.5"><Star className="w-3 h-3"/>Destacado</span>}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {p.status === 'published' && (<button onClick={() => onViewPost && onViewPost(p)} title="Ver en el sitio" className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-100"><Eye className="w-4 h-4"/></button>)}
                  <button onClick={() => openEdit(p)} title="Editar" className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-100"><Edit3 className="w-4 h-4"/></button>
                  <button onClick={() => toggleStatus(p)} title={p.status === 'published' ? 'Despublicar' : 'Publicar'} className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-100">
                    {p.status === 'published' ? <EyeOff className="w-4 h-4"/> : <ArrowRight className="w-4 h-4"/>}
                  </button>
                  <button onClick={() => remove(p)} title="Eliminar" className="p-2 rounded-md border border-neutral-200 hover:bg-red-50 text-red-600"><Trash2 className="w-4 h-4"/></button>
                </div>
              </li>))}
          </ul>)}
      </div>
      <p className="text-[11px] text-[#686868]">Los borradores nunca son visibles para los visitantes. Al publicar, el artículo aparece de inmediato en el blog público.</p>
    </div>);
};
