import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  ShoppingCart,
  ShoppingBag,
  User,
  ChevronDown,
  ShieldCheck,
  Truck,
  Sparkles,
  MessageCircle,
  Lock,
  LogOut,
  Plus,
  Minus,
  Trash2,
  Edit3,
  Upload,
  Check,
  X,
  Sliders,
  BarChart3,
  Package,
  Layout,
  HelpCircle,
  RefreshCw,
  Eye,
  EyeOff,
  ArrowRight,
  Star,
  Flame,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Grid,
  List,
  Sun,
  Moon,
  Snowflake,
  Flower2,
  Leaf,
  Clock,
  Wind,
  Droplets,
  KeyRound,
  UserPlus,
  CheckCircle2,
  Filter,
  Copy,
  Tag,
  Layers,
  Boxes,
  Image as ImageIcon,
  TicketPercent,
  MessageSquare,
  Users,
  Settings,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
  Globe,
  FileText,
  Activity,
  Newspaper
} from 'lucide-react';
import { PERFUME_PROFILES } from './perfumeProfiles';
import { BlogPublic, BlogAdmin, INITIAL_BLOG_POSTS } from './Blog';

// ============================================================================
// 1. LOGOTIPO OFICIAL VECTORIAL AROMALUXE (IDENTIDAD INTACTA)
// ============================================================================
const AromaLuxeLogo = ({ size = 'md', showText = true, lightMode = false }) => {
  const dimensions = {
    xs: { svg: 32, title: 'text-xs tracking-[0.25em]', sub: 'text-[8px] tracking-[0.35em]' },
    sm: { svg: 40, title: 'text-sm tracking-[0.26em]', sub: 'text-[9px] tracking-[0.38em]' },
    md: { svg: 54, title: 'text-lg tracking-[0.28em]', sub: 'text-[10px] tracking-[0.40em]' },
    lg: { svg: 76, title: 'text-2xl tracking-[0.30em]', sub: 'text-xs tracking-[0.42em]' }
  }[size] || { svg: 54, title: 'text-lg tracking-[0.28em]', sub: 'text-[10px] tracking-[0.40em]' };

  return (
    <div className="inline-flex flex-col items-center select-none group cursor-pointer">
      <div className="relative flex items-center justify-center">
        <svg
          width={dimensions.svg}
          height={dimensions.svg}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="aromaGoldGrad" x1="20" y1="15" x2="170" y2="185" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF6E5" />
              <stop offset="28%" stopColor="#E5C99B" />
              <stop offset="55%" stopColor="#D1B27E" />
              <stop offset="80%" stopColor="#8C6D3F" />
              <stop offset="100%" stopColor="#E8D0A7" />
            </linearGradient>

            <linearGradient id="aromaSilverGrad" x1="160" y1="30" x2="45" y2="175" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#26272B" />
              <stop offset="35%" stopColor="#7C7D82" />
              <stop offset="65%" stopColor="#E2E2E5" />
              <stop offset="85%" stopColor="#5A5B60" />
              <stop offset="100%" stopColor="#18191E" />
            </linearGradient>

            <linearGradient id="aromaBronzeDark" x1="50" y1="40" x2="150" y2="165" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2A2018" />
              <stop offset="50%" stopColor="#A68654" />
              <stop offset="100%" stopColor="#DFC394" />
            </linearGradient>

            <filter id="glowDrop" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.45" />
            </filter>
          </defs>

          <path
            d="M118 75 L166 178 C153 179 141 174 134 159 L105 97 Z"
            fill="url(#aromaBronzeDark)"
          />
          <path
            d="M82 75 L34 178 C47 179 59 174 66 159 L95 97 Z"
            fill="url(#aromaBronzeDark)"
          />
          <path
            d="M107 28 C148 45 162 98 135 138 C116 164 82 166 64 142 C88 154 116 142 127 116 C138 89 128 52 107 28 Z"
            fill="url(#aromaSilverGrad)"
            filter="url(#glowDrop)"
          />
          <path
            d="M100 14 L58 104 C50 124 57 152 78 164 C95 174 117 171 129 162 C110 165 89 156 80 137 C72 119 77 96 87 75 L100 48 L115 80 C123 97 123 118 112 133 C128 122 137 101 131 79 L100 14 Z"
            fill="url(#aromaGoldGrad)"
            filter="url(#glowDrop)"
          />
          <path
            d="M62 94 C55 125 69 162 102 172 C117 176 130 171 136 164 C118 166 96 158 84 141 C71 124 66 108 62 94 Z"
            fill="url(#aromaSilverGrad)"
          />
          <path d="M100 94 L112 106 L100 118 L88 106 Z" fill="#FFF7E8" />
          <circle cx="176" cy="171" r="7.5" stroke="#D1B27E" strokeWidth="1.4" fill="none" />
          <text
            x="176"
            y="174.5"
            textAnchor="middle"
            fill="#D1B27E"
            fontSize="9"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            R
          </text>
        </svg>
      </div>

      {showText && (
        <div className="text-center mt-1 leading-none">
          <div
            className={`font-serif-luxury font-semibold uppercase ${dimensions.title}`}
            style={{ color: lightMode ? '#0A0B11' : '#D1B27E' }}
          >
            AROMALUXE
          </div>
          <div
            className={`font-sans-clean uppercase font-light mt-1 ${dimensions.sub}`}
            style={{ color: lightMode ? '#686868' : '#C9AE7E' }}
          >
            PERFUMES
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 2. GENERADOR AUTOMÁTICO DE PERFIL OLFATIVO ESTILO FRAGRANTICA
// ============================================================================
const ACCORD_COLOR_MAP = {
  'Cítrico': { bg: '#F7D038', text: '#0A0B11' },
  'Ámbar': { bg: '#D97B29', text: '#FFFFFF' },
  'Dulce': { bg: '#E35D6A', text: '#FFFFFF' },
  'Vainilla': { bg: '#F3DC99', text: '#0A0B11' },
  'Amaderado': { bg: '#8B5A2B', text: '#FFFFFF' },
  'Especiado Cálido': { bg: '#B83B2A', text: '#FFFFFF' },
  'Aromático': { bg: '#4E9A74', text: '#FFFFFF' },
  'Fresco Especiado': { bg: '#73B85D', text: '#0A0B11' },
  'Afrutado': { bg: '#F26B5B', text: '#FFFFFF' },
  'Almizclado': { bg: '#D6CCE2', text: '#0A0B11' },
  'Atalcado': { bg: '#E8D5C8', text: '#0A0B11' },
  'Oud': { bg: '#4A2F1D', text: '#FFFFFF' },
  'Marino / Acuático': { bg: '#4A99B8', text: '#FFFFFF' },
  'Lavanda': { bg: '#9B7EDE', text: '#FFFFFF' },
  'Ahumado': { bg: '#575860', text: '#FFFFFF' },
  'Caramelo': { bg: '#C66B27', text: '#FFFFFF' },
  'Tropical': { bg: '#FF9E2C', text: '#0A0B11' },
  'Floral Blanco': { bg: '#F0EFEA', text: '#0A0B11' }
};

const normKey = (t) => (t || '').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

const EXTRA_ACCORD_COLORS = {
  'frutal': { bg: '#F26B5B', text: '#FFFFFF' },
  'cuero': { bg: '#5A3A2A', text: '#FFFFFF' },
  'cacao': { bg: '#4B2E22', text: '#FFFFFF' },
  'licoroso': { bg: '#8E2B3C', text: '#FFFFFF' },
  'resinoso': { bg: '#A8641E', text: '#FFFFFF' },
  'acuatico': { bg: '#4A99B8', text: '#FFFFFF' },
  'fresco': { bg: '#7CC6D9', text: '#0A0B11' },
  'verde': { bg: '#5FA75A', text: '#FFFFFF' },
  'gourmand': { bg: '#B5703A', text: '#FFFFFF' },
  'cafe': { bg: '#5B3A29', text: '#FFFFFF' },
  'coco': { bg: '#F1E7D0', text: '#0A0B11' },
  'floral': { bg: '#E58FB3', text: '#0A0B11' },
  'mineral': { bg: '#8C9AA6', text: '#FFFFFF' },
  'metalico': { bg: '#A9B3BC', text: '#0A0B11' },
  'salado': { bg: '#B7D3DC', text: '#0A0B11' },
  'ozonico': { bg: '#A5D6E8', text: '#0A0B11' },
  'balsamico': { bg: '#9A6B3F', text: '#FFFFFF' },
  'avellana': { bg: '#A9794A', text: '#FFFFFF' },
  'castana': { bg: '#8A5A3B', text: '#FFFFFF' },
  'pralin\u00e9': { bg: '#C58A55', text: '#FFFFFF' },
  'praline': { bg: '#C58A55', text: '#FFFFFF' },
  'canela': { bg: '#A4492A', text: '#FFFFFF' },
  'especiado': { bg: '#C0502F', text: '#FFFFFF' },
  'ambarado': { bg: '#D97B29', text: '#FFFFFF' },
  'almizcle': { bg: '#D6CCE2', text: '#0A0B11' },
  'avainillado': { bg: '#F3DC99', text: '#0A0B11' },
  'floral blanco': { bg: '#F0EFEA', text: '#0A0B11' },
  'especiado calido': { bg: '#B83B2A', text: '#FFFFFF' },
  'fresco especiado': { bg: '#73B85D', text: '#0A0B11' }
};
const FALLBACK_ACCORD_PALETTE = [
  { bg: '#C9A66B', text: '#0A0B11' }, { bg: '#7E8CA3', text: '#FFFFFF' },
  { bg: '#9BB07A', text: '#0A0B11' }, { bg: '#B58A9C', text: '#FFFFFF' }
];

const getAccordColor = (name) => {
  const key = normKey(name);
  for (const [k, v] of Object.entries(ACCORD_COLOR_MAP)) {
    if (normKey(k) === key) return v;
  }
  if (EXTRA_ACCORD_COLORS[key]) return EXTRA_ACCORD_COLORS[key];
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return FALLBACK_ACCORD_PALETTE[h % FALLBACK_ACCORD_PALETTE.length];
};

// Limpia un perfil olfativo editado desde el panel antes de guardarlo
const cleanProfile = (f) => {
  const clamp = (n) => Math.max(0, Math.min(100, Math.round(Number(n) || 0)));
  const list = (arr) => (Array.isArray(arr) ? arr : []).map((x) => String(x).trim()).filter(Boolean);
  const seasons = f.seasons || {};
  return {
    ...f,
    accords: (f.accords || [])
      .filter((a) => a && String(a.name || '').trim())
      .map((a) => ({ name: String(a.name).trim(), pct: clamp(a.pct) })),
    pyramid: { top: list(f.pyramid?.top), heart: list(f.pyramid?.heart), base: list(f.pyramid?.base) },
    seasons: {
      winter: clamp(seasons.winter), spring: clamp(seasons.spring), summer: clamp(seasons.summer),
      autumn: clamp(seasons.autumn), day: clamp(seasons.day), night: clamp(seasons.night)
    },
    longevity: String(f.longevity || '').trim(),
    longevityPct: clamp(f.longevityPct),
    sillage: String(f.sillage || '').trim(),
    sillagePct: clamp(f.sillagePct)
  };
};

const getFragranticaProfile = (product) => {
  if (product.fragrantica && product.fragrantica.accords?.length > 0) {
    const f = product.fragrantica;
    return {
      ...f,
      accords: f.accords.map((a) => ({ ...a, ...getAccordColor(a.name) })),
      pyramid: {
        top: f.pyramid?.top || [], heart: f.pyramid?.heart || [], base: f.pyramid?.base || []
      },
      seasons: { winter: 0, spring: 0, summer: 0, autumn: 0, day: 0, night: 0, ...(f.seasons || {}) },
      longevity: f.longevity || '',
      longevityPct: f.longevityPct ?? 0,
      sillage: f.sillage || '',
      sillagePct: f.sillagePct ?? 0
    };
  }

  const fullText = `${product.name} ${product.brand} ${product.notes || ''}`.toUpperCase();
  const rawNotes = (product.notes || 'Bergamota, especias árabes, corazón de ámbar, maderas orientales, almizcle y vainilla')
    .split(/,| y |\./)
    .map((s) => s.trim())
    .filter(Boolean);

  const topNotes = rawNotes.slice(0, 2).length ? rawNotes.slice(0, 2) : ['Bergamota', 'Especias Frescas'];
  const heartNotes = rawNotes.slice(2, 4).length ? rawNotes.slice(2, 4) : ['Ámbar Oriental', 'Lavanda Imperial'];
  const baseNotes = rawNotes.slice(4).length ? rawNotes.slice(4) : ['Vainilla Absoluta', 'Almizcle', 'Maderas Preciosas'];

  // Perfiles inspirados en Fragrantica según la familia del perfume
  if (fullText.includes('AMBER OUD GOLD') || fullText.includes('TROPICAL') || fullText.includes('MAYAR')) {
    return {
      accords: [
        { name: 'Dulce', pct: 100, ...ACCORD_COLOR_MAP['Dulce'] },
        { name: 'Afrutado', pct: 94, ...ACCORD_COLOR_MAP['Afrutado'] },
        { name: 'Ámbar', pct: 82, ...ACCORD_COLOR_MAP['Ámbar'] },
        { name: 'Vainilla', pct: 76, ...ACCORD_COLOR_MAP['Vainilla'] },
        { name: 'Almizclado', pct: 68, ...ACCORD_COLOR_MAP['Almizclado'] },
        { name: 'Atalcado', pct: 55, ...ACCORD_COLOR_MAP['Atalcado'] }
      ],
      pyramid: { top: topNotes, heart: heartNotes, base: baseNotes },
      seasons: { winter: 70, spring: 92, summer: 88, autumn: 82, day: 86, night: 78 },
      longevity: 'Muy Duradera (10 - 12+ hrs)',
      longevityPct: 94,
      sillage: 'Enorme / Estela Pesada',
      sillagePct: 90,
      occasions: 'Salidas especiales, uso diario sofisticado, citas y climas templados a cálidos.'
    };
  }

  if (fullText.includes('CLUB DE NUIT') || fullText.includes('HAWAS') || fullText.includes('ATLANTIS') || fullText.includes('WHITE')) {
    return {
      accords: [
        { name: 'Cítrico', pct: 100, ...ACCORD_COLOR_MAP['Cítrico'] },
        { name: 'Afrutado', pct: 86, ...ACCORD_COLOR_MAP['Afrutado'] },
        { name: 'Aromático', pct: 79, ...ACCORD_COLOR_MAP['Aromático'] },
        { name: 'Amaderado', pct: 74, ...ACCORD_COLOR_MAP['Amaderado'] },
        { name: 'Fresco Especiado', pct: 68, ...ACCORD_COLOR_MAP['Fresco Especiado'] },
        { name: 'Ahumado', pct: 60, ...ACCORD_COLOR_MAP['Ahumado'] }
      ],
      pyramid: { top: topNotes, heart: heartNotes, base: baseNotes },
      seasons: { winter: 65, spring: 95, summer: 96, autumn: 80, day: 94, night: 82 },
      longevity: 'Duradera (8 - 10 hrs)',
      longevityPct: 88,
      sillage: 'Fuerte / Gran Proyección',
      sillagePct: 86,
      occasions: 'Versátil todo terreno: oficina, uso diario, eventos formales y días soleados.'
    };
  }

  if (fullText.includes('YARA') || fullText.includes('KISS')) {
    return {
      accords: [
        { name: 'Dulce', pct: 100, ...ACCORD_COLOR_MAP['Dulce'] },
        { name: 'Vainilla', pct: 92, ...ACCORD_COLOR_MAP['Vainilla'] },
        { name: 'Atalcado', pct: 84, ...ACCORD_COLOR_MAP['Atalcado'] },
        { name: 'Tropical', pct: 75, ...ACCORD_COLOR_MAP['Tropical'] },
        { name: 'Afrutado', pct: 70, ...ACCORD_COLOR_MAP['Afrutado'] },
        { name: 'Almizclado', pct: 62, ...ACCORD_COLOR_MAP['Almizclado'] }
      ],
      pyramid: { top: topNotes, heart: heartNotes, base: baseNotes },
      seasons: { winter: 75, spring: 96, summer: 85, autumn: 86, day: 92, night: 78 },
      longevity: 'Duradera (8 - 10 hrs)',
      longevityPct: 85,
      sillage: 'Moderada a Fuerte',
      sillagePct: 80,
      occasions: 'Uso diario femenino, brunch, citas románticas y primavera/verano.'
    };
  }

  // Perfil Árabe Nocturno / Especiado / Bourbon / 9PM / Vulcan / Mandarin
  return {
    accords: [
      { name: 'Especiado Cálido', pct: 100, ...ACCORD_COLOR_MAP['Especiado Cálido'] },
      { name: 'Ámbar', pct: 92, ...ACCORD_COLOR_MAP['Ámbar'] },
      { name: 'Vainilla', pct: 86, ...ACCORD_COLOR_MAP['Vainilla'] },
      { name: 'Amaderado', pct: 78, ...ACCORD_COLOR_MAP['Amaderado'] },
      { name: 'Dulce', pct: 72, ...ACCORD_COLOR_MAP['Dulce'] },
      { name: 'Aromático', pct: 64, ...ACCORD_COLOR_MAP['Aromático'] }
    ],
    pyramid: { top: topNotes, heart: heartNotes, base: baseNotes },
    seasons: { winter: 96, spring: 72, summer: 52, autumn: 95, day: 68, night: 98 },
    longevity: 'Muy Duradera (10 - 12+ hrs)',
    longevityPct: 92,
    sillage: 'Fuerte a Enorme',
    sillagePct: 89,
    occasions: 'Noches especiales, salidas nocturnas, citas elegantes y climas frescos o fríos.'
  };
};

// ============================================================================
// 3. ILUSTRADOR MINIMALISTA DE FRASCOS ÁRABES (ESTÉTICA BOUTIQUE)
// ============================================================================
const PerfumeBottleVisual = ({ product, className = 'w-full h-48', compact = false }) => {
  const [imgError, setImgError] = useState(false);

  if (product.image && !imgError) {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center bg-[#FAF9F6] ${className}`}>
        <img
          src={product.image}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-108"
        />
      </div>
    );
  }

  const getBottleTheme = () => {
    const name = (product.name + ' ' + product.brand).toUpperCase();
    if (name.includes('AMBER OUD GOLD') || name.includes('OPULENT')) {
      return { bottle: '#C8A464', second: '#8C6830', accent: '#FFF2D6', cap: '#D1B27E', shape: 'arch' };
    }
    if (name.includes('VULCAN') || name.includes('FIRE') || name.includes('NITRO RED') || name.includes('BOURBON') || name.includes('REBEL')) {
      return { bottle: '#7D1924', second: '#3B080E', accent: '#D1B27E', cap: '#16171D', shape: 'angular' };
    }
    if (name.includes('YARA') || name.includes('MAYAR') || name.includes('KISS')) {
      return { bottle: '#D99FB2', second: '#A86B80', accent: '#FFF5F8', cap: '#D1B27E', shape: 'pillar' };
    }
    if (name.includes('MANDARIN') || name.includes('TROPICAL')) {
      return { bottle: '#CF6A23', second: '#7E390B', accent: '#F7D299', cap: '#1A2232', shape: 'cylinder' };
    }
    if (name.includes('ICE') || name.includes('ATLANTIS') || name.includes('MALIBU') || name.includes('UNIVERSE') || name.includes('CHROME')) {
      return { bottle: '#367A99', second: '#173E52', accent: '#E0F5FF', cap: '#BCC2CC', shape: 'flask' };
    }
    if (name.includes('WHITE') || name.includes('SILVER')) {
      return { bottle: '#CFD3DC', second: '#8C92A0', accent: '#D1B27E', cap: '#A6ACB8', shape: 'cylinder' };
    }
    return { bottle: '#1B1D29', second: '#0A0B11', accent: '#D1B27E', cap: '#D1B27E', shape: 'square' };
  };

  const theme = getBottleTheme();

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] via-[#F3F1EC] to-[#EAE6DF] ${className}`}
    >
      {/* Sombra de pedestal suave tipo ElitePerfumes / FragranceNet */}
      <div className="absolute bottom-3 w-24 h-3 rounded-full bg-black/15 blur-xs" />

      <svg
        viewBox="0 0 180 220"
        className={`${compact ? 'w-28 h-36' : 'w-36 h-44'} relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_14px_rgba(10,11,17,0.18)]`}
      >
        <defs>
          <linearGradient id={`bGrad-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.bottle} />
            <stop offset="60%" stopColor={theme.second} />
            <stop offset="100%" stopColor="#0A0B11" />
          </linearGradient>
          <linearGradient id={`gPlate-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7E8C8" />
            <stop offset="50%" stopColor="#D1B27E" />
            <stop offset="100%" stopColor="#94723C" />
          </linearGradient>
        </defs>

        {theme.shape === 'arch' ? (
          <path d="M70 18 C70 8 110 8 110 18 L106 46 L74 46 Z" fill={`url(#gPlate-${product.id})`} />
        ) : theme.shape === 'pillar' ? (
          <rect x="73" y="16" width="34" height="30" rx="4" fill={`url(#gPlate-${product.id})`} />
        ) : (
          <g>
            <rect x="68" y="16" width="44" height="24" rx="3" fill={theme.cap} stroke="#D1B27E" strokeWidth="1.2" />
            <rect x="78" y="40" width="24" height="8" fill={`url(#gPlate-${product.id})`} />
          </g>
        )}

        <rect x="76" y="45" width="28" height="8" rx="1" fill={`url(#gPlate-${product.id})`} />

        {theme.shape === 'arch' ? (
          <path
            d="M46 95 C46 62 66 53 90 53 C114 53 134 62 134 95 L134 188 C134 195 128 200 120 200 L60 200 C52 200 46 195 46 188 Z"
            fill={`url(#bGrad-${product.id})`}
            stroke="#D1B27E"
            strokeWidth="1.8"
          />
        ) : theme.shape === 'flask' ? (
          <path
            d="M55 55 L125 55 C138 75 140 165 124 198 L56 198 C40 165 42 75 55 55 Z"
            fill={`url(#bGrad-${product.id})`}
            stroke="#D1B27E"
            strokeWidth="1.5"
          />
        ) : (
          <rect
            x="44"
            y="53"
            width="92"
            height="146"
            rx={theme.shape === 'cylinder' ? '26' : '8'}
            fill={`url(#bGrad-${product.id})`}
            stroke="#D1B27E"
            strokeWidth="1.5"
          />
        )}

        <path d="M52 62 L57 62 L57 188 L52 188 Z" fill="#FFFFFF" opacity="0.22" />

        <rect
          x="56"
          y="84"
          width="68"
          height="74"
          rx="3"
          fill="#0A0B11"
          fillOpacity="0.88"
          stroke={`url(#gPlate-${product.id})`}
          strokeWidth="1.4"
        />

        <path d="M90 93 L94 97 L90 101 L86 97 Z" fill="#D1B27E" />

        <text
          x="90"
          y="116"
          textAnchor="middle"
          fill="#D1B27E"
          fontSize="7"
          fontWeight="700"
          letterSpacing="1.4"
          fontFamily="sans-serif"
        >
          {product.brand.slice(0, 14)}
        </text>

        <text
          x="90"
          y="131"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="6.5"
          fontWeight="500"
          letterSpacing="0.8"
          fontFamily="sans-serif"
        >
          {product.shortTitle || product.name.split(' ').slice(0, 2).join(' ')}
        </text>

        <text
          x="90"
          y="147"
          textAnchor="middle"
          fill="#A0A0A8"
          fontSize="5"
          letterSpacing="1.1"
          fontFamily="sans-serif"
        >
          {product.concentration || 'EAU DE PARFUM'}
        </text>
      </svg>
    </div>
  );
};

// ============================================================================
// 4. BASE DE DATOS INICIAL (36 PERFUMES DEL EXCEL DE VENTAS 2026)
// ============================================================================
const INITIAL_PRODUCTS = [
  {
    id: 'al-1',
    brand: 'AL HARAMAIN',
    name: 'Amber Oud Gold Edition Eau de Parfum 120ml',
    shortTitle: 'AMBER OUD GOLD',
    gender: 'UNISEX',
    price: 69990,
    oldPrice: 84990,
    rating: 4.9,
    reviewsCount: 342,
    concentration: 'EAU DE PARFUM · 120ML',
    isViral: true,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 7,
    bestRank: 1,
    notes: 'Bergamota, notas verdes, melón dulce, piña jugosa, ámbar dorado, almizcle blanco y vainilla.',
    image: ''
  },
  {
    id: 'al-2',
    brand: 'FRENCH AVENUE',
    name: 'Vulcan Feu Eau de Parfum 100ml',
    shortTitle: 'VULCAN FEU',
    gender: 'UNISEX',
    price: 49990,
    oldPrice: 59990,
    rating: 4.9,
    reviewsCount: 218,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 6,
    bestRank: 1,
    notes: 'Especias cálidas, mango asado, maderas ahumadas, ámbar rojo e incienso oriental.',
    image: ''
  },
  {
    id: 'al-3',
    brand: 'ARMAF',
    name: 'Club de Nuit Intense Man Eau de Toilette 105ml',
    shortTitle: 'CLUB DE NUIT INTENSE',
    gender: 'HOMBRE',
    price: 39990,
    oldPrice: 49990,
    rating: 4.8,
    reviewsCount: 510,
    concentration: 'EAU DE TOILETTE · 105ML',
    isViral: true,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 9,
    bestRank: 1,
    notes: 'Limón, piña, grosella negra, abedul ahumado, jazmín, almizcle y ámbar gris.',
    image: ''
  },
  {
    id: 'al-4',
    brand: 'LATTAFA',
    name: 'Asad Bourbon Eau de Parfum 100ml',
    shortTitle: 'ASAD BOURBON',
    gender: 'HOMBRE',
    price: 34990,
    oldPrice: 42990,
    rating: 4.9,
    reviewsCount: 289,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 8,
    bestRank: 2,
    notes: 'Pimienta rosa, lavanda, ciruela mirabel, cacao tostado, vainilla bourbon, ámbar y vetiver.',
    image: ''
  },
  {
    id: 'al-5',
    brand: 'ARMAF',
    name: 'Odyssey Mandarin Sky Eau de Parfum 100ml',
    shortTitle: 'MANDARIN SKY',
    gender: 'HOMBRE',
    price: 42990,
    oldPrice: 52990,
    rating: 4.8,
    reviewsCount: 194,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 6,
    bestRank: 2,
    notes: 'Mandarina jugosa, naranja, azafrán, caramelo intenso, haba tonka y ambroxan.',
    image: ''
  },
  {
    id: 'al-6',
    brand: 'RASASI',
    name: 'Hawas Ice For Him Eau de Parfum 100ml',
    shortTitle: 'HAWAS ICE',
    gender: 'HOMBRE',
    price: 46990,
    oldPrice: 56990,
    rating: 4.9,
    reviewsCount: 276,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 5,
    bestRank: 1,
    notes: 'Manzana helada, limón italiano, menta fresca, ciruela, cardamomo y almizcle.',
    image: ''
  },
  {
    id: 'al-7',
    brand: 'AFNAN',
    name: '9PM Night Out Extracto de Perfume 100ml',
    shortTitle: '9PM NIGHT OUT',
    gender: 'HOMBRE',
    price: 69990,
    oldPrice: 79990,
    rating: 4.9,
    reviewsCount: 164,
    concentration: 'EXTRACTO DE PERFUME · 100ML',
    isViral: true,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 2,
    bestRank: 1,
    notes: 'Manzana roja, canela, lavanda nocturna, vainilla densa, haba tonka y pachulí.',
    image: ''
  },
  {
    id: 'al-8',
    brand: 'RASASI',
    name: 'Hawas Fire For Him Eau de Parfum 100ml',
    shortTitle: 'HAWAS FIRE',
    gender: 'HOMBRE',
    price: 49990,
    oldPrice: 59990,
    rating: 4.8,
    reviewsCount: 142,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 4,
    bestRank: 2,
    notes: 'Salvia esclarea, jazmín egipcio, notas marinas cálidas, ámbar mineral y maderas.',
    image: ''
  },
  {
    id: 'al-9',
    brand: 'ARMAF',
    name: 'Odyssey Homme White Edition Eau de Parfum 100ml',
    shortTitle: 'ODYSSEY WHITE',
    gender: 'HOMBRE',
    price: 44990,
    oldPrice: 51990,
    rating: 4.7,
    reviewsCount: 118,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 4,
    bestRank: 4,
    notes: 'Pomelo rosado, yuzu, pimienta rosa, hojas de violeta, notas marinas y madera de gaiac.',
    image: ''
  },
  {
    id: 'al-10',
    brand: 'LATTAFA',
    name: 'Yara Eau de Parfum 100ml',
    shortTitle: 'YARA PINK',
    gender: 'MUJER',
    price: 29990,
    oldPrice: 36990,
    rating: 4.9,
    reviewsCount: 420,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 3,
    bestRank: 4,
    notes: 'Orquídea, heliotropo, mandarina, acorde gourmand tropical, vainilla y almizcle cremoso.',
    image: ''
  },
  {
    id: 'al-11',
    brand: 'MAISON ALHAMBRA',
    name: 'Your Touch For Men Eau de Parfum 100ml',
    shortTitle: 'YOUR TOUCH MEN',
    gender: 'HOMBRE',
    price: 27990,
    oldPrice: 34990,
    rating: 4.7,
    reviewsCount: 95,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 2,
    bestRank: 4,
    notes: 'Cardamomo, pimienta rosa, hojas de violeta, menta, castaña confitada y vainilla.',
    image: ''
  },
  {
    id: 'al-12',
    brand: 'AFNAN',
    name: '9PM Pour Homme Eau de Parfum 100ml',
    shortTitle: '9PM POUR HOMME',
    gender: 'HOMBRE',
    price: 39990,
    oldPrice: 47990,
    rating: 4.9,
    reviewsCount: 380,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 4,
    bestRank: 5,
    notes: 'Manzana, canela silvestre, lavanda, flor de azahar, vainilla y haba tonka.',
    image: ''
  },
  {
    id: 'al-13',
    brand: 'RASASI',
    name: 'Hawas Malibu For Him Eau de Parfum 100ml',
    shortTitle: 'HAWAS MALIBU',
    gender: 'HOMBRE',
    price: 49990,
    oldPrice: 58990,
    rating: 4.8,
    reviewsCount: 87,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 2,
    bestRank: 5,
    notes: 'Cítricos costeros, agua de coco, bergamota, maderas blancas y ámbar gris.',
    image: ''
  },
  {
    id: 'al-14',
    brand: 'RASASI',
    name: 'Hawas Chrome For Him Eau de Parfum 100ml',
    shortTitle: 'HAWAS CHROME',
    gender: 'HOMBRE',
    price: 62990,
    oldPrice: 72990,
    rating: 4.8,
    reviewsCount: 64,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 5,
    notes: 'Aldehídos metálicos, bergamota fresca, lavanda plateada, cedro y ambroxan puro.',
    image: ''
  },
  {
    id: 'al-15',
    brand: 'DUMONT',
    name: 'Nitro Red Eau de Parfum 100ml',
    shortTitle: 'NITRO RED',
    gender: 'HOMBRE',
    price: 39990,
    oldPrice: 48990,
    rating: 4.9,
    reviewsCount: 215,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 4,
    bestRank: 6,
    notes: 'Sandía jugosa, manzana, lavanda, bergamota, cedro, calamus y ámbar.',
    image: ''
  },
  {
    id: 'al-16',
    brand: 'LATTAFA',
    name: 'Opulent Dubai Eau de Parfum 100ml',
    shortTitle: 'OPULENT DUBAI',
    gender: 'UNISEX',
    price: 32990,
    oldPrice: 39990,
    rating: 4.7,
    reviewsCount: 108,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 2,
    bestRank: 6,
    notes: 'Azafrán real, rosa de Damasco, oud suave, praliné dorado y vainilla oriental.',
    image: ''
  },
  {
    id: 'al-17',
    brand: 'FRAGRANCE WORLD',
    name: 'Valentia Rome Intense Eau de Parfum 100ml',
    shortTitle: 'VALENTIA ROME',
    gender: 'HOMBRE',
    price: 32990,
    oldPrice: 39990,
    rating: 4.7,
    reviewsCount: 79,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 6,
    notes: 'Vainilla negra, lavanda aromática, jengibre especiado y vetiver ahumado.',
    image: ''
  },
  {
    id: 'al-18',
    brand: 'LATTAFA',
    name: 'Asad Eau de Parfum 100ml',
    shortTitle: 'LATTAFA ASAD',
    gender: 'HOMBRE',
    price: 32990,
    oldPrice: 39990,
    rating: 4.8,
    reviewsCount: 460,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 4,
    bestRank: 7,
    notes: 'Pimienta negra, tabaco, piña, café árabe, pachulí, iris, vainilla y benjuí.',
    image: ''
  },
  {
    id: 'al-19',
    brand: 'FRENCH AVENUE',
    name: 'Atlantis Extracto de Parfum 100ml',
    shortTitle: 'ATLANTIS EXTRAIT',
    gender: 'UNISEX',
    price: 49990,
    oldPrice: 59990,
    rating: 4.8,
    reviewsCount: 92,
    concentration: 'EXTRACTO DE PARFUM · 100ML',
    isViral: false,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 7,
    notes: 'Brisa oceánica profunda, cítricos cristalinos, algas nobles y madera flotante.',
    image: ''
  },
  {
    id: 'al-20',
    brand: 'DUMONT',
    name: 'Nitro Red Intensely Extracto de Parfum 100ml',
    shortTitle: 'NITRO INTENSELY',
    gender: 'HOMBRE',
    price: 52990,
    oldPrice: 62990,
    rating: 4.9,
    reviewsCount: 110,
    concentration: 'EXTRACTO DE PARFUM · 100ML',
    isViral: false,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 7,
    notes: 'Frutos rojos intensos, sandía especiada, maderas oscuras y extracto de ámbar.',
    image: ''
  },
  {
    id: 'al-21',
    brand: 'ARMAF',
    name: 'Dunescape Extracto de Perfume 100ml',
    shortTitle: 'DUNESCAPE',
    gender: 'HOMBRE',
    price: 49990,
    oldPrice: 58990,
    rating: 4.7,
    reviewsCount: 68,
    concentration: 'EXTRACTO DE PERFUME · 100ML',
    isViral: false,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 7,
    notes: 'Arena cálida del desierto, cardamomo, mirra, cuero suave y sándalo.',
    image: ''
  },
  {
    id: 'al-22',
    brand: 'RAYHAAN',
    name: 'Tropical Vibe Eau de Parfum 100ml',
    shortTitle: 'TROPICAL VIBE',
    gender: 'UNISEX',
    price: 49990,
    oldPrice: 57990,
    rating: 4.8,
    reviewsCount: 84,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 8,
    notes: 'Mango maduro, maracuyá, néctar de durazno, hibisco y almizcle solar.',
    image: ''
  },
  {
    id: 'al-23',
    brand: 'ARMAF',
    name: 'Infinity Silver Eau de Parfum 100ml',
    shortTitle: 'INFINITY SILVER',
    gender: 'HOMBRE',
    price: 49990,
    oldPrice: 57990,
    rating: 4.7,
    reviewsCount: 73,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 8,
    notes: 'Bergamota plateada, cardamomo, geranio, vetiver y almizcle limpio.',
    image: ''
  },
  {
    id: 'al-24',
    brand: 'JO MILANO',
    name: 'Game of Spades Wildcard Parfum 100ml',
    shortTitle: 'WILDCARD PARFUM',
    gender: 'HOMBRE',
    price: 84990,
    oldPrice: 99990,
    rating: 5.0,
    reviewsCount: 129,
    concentration: 'PARFUM · 100ML',
    isViral: true,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 8,
    notes: 'Azafrán de lujo, almendra amarga, jazmín sambac, cedro y ámbar gris.',
    image: ''
  },
  {
    id: 'al-25',
    brand: 'LATTAFA',
    name: 'Mayar Eau de Parfum 100ml',
    shortTitle: 'LATTAFA MAYAR',
    gender: 'MUJER',
    price: 34990,
    oldPrice: 41990,
    rating: 4.8,
    reviewsCount: 185,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 2,
    bestRank: 9,
    notes: 'Lichi jugoso, frambuesa, hojas de violeta, rosa blanca, peonía y vainilla.',
    image: ''
  },
  {
    id: 'al-26',
    brand: 'LATTAFA PRIDE',
    name: 'Art of Universe Eau de Parfum 100ml',
    shortTitle: 'ART OF UNIVERSE',
    gender: 'HOMBRE',
    price: 49990,
    oldPrice: 59990,
    rating: 4.8,
    reviewsCount: 91,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 9,
    notes: 'Incienso cósmico, pimienta negra, cuero imperial, oud refinado y ámbar.',
    image: ''
  },
  {
    id: 'al-27',
    brand: 'RAVE',
    name: 'Now Eau de Parfum 100ml',
    shortTitle: 'RAVE NOW',
    gender: 'HOMBRE',
    price: 24990,
    oldPrice: 31990,
    rating: 4.8,
    reviewsCount: 230,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 9,
    notes: 'Piña asada intensa, bergamota, grosella negra, cedro, pachulí y vainilla.',
    image: ''
  },
  {
    id: 'al-28',
    brand: 'RAYHAAN',
    name: 'Wolf Eau de Parfum 100ml',
    shortTitle: 'RAYHAAN WOLF',
    gender: 'HOMBRE',
    price: 49990,
    oldPrice: 58990,
    rating: 4.7,
    reviewsCount: 62,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 9,
    notes: 'Lavanda salvaje, limón, humo aromático, manzana verde, vetiver y vainilla.',
    image: ''
  },
  {
    id: 'al-29',
    brand: 'ARMAF',
    name: 'Odyssey Mandarin Sky Elixir Eau de Parfum 100ml',
    shortTitle: 'MANDARIN ELIXIR',
    gender: 'HOMBRE',
    price: 49990,
    oldPrice: 59990,
    rating: 4.9,
    reviewsCount: 114,
    concentration: 'ELIXIR EDP · 100ML',
    isViral: false,
    isNew: true,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 9,
    notes: 'Mandarina concentrada, caramelo tostado, resinas orientales y haba tonka.',
    image: ''
  },
  {
    id: 'al-30',
    brand: 'MAST PERFUME',
    name: 'Stronger Together Eau de Parfum 100ml',
    shortTitle: 'STRONGER TOGETHER',
    gender: 'HOMBRE',
    price: 37990,
    oldPrice: 44990,
    rating: 4.7,
    reviewsCount: 77,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: true,
    salesMonthsInTop10: 1,
    bestRank: 9,
    notes: 'Canela cálida, castaña glaseada, salvia, lavanda, vainilla ahumada y ámbar.',
    image: ''
  },
  {
    id: 'al-31',
    brand: 'AFNAN',
    name: '9PM Rebel Eau de Parfum 100ml',
    shortTitle: '9PM REBEL',
    gender: 'HOMBRE',
    price: 44990,
    oldPrice: 54990,
    rating: 4.9,
    reviewsCount: 158,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: true,
    inPrototype30: false,
    salesMonthsInTop10: 1,
    bestRank: 10,
    notes: 'Piña caramelizada, mandarina, musgo de roble, madera seca y vainilla.',
    image: ''
  },
  {
    id: 'al-32',
    brand: 'FRENCH AVENUE',
    name: 'Liquid Brun Eau de Parfum 100ml',
    shortTitle: 'LIQUID BRUN',
    gender: 'HOMBRE',
    price: 39990,
    oldPrice: 49990,
    rating: 4.9,
    reviewsCount: 245,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: true,
    inPrototype30: false,
    salesMonthsInTop10: 1,
    bestRank: 10,
    notes: 'Canela, flor de azahar, cardamomo, vainilla de Madagascar, praliné y almizcle.',
    image: ''
  },
  {
    id: 'al-33',
    brand: 'LATTAFA',
    name: 'Qaed Al Fursan Eau de Parfum 100ml',
    shortTitle: 'QAED AL FURSAN',
    gender: 'HOMBRE',
    price: 24990,
    oldPrice: 31990,
    rating: 4.8,
    reviewsCount: 312,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: false,
    salesMonthsInTop10: 1,
    bestRank: 10,
    notes: 'Piña tropical intensa, azafrán, bálsamo de abeto, jazmín, cedro y oud.',
    image: ''
  },
  {
    id: 'al-34',
    brand: 'LATTAFA',
    name: 'Yara Elixir Eau de Parfum 100ml',
    shortTitle: 'YARA ELIXIR',
    gender: 'MUJER',
    price: 44990,
    oldPrice: 52990,
    rating: 4.9,
    reviewsCount: 136,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: true,
    isNew: true,
    inPrototype30: false,
    salesMonthsInTop10: 1,
    bestRank: 10,
    notes: 'Frutos rojos cremosos, orquídea imperial, vainilla absoluta y sándalo.',
    image: ''
  },
  {
    id: 'al-35',
    brand: 'MAISON ALHAMBRA',
    name: 'Victorioso Eau de Parfum 100ml',
    shortTitle: 'VICTORIOSO',
    gender: 'HOMBRE',
    price: 27990,
    oldPrice: 34990,
    rating: 4.7,
    reviewsCount: 89,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: false,
    inPrototype30: false,
    salesMonthsInTop10: 1,
    bestRank: 10,
    notes: 'Notas marinas, pomelo, hoja de laurel, jazmín, ámbar gris y madera de gaiac.',
    image: ''
  },
  {
    id: 'al-36',
    brand: 'RAYHAAN',
    name: 'Kiss Eau de Parfum 100ml',
    shortTitle: 'RAYHAAN KISS',
    gender: 'MUJER',
    price: 39990,
    oldPrice: 46990,
    rating: 4.8,
    reviewsCount: 74,
    concentration: 'EAU DE PARFUM · 100ML',
    isViral: false,
    isNew: true,
    inPrototype30: false,
    salesMonthsInTop10: 1,
    bestRank: 10,
    notes: 'Pera dulce, bergamota, rosa turca, peonía, almizcle blanco y vainilla.',
    image: ''
  }
];

const SALES_2026_DATA = [
  { month: 'ENERO', total: 28830581, top1: 'CLUB DE NUIT INTENSE MAN ($39.990)' },
  { month: 'FEBRERO', total: 30128923, top1: 'AMBER OUD GOLD EDITION ($69.990)' },
  { month: 'MARZO', total: 31675811, top1: 'HAWAS ICE FOR HIM ($46.990)' },
  { month: 'ABRIL', total: 28316544, top1: 'VULCAN FEU EDP ($49.990)' },
  { month: 'MAYO', total: 32150496, top1: 'VULCAN FEU EDP ($49.990)' },
  { month: 'JUNIO', total: 28357196, top1: '9PM NIGHT OUT EXTRACTO ($69.990)' },
  { month: 'JULIO', total: 27743732, top1: 'AMBER OUD GOLD EDITION ($69.990)' },
  { month: 'AGOSTO', total: 29751652, top1: 'AMBER OUD GOLD EDITION ($69.990)' },
  { month: 'SEPTIEMBRE', total: 28652150, top1: '9PM NIGHT OUT EXTRACTO ($69.990)' }
];

// CREDENCIALES CONFIDENCIALES DEL ADMINISTRADOR
const ADMIN_EMAIL = 'aromaluxe.catalogo@gmail.com';
const DEFAULT_ADMIN_PASS = 'seccion2';

const INITIAL_BRANDS = [
  { id: 'br-1', name: 'LATTAFA', country: 'Emiratos Árabes Unidos', description: 'Casa líder de perfumería árabe de Dubái reconocida por sus creaciones intensas y lujosas.', logo: '', active: true },
  { id: 'br-2', name: 'ARMAF', country: 'Emiratos Árabes Unidos', description: 'Alta perfumería contemporánea creadora de la legendaria línea Club de Nuit y Odyssey.', logo: '', active: true },
  { id: 'br-3', name: 'AL HARAMAIN', country: 'Emiratos Árabes Unidos', description: 'Tradición desde 1970 en aceites de Oud real y extractos orientales de fijación extrema.', logo: '', active: true },
  { id: 'br-4', name: 'FRENCH AVENUE', country: 'Emiratos Árabes Unidos', description: 'Línea nicho de Fragrance World con presentaciones esculturales y extractos de alta pureza.', logo: '', active: true },
  { id: 'br-5', name: 'RASASI', country: 'Emiratos Árabes Unidos', description: 'Casa familiar de Dubái famosa mundialmente por su colección fresca y potente Hawas.', logo: '', active: true },
  { id: 'br-6', name: 'AFNAN', country: 'Emiratos Árabes Unidos', description: 'Perfumería de autor que fusiona Oriente y Occidente, creadora de la saga viral 9PM.', logo: '', active: true },
  { id: 'br-7', name: 'MAISON ALHAMBRA', country: 'Emiratos Árabes Unidos', description: 'Inspiraciones de alta gama con materias primas orientales seleccionadas.', logo: '', active: true },
  { id: 'br-8', name: 'DUMONT', country: 'Emiratos Árabes Unidos / Francia', description: 'Fragancias modernas de gran proyección lideradas por la línea Nitro.', logo: '', active: true },
  { id: 'br-9', name: 'RAYHAAN', country: 'Emiratos Árabes Unidos', description: 'Perfumería árabe juvenil con acordes tropicales, gourmand y especiados.', logo: '', active: true },
  { id: 'br-10', name: 'JO MILANO', country: 'Estados Unidos / Dubái', description: 'Alta perfumería exclusiva creadora de la lujosa colección Game of Spades.', logo: '', active: true },
  { id: 'br-11', name: 'LATTAFA PRIDE', country: 'Emiratos Árabes Unidos', description: 'División de lujo nicho y coleccionable de la casa Lattafa.', logo: '', active: true },
  { id: 'br-12', name: 'FRAGRANCE WORLD', country: 'Emiratos Árabes Unidos', description: 'Extenso catálogo de fragancias orientales y contemporáneas de gran rendimiento.', logo: '', active: true },
  { id: 'br-13', name: 'RAVE', country: 'Emiratos Árabes Unidos', description: 'Marca moderna enfocada en aromas vibrantes y frutales intensos.', logo: '', active: true },
  { id: 'br-14', name: 'MAST PERFUME', country: 'Emiratos Árabes Unidos', description: 'Extractos especiados y cálidos de gran estela.', logo: '', active: true }
];

const INITIAL_CATEGORIES = [
  { id: 'cat-1', name: 'Hombre', code: 'HOMBRE', parent: '', description: 'Fragancias masculinas de gran carácter y proyección.', active: true },
  { id: 'cat-2', name: 'Mujer', code: 'MUJER', parent: '', description: 'Perfumes femeninos envolventes, dulces y florales orientales.', active: true },
  { id: 'cat-3', name: 'Unisex', code: 'UNISEX', parent: '', description: 'Creaciones sin género con acordes de ámbar, oud y frutas exóticas.', active: true },
  { id: 'cat-4', name: 'Nicho', code: 'NICHO', parent: '', description: 'Ediciones exclusivas de autor y extractos de alta concentración.', active: true },
  { id: 'cat-5', name: 'Árabes', code: 'ARABES', parent: '', description: 'Perfumería tradicional y moderna importada de Dubái.', active: true },
  { id: 'cat-6', name: 'Diseñador', code: 'DISENADOR', parent: '', description: 'Clásicos internacionales y perfiles de diseñador.', active: true },
  { id: 'cat-7', name: 'Sets y estuches', code: 'SETS', parent: '', description: 'Cofres de regalo y presentaciones especiales.', active: true },
  { id: 'cat-8', name: 'Miniaturas y decants', code: 'DECANTS', parent: '', description: 'Formatos de viaje y muestras originales.', active: true }
];

const INITIAL_OLFACTORY_FAMILIES = [
  { id: 'fam-1', name: 'Amaderados', color: '#8B5A2B', description: 'Notas opulentas de sándalo, cedro, vetiver, pachulí y madera de Oud.', image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80' },
  { id: 'fam-2', name: 'Cítricos', color: '#F7D038', description: 'Acordes vibrantes de bergamota, mandarina, pomelo, yuzu y limón italiano.', image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=600&q=80' },
  { id: 'fam-3', name: 'Florales', color: '#D99FB2', description: 'Ramos elegantes de rosa de Damasco, jazmín sambac, azahar y orquídea.', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80' },
  { id: 'fam-4', name: 'Orientales', color: '#D97B29', description: 'Mezclas exóticas de ámbar dorado, mirra, incienso, azafrán y especias cálidas.', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80' },
  { id: 'fam-5', name: 'Acuáticos', color: '#4A99B8', description: 'Brisa marina, notas ozónicas, menta helada y maderas costeras.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  { id: 'fam-6', name: 'Aromáticos', color: '#4E9A74', description: 'Hierbas frescas, lavanda imperial, salvia esclarea, romero y cardamomo.', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80' },
  { id: 'fam-7', name: 'Gourmand', color: '#E35D6A', description: 'Notas adictivas de vainilla bourbon, caramelo tostado, cacao, praliné y frutas dulces.', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' },
  { id: 'fam-8', name: 'Chipre', color: '#575860', description: 'Contraste sofisticado entre salida cítrica y fondo de musgo de roble y ládano.', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80' }
];

const INITIAL_BANNERS = [
  {
    id: 'ban-1',
    title: 'El Arte de la Alta Perfumería Árabe',
    subtitle: 'Fragancias intensas, exóticas y de fijación extraordinaria. Selecciona tus perfumes favoritos en el carrito y finaliza tu cotización directa por WhatsApp.',
    ctaText: 'Ver Catálogo Completo',
    link: '#catalogo-grid',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1800&q=85',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    order: 1,
    active: true
  },
  {
    id: 'ban-2',
    title: 'Colección Extractos Nocturnos de Dubái',
    subtitle: 'Descubre 9PM Night Out, Vulcan Feu y Amber Oud Gold Edition con hasta 12+ horas de proyección en piel.',
    ctaText: 'Ver Los Más Virales',
    link: '#catalogo-grid',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1800&q=85',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    order: 2,
    active: true
  }
];

const INITIAL_COUPONS = [
  { id: 'cup-1', code: 'AROMALUXE10', type: 'percentage', value: 10, scope: 'all', target: 'TODOS', validUntil: '2026-12-31', active: true },
  { id: 'cup-2', code: 'DUBAI5000', type: 'fixed', value: 5000, scope: 'all', target: 'TODOS', validUntil: '2026-12-31', active: true },
  { id: 'cup-3', code: 'LATTAFA15', type: 'percentage', value: 15, scope: 'brand', target: 'LATTAFA', validUntil: '2026-12-31', active: true }
];

const INITIAL_REVIEWS = [
  { id: 'rev-1', productId: 'al-1', productName: 'Amber Oud Gold Edition Eau de Parfum 120ml', author: 'Camila Rojas', rating: 5, comment: 'Increíble duración, me lo apliqué en la mañana y al día siguiente sigue oliendo en la ropa. 100% original.', date: '2026-09-14', status: 'Aprobada', reply: '¡Muchas gracias Camila! Amber Oud Gold es una joya de Al Haramain.' },
  { id: 'rev-2', productId: 'al-2', productName: 'Vulcan Feu Eau de Parfum 100ml', author: 'Matías Valdés', rating: 5, comment: 'Un aroma a mango ahumado y especias único. Recibo cumplidos cada vez que lo uso.', date: '2026-09-18', status: 'Aprobada', reply: '¡Excelente elección Matías! Es nuestro top ventas de la temporada.' },
  { id: 'rev-3', productId: 'al-3', productName: 'Club de Nuit Intense Man Eau de Toilette 105ml', author: 'Javier Morales', rating: 5, comment: 'Llegó sellado impecable a Concepción. Proyección brutal.', date: '2026-09-21', status: 'Pendiente', reply: '' }
];

const INITIAL_SITE_CONFIG = {
  storeName: 'AROMALUXE PERFUMES',
  faviconUrl: '',
  currency: 'CLP ($)',
  domain: 'www.aromaluxeperfumes.cl',
  brandColors: {
    gold: '#D1B27E',
    black: '#0A0B11',
    gray: '#686868',
    smoke: '#F4F4F4'
  },
  typography: {
    heading: 'Cormorant Garamond',
    body: 'Plus Jakarta Sans'
  },
  topBarText: 'PERFUMERÍA ÁRABE 100% ORIGINAL · FIJACIÓN GARANTIZADA · DESPACHOS A TODO CHILE',
  contactEmail: 'aromaluxe.contacto@gmail.com',
  whatsappNumber: '56987654321',
  whatsappGreeting: 'Hola AromaLuxe ✨ ¿En qué te podemos ayudar hoy con tu fragancia árabe?',
  heroTitle: 'El Arte de la Alta Perfumería Árabe',
  heroSubtitle: 'Fragancias intensas, exóticas y de fijación extraordinaria. Selecciona tus perfumes favoritos en el carrito y finaliza tu cotización directa por WhatsApp.',
  heroCtaText: 'Ver Catálogo Completo',
  heroBgImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1800&q=85',
  catalogLimitMode: 'all36',
  socialLinks: {
    instagram: '@aromaluxe.cl',
    tiktok: '@aromaluxe.perfumes',
    facebook: 'AromaLuxe Perfumes Chile'
  },
  seo: {
    metaTitle: 'AromaLuxe Perfumes | Alta Perfumería Árabe Original en Chile',
    metaDescription: 'Catálogo oficial de perfumes árabes 100% originales: Lattafa, Armaf, Al Haramain, Rasasi y French Avenue con despacho a todo Chile.',
    keywords: 'perfumes arabes chile, lattafa chile, amber oud gold, club de nuit intense, vulcan feu, aromaluxe'
  },
  integrations: {
    whatsappApiActive: true,
    googleAnalyticsId: '',
    metaPixelId: '',
    smtpSender: 'aromaluxe.contacto@gmail.com'
  },
  sdkAudit: [
    {
      id: 'sdk-1',
      name: 'WhatsApp Direct Link (wa.me)',
      provider: 'Meta Platforms Inc.',
      purpose: 'Redirección voluntaria iniciada por el usuario para cotizar su carrito.',
      category: 'Esencial / Funcional',
      dataShared: 'Texto del pedido únicamente cuando el usuario pulsa el botón de envío.',
      status: 'Verificado · Sin rastreo en segundo plano',
      enabled: true
    },
    {
      id: 'sdk-2',
      name: 'Google Fonts Stylesheet',
      provider: 'Google LLC',
      purpose: 'Renderizado tipográfico (Cormorant Garamond y Plus Jakarta Sans).',
      category: 'Funcional / Estético',
      dataShared: 'Solicitud estándar de fuentes CSS sin cookies de perfilado.',
      status: 'Auditado · Seguro',
      enabled: true
    },
    {
      id: 'sdk-3',
      name: 'Analítica Interna de Interacciones (1st-Party)',
      provider: 'AromaLuxe Local Storage',
      purpose: 'Contabilizar qué perfumes son más vistos o agregados al carrito sin compartir datos con terceros.',
      category: 'Analítica Propia (First-Party)',
      dataShared: 'Ninguno a servidores externos (100% local).',
      status: 'Cumple Privacidad por Diseño',
      enabled: true
    },
    {
      id: 'sdk-4',
      name: 'Trackers Publicitarios de Terceros (Meta Pixel / Google Ads)',
      provider: 'Terceros',
      purpose: 'Retargeting publicitario.',
      category: 'Marketing (Opcional)',
      dataShared: 'Bloqueado por defecto hasta consentimiento explícito.',
      status: 'Desactivado por defecto',
      enabled: false
    }
  ],
  sectionsVisibility: {
    heroBanner: true,
    trustBar: true,
    featuredProducts: true,
    newReleases: true,
    specialCollections: true,
    featuredBrands: true,
    recommendedProducts: true,
    olfactoryBlog: true,
    faqSection: true,
    aboutUs: true,
    contactSection: true
  },
  aboutUsText: 'AromaLuxe Perfumes nace con la misión de acercar el misterio, la opulencia y la extraordinaria fijación de la alta perfumería de Medio Oriente a todo Chile, trabajando exclusivamente con casas oficiales de Dubái.',
  privacyPolicyText: `POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS (LEY N° 19.628 CHILE)

1. Responsable del Tratamiento: AromaLuxe Perfumes (contacto oficial: aromaluxe.contacto@gmail.com).
2. Datos Recopilados: Únicamente recopilamos los datos que entregas de forma voluntaria y con consentimiento explícito en nuestros formularios (nombre, correo electrónico y reseñas) o al iniciar una cotización por WhatsApp.
3. Finalidad: Gestionar tu cuenta de usuario, responder consultas de cotización, procesar envíos a todo Chile y mejorar nuestro catálogo mediante estadísticas internas anónimas.
4. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición): Puedes solicitar en cualquier momento la modificación o eliminación total de tus datos escribiendo a aromaluxe.contacto@gmail.com.
5. Cero Venta de Datos a Terceros: AromaLuxe jamás vende, arrienda ni cede tu información personal a terceros ni brokers de datos.`,
  termsText: `TÉRMINOS Y CONDICIONES DE USO

1. Información Transparente de Precios: Todos los precios publicados en el catálogo de AromaLuxe Perfumes están expresados en Pesos Chilenos (CLP) e incluyen IVA. No aplicamos cargos ocultos ni suscripciones automáticas (cero patrones oscuros).
2. Proceso de Cotización y Compra: El botón "Agregar al carrito" permite armar tu pedido con cálculo automático. La confirmación de stock y coordinación de pago/despacho se realiza de forma directa y asistida por nuestro WhatsApp oficial.
3. Autenticidad Garantizada: Comercializamos exclusivamente fragancias originales selladas en su empaque de fábrica con código de lote verificable.
4. Propiedad Intelectual: El diseño, logotipo AromaLuxe y las descripciones de notas de perfumes son de uso informativo para orientar la experiencia olfativa del cliente.`,
  refundPolicyText: `POLÍTICA DE REEMBOLSOS, CAMBIOS Y DEVOLUCIONES

En AROMALUXE PERFUMES respetamos íntegramente los derechos del consumidor establecidos en la Ley N° 19.496:

1. Derecho a Retracto y Cambios: Cuentas con un plazo de 10 días corridos desde la recepción de tu pedido para solicitar el cambio o reembolso total de tu compra.
2. Estado del Perfume: Por razones de higiene y sellado hermético de perfumería, para ejercer el retracto voluntario el frasco debe encontrarse sin uso, con su celofán original cerrado y sellos intactos.
3. Garantía Legal por Falla o Daño en Transporte: Si el producto llega roto, con filtraciones o defecto de atomizador, gestionamos el reembolso del 100% de tu dinero o el envío de una unidad nueva sin costo adicional en un plazo máximo de 48 horas hábiles tras reportarlo a aromaluxe.contacto@gmail.com.`,
  cookiesPolicyText: `POLÍTICA DE COOKIES Y ALMACENAMIENTO LOCAL

1. ¿Qué tecnologías utilizamos?: Utilizamos almacenamiento local estricto (First-Party) para recordar los perfumes que agregas a tu carrito de compras, mantener tu sesión iniciada y guardar tu preferencia de consentimiento.
2. Cookies Analíticas (Opcionales): Solo si otorgas tu consentimiento en el banner inferior, registramos métricas internas agregadas sobre qué perfumes reciben más clics para optimizar nuestro stock.
3. Control Total y Sin Patrones Oscuros: Los botones "Aceptar todas" y "Solo esenciales (Rechazar opcionales)" tienen exactamente el mismo tamaño, contraste y facilidad de acceso. Puedes cambiar tu decisión en cualquier momento desde el pie de página.`,
  returnPolicyText: `En AROMALUXE PERFUMES garantizamos la autenticidad y perfecto estado de cada fragancia árabe enviada.

1. Plazo de Solicitud: Cuentas con hasta 10 días corridos desde la recepción de tu pedido para solicitar un cambio, devolución o reembolso.
2. Condición del Producto: Por tratarse de artículos de perfumería, el producto debe encontrarse sin uso, con su celofán original intacto y sellos de seguridad sin abrir.
3. Garantía por Transporte y Reembolsos: Si tu frasco presenta alguna anomalía de fábrica o daño en el envío, escríbenos a aromaluxe.contacto@gmail.com o a nuestro WhatsApp adjuntando fotografías al recibirlo para gestionar la reposición inmediata o el reembolso íntegro sin costo.`,
  faqs: [
    {
      id: 'faq-1',
      question: '¿Los perfumes árabes de AromaLuxe son 100% originales?',
      answer: 'Sí, absolutamente. Todas nuestras fragancias de casas como Lattafa, Armaf, Al Haramain, Rasasi, Afnan y French Avenue son importadas en su caja sellada original con código de lote verificable.'
    },
    {
      id: 'faq-2',
      question: '¿Cómo funciona el carrito y la cotización por WhatsApp?',
      answer: 'Haz clic en "Agregar al carrito" en todos los perfumes que te interesen. Luego abre tu carrito arriba a la derecha, revisa el detalle y total acumulado, y pulsa "Cotizar al WhatsApp": se enviará automáticamente tu pedido detallado con precios unitarios y el total final.'
    },
    {
      id: 'faq-3',
      question: '¿Cómo puedo ver las notas de perfumes y acordes de cada fragancia?',
      answer: 'Al hacer clic sobre la imagen o el nombre de cualquier perfume del catálogo, se abrirá nuestra guía de Notas de Perfumes con sus acordes principales, pirámide olfativa, duración y estaciones recomendadas.'
    },
    {
      id: 'faq-4',
      question: '¿Cuáles son los métodos de pago y tiempos de envío?',
      answer: 'Realizamos envíos asegurados a todo Chile mediante Starken, Chilexpress y Blue Express. Puedes abonar mediante transferencia o link de pago con tarjetas al confirmar tu carrito por WhatsApp.'
    }
  ],
  blogs: [
    {
      id: 'blog-1',
      title: 'Diferencia entre Extrait de Parfum, EDP y EDT',
      category: 'EDUCACIÓN OLFATIVA',
      readTime: '3 min',
      excerpt: 'Comprende cómo la concentración de aceites esenciales en la perfumería árabe define su proyección y duración de más de 12 horas.',
      content: 'La perfumería árabe destaca mundialmente por su generosa concentración de aceites aromáticos. Mientras que un Eau de Toilette (EDT) tradicional posee entre un 8% y 12% de esencia, los Eau de Parfum (EDP) árabes suelen superar el 18% al 22%, y los Extractos de Perfume (Extrait de Parfum) como 9PM Night Out o Atlantis alcanzan hasta un 30%-35% de concentración pura.'
    },
    {
      id: 'blog-2',
      title: 'El secreto del Oud, el Ámbar y las Especias de Dubái',
      category: 'INGREDIENTES DE LUJO',
      readTime: '4 min',
      excerpt: 'Por qué notas como el ámbar dorado, el azafrán y la madera de agar convierten cada fragancia en un sello inolvidable.',
      content: 'Conocido como "oro líquido", el Oud junto al ámbar resinoso y la vainilla bourbon forman la columna vertebral de la perfumería de Medio Oriente. Estas moléculas pesadas se evaporan lentamente, permitiendo que el perfume evolucione durante horas en piel.'
    },
    {
      id: 'blog-3',
      title: '¿Cómo leer una pirámide olfativa y sus notas de perfumes?',
      category: 'GUÍA DE NOTAS',
      readTime: '3 min',
      excerpt: 'Aprende a distinguir entre las notas de salida, el corazón aromático y el secado profundo de tu perfume.',
      content: 'Las notas de salida son la primera impresión durante los primeros 15 minutos (generalmente cítricos o frutas). Las notas de corazón emergen tras media hora definiendo la personalidad del perfume, mientras que las notas de fondo (ámbar, oud, almizcle, vainilla) permanecen adheridas a tu piel por más de 10 horas.'
    }
  ]
};

const formatCLP = (amount) => {
  const num = Number(amount) || 0;
  return '$' + num.toLocaleString('es-CL');
};

const normalizeProductDefaults = (p, idx = 0) => ({
  status: 'active', // 'active' | 'inactive' | 'draft'
  stock: typeof p.stock === 'number' ? p.stock : 15 + (idx % 20),
  minStock: typeof p.minStock === 'number' ? p.minStock : 5,
  sizes: Array.isArray(p.sizes) && p.sizes.length ? p.sizes : ['100 ml'],
  concentrationType: p.concentrationType || (p.concentration?.includes('EXTRACTO') ? 'Extracto de Perfume' : p.concentration?.includes('TOILETTE') ? 'EDT' : p.concentration?.includes('PARFUM ·') && !p.concentration?.includes('EAU') ? 'Parfum' : 'EDP'),
  discountPct: typeof p.discountPct === 'number' ? p.discountPct : 0,
  tags: Array.isArray(p.tags)
    ? p.tags
    : [
        ...(p.isNew ? ['nuevo'] : []),
        ...(p.isViral ? ['destacado'] : []),
        ...(p.oldPrice && p.oldPrice > p.price ? ['oferta'] : [])
      ],
  olfactoryFamily: p.olfactoryFamily || (p.gender === 'MUJER' ? 'Gourmand' : 'Orientales'),
  categoryCustom: p.categoryCustom || 'Árabes',
  updatedAt: p.updatedAt || '2026-09-25 18:30',
  ...p
});

const PROFILES_APPLIED_KEY = 'aromaluxe_profiles_applied_v1';
const applyOfficialProfiles = (list) =>
  list.map((p) => (PERFUME_PROFILES[p.id] ? { ...p, fragrantica: PERFUME_PROFILES[p.id] } : p));

export default function App() {
  // ============================================================================
  // ESTADOS PRINCIPALES Y PERSISTENCIA
  // ============================================================================
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_products_v3');
      let raw = saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
      // Los perfiles olfativos oficiales se aplican una sola vez; luego se editan desde el panel
      if (!localStorage.getItem(PROFILES_APPLIED_KEY)) raw = applyOfficialProfiles(raw);
      return raw.map((p, idx) => normalizeProductDefaults(p, idx));
    } catch {
      return applyOfficialProfiles(INITIAL_PRODUCTS).map((p, idx) => normalizeProductDefaults(p, idx));
    }
  });

  const [siteConfig, setSiteConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_config_v3');
      return saved ? { ...INITIAL_SITE_CONFIG, ...JSON.parse(saved) } : INITIAL_SITE_CONFIG;
    } catch {
      return INITIAL_SITE_CONFIG;
    }
  });

  // Estados de los 12 Módulos del Panel de Administración de Perfumería
  const [brandsList, setBrandsList] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_brands_v1');
      return saved ? JSON.parse(saved) : INITIAL_BRANDS;
    } catch {
      return INITIAL_BRANDS;
    }
  });

  const [categoriesList, setCategoriesList] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_categories_v1');
      return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
    } catch {
      return INITIAL_CATEGORIES;
    }
  });

  const [olfactoryFamilies, setOlfactoryFamilies] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_families_v1');
      return saved ? JSON.parse(saved) : INITIAL_OLFACTORY_FAMILIES;
    } catch {
      return INITIAL_OLFACTORY_FAMILIES;
    }
  });

  const [inventoryLogs, setInventoryLogs] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_inv_logs_v1');
      return saved
        ? JSON.parse(saved)
        : [
            { id: 'log-1', date: '2026-09-25 14:20', productName: 'Amber Oud Gold Edition 120ml', type: 'Entrada', qty: 24, variant: '120 ml', note: 'Importación Dubái Lote #402', user: ADMIN_EMAIL },
            { id: 'log-2', date: '2026-09-26 11:05', productName: 'Vulcan Feu EDP 100ml', type: 'Salida', qty: 4, variant: '100 ml', note: 'Venta WhatsApp #1094', user: ADMIN_EMAIL }
          ];
    } catch {
      return [];
    }
  });

  const [bannersList, setBannersList] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_banners_v1');
      return saved ? JSON.parse(saved) : INITIAL_BANNERS;
    } catch {
      return INITIAL_BANNERS;
    }
  });

  const [couponsList, setCouponsList] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_coupons_v1');
      return saved ? JSON.parse(saved) : INITIAL_COUPONS;
    } catch {
      return INITIAL_COUPONS;
    }
  });

  const [reviewsList, setReviewsList] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_reviews_v1');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  const [adminActivityLogs, setAdminActivityLogs] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_audit_v1');
      return saved
        ? JSON.parse(saved)
        : [
            { id: 'act-1', date: '2026-09-28 10:00', user: ADMIN_EMAIL, role: 'Super Administrador', action: 'Inicialización de los 12 módulos del Panel Perfume Admin' }
          ];
    } catch {
      return [];
    }
  });

  // Base de datos de usuarios registrados (incluye cuenta administradora confidencial con clave seccion2)
  const [usersDb, setUsersDb] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_users_v4');
      if (saved) {
        const parsed = JSON.parse(saved);
        const hasAdmin = parsed.some((u) => u.email.toLowerCase() === ADMIN_EMAIL);
        if (!hasAdmin) {
          return [
            {
              id: 'usr-admin-1',
              name: 'Administrador AromaLuxe',
              email: ADMIN_EMAIL,
              password: DEFAULT_ADMIN_PASS,
              role: 'Super Administrador',
              permissions: ['dashboard', 'products', 'brands', 'categories', 'families', 'inventory', 'banners', 'sections', 'coupons', 'reviews', 'users', 'settings']
            },
            ...parsed
          ];
        }
        return parsed.map((u) =>
          u.email.toLowerCase() === ADMIN_EMAIL ? { ...u, password: u.password === 'seccion 2' ? 'seccion2' : u.password } : u
        );
      }
    } catch {
      // Fallback
    }
    return [
      {
        id: 'usr-admin-1',
        name: 'Administrador AromaLuxe',
        email: ADMIN_EMAIL,
        password: DEFAULT_ADMIN_PASS,
        role: 'Super Administrador',
        permissions: ['dashboard', 'products', 'brands', 'categories', 'families', 'inventory', 'banners', 'sections', 'coupons', 'reviews', 'users', 'settings']
      }
    ];
  });

  // Usuario actualmente con sesión iniciada
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_session_v4');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const isAdminAuthenticated = useMemo(() => {
    if (!currentUser) return false;
    return (
      currentUser.email?.toLowerCase() === ADMIN_EMAIL ||
      currentUser.isAdmin === true ||
      (currentUser.role && currentUser.role !== 'customer')
    );
  }, [currentUser]);

  // Estados de Búsqueda, Filtros y Carrito
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TODOS');
  const [selectedBrand, setSelectedBrand] = useState('TODAS');
  const [sortBy, setSortBy] = useState('featured');
  const [perfumesDropdownOpen, setPerfumesDropdownOpen] = useState(false);
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const brandDropdownRef = useRef(null);

  const [quoteCart, setQuoteCart] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_cart_v2');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [recentlyAddedIds, setRecentlyAddedIds] = useState({});
  const [cartBounce, setCartBounce] = useState(false);

  const resetFactoryDefaults = () => {
    setProducts(applyOfficialProfiles(INITIAL_PRODUCTS).map((p, idx) => normalizeProductDefaults(p, idx)));
    setBlogPosts(INITIAL_BLOG_POSTS);
    setSiteConfig(INITIAL_SITE_CONFIG);
    setBrandsList(INITIAL_BRANDS);
    setCategoriesList(INITIAL_CATEGORIES);
    setOlfactoryFamilies(INITIAL_OLFACTORY_FAMILIES);
    setBannersList(INITIAL_BANNERS);
    setCouponsList(INITIAL_COUPONS);
    setReviewsList(INITIAL_REVIEWS);
    showToast('Base de datos y configuración restauradas a los valores originales');
  };

  // Modales: Notas de Perfumes Mini-Menu, Blog, Políticas, WhatsApp
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [modalQty, setModalQty] = useState(1);
  const [selectedSizeModal, setSelectedSizeModal] = useState('100 ml');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [reviewConsentChecked, setReviewConsentChecked] = useState(false);
  const [selectedBlogModal, setSelectedBlogModal] = useState(null);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'about' | 'privacy' | 'terms' | 'refunds' | 'cookies' | 'sdks'
  const [openFaqId, setOpenFaqId] = useState('faq-1');
  const [isWhatsAppBubbleOpen, setIsWhatsAppBubbleOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Banner de Consentimiento de Cookies (Sin Patrones Oscuros: igualdad visual entre Aceptar y Rechazar)
  const [cookieConsent, setCookieConsent] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_cookie_consent_v1');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);
  const [cookiePrefsDraft, setCookiePrefsDraft] = useState({
    essential: true,
    analytics: true,
    marketing: false
  });

  // Recolección de Datos de Interacción de Perfumes (Más Clickeados y Más Agregados al Carrito)
  const [perfumeTelemetry, setPerfumeTelemetry] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_telemetry_v1');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return {
      'al-1': { clicks: 48, cartAdds: 19, lastClicked: '2026-11-08 21:15' },
      'al-2': { clicks: 42, cartAdds: 16, lastClicked: '2026-11-08 20:40' },
      'al-3': { clicks: 39, cartAdds: 15, lastClicked: '2026-11-08 19:55' },
      'al-4': { clicks: 31, cartAdds: 12, lastClicked: '2026-11-08 18:10' },
      'al-6': { clicks: 27, cartAdds: 10, lastClicked: '2026-11-08 17:30' },
      'al-10': { clicks: 25, cartAdds: 11, lastClicked: '2026-11-08 16:45' },
      'al-7': { clicks: 22, cartAdds: 8, lastClicked: '2026-11-08 15:20' }
    };
  });

  // Estados del Sistema de Autenticación
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConsentChecked, setRegisterConsentChecked] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [recoveryConsentChecked, setRecoveryConsentChecked] = useState(false);
  const [newResetPassword, setNewResetPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authSuccessMsg, setAuthSuccessMsg] = useState('');

  // Panel de Administración (12 Módulos)
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [adminTab, setAdminTab] = useState('dashboard');

  // Blog: publicaciones y navegación pública (#blog, #blog/url-del-articulo)
  const [blogPosts, setBlogPosts] = useState(() => {
    try {
      const saved = localStorage.getItem('aromaluxe_blog_v1');
      return saved ? JSON.parse(saved) : INITIAL_BLOG_POSTS;
    } catch {
      return INITIAL_BLOG_POSTS;
    }
  });
  const parseRouteFromHash = () => {
    const h = window.location.hash.replace(/^#\/?/, '');
    if (h === 'blog') return { view: 'blog', slug: null };
    if (h.startsWith('blog/')) return { view: 'blog', slug: decodeURIComponent(h.slice(5)) };
    return { view: 'home', slug: null };
  };
  const [route, setRoute] = useState(parseRouteFromHash);
  const navigatePublic = (view, slug = null) => {
    const hash = view === 'blog' ? (slug ? `#blog/${slug}` : '#blog') : '';
    window.history.pushState(null, '', window.location.pathname + window.location.search + hash);
    setRoute({ view, slug });
    window.scrollTo({ top: 0 });
  };
  useEffect(() => {
    const onNav = () => setRoute(parseRouteFromHash());
    window.addEventListener('hashchange', onNav);
    window.addEventListener('popstate', onNav);
    return () => {
      window.removeEventListener('hashchange', onNav);
      window.removeEventListener('popstate', onNav);
    };
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem('aromaluxe_blog_v1', JSON.stringify(blogPosts));
    } catch (e) {
      console.error(e);
      showToast('No se pudo guardar el blog: almacenamiento del navegador lleno (usa imágenes más livianas)');
    }
  }, [blogPosts]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [adminSearch, setAdminSearch] = useState('');
  const [adminStatusFilter, setAdminStatusFilter] = useState('ALL');
  const [inventoryFilterLow, setInventoryFilterLow] = useState(false);
  const [stockMovementModal, setStockMovementModal] = useState(null); // { product, type: 'Entrada' | 'Salida', qty: 1, variant: '100 ml', note: '' }
  const [editingBrand, setEditingBrand] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingFamily, setEditingFamily] = useState(null);
  const [editingBanner, setEditingBanner] = useState(null);
  const [editingCoupon, setEditingCoupon] = useState(null);
  const [replyingReviewId, setReplyingReviewId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [editingAdminUser, setEditingAdminUser] = useState(null);
  const [activeBannerIdx, setActiveBannerIdx] = useState(0);
  const fileInputRef = useRef(null);

  const logAdminAction = (actionText) => {
    const newEntry = {
      id: 'act-' + Date.now(),
      date: new Date().toLocaleString('es-CL'),
      user: currentUser?.email || ADMIN_EMAIL,
      role: currentUser?.role || 'Super Administrador',
      action: actionText
    };
    setAdminActivityLogs((prev) => [newEntry, ...prev.slice(0, 49)]);
  };

  // Cerrar mini-menú de marcas al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (brandDropdownRef.current && !brandDropdownRef.current.contains(e.target)) {
        setIsBrandDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Persistencia en localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aromaluxe_products_v3', JSON.stringify(products));
      localStorage.setItem(PROFILES_APPLIED_KEY, '1');
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('aromaluxe_config_v3', JSON.stringify(siteConfig));
    } catch (e) {
      console.error(e);
    }
  }, [siteConfig]);

  useEffect(() => {
    try {
      localStorage.setItem('aromaluxe_brands_v1', JSON.stringify(brandsList));
      localStorage.setItem('aromaluxe_categories_v1', JSON.stringify(categoriesList));
      localStorage.setItem('aromaluxe_families_v1', JSON.stringify(olfactoryFamilies));
      localStorage.setItem('aromaluxe_inv_logs_v1', JSON.stringify(inventoryLogs));
      localStorage.setItem('aromaluxe_banners_v1', JSON.stringify(bannersList));
      localStorage.setItem('aromaluxe_coupons_v1', JSON.stringify(couponsList));
      localStorage.setItem('aromaluxe_reviews_v1', JSON.stringify(reviewsList));
      localStorage.setItem('aromaluxe_audit_v1', JSON.stringify(adminActivityLogs));
    } catch (e) {
      console.error(e);
    }
  }, [brandsList, categoriesList, olfactoryFamilies, inventoryLogs, bannersList, couponsList, reviewsList, adminActivityLogs]);

  useEffect(() => {
    try {
      localStorage.setItem('aromaluxe_users_v4', JSON.stringify(usersDb));
    } catch (e) {
      console.error(e);
    }
  }, [usersDb]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('aromaluxe_session_v4', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('aromaluxe_session_v4');
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentUser]);

  useEffect(() => {
    try {
      localStorage.setItem('aromaluxe_cart_v2', JSON.stringify(quoteCart));
    } catch (e) {
      console.error(e);
    }
  }, [quoteCart]);

  useEffect(() => {
    try {
      localStorage.setItem('aromaluxe_telemetry_v1', JSON.stringify(perfumeTelemetry));
    } catch (e) {
      console.error(e);
    }
  }, [perfumeTelemetry]);

  const handleSaveCookieConsent = (mode) => {
    const payload =
      mode === 'all'
        ? { essential: true, analytics: true, marketing: true, updatedAt: new Date().toLocaleString('es-CL') }
        : mode === 'essential'
        ? { essential: true, analytics: false, marketing: false, updatedAt: new Date().toLocaleString('es-CL') }
        : { ...cookiePrefsDraft, essential: true, updatedAt: new Date().toLocaleString('es-CL') };
    setCookieConsent(payload);
    setIsCookieSettingsOpen(false);
    try {
      localStorage.setItem('aromaluxe_cookie_consent_v1', JSON.stringify(payload));
    } catch (e) {
      console.error(e);
    }
    showToast(
      mode === 'essential'
        ? 'Preferencias guardadas: Solo cookies esenciales activas'
        : 'Preferencias de cookies guardadas correctamente'
    );
  };

  const recordPerfumeInteraction = (productId, type = 'click') => {
    if (cookieConsent && cookieConsent.analytics === false) return;
    const stamp = new Date().toLocaleString('es-CL', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    setPerfumeTelemetry((prev) => {
      const current = prev[productId] || { clicks: 0, cartAdds: 0, lastClicked: stamp };
      return {
        ...prev,
        [productId]: {
          clicks: type === 'click' ? current.clicks + 1 : current.clicks,
          cartAdds: type === 'cart' ? current.cartAdds + 1 : current.cartAdds,
          lastClicked: stamp
        }
      };
    });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  // ============================================================================
  // LÓGICA DE FILTRADO Y CARRITO DE COMPRAS
  // ============================================================================
  const activeBrandNamesSet = useMemo(() => {
    const disabled = new Set(brandsList.filter((b) => !b.active).map((b) => b.name.toUpperCase()));
    return disabled;
  }, [brandsList]);

  const brandsWithCount = useMemo(() => {
    const counts = {};
    products.forEach((p) => {
      if (p.status && p.status !== 'active') return;
      if (activeBrandNamesSet.has(p.brand.toUpperCase())) return;
      if (siteConfig.catalogLimitMode === 'prototype30' && p.inPrototype30 === false) return;
      counts[p.brand] = (counts[p.brand] || 0) + 1;
    });
    const sortedBrands = Object.keys(counts).sort();
    return sortedBrands.map((brand) => ({ name: brand, count: counts[brand] }));
  }, [products, siteConfig.catalogLimitMode, activeBrandNamesSet]);

  const activeCatalogProducts = useMemo(() => {
    let list = products.filter((p) => (!p.status || p.status === 'active') && !activeBrandNamesSet.has(p.brand.toUpperCase()));

    if (siteConfig.catalogLimitMode === 'prototype30') {
      list = list.filter((p) => p.inPrototype30 !== false);
    }

    if (selectedCategory === 'HOMBRE' || selectedCategory === 'MUJER' || selectedCategory === 'UNISEX') {
      list = list.filter((p) => p.gender === selectedCategory);
    } else if (selectedCategory === 'NUEVO') {
      list = list.filter((p) => p.isNew || (p.tags && p.tags.includes('nuevo')));
    } else if (selectedCategory === 'VIRALES') {
      list = list.filter((p) => p.isViral || (p.tags && p.tags.includes('destacado')));
    } else if (selectedCategory !== 'TODOS') {
      list = list.filter(
        (p) =>
          (p.categoryCustom && p.categoryCustom.toUpperCase() === selectedCategory.toUpperCase()) ||
          (p.olfactoryFamily && p.olfactoryFamily.toUpperCase() === selectedCategory.toUpperCase())
      );
    }

    if (selectedBrand !== 'TODAS') {
      list = list.filter((p) => p.brand === selectedBrand);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.gender.toLowerCase().includes(q) ||
          (p.olfactoryFamily && p.olfactoryFamily.toLowerCase().includes(q)) ||
          (p.notes && p.notes.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => (b.salesMonthsInTop10 || 0) - (a.salesMonthsInTop10 || 0));
    }

    return list;
  }, [products, siteConfig.catalogLimitMode, selectedCategory, selectedBrand, searchQuery, sortBy, activeBrandNamesSet]);

  const activeHeroBanners = useMemo(() => {
    const active = [...bannersList].filter((b) => b.active).sort((a, b) => (a.order || 1) - (b.order || 1));
    return active.length > 0 ? active : INITIAL_BANNERS;
  }, [bannersList]);

  const currentHeroBanner = activeHeroBanners[activeBannerIdx % activeHeroBanners.length] || activeHeroBanners[0];

  const cartSubtotalAmount = useMemo(() => {
    return quoteCart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [quoteCart]);

  const cartDiscountAmount = useMemo(() => {
    if (!appliedCoupon || !appliedCoupon.active) return 0;
    if (appliedCoupon.scope === 'brand') {
      const brandSubtotal = quoteCart
        .filter((i) => i.brand.toUpperCase() === appliedCoupon.target.toUpperCase())
        .reduce((acc, i) => acc + i.price * i.qty, 0);
      return appliedCoupon.type === 'percentage'
        ? Math.round((brandSubtotal * appliedCoupon.value) / 100)
        : Math.min(brandSubtotal, appliedCoupon.value);
    }
    if (appliedCoupon.scope === 'product') {
      const prodSubtotal = quoteCart
        .filter((i) => i.id === appliedCoupon.target || i.name.toLowerCase().includes(appliedCoupon.target.toLowerCase()))
        .reduce((acc, i) => acc + i.price * i.qty, 0);
      return appliedCoupon.type === 'percentage'
        ? Math.round((prodSubtotal * appliedCoupon.value) / 100)
        : Math.min(prodSubtotal, appliedCoupon.value);
    }
    return appliedCoupon.type === 'percentage'
      ? Math.round((cartSubtotalAmount * appliedCoupon.value) / 100)
      : Math.min(cartSubtotalAmount, appliedCoupon.value);
  }, [appliedCoupon, quoteCart, cartSubtotalAmount]);

  const cartTotalAmount = useMemo(() => {
    return Math.max(0, cartSubtotalAmount - cartDiscountAmount);
  }, [cartSubtotalAmount, cartDiscountAmount]);

  const cartTotalCount = useMemo(() => {
    return quoteCart.reduce((acc, item) => acc + item.qty, 0);
  }, [quoteCart]);

  const handleApplyCouponCode = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) return;
    const found = couponsList.find((c) => c.code.toUpperCase() === code && c.active);
    if (!found) {
      showToast('El código de cupón ingresado no es válido o expiró');
      return;
    }
    setAppliedCoupon(found);
    showToast(`¡Cupón ${found.code} aplicado correctamente!`);
  };

  const addToQuoteCart = (product, quantity = 1, selectedSize = null) => {
    if ((product.stock ?? 10) <= 0) {
      showToast('Este perfume se encuentra temporalmente sin stock');
      return;
    }
    recordPerfumeInteraction(product.id, 'cart');
    const sizeLabel = selectedSize || (product.sizes && product.sizes[0]) || '100 ml';
    setQuoteCart((prev) => {
      const exists = prev.find((item) => item.id === product.id && (item.selectedSize || '100 ml') === sizeLabel);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id && (item.selectedSize || '100 ml') === sizeLabel
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      }
      return [...prev, { ...product, qty: quantity, selectedSize: sizeLabel }];
    });

    setRecentlyAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setCartBounce(true);
    setTimeout(() => {
      setRecentlyAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1100);
    setTimeout(() => {
      setCartBounce(false);
    }, 600);

    showToast(`✓ "${product.shortTitle || product.name}" agregado al carrito`);
  };

  const updateCartQty = (id, delta) => {
    setQuoteCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeCartItem = (id) => {
    setQuoteCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ============================================================================
  // ENVIAR CARRITO DETALLADO A WHATSAPP (CON PERFUMES, PRECIOS, CUPÓN Y TOTAL)
  // ============================================================================
  const openCartQuoteWhatsApp = () => {
    if (quoteCart.length === 0) return;
    const cleanPhone = siteConfig.whatsappNumber.replace(/\D/g, '');
    const customerInfo = currentUser
      ? `Cliente: *${currentUser.name}* (${currentUser.email})\n\n`
      : '';

    const lines = quoteCart.map(
      (item, idx) =>
        `${idx + 1}. *${item.brand} - ${item.name}* (${item.selectedSize || '100 ml'})\n   Cantidad: ${item.qty} x ${formatCLP(item.price)} = *${formatCLP(item.price * item.qty)}*`
    );

    const couponLine =
      appliedCoupon && cartDiscountAmount > 0
        ? `\nSubtotal: ${formatCLP(cartSubtotalAmount)}\nCupón aplicado (*${appliedCoupon.code}*): -${formatCLP(cartDiscountAmount)}`
        : '';

    const message =
      `Hola *AromaLuxe Perfumes* ✨, quiero cotizar mi carrito de compras:\n\n` +
      customerInfo +
      `*DETALLE DE PERFUMES ELEGIDOS:*\n` +
      `${lines.join('\n\n')}\n` +
      `${couponLine}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `*TOTAL A PAGAR: ${formatCLP(cartTotalAmount)}*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n\n` +
      `¿Me confirman disponibilidad y datos para finalizar la compra?`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openGeneralWhatsApp = (customText) => {
    const cleanPhone = siteConfig.whatsappNumber.replace(/\D/g, '');
    const message =
      customText ||
      'Hola AromaLuxe, vengo desde la página web y me gustaría recibir asesoría sobre sus perfumes árabes.';
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id) => {
    if (route.view !== 'home') {
      navigatePublic('home');
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openProductFragranticaModal = (product) => {
    recordPerfumeInteraction(product.id, 'click');
    setModalQty(1);
    setSelectedSizeModal((product.sizes && product.sizes[0]) || '100 ml');
    setSelectedProductModal(product);
  };

  // ============================================================================
  // SISTEMA DE AUTENTICACIÓN CONFIDENCIAL: LOGIN, REGISTRO Y RECUPERACIÓN
  // ============================================================================
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccessMsg('');

    const cleanEmail = loginEmail.trim().toLowerCase();
    const pass = loginPassword.trim();

    // Verificación para el administrador: aromaluxe.catalogo@gmail.com + "seccion2"
    if (cleanEmail === ADMIN_EMAIL) {
      const adminAccount = usersDb.find((u) => u.email.toLowerCase() === ADMIN_EMAIL);
      const customPass = adminAccount?.password;
      const isValidAdminPass =
        pass === 'seccion2' || (customPass && pass === customPass);

      if (isValidAdminPass) {
        const loggedAdmin = {
          name: adminAccount?.name || 'Administrador AromaLuxe',
          email: ADMIN_EMAIL,
          role: adminAccount?.role || 'Super Administrador',
          isAdmin: true
        };
        setCurrentUser(loggedAdmin);
        setIsAuthModalOpen(false);
        setIsAdminPanelOpen(true);
        setLoginPassword('');
        showToast('Bienvenido al Panel de Administración de AromaLuxe');
        return;
      } else {
        setAuthError('Correo o contraseña incorrectos.');
        return;
      }
    }

    // Verificación para otros usuarios o administradores creados en el módulo Usuarios y Permisos
    const foundUser = usersDb.find(
      (u) => u.email.toLowerCase() === cleanEmail && u.password === loginPassword
    );

    if (foundUser) {
      const hasAdminAccess =
        foundUser.isAdmin === true ||
        (foundUser.role && foundUser.role !== 'customer');
      setCurrentUser({
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role || 'customer',
        isAdmin: hasAdminAccess
      });
      setIsAuthModalOpen(false);
      setLoginPassword('');
      if (hasAdminAccess) {
        setIsAdminPanelOpen(true);
      }
      showToast(`Hola nuevamente, ${foundUser.name}`);
    } else {
      setAuthError('Correo o contraseña incorrectos. Si no tienes cuenta, puedes registrarte.');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccessMsg('');

    const cleanEmail = registerEmail.trim().toLowerCase();
    if (!registerName.trim() || !cleanEmail || !registerPassword) {
      setAuthError('Por favor completa todos los campos.');
      return;
    }
    if (!registerConsentChecked) {
      setAuthError('Debes aceptar la Política de Privacidad y los Términos y Condiciones para crear tu cuenta.');
      return;
    }
    if (cleanEmail === ADMIN_EMAIL) {
      setAuthError('Este correo pertenece a la administración oficial de AromaLuxe.');
      return;
    }
    if (usersDb.some((u) => u.email.toLowerCase() === cleanEmail)) {
      setAuthError('Ya existe una cuenta registrada con este correo electrónico.');
      return;
    }

    const newUser = {
      name: registerName.trim(),
      email: cleanEmail,
      password: registerPassword,
      role: 'customer',
      privacyConsentAt: new Date().toISOString()
    };

    setUsersDb((prev) => [...prev, newUser]);
    setCurrentUser({ name: newUser.name, email: newUser.email, role: 'customer' });
    setRegisterName('');
    setRegisterEmail('');
    setRegisterPassword('');
    setRegisterConsentChecked(false);
    setIsAuthModalOpen(false);
    showToast(`¡Cuenta creada con éxito! Bienvenido/a, ${newUser.name}`);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccessMsg('');

    if (!recoveryConsentChecked) {
      setAuthError('Por favor autoriza el envío del correo de recuperación conforme a nuestra Política de Privacidad.');
      return;
    }

    const cleanEmail = recoveryEmail.trim().toLowerCase();
    const exists = usersDb.some((u) => u.email.toLowerCase() === cleanEmail);

    if (!exists) {
      setAuthError('No encontramos ninguna cuenta registrada con ese correo electrónico.');
      return;
    }

    setAuthSuccessMsg(
      `Hemos enviado un correo desde ${ADMIN_EMAIL} a ${cleanEmail} con las instrucciones y el enlace seguro para restablecer tu contraseña.`
    );
  };

  const handleResetPasswordConfirm = (e) => {
    e.preventDefault();
    if (!newResetPassword || newResetPassword.length < 4) {
      setAuthError('Ingresa una nueva contraseña válida (mínimo 4 caracteres).');
      return;
    }
    const cleanEmail = recoveryEmail.trim().toLowerCase();
    setUsersDb((prev) =>
      prev.map((u) =>
        u.email.toLowerCase() === cleanEmail ? { ...u, password: newResetPassword } : u
      )
    );
    setNewResetPassword('');
    setAuthSuccessMsg('');
    setAuthView('login');
    setLoginEmail(cleanEmail);
    showToast('Contraseña actualizada correctamente. Ya puedes iniciar sesión.');
  };

  // ============================================================================
  // FUNCIONES DEL PANEL DE ADMINISTRACIÓN (12 MÓDULOS)
  // ============================================================================
  const handleImageFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target.result;
      if (editingProduct) {
        setEditingProduct({ ...editingProduct, image: base64 });
      }
      showToast('Fotografía cargada. Recuerda guardar los cambios.');
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!editingProduct.name || !editingProduct.brand) return;

    const basePrice = Number(editingProduct.price) || 0;
    const disc = Number(editingProduct.discountPct) || 0;
    const computedOldPrice =
      disc > 0
        ? Math.round(basePrice / (1 - disc / 100))
        : Number(editingProduct.oldPrice) || 0;

    const nowStamp = new Date().toLocaleString('es-CL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    const tagsArr = Array.isArray(editingProduct.tags) ? editingProduct.tags : [];

    const formattedProduct = {
      ...editingProduct,
      price: basePrice,
      oldPrice: computedOldPrice,
      discountPct: disc,
      stock: Number(editingProduct.stock) || 0,
      minStock: Number(editingProduct.minStock) || 5,
      status: editingProduct.status || 'active',
      sizes: Array.isArray(editingProduct.sizes) && editingProduct.sizes.length ? editingProduct.sizes : ['100 ml'],
      concentrationType: editingProduct.concentrationType || 'EDP',
      concentration: `${(editingProduct.concentrationType || 'EDP').toUpperCase()} · ${(editingProduct.sizes && editingProduct.sizes[0]) || '100ML'}`,
      tags: tagsArr,
      isNew: tagsArr.includes('nuevo'),
      isViral: tagsArr.includes('destacado'),
      updatedAt: nowStamp,
      ...(editingProduct.fragrantica ? { fragrantica: cleanProfile(editingProduct.fragrantica) } : {}),
      shortTitle:
        editingProduct.shortTitle ||
        editingProduct.name.split(' ').slice(0, 2).join(' ').toUpperCase()
    };

    const exists = products.some((p) => p.id === formattedProduct.id);
    if (exists) {
      setProducts((prev) =>
        prev.map((p) => (p.id === formattedProduct.id ? formattedProduct : p))
      );
      logAdminAction(`Producto editado: ${formattedProduct.brand} - ${formattedProduct.name}`);
      showToast(`Perfume "${formattedProduct.shortTitle}" actualizado`);
    } else {
      setProducts((prev) => [formattedProduct, ...prev]);
      logAdminAction(`Nuevo producto creado: ${formattedProduct.brand} - ${formattedProduct.name}`);
      showToast(`Nuevo perfume "${formattedProduct.shortTitle}" creado`);
    }
    setEditingProduct(null);
  };

  const handleDuplicateProduct = (prod) => {
    const nowStamp = new Date().toLocaleString('es-CL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    const duplicated = {
      ...prod,
      id: 'al-' + Date.now(),
      name: `${prod.name} (Copia)`,
      shortTitle: `${prod.shortTitle || 'PERFUME'} COPIA`,
      status: 'draft',
      updatedAt: nowStamp
    };
    setProducts((prev) => [duplicated, ...prev]);
    logAdminAction(`Producto duplicado: ${prod.name}`);
    showToast(`Producto duplicado en borrador: "${duplicated.name}"`);
  };

  const handleToggleProductStatus = (prod, nextStatus) => {
    const nowStamp = new Date().toLocaleString('es-CL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    setProducts((prev) =>
      prev.map((p) => (p.id === prod.id ? { ...p, status: nextStatus, updatedAt: nowStamp } : p))
    );
    logAdminAction(`Estado de "${prod.shortTitle}" cambiado a ${nextStatus}`);
    showToast(`Estado actualizado a: ${nextStatus === 'active' ? 'Publicado' : nextStatus === 'inactive' ? 'Inactivo' : 'Borrador'}`);
  };

  const handleDeleteProduct = (id) => {
    const target = products.find((p) => p.id === id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
    if (target) logAdminAction(`Producto eliminado: ${target.name}`);
    showToast('Producto eliminado del catálogo');
  };

  const startNewProduct = () => {
    setEditingProduct({
      id: 'al-' + Date.now(),
      brand: brandsList[0]?.name || 'LATTAFA',
      name: '',
      shortTitle: '',
      gender: 'UNISEX',
      categoryCustom: 'Árabes',
      olfactoryFamily: 'Orientales',
      price: 39990,
      oldPrice: 49990,
      discountPct: 20,
      rating: 4.9,
      reviewsCount: 12,
      concentrationType: 'EDP',
      concentration: 'EAU DE PARFUM · 100ML',
      sizes: ['100 ml'],
      tags: ['nuevo', 'destacado'],
      status: 'active',
      stock: 20,
      minStock: 5,
      isViral: true,
      isNew: true,
      inPrototype30: true,
      salesMonthsInTop10: 1,
      bestRank: 10,
      notes: 'Bergamota, especias orientales, ámbar dorado, maderas preciosas y vainilla.',
      image: ''
    });
    setAdminTab('products');
  };

  const handleRegisterStockMovement = (e) => {
    e.preventDefault();
    if (!stockMovementModal) return;
    const { product, type, qty, variant, note } = stockMovementModal;
    const amount = Math.max(1, Number(qty) || 1);
    const delta = type === 'Entrada' ? amount : -amount;
    const updatedStock = Math.max(0, (product.stock ?? 0) + delta);
    const nowStamp = new Date().toLocaleString('es-CL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, stock: updatedStock, updatedAt: nowStamp } : p))
    );

    const newLog = {
      id: 'log-' + Date.now(),
      date: nowStamp,
      productName: product.name,
      type,
      qty: amount,
      variant: variant || '100 ml',
      note: note || (type === 'Entrada' ? 'Reposición de inventario' : 'Salida manual de bodega'),
      user: currentUser?.email || ADMIN_EMAIL
    };
    setInventoryLogs((prev) => [newLog, ...prev]);
    logAdminAction(`${type} de inventario (${amount} u.) en ${product.shortTitle}`);
    setStockMovementModal(null);
    showToast(`${type} registrada: Nuevo stock de "${product.shortTitle}" es ${updatedStock} u.`);
  };

  // Estadísticas en tiempo real para el Módulo 1: Dashboard (Con Analítica de Perfumes Más Clickeados)
  const dashboardStats = useMemo(() => {
    const published = products.filter((p) => !p.status || p.status === 'active').length;
    const inactive = products.filter((p) => p.status === 'inactive').length;
    const drafts = products.filter((p) => p.status === 'draft').length;
    const outOfStock = products.filter((p) => (p.stock ?? 0) <= 0).length;
    const lowStock = products.filter((p) => (p.stock ?? 0) > 0 && (p.stock ?? 0) <= (p.minStock ?? 5)).length;
    const recentModified = [...products]
      .sort((a, b) => String(b.updatedAt || '').localeCompare(String(a.updatedAt || '')))
      .slice(0, 6);

    const mostClickedPerfumes = products
      .map((p) => ({
        ...p,
        clicks: perfumeTelemetry[p.id]?.clicks || 0,
        cartAdds: perfumeTelemetry[p.id]?.cartAdds || 0,
        lastClicked: perfumeTelemetry[p.id]?.lastClicked || 'Sin actividad reciente'
      }))
      .sort((a, b) => b.clicks - a.clicks || b.cartAdds - a.cartAdds)
      .slice(0, 8);

    const totalClicks = Object.values(perfumeTelemetry).reduce((acc, item) => acc + (item.clicks || 0), 0);
    const totalCartAdds = Object.values(perfumeTelemetry).reduce((acc, item) => acc + (item.cartAdds || 0), 0);

    return { published, inactive, drafts, outOfStock, lowStock, recentModified, mostClickedPerfumes, totalClicks, totalCartAdds };
  }, [products, perfumeTelemetry]);

  // Editor del perfil olfativo (acordes, pirámide, longevidad, estela y momento de uso)
  const renderProfileEditor = () => {
    if (!editingProduct) return null;
    const base = editingProduct.fragrantica || getFragranticaProfile(editingProduct);
    const prof = getFragranticaProfile({ ...editingProduct, fragrantica: base.accords?.length ? base : { ...base, accords: [{ name: 'Dulce', pct: 100 }] } });
    const accords = base.accords || [];
    const update = (patch) => setEditingProduct({ ...editingProduct, fragrantica: { ...base, ...patch } });
    const total = accords.reduce((sum, a) => sum + (Number(a.pct) || 0), 0);
    const setAccord = (i, patch) => update({ accords: accords.map((a, idx) => (idx === i ? { ...a, ...patch } : a)) });
    const normalize = () => {
      if (!accords.length || total <= 0) return;
      const scaled = accords.map((a) => ({ ...a, pct: Math.round(((Number(a.pct) || 0) / total) * 100) }));
      const diff = 100 - scaled.reduce((sum, a) => sum + a.pct, 0);
      scaled[0] = { ...scaled[0], pct: scaled[0].pct + diff };
      update({ accords: scaled });
    };
    const setNotes = (key, text) =>
      update({ pyramid: { ...(base.pyramid || { top: [], heart: [], base: [] }), [key]: text.split(',').map((x) => x.trimStart()) } });
    const seasonFields = [
      ['winter', '❄️ Invierno'], ['spring', '🌸 Primavera'], ['summer', '☀️ Verano'],
      ['autumn', '🍂 Otoño'], ['day', '☀️ Día'], ['night', '🌙 Noche']
    ];
    const noteFields = [['top', 'Notas de Salida'], ['heart', 'Notas de Corazón'], ['base', 'Notas de Fondo']];

    return (
      <div className="space-y-4 bg-black/30 p-4 rounded-lg border border-white/10">
        <div>
          <div className="text-[11px] text-[#D1B27E] font-bold uppercase tracking-wider">Perfil Olfativo del Perfume</div>
          <p className="text-[11px] text-neutral-300 mt-0.5">Lo que edites aquí es lo que se muestra al abrir la ficha del perfume en la tienda.</p>
        </div>

        {/* Acordes principales */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-[11px] text-neutral-300 font-semibold">Acordes Principales (%)</label>
            <span className={`text-[11px] font-bold ${total === 100 ? 'text-emerald-600' : 'text-amber-600'}`}>Total: {total}%</span>
          </div>
          {accords.map((a, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full shrink-0 border border-black/10" style={{ backgroundColor: getAccordColor(a.name).bg }} />
              <input
                type="text"
                value={a.name}
                onChange={(e) => setAccord(i, { name: e.target.value })}
                placeholder="Ej. Cítrico"
                className="aroma-input flex-1 border border-neutral-300 rounded-md px-3 py-1.5 text-xs"
              />
              <input
                type="number"
                min="0"
                max="100"
                value={a.pct}
                onChange={(e) => setAccord(i, { pct: e.target.value })}
                className="aroma-input w-20 border border-neutral-300 rounded-md px-2 py-1.5 text-xs"
              />
              <button type="button" onClick={() => update({ accords: accords.filter((_, idx) => idx !== i) })} className="text-red-400 hover:text-red-600 p-1" title="Quitar acorde">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => update({ accords: [...accords, { name: '', pct: 0 }] })} className="text-[11px] font-semibold border border-white/20 rounded-md px-3 py-1.5 flex items-center gap-1">
              <Plus className="w-3 h-3" /> Agregar acorde
            </button>
            {total !== 100 && accords.length > 0 && (
              <button type="button" onClick={normalize} className="text-[11px] font-semibold border border-[#D1B27E] text-[#9E7B42] rounded-md px-3 py-1.5">
                Ajustar para que sume 100%
              </button>
            )}
          </div>
        </div>

        {/* Pirámide olfativa */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {noteFields.map(([key, label]) => (
            <div key={key}>
              <label className="block text-[11px] text-neutral-300 mb-1 font-semibold">{label}</label>
              <textarea
                rows={3}
                value={(prof.pyramid[key] || []).join(', ')}
                onChange={(e) => setNotes(key, e.target.value)}
                placeholder="Separadas por coma: Limón, piña, bergamota"
                className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
              />
            </div>
          ))}
        </div>

        {/* Longevidad y estela */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] text-neutral-300 mb-1 font-semibold">Longevidad / Fijación</label>
            <input type="text" value={prof.longevity} onChange={(e) => update({ longevity: e.target.value })} placeholder="Duradera (8 - 10 hrs)" className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs" />
            <div className="flex items-center gap-2 mt-2">
              <input type="range" min="0" max="100" value={prof.longevityPct} onChange={(e) => update({ longevityPct: Number(e.target.value) })} className="flex-1 accent-[#D1B27E]" />
              <span className="text-[11px] text-neutral-300 w-9 text-right">{prof.longevityPct}%</span>
            </div>
          </div>
          <div>
            <label className="block text-[11px] text-neutral-300 mb-1 font-semibold">Estela / Proyección</label>
            <input type="text" value={prof.sillage} onChange={(e) => update({ sillage: e.target.value })} placeholder="Pesada" className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs" />
            <div className="flex items-center gap-2 mt-2">
              <input type="range" min="0" max="100" value={prof.sillagePct} onChange={(e) => update({ sillagePct: Number(e.target.value) })} className="flex-1 accent-[#D1B27E]" />
              <span className="text-[11px] text-neutral-300 w-9 text-right">{prof.sillagePct}%</span>
            </div>
          </div>
        </div>

        {/* Estaciones y momento del día */}
        <div>
          <label className="block text-[11px] text-neutral-300 mb-1.5 font-semibold">¿Cuándo usarlo? · Estaciones y Momento del Día (%)</label>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            {seasonFields.map(([key, label]) => (
              <div key={key}>
                <span className="block text-[10px] text-neutral-300 mb-0.5">{label}</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={prof.seasons[key]}
                  onChange={(e) => update({ seasons: { ...prof.seasons, [key]: e.target.value } })}
                  className="aroma-input w-full border border-neutral-300 rounded-md px-2 py-1.5 text-xs"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const activeFragrantica = useMemo(() => {
    if (!selectedProductModal) return null;
    return getFragranticaProfile(selectedProductModal);
  }, [selectedProductModal]);

  return (
    <div
      style={{ backgroundColor: siteConfig.brandColors.smoke }}
      className="min-h-screen flex flex-col font-sans-clean text-[#0A0B11] selection:bg-[#D1B27E] selection:text-[#0A0B11]"
    >
      {/* Tipografías Editoriales e Interacciones Fluidas */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .font-serif-luxury { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
        .aroma-input {
          background-color: #FFFFFF !important;
          color: #0A0B11 !important;
          caret-color: #0A0B11 !important;
        }
        .aroma-input::placeholder {
          color: #686868 !important;
          opacity: 0.85;
        }
        .btn-interactive {
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-interactive:hover {
          transform: translateY(-1px);
        }
        .btn-interactive:active {
          transform: translateY(0px) scale(0.97);
        }
        @keyframes dropdownDown {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-dropdown-down {
          animation: dropdownDown 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-pop {
          animation: modalPop 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes cartBounce {
          0%, 100% { transform: scale(1); }
          40% { transform: scale(1.12); }
          70% { transform: scale(0.95); }
        }
        .animate-cart-bounce {
          animation: cartBounce 0.45s ease-in-out;
        }
      `}</style>

      {/* Notificación flotante Toast */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-[60] bg-[#0A0B11] text-white border border-[#D1B27E] px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2.5 text-xs font-medium animate-dropdown-down">
          <Sparkles className="w-4 h-4 text-[#D1B27E] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =====================================================================
          CABECERA EN 3 NIVELES HORIZONTALES
      ===================================================================== */}
      <header className="sticky top-0 z-40 shadow-md">
        {/* NIVEL 1: Top Bar en Negro Profundo (#0A0B11) */}
        <div
          style={{ backgroundColor: siteConfig.brandColors.black }}
          className="border-b border-white/10 px-4 py-1.5"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-center mx-auto text-[#F4F4F4]/90 font-light truncate">
              {siteConfig.topBarText}
            </div>

            <div className="flex items-center gap-3">
              {isAdminAuthenticated && (
                <button
                  onClick={() => setIsAdminPanelOpen(true)}
                  className="btn-interactive flex items-center gap-1.5 bg-[#D1B27E] text-[#0A0B11] px-2.5 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase"
                >
                  <Sliders className="w-3 h-3" />
                  <span>Panel Admin</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* NIVEL 2: Header Principal Minimalista */}
        <div
          style={{ backgroundColor: siteConfig.brandColors.black }}
          className="py-3 px-4 sm:px-8 border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3.5">
            {/* Logo Oficial AromaLuxe */}
            <div
              onClick={() => {
                if (route.view !== 'home') navigatePublic('home');
                setSelectedCategory('TODOS');
                setSelectedBrand('TODAS');
                setSearchQuery('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 shrink-0 cursor-pointer group"
            >
              <AromaLuxeLogo size="sm" showText={false} />
              <div>
                <span
                  className="font-serif-luxury block text-xl sm:text-2xl font-semibold tracking-[0.22em] leading-none transition-transform duration-300 group-hover:translate-x-0.5"
                  style={{ color: siteConfig.brandColors.gold }}
                >
                  AROMALUXE
                </span>
                <span className="block text-[9px] tracking-[0.38em] text-neutral-400 uppercase mt-1 font-light">
                  PERFUMES ÁRABES
                </span>
              </div>
            </div>

            {/* Buscador Minimalista Estilizado */}
            <div className="w-full lg:max-w-lg relative">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-[#686868] absolute left-4 pointer-events-none z-10" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (route.view !== 'home') navigatePublic('home');
                    const catSection = document.getElementById('catalogo-grid');
                    if (catSection && e.target.value.length === 1) {
                      catSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  placeholder="Buscar por perfume, marca o nota olfativa (ej. Lattafa, Oud, Vainilla)..."
                  className="aroma-input w-full pl-10 pr-9 py-2 rounded-full text-xs sm:text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-[#D1B27E] transition-all duration-300 shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 text-[#686868] hover:text-[#0A0B11] transition-transform hover:scale-110 active:scale-90"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Utilidades Derecha: Iniciar Sesión / Usuario + Ícono de Carrito con Ruedas ($0) + Botón Contacto */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
              {/* Botón de Cuenta / Iniciar Sesión */}
              {currentUser ? (
                <div className="flex items-center gap-2 bg-white/10 border border-[#D1B27E]/40 px-3 py-1.5 rounded-full transition-all duration-300">
                  <User className="w-3.5 h-3.5 text-[#D1B27E]" />
                  <span className="text-xs text-white font-medium max-w-[110px] truncate">
                    {currentUser.name.split(' ')[0]}
                  </span>
                  {isAdminAuthenticated && (
                    <button
                      onClick={() => setIsAdminPanelOpen(true)}
                      className="btn-interactive text-[10px] bg-[#D1B27E] text-[#0A0B11] px-2.5 py-0.5 rounded-full font-bold"
                      title="Abrir Panel de Administración"
                    >
                      Admin
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setCurrentUser(null);
                      setIsAdminPanelOpen(false);
                      showToast('Has cerrado sesión correctamente');
                    }}
                    className="text-neutral-400 hover:text-red-400 ml-1 transition-transform hover:scale-110 active:scale-90"
                    title="Cerrar sesión"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setAuthView('login');
                    setAuthError('');
                    setAuthSuccessMsg('');
                    setIsAuthModalOpen(true);
                  }}
                  className="btn-interactive flex items-center gap-2 text-xs text-white hover:text-[#0A0B11] bg-white/5 hover:bg-[#D1B27E] border border-white/20 hover:border-[#D1B27E] px-3.5 py-2 rounded-full font-medium group"
                >
                  <User className="w-3.5 h-3.5 text-[#D1B27E] group-hover:text-[#0A0B11] transition-colors" />
                  <span>Iniciar Sesión</span>
                </button>
              )}

              {/* Botón Carrito Acumulador ($0 + Logo de Carrito con Ruedas ShoppingCart) */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={`btn-interactive flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-[#D1B27E]/60 px-3.5 py-2 rounded-full group ${
                  cartBounce ? 'animate-cart-bounce ring-2 ring-[#D1B27E]' : ''
                }`}
                title="Abrir Carrito de Compras"
              >
                <span
                  className="text-xs font-bold tracking-wide"
                  style={{ color: siteConfig.brandColors.gold }}
                >
                  {formatCLP(cartTotalAmount)}
                </span>
                <div className="relative flex items-center">
                  <ShoppingCart className="w-4 h-4 text-white group-hover:text-[#D1B27E] transition-transform duration-300 group-hover:scale-110" />
                  {cartTotalCount > 0 && (
                    <span
                      style={{ backgroundColor: siteConfig.brandColors.gold }}
                      className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full text-[#0A0B11] text-[10px] font-extrabold flex items-center justify-center shadow"
                    >
                      {cartTotalCount}
                    </span>
                  )}
                </div>
              </button>

              {/* Botón CONTACTO Dorado/Arena #D1B27E */}
              <button
                onClick={() => openGeneralWhatsApp()}
                style={{ backgroundColor: siteConfig.brandColors.gold }}
                className="btn-interactive text-[#0A0B11] font-semibold text-xs px-4 py-2 rounded-full tracking-wider uppercase flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#0A0B11]" />
                <span className="hidden sm:inline">Contacto</span>
              </button>
            </div>
          </div>
        </div>

        {/* NIVEL 3: Menú Minimalista y Estético */}
        <nav className="bg-white/95 backdrop-blur-md border-b border-neutral-200/80 text-[#0A0B11]">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between py-2.5 text-xs">
            <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mx-auto font-medium tracking-[0.12em] uppercase text-[11px]">
              <li>
                <button
                  onClick={() => {
                    setSelectedCategory('TODOS');
                    setSelectedBrand('TODAS');
                    scrollToSection('catalogo-grid');
                  }}
                  className={`py-1 transition-all duration-300 border-b-2 active:scale-95 ${
                    route.view === 'home' && selectedCategory === 'TODOS'
                      ? 'border-[#D1B27E] text-[#0A0B11] font-semibold'
                      : 'border-transparent text-[#686868] hover:text-[#0A0B11]'
                  }`}
                >
                  Catálogo
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    setSelectedCategory('NUEVO');
                    scrollToSection('catalogo-grid');
                  }}
                  className={`flex items-center gap-1 py-1 transition-all duration-300 border-b-2 active:scale-95 ${
                    selectedCategory === 'NUEVO'
                      ? 'border-[#D1B27E] text-[#0A0B11] font-semibold'
                      : 'border-transparent text-[#686868] hover:text-[#0A0B11]'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-[#D1B27E]" />
                  <span>¡Nuevo!</span>
                </button>
              </li>

              {/* Desplegable Minimalista de Perfumes */}
              <li
                className="relative"
                onMouseEnter={() => setPerfumesDropdownOpen(true)}
                onMouseLeave={() => setPerfumesDropdownOpen(false)}
              >
                <button
                  onClick={() => setPerfumesDropdownOpen(!perfumesDropdownOpen)}
                  className={`flex items-center gap-1 py-1 transition-all duration-300 border-b-2 active:scale-95 ${
                    ['HOMBRE', 'MUJER', 'UNISEX'].includes(selectedCategory)
                      ? 'border-[#D1B27E] text-[#0A0B11] font-semibold'
                      : 'border-transparent text-[#686868] hover:text-[#0A0B11]'
                  }`}
                >
                  <span>Perfumes</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${
                      perfumesDropdownOpen ? 'rotate-180 text-[#D1B27E]' : ''
                    }`}
                  />
                </button>

                {perfumesDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-48 z-50 animate-dropdown-down">
                    <div className="bg-white text-[#0A0B11] border border-neutral-200 rounded-lg shadow-xl py-1.5 overflow-hidden">
                      {[
                        { id: 'TODOS', label: 'Ver Todos' },
                        { id: 'HOMBRE', label: 'Perfumes Hombre' },
                        { id: 'MUJER', label: 'Perfumes Mujer' },
                        { id: 'UNISEX', label: 'Unisex & Nicho' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedCategory(item.id);
                            setPerfumesDropdownOpen(false);
                            scrollToSection('catalogo-grid');
                          }}
                          className={`w-full text-left px-4 py-2.5 text-[11px] tracking-wider uppercase flex items-center justify-between hover:bg-[#F4F4F4] hover:pl-5 transition-all duration-200 ${
                            selectedCategory === item.id ? 'text-[#9E7B42] font-bold bg-[#F4F4F4]/60' : 'text-[#0A0B11]'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-3 h-3 text-[#D1B27E]" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  onClick={() => {
                    setSelectedCategory('VIRALES');
                    scrollToSection('catalogo-grid');
                  }}
                  className={`flex items-center gap-1 py-1 transition-all duration-300 border-b-2 active:scale-95 ${
                    selectedCategory === 'VIRALES'
                      ? 'border-[#D1B27E] text-[#0A0B11] font-semibold'
                      : 'border-transparent text-[#686868] hover:text-[#0A0B11]'
                  }`}
                >
                  <Flame className="w-3 h-3 text-[#D1B27E]" />
                  <span>Los Más Virales</span>
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('seccion-faq')}
                  className="py-1 text-[#686868] hover:text-[#0A0B11] transition-all duration-300 active:scale-95"
                >
                  Preguntas Frecuentes
                </button>
              </li>

              <li>
                <button
                  onClick={() => navigatePublic('blog')}
                  className={`flex items-center gap-1 py-1 transition-all duration-300 border-b-2 active:scale-95 ${
                    route.view === 'blog'
                      ? 'border-[#D1B27E] text-[#0A0B11] font-semibold'
                      : 'border-transparent text-[#686868] hover:text-[#0A0B11]'
                  }`}
                >
                  <Newspaper className="w-3 h-3 text-[#D1B27E]" />
                  <span>Blog</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* =====================================================================
          CUERPO PRINCIPAL DE LA PÁGINA
      ===================================================================== */}
      {route.view === 'blog' && (
        <BlogPublic
          posts={blogPosts}
          slug={route.slug}
          navigate={navigatePublic}
          gold={siteConfig.brandColors.gold}
          onCatalog={() => scrollToSection('catalogo-grid')}
        />
      )}

      <main className="flex-grow" style={{ display: route.view === 'home' ? undefined : 'none' }}>
        {/* HERO COMPACTO DE LUJO EDITORIAL CONECTADO AL MÓDULO 7 DE BANNERS */}
        {siteConfig.sectionsVisibility?.heroBanner !== false && (
          <section className="relative bg-[#0A0B11] text-white overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-700"
              style={{ backgroundImage: `url('${currentHeroBanner?.image || siteConfig.heroBgImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B11] via-[#0A0B11]/85 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D1B27E]/40 bg-[#D1B27E]/10 text-[#D1B27E] text-[11px] tracking-[0.18em] uppercase">
                  <Sparkles className="w-3 h-3" />
                  <span>Boutique Oficial de Perfumería Árabe</span>
                </div>

                <h1 className="font-serif-luxury text-3xl sm:text-5xl font-semibold tracking-wide leading-tight text-white">
                  {currentHeroBanner?.title || siteConfig.heroTitle}
                </h1>

                <p className="text-neutral-300 text-xs sm:text-sm max-w-xl leading-relaxed font-light">
                  {currentHeroBanner?.subtitle || siteConfig.heroSubtitle}
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollToSection('catalogo-grid')}
                    style={{ backgroundColor: siteConfig.brandColors.gold }}
                    className="btn-interactive text-[#0A0B11] font-semibold text-xs px-6 py-3 rounded-full tracking-wider uppercase flex items-center gap-2"
                  >
                    <span>{currentHeroBanner?.ctaText || siteConfig.heroCtaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openProductFragranticaModal(products[0] || INITIAL_PRODUCTS[0])}
                    className="btn-interactive text-white border border-white/25 hover:border-[#D1B27E] hover:bg-white/5 text-xs px-5 py-3 rounded-full tracking-wider uppercase"
                  >
                    Explorar Notas Olfativas
                  </button>

                  {activeHeroBanners.length > 1 && (
                    <div className="flex items-center gap-1.5 ml-2">
                      {activeHeroBanners.map((b, i) => (
                        <button
                          key={b.id}
                          onClick={() => setActiveBannerIdx(i)}
                          className={`h-2 rounded-full transition-all ${
                            activeBannerIdx % activeHeroBanners.length === i
                              ? 'w-6 bg-[#D1B27E]'
                              : 'w-2 bg-white/30 hover:bg-white/60'
                          }`}
                          title={b.title}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Destacado del Mes Compacto */}
              <div
                onClick={() => openProductFragranticaModal(products[0] || INITIAL_PRODUCTS[0])}
                className="btn-interactive bg-white/5 backdrop-blur-md border border-[#D1B27E]/35 rounded-lg p-4 sm:p-5 flex items-center gap-4 max-w-sm w-full cursor-pointer hover:border-[#D1B27E]"
              >
                <div className="w-20 h-24 rounded overflow-hidden shrink-0">
                  <PerfumeBottleVisual product={products[0] || INITIAL_PRODUCTS[0]} className="w-full h-full" compact />
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase tracking-widest text-[#D1B27E] font-semibold block">
                    ★ Top #1 Ventas 2026
                  </span>
                  <h3 className="font-serif-luxury text-base font-semibold text-white leading-snug mt-0.5">
                    {(products[0] || INITIAL_PRODUCTS[0]).name}
                  </h3>
                  <div className="text-sm font-bold text-[#D1B27E] mt-1">
                    {formatCLP((products[0] || INITIAL_PRODUCTS[0]).price)}
                  </div>
                  <span className="text-[11px] text-neutral-300 underline mt-1 inline-block">
                    Ver pirámide olfativa →
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* BARRA DE CONFIANZA COMPACTA */}
        {siteConfig.sectionsVisibility?.trustBar !== false && (
          <section className="bg-white border-b border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {[
                { icon: ShieldCheck, title: '100% Originales', desc: 'Sellados de fábrica' },
                { icon: Truck, title: 'Despacho a Todo Chile', desc: 'Embalaje seguro' },
                { icon: Sparkles, title: 'Notas de Perfumes', desc: 'Acordes y pirámide en cada fragancia' },
                { icon: ShoppingCart, title: 'Carrito a WhatsApp', desc: 'Cotización automática detallada' }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0A0B11] text-[#D1B27E] flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0A0B11] text-xs">{item.title}</div>
                      <div className="text-[11px] text-[#686868]">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* =====================================================================
            CATÁLOGO COMPACTO Y ESTÉTICO
        ===================================================================== */}
        <section id="catalogo-grid" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          {/* Barra de Herramientas y Filtros del Catálogo */}
          <div className="bg-white border border-neutral-200/90 rounded-xl p-4 mb-6 shadow-2xs space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#0A0B11]">
                  Catálogo de Perfumería Árabe
                </h2>
                <p className="text-xs text-[#686868]">
                  Mostrando <strong>{activeCatalogProducts.length}</strong> fragancias disponibles · Haz clic en cualquier perfume para ver sus acordes y pirámide olfativa
                </p>
              </div>

              {/* Controles Derechos: Ordenamiento y Mini-Menú Desplegable de Marcas */}
              <div className="flex flex-wrap items-center gap-2.5 relative" ref={brandDropdownRef}>
                {/* Selector de Categorías Rápidas */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { id: 'TODOS', label: 'Todos' },
                    { id: 'HOMBRE', label: 'Hombre' },
                    { id: 'MUJER', label: 'Mujer' },
                    { id: 'UNISEX', label: 'Unisex' },
                    { id: 'VIRALES', label: 'Virales' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`btn-interactive px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                        selectedCategory === cat.id
                          ? 'bg-[#0A0B11] text-[#D1B27E]'
                          : 'bg-[#F4F4F4] text-[#686868] hover:text-[#0A0B11]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Ordenar por precio */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#F4F4F4] text-[#0A0B11] border border-neutral-300 rounded-full px-3.5 py-2 text-xs font-medium focus:outline-none focus:border-[#D1B27E]"
                >
                  <option value="featured">Ordenar: Más Populares</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="name-asc">Nombre: A - Z</option>
                </select>

                {/* Botón "Marcas" que despliega el mini-menú vertical de arriba hacia abajo */}
                <div>
                  <button
                    type="button"
                    onClick={() => setIsBrandDropdownOpen((prev) => !prev)}
                    className={`btn-interactive flex items-center justify-between gap-3 px-4 py-2 rounded-full text-xs font-semibold border ${
                      selectedBrand !== 'TODAS' || isBrandDropdownOpen
                        ? 'bg-[#0A0B11] text-[#D1B27E] border-[#D1B27E]'
                        : 'bg-[#F4F4F4] text-[#0A0B11] border-neutral-300 hover:border-[#0A0B11]'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Filter className="w-3.5 h-3.5 text-[#D1B27E]" />
                      <span>
                        {selectedBrand === 'TODAS' ? 'Marcas' : `Marca: ${selectedBrand}`}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isBrandDropdownOpen ? 'rotate-180 text-[#D1B27E]' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Lista Vertical Desplegable de Arriba hacia Abajo */}
                {isBrandDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-[#D1B27E]/80 rounded-xl shadow-2xl z-30 overflow-hidden animate-dropdown-down">
                    <div className="bg-[#0A0B11] text-[#D1B27E] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-between border-b border-[#D1B27E]/30">
                      <span>Filtrar por Marca Árabe</span>
                      <span>({brandsWithCount.length})</span>
                    </div>

                    <div className="max-h-64 overflow-y-auto divide-y divide-neutral-100 py-1">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedBrand('TODAS');
                          setIsBrandDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-xs flex items-center justify-between transition-all duration-200 hover:bg-[#F4F4F4] hover:pl-5 ${
                          selectedBrand === 'TODAS'
                            ? 'bg-[#D1B27E]/15 text-[#0A0B11] font-bold'
                            : 'text-[#0A0B11]'
                        }`}
                      >
                        <span>Todas las Marcas</span>
                        {selectedBrand === 'TODAS' && (
                          <Check className="w-3.5 h-3.5 text-[#9E7B42]" />
                        )}
                      </button>

                      {brandsWithCount.map((b) => {
                        const isSelected = selectedBrand === b.name;
                        return (
                          <button
                            key={b.name}
                            type="button"
                            onClick={() => {
                              setSelectedBrand(b.name);
                              setIsBrandDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-xs flex items-center justify-between transition-all duration-200 hover:bg-[#F4F4F4] hover:pl-5 ${
                              isSelected
                                ? 'bg-[#D1B27E]/20 text-[#0A0B11] font-bold'
                                : 'text-[#0A0B11]'
                            }`}
                          >
                            <span className="truncate pr-2">{b.name}</span>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4F4F4] text-[#686868] font-semibold">
                                {b.count}
                              </span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#9E7B42]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* GRILLA COMPACTA DE ALTA DENSIDAD (5 COLUMNAS EN DESKTOP, 2 EN MÓVIL) */}
          {activeCatalogProducts.length === 0 ? (
            <div className="bg-white border border-neutral-200 rounded-lg p-10 text-center">
              <p className="font-serif-luxury text-xl text-[#0A0B11]">
                No encontramos perfumes con esos criterios
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('TODOS');
                  setSelectedBrand('TODAS');
                  setSearchQuery('');
                }}
                style={{ backgroundColor: siteConfig.brandColors.gold }}
                className="btn-interactive mt-4 text-xs text-[#0A0B11] font-semibold px-5 py-2.5 rounded-full"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {activeCatalogProducts.map((product) => {
                const discountPct =
                  product.oldPrice && product.oldPrice > product.price
                    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
                    : null;
                const mainAccords = getFragranticaProfile(product).accords.slice(0, 3);
                const isJustAdded = !!recentlyAddedIds[product.id];

                return (
                  <div
                    key={product.id}
                    className="group bg-white border border-neutral-200/80 hover:border-[#D1B27E] rounded-lg overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Zona Superior Clicable -> Abre Ficha Estilo Fragrantica */}
                    <div
                      onClick={() => openProductFragranticaModal(product)}
                      className="cursor-pointer"
                    >
                      <div className="relative">
                        <PerfumeBottleVisual product={product} className="w-full h-44 sm:h-48" compact />

                        {/* Etiquetas Superiores Compactas */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {discountPct && (
                            <span className="bg-[#0A0B11] text-[#D1B27E] text-[10px] font-bold px-2 py-0.5 rounded">
                              -{discountPct}%
                            </span>
                          )}
                          {(product.isViral || product.tags?.includes('destacado')) && (
                            <span
                              style={{ backgroundColor: siteConfig.brandColors.gold }}
                              className="text-[#0A0B11] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                            >
                              Destacado
                            </span>
                          )}
                          {product.tags?.includes('exclusivo') && (
                            <span className="bg-purple-950 text-[#D1B27E] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                              Exclusivo
                            </span>
                          )}
                        </div>

                        <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs text-[#0A0B11] border border-neutral-200 text-[9px] font-semibold px-2 py-0.5 rounded">
                          {product.gender}
                        </span>

                        {/* Botón rápido de vista olfativa al pasar el cursor */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-2 px-3 flex items-center justify-center">
                          <span className="text-[10px] text-white font-medium flex items-center gap-1">
                            <Droplets className="w-3 h-3 text-[#D1B27E]" />
                            Ver Notas del Perfume
                          </span>
                        </div>
                      </div>

                      {/* Información Compacta */}
                      <div className="p-3 pb-2">
                        <div className="flex items-center justify-between text-[10px] text-[#686868]">
                          <span className="font-bold tracking-wider uppercase text-[#0A0B11]/70 truncate">
                            {product.brand}
                          </span>
                          <span className="flex items-center gap-0.5 text-amber-500 font-semibold">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            {product.rating || '4.9'}
                          </span>
                        </div>

                        <h3 className="text-xs sm:text-[13px] font-semibold text-[#0A0B11] mt-1 line-clamp-2 min-h-[2.25rem] group-hover:text-[#9E7B42] transition leading-snug">
                          {product.name}
                        </h3>

                        {/* Mini Píldoras de Acordes Principales en la tarjeta */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {mainAccords.map((acc, i) => (
                            <span
                              key={i}
                              className="text-[9px] px-1.5 py-0.5 rounded-xs font-medium"
                              style={{
                                backgroundColor: `${acc.bg}25`,
                                color: '#0A0B11',
                                border: `1px solid ${acc.bg}70`
                              }}
                            >
                              {acc.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Precio + Botón "Agregar al carrito" con Logo de Carrito con Ruedas y Animación */}
                    <div className="px-3 pb-3 pt-1.5 border-t border-neutral-100">
                      <div className="flex items-baseline gap-1.5 mb-2">
                        <span className="text-sm sm:text-base font-bold text-[#0A0B11]">
                          {formatCLP(product.price)}
                        </span>
                        {product.oldPrice && product.oldPrice > product.price && (
                          <span className="text-[11px] text-[#686868] line-through">
                            {formatCLP(product.oldPrice)}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => addToQuoteCart(product, 1)}
                        disabled={(product.stock ?? 10) <= 0}
                        style={{
                          backgroundColor:
                            (product.stock ?? 10) <= 0
                              ? '#CFCFCF'
                              : isJustAdded
                              ? '#D1B27E'
                              : siteConfig.brandColors.black
                        }}
                        className={`btn-interactive w-full font-semibold text-[11px] py-2 px-2.5 rounded-md flex items-center justify-center gap-1.5 shadow-2xs ${
                          (product.stock ?? 10) <= 0
                            ? 'text-neutral-600 cursor-not-allowed'
                            : isJustAdded
                            ? 'text-[#0A0B11]'
                            : 'text-white hover:bg-[#D1B27E] hover:text-[#0A0B11]'
                        }`}
                      >
                        {(product.stock ?? 10) <= 0 ? (
                          <span>Sin Stock</span>
                        ) : isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            <span>¡Agregado al carrito!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5 text-[#D1B27E] group-hover:text-current transition-transform duration-300 group-hover:scale-110" />
                            <span>Agregar al carrito</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* SECCIÓN EXPLORAR POR FAMILIAS OLFATIVAS (CONECTADA AL MÓDULO 5) */}
        {siteConfig.sectionsVisibility?.specialCollections !== false && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
            <div className="bg-white border border-neutral-200/90 rounded-lg p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7B42] font-bold">
                    Guía Sensorial
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#0A0B11]">
                    Explorar por Familias Olfativas
                  </h3>
                </div>
                {selectedCategory !== 'TODOS' && (
                  <button
                    onClick={() => setSelectedCategory('TODOS')}
                    className="text-xs text-[#9E7B42] hover:underline font-semibold"
                  >
                    Ver todas las familias
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
                {olfactoryFamilies.map((fam) => (
                  <button
                    key={fam.id}
                    onClick={() => {
                      setSearchQuery(fam.name.slice(0, 5));
                      scrollToSection('catalogo-grid');
                    }}
                    className="btn-interactive group text-left rounded-lg p-2.5 bg-[#F4F4F4] hover:bg-[#0A0B11] hover:text-white border border-neutral-200/80 transition flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: fam.color || '#D1B27E' }}
                      />
                      <Droplets className="w-3 h-3 text-[#D1B27E] opacity-75" />
                    </div>
                    <div className="font-semibold text-xs leading-tight">{fam.name}</div>
                    <div className="text-[10px] text-[#686868] group-hover:text-neutral-300 line-clamp-2 mt-1">
                      {fam.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            BLOG OLFATIVO Y PREGUNTAS FRECUENTES COMPACTOS
        ===================================================================== */}
        <section className="bg-white border-t border-b border-neutral-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7B42] font-semibold">
                  Cultura & Educación Olfativa
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#0A0B11] mt-1">
                  Guía de Perfumería Árabe
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {siteConfig.blogs.map((blog) => (
                <article
                  key={blog.id}
                  onClick={() => setSelectedBlogModal(blog)}
                  className="bg-[#F4F4F4] border border-neutral-200/80 hover:border-[#D1B27E] rounded-lg p-5 flex flex-col justify-between cursor-pointer group transition"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] tracking-wider uppercase text-[#686868] mb-2">
                      <span className="text-[#0A0B11] font-bold">{blog.category}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="font-serif-luxury text-lg font-semibold text-[#0A0B11] group-hover:text-[#9E7B42] transition leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-[#686868] mt-2 leading-relaxed">{blog.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-semibold text-[#0A0B11]">
                    <span>Leer artículo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D1B27E]" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section id="seccion-faq" className="max-w-3xl mx-auto px-4 sm:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#0A0B11]">
              Preguntas Frecuentes
            </h2>
            <p className="text-xs text-[#686868] mt-1">
              Todo sobre nuestras fragancias originales, envíos y cotizaciones por WhatsApp.
            </p>
          </div>

          <div className="space-y-2.5">
            {siteConfig.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-[#0A0B11]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D1B27E] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#686868] leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* =====================================================================
          PIE DE PÁGINA (FOOTER) EN NEGRO PROFUNDO #0A0B11
      ===================================================================== */}
      <footer
        style={{ backgroundColor: siteConfig.brandColors.black }}
        className="text-white border-t border-[#D1B27E]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <AromaLuxeLogo size="sm" />
            <p className="text-xs text-neutral-400 leading-relaxed">
              Catálogo digital de alta perfumería árabe en Chile. Agrega tus perfumes al carrito y finaliza tu pedido directamente por WhatsApp.
            </p>
          </div>

          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#D1B27E] tracking-wider mb-3">
              Colecciones
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => {
                    setSelectedCategory('HOMBRE');
                    scrollToSection('catalogo-grid');
                  }}
                  className="hover:text-[#D1B27E]"
                >
                  Perfumes para Hombre
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedCategory('MUJER');
                    scrollToSection('catalogo-grid');
                  }}
                  className="hover:text-[#D1B27E]"
                >
                  Perfumes para Mujer
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedCategory('UNISEX');
                    scrollToSection('catalogo-grid');
                  }}
                  className="hover:text-[#D1B27E]"
                >
                  Perfumes Unisex & Nicho
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPolicyModalOpen(true)}
                  className="hover:text-[#D1B27E]"
                >
                  Política de Devoluciones
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#D1B27E] tracking-wider mb-3">
              Casas Árabes Oficiales
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>Lattafa & Lattafa Pride</li>
              <li>Armaf Luxury Perfumes</li>
              <li>Al Haramain Perfumes</li>
              <li>Rasasi (Colección Hawas)</li>
              <li>French Avenue & Afnan</li>
              <li>Maison Alhambra & Dumont</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#D1B27E] tracking-wider mb-3">
              Contacto Oficial
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D1B27E]" />
                <span>{siteConfig.contactEmail}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D1B27E]" />
                <span>+{siteConfig.whatsappNumber}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D1B27E]" />
                <span>Envíos a todo Chile · Santiago</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 px-4 text-center text-[11px] text-neutral-500 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-2">
          <span>© 2026 {siteConfig.storeName}®. Todos los derechos reservados.</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setActiveLegalModal('about')} className="hover:text-[#D1B27E] transition">
              Sobre Nosotros
            </button>
            <button onClick={() => setActiveLegalModal('privacy')} className="hover:text-[#D1B27E] transition">
              Política de Privacidad
            </button>
            <button onClick={() => setActiveLegalModal('terms')} className="hover:text-[#D1B27E] transition">
              Términos y Condiciones
            </button>
            <button onClick={() => setActiveLegalModal('refunds')} className="hover:text-[#D1B27E] transition">
              Política de Reembolsos
            </button>
            <button onClick={() => setActiveLegalModal('cookies')} className="hover:text-[#D1B27E] transition">
              Política de Cookies
            </button>
            <button
              onClick={() => {
                setCookiePrefsDraft(
                  cookieConsent || { essential: true, analytics: true, marketing: false }
                );
                setIsCookieSettingsOpen(true);
              }}
              className="hover:text-[#D1B27E] transition underline"
            >
              Preferencias de Cookies
            </button>
            <button onClick={() => setActiveLegalModal('sdks')} className="hover:text-[#D1B27E] transition">
              Auditoría SDKs
            </button>
            {isAdminAuthenticated && (
              <button
                onClick={() => setIsAdminPanelOpen(true)}
                className="text-[#D1B27E] hover:underline flex items-center gap-1 font-medium"
              >
                <Sliders className="w-3 h-3" />
                <span>Panel Admin</span>
              </button>
            )}
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MINI-MENÚ: NOTAS DE PERFUMES Y ACORDES
      ===================================================================== */}
      {selectedProductModal && activeFragrantica && (
        <div
          onClick={() => setSelectedProductModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6 backdrop-blur-xs overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-modal-pop bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#D1B27E]/60 my-auto max-h-[92vh] flex flex-col"
          >
            {/* Cabecera del Mini-Menú Notas de Perfumes */}
            <div className="bg-[#0A0B11] text-white px-6 py-4 flex items-center justify-between border-b border-[#D1B27E]/40 shrink-0">
              <div className="flex items-center gap-3">
                <span className="bg-[#D1B27E] text-[#0A0B11] text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                  {selectedProductModal.brand}
                </span>
                <span className="text-xs text-neutral-300">Notas del Perfume · {selectedProductModal.gender}</span>
                <span className="text-xs text-[#D1B27E] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#D1B27E]" />
                  {selectedProductModal.rating || '4.9'} ({selectedProductModal.reviewsCount || 150} reseñas)
                </span>
              </div>
              <button
                onClick={() => setSelectedProductModal(null)}
                className="text-neutral-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido Scrolleable de Notas de Perfumes */}
            <div className="p-5 sm:p-7 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-7">
              {/* Columna Izquierda: Frasco, Precio y Acción de Compra */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF9F6] rounded-xl p-5 border border-neutral-200/80">
                <div>
                  <PerfumeBottleVisual product={selectedProductModal} className="w-full h-64 rounded-lg" />

                  <div className="mt-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7B42]">
                      {selectedProductModal.concentration || 'EAU DE PARFUM · 100ML'}
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#0A0B11] mt-1 leading-tight">
                      {selectedProductModal.name}
                    </h3>

                    <div className="flex items-baseline gap-2.5 mt-3">
                      <span className="text-2xl font-extrabold text-[#0A0B11]">
                        {formatCLP(selectedProductModal.price)}
                      </span>
                      {selectedProductModal.oldPrice && selectedProductModal.oldPrice > selectedProductModal.price && (
                        <span className="text-sm text-[#686868] line-through">
                          {formatCLP(selectedProductModal.oldPrice)}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#686868] mt-3 leading-relaxed">
                      <strong>Recomendación de uso:</strong> {activeFragrantica.occasions}
                    </p>
                  </div>
                </div>

                {/* Selector de Tamaño, Cantidad + Agregar al Carrito */}
                <div className="mt-6 pt-4 border-t border-neutral-200 space-y-3">
                  {selectedProductModal.sizes && selectedProductModal.sizes.length > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#686868]">Tamaño:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProductModal.sizes.map((sz) => (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => setSelectedSizeModal(sz)}
                            className={`px-2.5 py-1 rounded text-[11px] font-semibold border transition ${
                              selectedSizeModal === sz
                                ? 'bg-[#0A0B11] text-[#D1B27E] border-[#0A0B11]'
                                : 'bg-white text-[#0A0B11] border-neutral-300 hover:border-[#0A0B11]'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#686868]">Cantidad:</span>
                    <div className="flex items-center border border-neutral-300 rounded-md bg-white">
                      <button
                        onClick={() => setModalQty((q) => Math.max(1, q - 1))}
                        className="px-3 py-1 text-sm font-bold text-[#0A0B11] hover:bg-neutral-100 transition active:scale-90"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-xs font-bold text-[#0A0B11]">{modalQty}</span>
                      <button
                        onClick={() => setModalQty((q) => q + 1)}
                        className="px-3 py-1 text-sm font-bold text-[#0A0B11] hover:bg-neutral-100 transition active:scale-90"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToQuoteCart(selectedProductModal, modalQty, selectedSizeModal);
                      setSelectedProductModal(null);
                      setIsCartOpen(true);
                    }}
                    style={{ backgroundColor: siteConfig.brandColors.gold }}
                    className="btn-interactive w-full text-[#0A0B11] font-bold text-xs py-3.5 px-4 rounded-md shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>
                      Agregar al carrito ({formatCLP(selectedProductModal.price * modalQty)})
                    </span>
                  </button>
                </div>
              </div>

              {/* Columna Derecha: Análisis Olfativo Estilo Fragrantica + Reseñas Verificadas */}
              <div className="lg:col-span-7 space-y-6">
                {/* 1. ACORDES PRINCIPALES (Barras Horizontales Escalonadas Estilo Fragrantica) */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A0B11] mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D1B27E]" />
                    <span>Acordes Principales</span>
                  </h4>
                  <div className="space-y-1.5">
                    {activeFragrantica.accords.map((accord, idx) => (
                      <div key={idx} className="w-full bg-neutral-100 rounded-r-full overflow-hidden">
                        <div
                          style={{
                            width: `${Math.min(100, Math.max(24, (accord.pct / Math.max(1, ...activeFragrantica.accords.map((a) => a.pct))) * 100))}%`,
                            backgroundColor: accord.bg,
                            color: accord.text
                          }}
                          className="px-3 py-1 text-[11px] font-semibold rounded-r-full flex items-center justify-between transition-all duration-700"
                        >
                          <span>{accord.name}</span>
                          <span className="text-[10px] opacity-80">{accord.pct}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. PIRÁMIDE OLFATIVA (Salida, Corazón y Fondo) */}
                <div className="bg-[#F4F4F4] rounded-lg p-4 border border-neutral-200/80 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A0B11] flex items-center gap-2">
                    <Droplets className="w-3.5 h-3.5 text-[#D1B27E]" />
                    <span>Pirámide Olfativa</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-white p-3 rounded border border-neutral-200/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E7B42] block">
                        Notas de Salida
                      </span>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {activeFragrantica.pyramid.top.map((n, i) => (
                          <span key={i} className="bg-[#F4F4F4] text-[#0A0B11] px-2 py-0.5 rounded text-[11px]">
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border border-neutral-200/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E7B42] block">
                        Notas de Corazón
                      </span>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {activeFragrantica.pyramid.heart.map((n, i) => (
                          <span key={i} className="bg-[#F4F4F4] text-[#0A0B11] px-2 py-0.5 rounded text-[11px]">
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border border-neutral-200/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E7B42] block">
                        Notas de Fondo
                      </span>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {activeFragrantica.pyramid.base.map((n, i) => (
                          <span key={i} className="bg-[#F4F4F4] text-[#0A0B11] px-2 py-0.5 rounded text-[11px]">
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. ¿CUÁNDO USARLO? (Estaciones del Año y Día vs Noche estilo Fragrantica) */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A0B11] mb-3">
                    ¿Cuándo Usarlo? · Estaciones y Momento del Día
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    {[
                      { label: 'Invierno', pct: activeFragrantica.seasons.winter, icon: Snowflake, color: '#4A90E2' },
                      { label: 'Primavera', pct: activeFragrantica.seasons.spring, icon: Flower2, color: '#68B684' },
                      { label: 'Verano', pct: activeFragrantica.seasons.summer, icon: Sun, color: '#F5A623' },
                      { label: 'Otoño', pct: activeFragrantica.seasons.autumn, icon: Leaf, color: '#D06A3C' },
                      { label: 'Día', pct: activeFragrantica.seasons.day, icon: Sun, color: '#D1B27E' },
                      { label: 'Noche', pct: activeFragrantica.seasons.night, icon: Moon, color: '#2C3E50' }
                    ].map((s, idx) => {
                      const IconS = s.icon;
                      return (
                        <div key={idx} className="bg-[#F4F4F4] p-2.5 rounded border border-neutral-200/70">
                          <div className="flex items-center justify-between text-[11px] font-medium mb-1">
                            <span className="flex items-center gap-1.5 text-[#0A0B11]">
                              <IconS className="w-3.5 h-3.5" style={{ color: s.color }} />
                              {s.label}
                            </span>
                            <span className="text-[#686868]">{s.pct}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                            <div
                              style={{ width: `${s.pct}%`, backgroundColor: s.color }}
                              className="h-full rounded-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. RENDIMIENTO: LONGEVIDAD Y ESTELA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-[#0A0B11] text-white p-3.5 rounded-lg">
                    <div className="flex items-center gap-2 text-[#D1B27E] text-[11px] uppercase tracking-wider font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Longevidad / Fijación</span>
                    </div>
                    <div className="text-xs font-semibold mt-1">{activeFragrantica.longevity}</div>
                    <div className="w-full h-1.5 bg-white/15 rounded-full mt-2 overflow-hidden">
                      <div
                        style={{ width: `${activeFragrantica.longevityPct}%`, backgroundColor: '#D1B27E' }}
                        className="h-full rounded-full"
                      />
                    </div>
                  </div>

                  <div className="bg-[#0A0B11] text-white p-3.5 rounded-lg">
                    <div className="flex items-center gap-2 text-[#D1B27E] text-[11px] uppercase tracking-wider font-semibold">
                      <Wind className="w-3.5 h-3.5" />
                      <span>Estela / Proyección</span>
                    </div>
                    <div className="text-xs font-semibold mt-1">{activeFragrantica.sillage}</div>
                    <div className="w-full h-1.5 bg-white/15 rounded-full mt-2 overflow-hidden">
                      <div
                        style={{ width: `${activeFragrantica.sillagePct}%`, backgroundColor: '#D1B27E' }}
                        className="h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. RESEÑAS DE CLIENTES (CONECTADAS AL MÓDULO 10 DE RESEÑAS) */}
                <div className="pt-4 border-t border-neutral-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A0B11] flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#D1B27E]" />
                    <span>Opiniones Verificadas de Clientes</span>
                  </h4>

                  <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    {reviewsList
                      .filter((r) => r.productId === selectedProductModal.id && r.status === 'Aprobada')
                      .map((rev) => (
                        <div key={rev.id} className="bg-[#F4F4F4] p-3 rounded-lg border border-neutral-200/80 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#0A0B11]">{rev.author}</span>
                            <span className="text-amber-500 font-bold">{'★'.repeat(rev.rating || 5)}</span>
                          </div>
                          <p className="text-[#686868] mt-1">{rev.comment}</p>
                          {rev.reply && (
                            <div className="mt-1.5 pl-2.5 border-l-2 border-[#D1B27E] text-[11px] text-[#0A0B11]">
                              <strong>AromaLuxe:</strong> {rev.reply}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>

                  {/* Formulario rápido para dejar reseña con Consentimiento Explícito */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;
                      if (!reviewConsentChecked) {
                        showToast('Por favor acepta el consentimiento de publicación de reseña');
                        return;
                      }
                      const created = {
                        id: 'rev-' + Date.now(),
                        productId: selectedProductModal.id,
                        productName: selectedProductModal.name,
                        author: newReviewAuthor.trim(),
                        rating: Number(newReviewRating) || 5,
                        comment: newReviewComment.trim(),
                        date: new Date().toISOString().slice(0, 10),
                        status: 'Aprobada',
                        reply: ''
                      };
                      setReviewsList((prev) => [created, ...prev]);
                      setNewReviewAuthor('');
                      setNewReviewComment('');
                      setReviewConsentChecked(false);
                      showToast('¡Gracias por publicar tu reseña!');
                    }}
                    className="bg-[#FAF9F6] p-3 rounded-lg border border-neutral-200 space-y-2"
                  >
                    <div className="text-[11px] font-semibold text-[#0A0B11]">Escribir una reseña para este perfume</div>
                    <div className="grid grid-cols-3 gap-2">
                      <input
                        type="text"
                        value={newReviewAuthor}
                        onChange={(e) => setNewReviewAuthor(e.target.value)}
                        placeholder="Tu nombre"
                        className="aroma-input col-span-2 border border-neutral-300 rounded px-2.5 py-1.5 text-xs"
                        required
                      />
                      <select
                        value={newReviewRating}
                        onChange={(e) => setNewReviewRating(Number(e.target.value))}
                        className="aroma-input border border-neutral-300 rounded px-2 py-1.5 text-xs"
                      >
                        <option value={5}>★★★★★ (5)</option>
                        <option value={4}>★★★★☆ (4)</option>
                        <option value={3}>★★★☆☆ (3)</option>
                      </select>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        placeholder="Comparte tu experiencia con su aroma y fijación..."
                        className="aroma-input flex-grow border border-neutral-300 rounded px-2.5 py-1.5 text-xs"
                        required
                      />
                      <button
                        type="submit"
                        style={{ backgroundColor: siteConfig.brandColors.black }}
                        className="text-[#D1B27E] text-xs font-bold px-3 py-1.5 rounded shrink-0 hover:bg-[#D1B27E] hover:text-[#0A0B11] transition"
                      >
                        Publicar
                      </button>
                    </div>
                    <label className="flex items-start gap-2 text-[11px] text-[#686868] cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={reviewConsentChecked}
                        onChange={(e) => setReviewConsentChecked(e.target.checked)}
                        className="mt-0.5 accent-[#0A0B11]"
                        required
                      />
                      <span>
                        Autorizo publicar mi nombre y comentario en el catálogo conforme a la{' '}
                        <button
                          type="button"
                          onClick={() => setActiveLegalModal('privacy')}
                          className="underline text-[#0A0B11] font-medium"
                        >
                          Política de Privacidad
                        </button>
                        .
                      </span>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          DRAWER DEL CARRITO DE COMPRAS -> CUPONES + COTIZAR AL WHATSAPP
      ===================================================================== */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-modal-pop bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl"
          >
            {/* Cabecera del Carrito con Logo de Carrito ShoppingCart */}
            <div className="p-5 bg-[#0A0B11] text-white flex items-center justify-between border-b border-[#D1B27E]/40">
              <div className="flex items-center gap-2.5">
                <ShoppingCart className="w-5 h-5 text-[#D1B27E]" />
                <div>
                  <span className="font-serif-luxury text-lg font-semibold text-[#D1B27E] block leading-none">
                    Tu Carrito de Compras
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    {cartTotalCount} {cartTotalCount === 1 ? 'perfume seleccionado' : 'perfumes seleccionados'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-neutral-400 hover:text-white transition-transform hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lista de Perfumes en el Carrito */}
            <div className="p-5 flex-grow overflow-y-auto space-y-3">
              {quoteCart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <ShoppingCart className="w-12 h-12 text-neutral-300 mx-auto" />
                  <p className="font-serif-luxury text-xl text-[#0A0B11]">
                    Tu carrito está vacío
                  </p>
                  <p className="text-xs text-[#686868] max-w-xs mx-auto">
                    Haz clic en <strong>"Agregar al carrito"</strong> en tus perfumes favoritos para armar tu pedido y cotizarlo por WhatsApp.
                  </p>
                </div>
              ) : (
                quoteCart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-[#F4F4F4] rounded-lg border border-neutral-200/90 transition-all hover:border-[#D1B27E]"
                  >
                    <div className="w-14 h-16 rounded overflow-hidden shrink-0 border border-neutral-200 bg-white">
                      <PerfumeBottleVisual product={item} className="w-full h-full" compact />
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="text-[10px] font-bold uppercase text-[#686868]">
                        {item.brand} · {item.selectedSize || '100 ml'}
                      </div>
                      <div className="text-xs font-semibold text-[#0A0B11] truncate">
                        {item.name}
                      </div>
                      <div className="text-xs font-bold text-[#9E7B42] mt-0.5">
                        {formatCLP(item.price)} c/u
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-neutral-300 rounded bg-white">
                          <button
                            onClick={() => updateCartQty(item.id, -1)}
                            className="px-2 py-0.5 text-xs font-bold text-[#0A0B11] hover:bg-neutral-100"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 text-xs font-semibold text-[#0A0B11]">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateCartQty(item.id, 1)}
                            className="px-2 py-0.5 text-xs font-bold text-[#0A0B11] hover:bg-neutral-100"
                          >
                            +
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#0A0B11]">
                            {formatCLP(item.price * item.qty)}
                          </span>
                          <button
                            onClick={() => removeCartItem(item.id)}
                            className="text-neutral-400 hover:text-red-500 transition"
                            title="Quitar del carrito"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Resumen de Total + Cupón de Descuento + Botón "Cotizar al WhatsApp" */}
            {quoteCart.length > 0 && (
              <div className="p-5 bg-[#FAF9F6] border-t border-neutral-200 space-y-4">
                {/* Aplicar Cupón Promocional (Conectado al Módulo 9) */}
                <div className="space-y-1.5">
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Código de descuento (ej. AROMALUXE10)"
                      className="aroma-input flex-grow border border-neutral-300 rounded-md px-3 py-1.5 text-xs uppercase"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCouponCode}
                      className="bg-[#0A0B11] text-[#D1B27E] text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-[#D1B27E] hover:text-[#0A0B11] transition"
                    >
                      Aplicar
                    </button>
                  </div>
                  {appliedCoupon && (
                    <div className="flex items-center justify-between text-[11px] bg-emerald-50 border border-emerald-200 text-emerald-800 px-2.5 py-1 rounded">
                      <span>
                        Cupón <strong>{appliedCoupon.code}</strong> activo (-{formatCLP(cartDiscountAmount)})
                      </span>
                      <button
                        onClick={() => setAppliedCoupon(null)}
                        className="text-red-600 hover:underline font-semibold"
                      >
                        Quitar
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#686868]">
                    <span>Cantidad de productos:</span>
                    <span>{cartTotalCount} unidades</span>
                  </div>
                  {cartDiscountAmount > 0 && (
                    <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold">
                      <span>Descuento promocional:</span>
                      <span>-{formatCLP(cartDiscountAmount)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
                    <span className="text-sm font-bold text-[#0A0B11] uppercase tracking-wider">
                      Total a Pagar:
                    </span>
                    <span className="text-2xl font-extrabold text-[#0A0B11]">
                      {formatCLP(cartTotalAmount)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={openCartQuoteWhatsApp}
                  style={{ backgroundColor: siteConfig.brandColors.gold }}
                  className="btn-interactive w-full text-[#0A0B11] font-bold text-xs py-3.5 px-4 rounded-lg shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0A0B11]" />
                  <span>Cotizar al WhatsApp ({formatCLP(cartTotalAmount)})</span>
                </button>

                <button
                  onClick={() => {
                    setQuoteCart([]);
                    setAppliedCoupon(null);
                  }}
                  className="w-full text-center text-xs text-[#686868] hover:text-red-600 transition"
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          INTERFAZ DE INICIAR SESIÓN, REGISTRO Y RECUPERAR CONTRASEÑA
          (100% CONFIDENCIAL: SIN PISTAS NI AUTOCOMPLETADO DE ADMIN)
      ===================================================================== */}
      {isAuthModalOpen && (
        <div
          onClick={() => setIsAuthModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-modal-pop bg-[#0A0B11] text-white border border-[#D1B27E]/70 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-transform hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <AromaLuxeLogo size="xs" showText={false} />
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#D1B27E] mt-2">
                {authView === 'login' && 'Iniciar Sesión'}
                {authView === 'register' && 'Crear Cuenta en AromaLuxe'}
                {authView === 'forgot' && 'Recuperar Contraseña'}
                {authView === 'reset-simulation' && 'Crear Nueva Contraseña'}
              </h3>
              <p className="text-xs text-neutral-300 mt-1">
                {authView === 'login' && 'Ingresa con tu correo electrónico y contraseña'}
                {authView === 'register' && 'Regístrate con tu nombre, correo y contraseña'}
                {authView === 'forgot' && `Te enviaremos un enlace desde ${ADMIN_EMAIL}`}
                {authView === 'reset-simulation' && `Restableciendo clave para ${recoveryEmail}`}
              </p>
            </div>

            {/* Pestañas rápidas entre Iniciar Sesión y Registrarse */}
            {(authView === 'login' || authView === 'register') && (
              <div className="grid grid-cols-2 gap-2 p-1 bg-white/10 rounded-lg mb-5 border border-white/15 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setAuthView('login');
                    setAuthError('');
                    setAuthSuccessMsg('');
                  }}
                  className={`py-2 rounded-md font-semibold transition-all duration-200 active:scale-95 ${
                    authView === 'login'
                      ? 'bg-[#D1B27E] text-[#0A0B11] shadow'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Iniciar Sesión
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthView('register');
                    setAuthError('');
                    setAuthSuccessMsg('');
                  }}
                  className={`py-2 rounded-md font-semibold transition-all duration-200 active:scale-95 ${
                    authView === 'register'
                      ? 'bg-[#D1B27E] text-[#0A0B11] shadow'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Registrarse
                </button>
              </div>
            )}

            {/* VISTA 1: INICIAR SESIÓN */}
            {authView === 'login' && (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#F4F4F4] mb-1.5">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="aroma-input w-full border-2 border-neutral-300 focus:border-[#D1B27E] focus:ring-2 focus:ring-[#D1B27E]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-medium text-[#F4F4F4]">
                      Contraseña
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setAuthView('forgot');
                        setAuthError('');
                        setAuthSuccessMsg('');
                      }}
                      className="text-[11px] text-[#D1B27E] hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Ingresa tu contraseña"
                      className="aroma-input w-full border-2 border-neutral-300 focus:border-[#D1B27E] focus:ring-2 focus:ring-[#D1B27E]/30 rounded-lg pl-3.5 pr-10 py-2.5 text-sm focus:outline-none transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#686868] hover:text-[#0A0B11]"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {authError && (
                  <div className="p-2.5 bg-red-500/20 border border-red-400/60 text-red-200 text-xs rounded-md">
                    {authError}
                  </div>
                )}

                <button
                  type="submit"
                  style={{ backgroundColor: siteConfig.brandColors.gold }}
                  className="btn-interactive w-full text-[#0A0B11] font-bold text-xs py-3.5 rounded-lg uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>Ingresar</span>
                </button>
              </form>
            )}

            {/* VISTA 2: REGISTRARSE (CON CONSENTIMIENTO EXPLÍCITO DE FORMULARIO Y SIN PATRONES OSCUROS) */}
            {authView === 'register' && (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#F4F4F4] mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    placeholder="Tu nombre y apellido"
                    className="aroma-input w-full border-2 border-neutral-300 focus:border-[#D1B27E] focus:ring-2 focus:ring-[#D1B27E]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F4F4F4] mb-1.5">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="aroma-input w-full border-2 border-neutral-300 focus:border-[#D1B27E] focus:ring-2 focus:ring-[#D1B27E]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F4F4F4] mb-1.5">
                    Crear contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      placeholder="Mínimo 4 caracteres"
                      className="aroma-input w-full border-2 border-neutral-300 focus:border-[#D1B27E] focus:ring-2 focus:ring-[#D1B27E]/30 rounded-lg pl-3.5 pr-10 py-2.5 text-sm focus:outline-none transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#686868] hover:text-[#0A0B11]"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Casilla de consentimiento desmarcada por defecto (Cero Patrones Oscuros) */}
                <label className="flex items-start gap-2.5 text-xs text-neutral-300 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={registerConsentChecked}
                    onChange={(e) => setRegisterConsentChecked(e.target.checked)}
                    className="mt-0.5 accent-[#D1B27E] w-4 h-4 shrink-0"
                    required
                  />
                  <span className="leading-relaxed">
                    He leído y acepto expresamente la{' '}
                    <button
                      type="button"
                      onClick={() => setActiveLegalModal('privacy')}
                      className="text-[#D1B27E] underline"
                    >
                      Política de Privacidad
                    </button>{' '}
                    y los{' '}
                    <button
                      type="button"
                      onClick={() => setActiveLegalModal('terms')}
                      className="text-[#D1B27E] underline"
                    >
                      Términos y Condiciones
                    </button>{' '}
                    para el tratamiento de mis datos de cuenta.
                  </span>
                </label>

                {authError && (
                  <div className="p-2.5 bg-red-500/20 border border-red-400/60 text-red-200 text-xs rounded-md">
                    {authError}
                  </div>
                )}

                <button
                  type="submit"
                  style={{ backgroundColor: siteConfig.brandColors.gold }}
                  className="btn-interactive w-full text-[#0A0B11] font-bold text-xs py-3.5 rounded-lg uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Crear Cuenta</span>
                </button>
              </form>
            )}

            {/* VISTA 3: RECUPERAR CONTRASEÑA */}
            {authView === 'forgot' && (
              <div className="space-y-4">
                {!authSuccessMsg ? (
                  <form onSubmit={handleForgotSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F4F4F4] mb-1.5">
                        Ingresa el correo con el que creaste tu cuenta
                      </label>
                      <input
                        type="email"
                        value={recoveryEmail}
                        onChange={(e) => setRecoveryEmail(e.target.value)}
                        placeholder="tucorreo@ejemplo.com"
                        className="aroma-input w-full border-2 border-neutral-300 focus:border-[#D1B27E] focus:ring-2 focus:ring-[#D1B27E]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none transition-all"
                        required
                      />
                    </div>

                    <label className="flex items-start gap-2.5 text-xs text-neutral-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={recoveryConsentChecked}
                        onChange={(e) => setRecoveryConsentChecked(e.target.checked)}
                        className="mt-0.5 accent-[#D1B27E] w-4 h-4 shrink-0"
                        required
                      />
                      <span>
                        Autorizo el uso de mi correo únicamente para recibir el enlace de restablecimiento de contraseña conforme a la{' '}
                        <button
                          type="button"
                          onClick={() => setActiveLegalModal('privacy')}
                          className="text-[#D1B27E] underline"
                        >
                          Política de Privacidad
                        </button>
                        .
                      </span>
                    </label>

                    {authError && (
                      <div className="p-2.5 bg-red-500/20 border border-red-400/60 text-red-200 text-xs rounded-md">
                        {authError}
                      </div>
                    )}

                    <button
                      type="submit"
                      style={{ backgroundColor: siteConfig.brandColors.gold }}
                      className="btn-interactive w-full text-[#0A0B11] font-bold text-xs py-3.5 rounded-lg uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Enviar Correo de Recuperación</span>
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-emerald-500/15 border border-emerald-400/50 rounded-lg space-y-3 text-xs">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>¡Correo Enviado Correctamente!</span>
                    </div>
                    <p className="text-neutral-200 leading-relaxed">{authSuccessMsg}</p>
                    <div className="p-3 bg-black/40 rounded border border-white/10 text-[11px] text-neutral-300">
                      <div><strong>De:</strong> {ADMIN_EMAIL}</div>
                      <div><strong>Para:</strong> {recoveryEmail}</div>
                      <div><strong>Asunto:</strong> Restablecer contraseña de AromaLuxe Perfumes</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setAuthError('');
                        setAuthView('reset-simulation');
                      }}
                      className="btn-interactive w-full bg-[#D1B27E] text-[#0A0B11] font-bold py-2.5 rounded-md text-xs"
                    >
                      Abrir enlace del correo y cambiar contraseña ahora →
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setAuthView('login');
                    setAuthError('');
                    setAuthSuccessMsg('');
                  }}
                  className="w-full text-center text-xs text-neutral-400 hover:text-white pt-1"
                >
                  ← Volver a Iniciar Sesión
                </button>
              </div>
            )}

            {/* VISTA 4: CAMBIAR LA CONTRASEÑA DESDE EL ENLACE DEL CORREO */}
            {authView === 'reset-simulation' && (
              <form onSubmit={handleResetPasswordConfirm} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#F4F4F4] mb-1.5">
                    Nueva contraseña para {recoveryEmail}
                  </label>
                  <input
                    type="password"
                    value={newResetPassword}
                    onChange={(e) => setNewResetPassword(e.target.value)}
                    placeholder="Escribe tu nueva contraseña"
                    className="aroma-input w-full border-2 border-neutral-300 focus:border-[#D1B27E] focus:ring-2 focus:ring-[#D1B27E]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none transition-all"
                    required
                  />
                </div>

                {authError && (
                  <div className="p-2.5 bg-red-500/20 border border-red-400/60 text-red-200 text-xs rounded-md">
                    {authError}
                  </div>
                )}

                <button
                  type="submit"
                  style={{ backgroundColor: siteConfig.brandColors.gold }}
                  className="btn-interactive w-full text-[#0A0B11] font-bold text-xs py-3.5 rounded-lg uppercase tracking-wider"
                >
                  Guardar Nueva Contraseña
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL DE LECTURA DEL BLOG Y MODAL DE POLÍTICAS
      ===================================================================== */}
      {selectedBlogModal && (
        <div
          onClick={() => setSelectedBlogModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#D1B27E] relative"
          >
            <button
              onClick={() => setSelectedBlogModal(null)}
              className="absolute top-4 right-4 text-[#686868] hover:text-[#0A0B11]"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D1B27E] bg-[#0A0B11] px-2.5 py-1 rounded">
              {selectedBlogModal.category}
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#0A0B11] mt-3">
              {selectedBlogModal.title}
            </h3>
            <p className="text-sm text-[#686868] mt-4 leading-relaxed whitespace-pre-line">
              {selectedBlogModal.content}
            </p>
          </div>
        </div>
      )}

      {isPolicyModalOpen && (
        <div
          onClick={() => setIsPolicyModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#D1B27E] relative"
          >
            <button
              onClick={() => setIsPolicyModalOpen(false)}
              className="absolute top-4 right-4 text-[#686868] hover:text-[#0A0B11]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#0A0B11]">
              Política de Devoluciones y Garantía
            </h3>
            <p className="text-xs sm:text-sm text-[#686868] mt-4 leading-relaxed whitespace-pre-line">
              {siteConfig.returnPolicyText}
            </p>
          </div>
        </div>
      )}

      {activeLegalModal && (
        <div
          onClick={() => setActiveLegalModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative my-auto max-h-[88vh] overflow-y-auto"
          >
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 text-[#686868] hover:text-[#0A0B11]"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9E7B42]">
              TRANSPARENCIA Y CUMPLIMIENTO LEGAL
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#0A0B11] mt-1">
              {activeLegalModal === 'about' && 'Sobre Nosotros · AromaLuxe Perfumes'}
              {activeLegalModal === 'privacy' && 'Política de Privacidad y Protección de Datos'}
              {activeLegalModal === 'terms' && 'Términos y Condiciones'}
              {activeLegalModal === 'refunds' && 'Política de Reembolsos, Cambios y Devoluciones'}
              {activeLegalModal === 'cookies' && 'Política de Cookies y Almacenamiento Local'}
              {activeLegalModal === 'sdks' && 'Auditoría de SDKs de Terceros y Cero Patrones Oscuros'}
            </h3>

            {activeLegalModal === 'sdks' ? (
              <div className="mt-4 space-y-3 text-xs text-[#0A0B11]">
                <p className="text-[#686868]">
                  En AromaLuxe auditamos todos los recursos externos para garantizar que ningún SDK recopile información sin tu consentimiento explícito ni utilice patrones oscuros de interfaz:
                </p>
                <div className="space-y-2.5">
                  {(siteConfig.sdkAudit || INITIAL_SITE_CONFIG.sdkAudit).map((sdk) => (
                    <div key={sdk.id} className="p-3.5 rounded-lg bg-[#F4F4F4] border border-neutral-200">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#0A0B11]">{sdk.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                          {sdk.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#686868] mt-1">
                        <strong>Proveedor:</strong> {sdk.provider} · <strong>Categoría:</strong> {sdk.category}
                      </div>
                      <div className="text-[11px] text-[#0A0B11] mt-1">{sdk.purpose}</div>
                      <div className="text-[11px] text-[#686868] mt-0.5">
                        <strong>Datos compartidos:</strong> {sdk.dataShared}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-[#686868] mt-4 leading-relaxed whitespace-pre-line">
                {activeLegalModal === 'about' && siteConfig.aboutUsText}
                {activeLegalModal === 'privacy' && siteConfig.privacyPolicyText}
                {activeLegalModal === 'terms' && siteConfig.termsText}
                {activeLegalModal === 'refunds' && (siteConfig.refundPolicyText || siteConfig.returnPolicyText)}
                {activeLegalModal === 'cookies' && (siteConfig.cookiesPolicyText || INITIAL_SITE_CONFIG.cookiesPolicyText)}
              </p>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          BANNER DE CONSENTIMIENTO DE COOKIES (DISEÑO ÉTICO SIN PATRONES OSCUROS)
      ===================================================================== */}
      {(!cookieConsent || isCookieSettingsOpen) && (
        <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-[#0A0B11]/95 backdrop-blur-md border-t border-white/15 text-white shadow-2xl">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="space-y-1 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D1B27E]">
                <ShieldCheck className="w-4 h-4" />
                <span>Respetamos tu Privacidad · Sin Patrones Oscuros</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Utilizamos almacenamiento local esencial para el funcionamiento de tu carrito de compras y, solo si lo autorizas, analítica propia para conocer qué perfumes son los más visitados. Ambos botones tienen el mismo peso visual para que decidas con total libertad. Consulta nuestra{' '}
                <button
                  onClick={() => setActiveLegalModal('cookies')}
                  className="underline text-[#D1B27E]"
                >
                  Política de Cookies
                </button>{' '}
                y{' '}
                <button
                  onClick={() => setActiveLegalModal('privacy')}
                  className="underline text-[#D1B27E]"
                >
                  Política de Privacidad
                </button>
                .
              </p>

              {isCookieSettingsOpen && (
                <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>Esenciales (Carrito y Sesión)</span>
                    <span className="text-[10px] text-neutral-400 font-semibold">Siempre activas</span>
                  </div>
                  <label className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer">
                    <span>Analítica Interna de Perfumes</span>
                    <input
                      type="checkbox"
                      checked={cookiePrefsDraft.analytics}
                      onChange={(e) =>
                        setCookiePrefsDraft({ ...cookiePrefsDraft, analytics: e.target.checked })
                      }
                      className="accent-[#D1B27E] w-4 h-4"
                    />
                  </label>
                  <label className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer">
                    <span>SDKs de Marketing Terceros</span>
                    <input
                      type="checkbox"
                      checked={cookiePrefsDraft.marketing}
                      onChange={(e) =>
                        setCookiePrefsDraft({ ...cookiePrefsDraft, marketing: e.target.checked })
                      }
                      className="accent-[#D1B27E] w-4 h-4"
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Botones con simetría visual (Sin Patrones Oscuros) */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => handleSaveCookieConsent('essential')}
                className="flex-1 lg:flex-initial px-4 py-2.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
              >
                Solo esenciales (Rechazar opcionales)
              </button>
              {isCookieSettingsOpen ? (
                <button
                  onClick={() => handleSaveCookieConsent('custom')}
                  className="flex-1 lg:flex-initial px-4 py-2.5 rounded-lg border border-[#D1B27E] bg-white/10 hover:bg-white/20 text-[#D1B27E] text-xs font-semibold transition"
                >
                  Guardar selección
                </button>
              ) : (
                <button
                  onClick={() => setIsCookieSettingsOpen(true)}
                  className="px-3.5 py-2.5 rounded-lg border border-white/20 text-neutral-300 hover:text-white text-xs font-medium transition"
                >
                  Personalizar
                </button>
              )}
              <button
                onClick={() => handleSaveCookieConsent('all')}
                className="flex-1 lg:flex-initial px-4 py-2.5 rounded-lg border border-[#D1B27E] bg-[#D1B27E] text-[#0A0B11] text-xs font-semibold transition"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          WIDGET FLOTANTE DE WHATSAPP
      ===================================================================== */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        {isWhatsAppBubbleOpen && (
          <div className="mb-3 w-72 bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden">
            <div className="bg-[#0A0B11] text-white p-3.5 flex items-center justify-between border-b border-[#D1B27E]/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-[#0A0B11]">
                  <MessageCircle className="w-4 h-4 fill-[#0A0B11]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#D1B27E]">AromaLuxe Perfumes</div>
                  <div className="text-[10px] text-emerald-400">En línea · Atención directa</div>
                </div>
              </div>
              <button
                onClick={() => setIsWhatsAppBubbleOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3.5 bg-[#F4F4F4] space-y-2.5">
              <div className="bg-white p-3 rounded-lg text-xs text-[#0A0B11] border border-neutral-200">
                {siteConfig.whatsappGreeting}
              </div>
              <button
                onClick={() => openGeneralWhatsApp()}
                className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-[#0A0B11] font-bold text-xs py-2.5 px-4 rounded-md flex items-center justify-center gap-1.5 transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Abrir Chat de WhatsApp</span>
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsWhatsAppBubbleOpen(!isWhatsAppBubbleOpen)}
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0A0B11] shadow-xl flex items-center justify-center transition-transform hover:scale-105"
          title="Consultar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-[#0A0B11]" />
        </button>
      </div>

      {/* =====================================================================
          PANEL DE ADMINISTRACIÓN MINIMALISTA Y EDITORIAL (12 MÓDULOS + ANALÍTICA DE CLICS)
      ===================================================================== */}
      {isAdminAuthenticated && isAdminPanelOpen && (
        <div className="fixed inset-0 z-50 bg-[#F7F6F3] flex flex-col overflow-hidden text-[#0A0B11]">
          {/* Barra Superior Minimalista del Panel Admin */}
          <div className="bg-white border-b border-neutral-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <AromaLuxeLogo size="xs" showText={false} lightMode />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif-luxury text-lg font-semibold tracking-[0.14em] text-[#0A0B11] uppercase">
                    AromaLuxe Admin
                  </span>
                  <span className="bg-neutral-100 text-[#686868] border border-neutral-200 text-[10px] px-2 py-0.5 rounded font-medium">
                    {currentUser?.role || 'Administrador'}
                  </span>
                </div>
                <p className="text-[11px] text-[#686868]">
                  Gestión de catálogo, analítica de clics y cumplimiento legal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={resetFactoryDefaults}
                className="text-xs text-[#686868] hover:text-[#0A0B11] border border-neutral-200 bg-white hover:bg-neutral-50 px-3 py-1.5 rounded-md flex items-center gap-1.5 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Restaurar Base</span>
              </button>

              <button
                onClick={() => setIsAdminPanelOpen(false)}
                className="bg-[#0A0B11] hover:bg-neutral-800 text-white font-medium text-xs px-4 py-2 rounded-md flex items-center gap-1.5 transition"
              >
                <Eye className="w-3.5 h-3.5 text-[#D1B27E]" />
                <span>Volver a la Tienda</span>
              </button>
            </div>
          </div>

          <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
            {/* MENÚ LATERAL MINIMALISTA */}
            <aside className="w-full lg:w-60 bg-white border-b lg:border-b-0 lg:border-r border-neutral-200 p-4 overflow-y-auto shrink-0 space-y-5">
              {/* Bloque Principal: PERFUME ADMIN -> Dashboard */}
              <div>
                <div className="text-[10px] font-semibold tracking-[0.18em] text-[#686868] uppercase px-3 mb-1.5">
                  PERFUME ADMIN
                </div>
                <button
                  onClick={() => setAdminTab('dashboard')}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium transition ${
                    adminTab === 'dashboard'
                      ? 'bg-[#0A0B11] text-white'
                      : 'text-[#686868] hover:bg-neutral-100 hover:text-[#0A0B11]'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Dashboard & Clics</span>
                </button>
              </div>

              {/* Grupo: CATÁLOGO */}
              <div>
                <div className="text-[10px] font-semibold tracking-[0.18em] text-[#686868] uppercase px-3 mb-1.5">
                  CATÁLOGO
                </div>
                <div className="space-y-0.5">
                  {[
                    { id: 'products', label: 'Productos', icon: Package, badge: products.length },
                    { id: 'brands', label: 'Marcas', icon: Tag, badge: brandsList.length },
                    { id: 'categories', label: 'Categorías', icon: Layers, badge: categoriesList.length },
                    { id: 'families', label: 'Familias olfativas', icon: Droplets, badge: olfactoryFamilies.length },
                    { id: 'inventory', label: 'Inventario', icon: Boxes, badge: dashboardStats.outOfStock > 0 ? `${dashboardStats.outOfStock} s/stock` : null }
                  ].map((item) => {
                    const IconC = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setEditingProduct(null);
                          setAdminTab(item.id);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition ${
                          adminTab === item.id
                            ? 'bg-[#0A0B11] text-white'
                            : 'text-[#686868] hover:bg-neutral-100 hover:text-[#0A0B11]'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <IconC className="w-4 h-4" />
                          <span>{item.label}</span>
                        </span>
                        {item.badge !== null && (
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded ${
                              adminTab === item.id ? 'bg-white/20 text-white' : 'bg-neutral-100 text-[#686868]'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grupo: DISEÑO DE LA TIENDA */}
              <div>
                <div className="text-[10px] font-semibold tracking-[0.18em] text-[#686868] uppercase px-3 mb-1.5">
                  CONTENIDO DE LA TIENDA
                </div>
                <div className="space-y-0.5">
                  {[
                    { id: 'banners', label: 'Banners', icon: ImageIcon, badge: bannersList.length },
                    { id: 'sections', label: 'Secciones y Políticas', icon: Layout, badge: null },
                    { id: 'coupons', label: 'Cupones y descuentos', icon: TicketPercent, badge: couponsList.length },
                    { id: 'blog', label: 'Blog', icon: Newspaper, badge: 'Nuevo' },
                    { id: 'reviews', label: 'Reseñas', icon: MessageSquare, badge: reviewsList.filter((r) => r.status === 'Pendiente').length || null }
                  ].map((item) => {
                    const IconC = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setAdminTab(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition ${
                          adminTab === item.id
                            ? 'bg-[#0A0B11] text-white'
                            : 'text-[#686868] hover:bg-neutral-100 hover:text-[#0A0B11]'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <IconC className="w-4 h-4" />
                          <span>{item.label}</span>
                        </span>
                        {item.badge !== null && (
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded ${
                              adminTab === item.id ? 'bg-white/20 text-white' : 'bg-neutral-100 text-[#686868]'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grupo: ADMINISTRACIÓN */}
              <div>
                <div className="text-[10px] font-semibold tracking-[0.18em] text-[#686868] uppercase px-3 mb-1.5">
                  ADMINISTRACIÓN
                </div>
                <div className="space-y-0.5">
                  {[
                    { id: 'users', label: 'Usuarios y permisos', icon: Users },
                    { id: 'settings', label: 'Configuración & SDKs', icon: Settings }
                  ].map((item) => {
                    const IconC = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setAdminTab(item.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium transition ${
                          adminTab === item.id
                            ? 'bg-[#0A0B11] text-white'
                            : 'text-[#686868] hover:bg-neutral-100 hover:text-[#0A0B11]'
                        }`}
                      >
                        <IconC className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* ÁREA PRINCIPAL MINIMALISTA DE LOS 12 MÓDULOS */}
            <div className="flex-grow overflow-y-auto p-6 sm:p-8 bg-[#F7F6F3] text-[#0A0B11] admin-minimal-workspace">
              <style>{`
                .admin-minimal-workspace .bg-\\[\\#12141E\\] {
                  background-color: #FFFFFF !important;
                  border-color: #E5E5E5 !important;
                  color: #0A0B11 !important;
                  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
                }
                .admin-minimal-workspace .text-white {
                  color: #0A0B11 !important;
                }
                .admin-minimal-workspace .text-neutral-300,
                .admin-minimal-workspace .text-neutral-400 {
                  color: #686868 !important;
                }
                .admin-minimal-workspace .border-white\\/10,
                .admin-minimal-workspace .border-white\\/15,
                .admin-minimal-workspace .border-white\\/20 {
                  border-color: #E5E5E5 !important;
                }
                .admin-minimal-workspace .divide-white\\/10 > :not([hidden]) ~ :not([hidden]) {
                  border-color: #EFEFEF !important;
                }
                .admin-minimal-workspace .bg-black\\/30,
                .admin-minimal-workspace .bg-black\\/40,
                .admin-minimal-workspace .bg-black\\/50,
                .admin-minimal-workspace .bg-white\\/5,
                .admin-minimal-workspace .bg-white\\/10 {
                  background-color: #F8F8F7 !important;
                  color: #0A0B11 !important;
                }
              `}</style>

              {/* ===============================================================
                  MÓDULO 1: DASHBOARD MINIMALISTA + RECOLECCIÓN DE DATOS DE PERFUMES
              =============================================================== */}
              {adminTab === 'dashboard' && (
                <div className="max-w-6xl mx-auto space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#686868] font-semibold">
                        Resumen General y Telemetría
                      </span>
                      <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#0A0B11]">
                        Panel de Control
                      </h2>
                    </div>

                    {/* Accesos Rápidos para Agregar Productos y Marcas */}
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={startNewProduct}
                        style={{ backgroundColor: '#0A0B11', color: '#FFFFFF' }}
                        className="font-medium text-xs px-4 py-2 rounded-md flex items-center gap-1.5 hover:opacity-90 transition"
                      >
                        <Plus className="w-3.5 h-3.5 text-[#D1B27E]" />
                        <span>Nuevo Producto</span>
                      </button>
                      <button
                        onClick={() => {
                          setEditingBrand({
                            id: 'br-' + Date.now(),
                            name: '',
                            country: 'Emiratos Árabes Unidos',
                            description: '',
                            logo: '',
                            active: true
                          });
                          setAdminTab('brands');
                        }}
                        className="bg-white border border-neutral-300 text-[#0A0B11] text-xs font-medium px-4 py-2 rounded-md flex items-center gap-1.5 hover:bg-neutral-50 transition"
                      >
                        <Tag className="w-3.5 h-3.5 text-[#9E7B42]" />
                        <span>Nueva Marca</span>
                      </button>
                    </div>
                  </div>

                  {/* Tarjetas Minimalistas de Estado del Catálogo (Sin el consolidado Excel) */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white border border-neutral-200 rounded-lg p-4">
                      <span className="text-xs text-[#686868]">Perfumes Publicados</span>
                      <div className="text-2xl font-semibold text-[#0A0B11] mt-1">
                        {dashboardStats.published}
                      </div>
                      <span className="text-[11px] text-[#686868]">
                        {dashboardStats.inactive} inactivos · {dashboardStats.drafts} borradores
                      </span>
                    </div>

                    <div className="bg-white border border-neutral-200 rounded-lg p-4">
                      <span className="text-xs text-[#686868]">Alertas de Stock</span>
                      <div className="text-2xl font-semibold text-[#0A0B11] mt-1">
                        {dashboardStats.outOfStock} <span className="text-xs font-normal text-[#686868]">agotados</span>
                      </div>
                      <span className="text-[11px] text-[#686868]">
                        {dashboardStats.lowStock} bajo stock mínimo
                      </span>
                    </div>

                    <div className="bg-white border border-neutral-200 rounded-lg p-4">
                      <span className="text-xs text-[#686868]">Clics en Notas de Perfumes</span>
                      <div className="text-2xl font-semibold text-[#0A0B11] mt-1">
                        {dashboardStats.totalClicks}
                      </div>
                      <span className="text-[11px] text-[#686868]">Aperturas de fichas en catálogo</span>
                    </div>

                    <div className="bg-white border border-neutral-200 rounded-lg p-4">
                      <span className="text-xs text-[#686868]">Intenciones de Carrito</span>
                      <div className="text-2xl font-semibold text-[#0A0B11] mt-1">
                        {dashboardStats.totalCartAdds}
                      </div>
                      <span className="text-[11px] text-[#686868]">Veces agregados al carrito</span>
                    </div>
                  </div>

                  {/* RECOLECCIÓN DE DATOS: PERFUMES MÁS CLICKEADOS E INTERACCIONES */}
                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-serif-luxury text-xl font-semibold text-[#0A0B11]">
                          Rendimiento y Recolección de Datos de Perfumes (Más Clickeados)
                        </h3>
                        <p className="text-xs text-[#686868]">
                          Se actualiza automáticamente cada vez que un visitante abre las notas de un perfume o lo agrega al carrito.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setPerfumeTelemetry({});
                          showToast('Contadores de clics reiniciados a cero');
                        }}
                        className="text-xs text-[#686868] hover:text-[#0A0B11] border border-neutral-200 px-3 py-1.5 rounded self-start"
                      >
                        Reiniciar contadores
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-neutral-200 text-[11px] text-[#686868]">
                            <th className="pb-2.5 font-medium">#</th>
                            <th className="pb-2.5 font-medium">Perfume</th>
                            <th className="pb-2.5 font-medium">Marca / Género</th>
                            <th className="pb-2.5 font-medium">Clics en Ficha</th>
                            <th className="pb-2.5 font-medium">Agregados al Carrito</th>
                            <th className="pb-2.5 font-medium">Conversión a Carrito</th>
                            <th className="pb-2.5 font-medium text-right">Última Interacción</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {dashboardStats.mostClickedPerfumes.map((item, idx) => {
                            const maxClicks = Math.max(1, dashboardStats.mostClickedPerfumes[0]?.clicks || 1);
                            const barWidth = Math.min(100, Math.round((item.clicks / maxClicks) * 100));
                            const convRate = item.clicks > 0 ? Math.round((item.cartAdds / item.clicks) * 100) : 0;
                            return (
                              <tr key={item.id} className="hover:bg-neutral-50/80">
                                <td className="py-3 font-semibold text-[#686868]">{idx + 1}</td>
                                <td className="py-3">
                                  <div className="font-semibold text-[#0A0B11]">{item.name}</div>
                                </td>
                                <td className="py-3 text-[#686868]">
                                  {item.brand} · {item.gender}
                                </td>
                                <td className="py-3 w-44">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-[#0A0B11] w-7">{item.clicks}</span>
                                    <div className="flex-grow h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                                      <div
                                        style={{ width: `${barWidth}%`, backgroundColor: '#D1B27E' }}
                                        className="h-full rounded-full"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td className="py-3 font-semibold text-[#0A0B11]">{item.cartAdds}</td>
                                <td className="py-3 text-[#686868]">{convRate}%</td>
                                <td className="py-3 text-right text-[#686868]">{item.lastClicked}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Últimos Productos Modificados + Accesos Directos Minimalistas */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-lg p-5">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-serif-luxury text-xl font-semibold text-[#0A0B11]">
                          Últimos Productos Modificados
                        </h3>
                        <button
                          onClick={() => setAdminTab('products')}
                          className="text-xs text-[#0A0B11] hover:underline font-medium"
                        >
                          Ver todos →
                        </button>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="border-b border-neutral-200 text-[11px] text-[#686868]">
                              <th className="pb-2 font-medium">Perfume</th>
                              <th className="pb-2 font-medium">Estado</th>
                              <th className="pb-2 font-medium">Stock</th>
                              <th className="pb-2 font-medium">Precio</th>
                              <th className="pb-2 font-medium text-right">Modificado</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-100">
                            {dashboardStats.recentModified.map((p) => (
                              <tr key={p.id} className="hover:bg-neutral-50">
                                <td className="py-2.5">
                                  <div className="font-semibold text-[#0A0B11]">{p.shortTitle || p.name}</div>
                                  <div className="text-[10px] text-[#686868]">{p.brand}</div>
                                </td>
                                <td className="py-2.5">
                                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-100 text-[#0A0B11]">
                                    {p.status === 'inactive' ? 'Inactivo' : p.status === 'draft' ? 'Borrador' : 'Activo'}
                                  </span>
                                </td>
                                <td className="py-2.5 font-medium">{p.stock ?? 15} u.</td>
                                <td className="py-2.5 font-semibold text-[#0A0B11]">{formatCLP(p.price)}</td>
                                <td className="py-2.5 text-right text-[#686868] text-[11px]">
                                  {p.updatedAt || '2026-09-25'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-white border border-neutral-200 rounded-lg p-5 space-y-3">
                      <h3 className="font-serif-luxury text-xl font-semibold text-[#0A0B11]">
                        Accesos Directos
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          { tab: 'inventory', title: 'Controlar Stock e Inventario', desc: 'Registrar entradas, salidas y alertas' },
                          { tab: 'banners', title: 'Gestionar Banners Hero', desc: 'Cambiar imágenes y fechas de campaña' },
                          { tab: 'coupons', title: 'Crear Cupones de Descuento', desc: `${couponsList.filter((c) => c.active).length} códigos activos en carrito` },
                          { tab: 'sections', title: 'Políticas Legales y Cookies', desc: 'Privacidad, reembolsos y términos' },
                          { tab: 'settings', title: 'Auditoría de SDKs y Ajustes', desc: 'Privacidad por diseño y configuración' }
                        ].map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => setAdminTab(s.tab)}
                            className="p-3 rounded-md bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-left flex items-center justify-between transition"
                          >
                            <div>
                              <div className="text-xs font-semibold text-[#0A0B11]">{s.title}</div>
                              <div className="text-[11px] text-[#686868]">{s.desc}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#686868]" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 2: PRODUCTOS (CREAR, EDITAR, DUPLICAR, TAMAÑOS, ETIQUETAS)
              =============================================================== */}
              {adminTab === 'products' && (
                <div className="max-w-6xl mx-auto space-y-5">
                  {editingProduct ? (
                    <div className="bg-[#12141E] border border-[#D1B27E]/50 rounded-xl p-6 space-y-5">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-[#D1B27E] font-bold">
                            FICHA DE PRODUCTO
                          </span>
                          <h2 className="font-serif-luxury text-2xl font-bold text-white">
                            {products.some((p) => p.id === editingProduct.id) ? 'Editar Perfume' : 'Crear Nuevo Perfume'}
                          </h2>
                        </div>
                        <button
                          onClick={() => setEditingProduct(null)}
                          className="text-xs text-neutral-400 hover:text-white flex items-center gap-1"
                        >
                          <X className="w-4 h-4" />
                          <span>Cerrar editor</span>
                        </button>
                      </div>

                      <form onSubmit={handleSaveProduct} className="space-y-5">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                          {/* Fotografías del Producto */}
                          <div className="lg:col-span-4 bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col items-center space-y-3">
                            <div className="w-full rounded-lg overflow-hidden">
                              <PerfumeBottleVisual product={editingProduct} className="w-full h-52" />
                            </div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              onChange={handleImageFileUpload}
                              className="hidden"
                            />
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="w-full bg-[#D1B27E] text-[#0A0B11] font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-2"
                            >
                              <Upload className="w-3.5 h-3.5" />
                              <span>Subir Fotografía desde Equipo</span>
                            </button>
                            <input
                              type="text"
                              value={editingProduct.image || ''}
                              onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                              placeholder="O pegar URL de fotografía..."
                              className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-1.5 text-xs"
                            />
                          </div>

                          {/* Datos Completos del Perfume */}
                          <div className="lg:col-span-8 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div>
                                <label className="block text-[11px] text-neutral-300 mb-1">Marca Asignada *</label>
                                <select
                                  value={editingProduct.brand}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, brand: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                >
                                  {brandsList.map((b) => (
                                    <option key={b.id} value={b.name}>{b.name}</option>
                                  ))}
                                </select>
                              </div>

                              <div>
                                <label className="block text-[11px] text-neutral-300 mb-1">Categoría / Género *</label>
                                <select
                                  value={editingProduct.gender}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, gender: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                >
                                  <option value="HOMBRE">Hombre</option>
                                  <option value="MUJER">Mujer</option>
                                  <option value="UNISEX">Unisex</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-[11px] text-neutral-300 mb-1">Subcategoría / Colección</label>
                                <select
                                  value={editingProduct.categoryCustom || 'Árabes'}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, categoryCustom: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                >
                                  {categoriesList.map((c) => (
                                    <option key={c.id} value={c.name}>{c.name}</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div className="sm:col-span-2">
                                <label className="block text-[11px] text-neutral-300 mb-1">Nombre Completo del Perfume *</label>
                                <input
                                  type="text"
                                  value={editingProduct.name}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                  placeholder="Ej. Amber Oud Gold Edition Eau de Parfum 120ml"
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] text-neutral-300 mb-1">Familia Olfativa</label>
                                <select
                                  value={editingProduct.olfactoryFamily || 'Orientales'}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, olfactoryFamily: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                >
                                  {olfactoryFamilies.map((f) => (
                                    <option key={f.id} value={f.name}>{f.name}</option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {/* Precios, Descuentos, Concentración y Estado */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              <div>
                                <label className="block text-[11px] text-neutral-300 mb-1">Precio Venta CLP *</label>
                                <input
                                  type="number"
                                  value={editingProduct.price}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs font-bold"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] text-neutral-300 mb-1">Descuento (%)</label>
                                <input
                                  type="number"
                                  min="0"
                                  max="80"
                                  value={editingProduct.discountPct ?? 0}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, discountPct: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] text-neutral-300 mb-1">Concentración</label>
                                <select
                                  value={editingProduct.concentrationType || 'EDP'}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, concentrationType: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                >
                                  <option value="EDT">EDT (Eau de Toilette)</option>
                                  <option value="EDP">EDP (Eau de Parfum)</option>
                                  <option value="Parfum">Parfum</option>
                                  <option value="Extracto de Perfume">Extracto de Perfume</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-[11px] text-neutral-300 mb-1">Estado Publicación</label>
                                <select
                                  value={editingProduct.status || 'active'}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, status: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                >
                                  <option value="active">Publicado (Activo)</option>
                                  <option value="inactive">Despublicado (Inactivo)</option>
                                  <option value="draft">Borrador</option>
                                </select>
                              </div>
                            </div>

                            {/* Tamaños disponibles (30 ml, 50 ml, 100 ml, 105 ml, 120 ml) y Etiquetas */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/30 p-3.5 rounded-lg border border-white/10">
                              <div>
                                <label className="block text-[11px] text-[#D1B27E] font-bold mb-2">
                                  Tamaños Disponibles
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {['30 ml', '50 ml', '100 ml', '105 ml', '120 ml'].map((sz) => {
                                    const active = (editingProduct.sizes || []).includes(sz);
                                    return (
                                      <button
                                        key={sz}
                                        type="button"
                                        onClick={() => {
                                          const current = editingProduct.sizes || [];
                                          const next = active
                                            ? current.filter((x) => x !== sz)
                                            : [...current, sz];
                                          setEditingProduct({ ...editingProduct, sizes: next.length ? next : ['100 ml'] });
                                        }}
                                        className={`px-2.5 py-1 rounded text-xs font-semibold border transition ${
                                          active
                                            ? 'bg-[#D1B27E] text-[#0A0B11] border-[#D1B27E]'
                                            : 'bg-white/5 text-neutral-300 border-white/15'
                                        }`}
                                      >
                                        {sz}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              <div>
                                <label className="block text-[11px] text-[#D1B27E] font-bold mb-2">
                                  Etiquetas Promocionales
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {['nuevo', 'destacado', 'exclusivo', 'oferta'].map((tg) => {
                                    const active = (editingProduct.tags || []).includes(tg);
                                    return (
                                      <button
                                        key={tg}
                                        type="button"
                                        onClick={() => {
                                          const current = editingProduct.tags || [];
                                          const next = active
                                            ? current.filter((x) => x !== tg)
                                            : [...current, tg];
                                          setEditingProduct({ ...editingProduct, tags: next });
                                        }}
                                        className={`px-2.5 py-1 rounded text-xs uppercase font-bold border transition ${
                                          active
                                            ? 'bg-[#D1B27E] text-[#0A0B11] border-[#D1B27E]'
                                            : 'bg-white/5 text-neutral-300 border-white/15'
                                        }`}
                                      >
                                        {tg}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* Disponibilidad y Descripción / Notas */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div>
                                <label className="block text-[11px] text-neutral-300 mb-1">Stock Disponible (u.)</label>
                                <input
                                  type="number"
                                  min="0"
                                  value={editingProduct.stock ?? 15}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                />
                              </div>
                              <div className="sm:col-span-2">
                                <label className="block text-[11px] text-neutral-300 mb-1">
                                  Descripción y Notas del Perfume (Salida, Corazón y Fondo)
                                </label>
                                <input
                                  type="text"
                                  value={editingProduct.notes || ''}
                                  onChange={(e) => setEditingProduct({ ...editingProduct, notes: e.target.value })}
                                  className="aroma-input w-full border border-neutral-300 rounded-md px-3 py-2 text-xs"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {renderProfileEditor()}

                        <div className="flex justify-end gap-3 pt-3 border-t border-white/10">
                          <button
                            type="button"
                            onClick={() => setEditingProduct(null)}
                            className="px-4 py-2 border border-white/20 rounded-lg text-xs"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            style={{ backgroundColor: siteConfig.brandColors.gold }}
                            className="text-[#0A0B11] font-bold text-xs px-6 py-2.5 rounded-lg"
                          >
                            Guardar Perfume
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                            MÓDULO 2 · CATÁLOGO
                          </span>
                          <h2 className="font-serif-luxury text-2xl font-bold text-white">
                            Administración de Productos ({products.length})
                          </h2>
                        </div>
                        <button
                          onClick={startNewProduct}
                          style={{ backgroundColor: siteConfig.brandColors.gold }}
                          className="btn-interactive text-[#0A0B11] font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 self-start"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Crear Producto</span>
                        </button>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-grow">
                          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-2.5" />
                          <input
                            type="text"
                            value={adminSearch}
                            onChange={(e) => setAdminSearch(e.target.value)}
                            placeholder="Buscar por nombre, marca o nota olfativa..."
                            className="aroma-input w-full pl-10 pr-4 py-2 rounded-lg text-xs"
                          />
                        </div>
                        <div className="flex gap-1.5">
                          {[
                            { id: 'ALL', label: 'Todos' },
                            { id: 'active', label: 'Publicados' },
                            { id: 'inactive', label: 'Inactivos' },
                            { id: 'draft', label: 'Borradores' }
                          ].map((st) => (
                            <button
                              key={st.id}
                              onClick={() => setAdminStatusFilter(st.id)}
                              className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                                adminStatusFilter === st.id
                                  ? 'bg-[#D1B27E] text-[#0A0B11]'
                                  : 'bg-[#12141E] text-neutral-300 border border-white/10'
                              }`}
                            >
                              {st.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#12141E] border border-white/10 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="border-b border-white/10 text-[10px] uppercase text-[#D1B27E] bg-white/5">
                                <th className="p-3">Foto</th>
                                <th className="p-3">Perfume / Categoría / Tamaños</th>
                                <th className="p-3">Etiquetas</th>
                                <th className="p-3">Estado</th>
                                <th className="p-3">Stock</th>
                                <th className="p-3">Precio CLP</th>
                                <th className="p-3 text-right">Acciones</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-xs">
                              {products
                                .filter((p) => {
                                  if (adminStatusFilter !== 'ALL' && (p.status || 'active') !== adminStatusFilter) return false;
                                  return (
                                    p.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
                                    p.brand.toLowerCase().includes(adminSearch.toLowerCase())
                                  );
                                })
                                .map((prod) => (
                                  <tr key={prod.id} className="hover:bg-white/5">
                                    <td className="p-2.5 w-14">
                                      <div className="w-11 h-14 rounded overflow-hidden border border-white/15">
                                        <PerfumeBottleVisual product={prod} className="w-full h-full" compact />
                                      </div>
                                    </td>
                                    <td className="p-2.5">
                                      <div className="text-[10px] font-bold text-[#D1B27E]">
                                        {prod.brand} · {prod.gender} · {prod.olfactoryFamily || 'Orientales'}
                                      </div>
                                      <div className="font-semibold text-white">{prod.name}</div>
                                      <div className="text-[10px] text-neutral-400">
                                        Tamaños: {(prod.sizes || ['100 ml']).join(', ')} · {prod.concentrationType || 'EDP'}
                                      </div>
                                    </td>
                                    <td className="p-2.5">
                                      <div className="flex flex-wrap gap-1">
                                        {(prod.tags || []).map((t) => (
                                          <span key={t} className="bg-[#D1B27E]/20 text-[#D1B27E] px-1.5 py-0.5 rounded text-[9px] uppercase font-bold">
                                            {t}
                                          </span>
                                        ))}
                                      </div>
                                    </td>
                                    <td className="p-2.5">
                                      <select
                                        value={prod.status || 'active'}
                                        onChange={(e) => handleToggleProductStatus(prod, e.target.value)}
                                        className="bg-black/50 border border-white/20 rounded px-2 py-1 text-[11px] text-white"
                                      >
                                        <option value="active">Publicado</option>
                                        <option value="inactive">Despublicado</option>
                                        <option value="draft">Borrador</option>
                                      </select>
                                    </td>
                                    <td className="p-2.5">
                                      <span className={`font-bold ${(prod.stock ?? 15) <= 0 ? 'text-red-400' : 'text-white'}`}>
                                        {prod.stock ?? 15} u.
                                      </span>
                                    </td>
                                    <td className="p-2.5">
                                      <div className="flex items-center gap-1">
                                        <span className="text-[#D1B27E] font-bold">$</span>
                                        <input
                                          type="number"
                                          value={prod.price}
                                          onChange={(e) => {
                                            const newPrice = Number(e.target.value) || 0;
                                            setProducts((prev) =>
                                              prev.map((item) =>
                                                item.id === prod.id ? { ...item, price: newPrice } : item
                                              )
                                            );
                                          }}
                                          className="w-24 bg-black/40 border border-white/20 rounded px-2 py-1 text-white font-bold text-xs"
                                        />
                                      </div>
                                    </td>
                                    <td className="p-2.5 text-right">
                                      <div className="flex items-center justify-end gap-1.5">
                                        <button
                                          onClick={() => setEditingProduct(prod)}
                                          className="p-1.5 bg-white/10 hover:bg-[#D1B27E] hover:text-[#0A0B11] rounded transition"
                                          title="Editar producto"
                                        >
                                          <Edit3 className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                          onClick={() => handleDuplicateProduct(prod)}
                                          className="p-1.5 bg-white/10 hover:bg-[#D1B27E] hover:text-[#0A0B11] rounded transition"
                                          title="Duplicar producto"
                                        >
                                          <Copy className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                          onClick={() => handleDeleteProduct(prod.id)}
                                          className="p-1.5 bg-red-500/15 hover:bg-red-500 text-red-300 hover:text-white rounded transition"
                                          title="Eliminar producto"
                                        >
                                          <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 3: MARCAS
              =============================================================== */}
              {adminTab === 'brands' && (
                <div className="max-w-5xl mx-auto space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                        MÓDULO 3 · CASAS PERFUMISTAS
                      </span>
                      <h2 className="font-serif-luxury text-2xl font-bold text-white">
                        Administración de Marcas ({brandsList.length})
                      </h2>
                    </div>
                    <button
                      onClick={() =>
                        setEditingBrand({
                          id: 'br-' + Date.now(),
                          name: '',
                          country: 'Emiratos Árabes Unidos',
                          description: '',
                          logo: '',
                          active: true
                        })
                      }
                      style={{ backgroundColor: siteConfig.brandColors.gold }}
                      className="text-[#0A0B11] font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Crear Marca</span>
                    </button>
                  </div>

                  {editingBrand && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!editingBrand.name.trim()) return;
                        const clean = { ...editingBrand, name: editingBrand.name.trim().toUpperCase() };
                        setBrandsList((prev) =>
                          prev.some((b) => b.id === clean.id)
                            ? prev.map((b) => (b.id === clean.id ? clean : b))
                            : [clean, ...prev]
                        );
                        logAdminAction(`Marca guardada: ${clean.name}`);
                        setEditingBrand(null);
                        showToast(`Marca "${clean.name}" guardada`);
                      }}
                      className="bg-[#12141E] border border-[#D1B27E]/50 rounded-xl p-5 space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Nombre de la Marca *</label>
                          <input
                            type="text"
                            value={editingBrand.name}
                            onChange={(e) => setEditingBrand({ ...editingBrand, name: e.target.value })}
                            placeholder="Ej. LATTAFA"
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">País de Origen</label>
                          <input
                            type="text"
                            value={editingBrand.country}
                            onChange={(e) => setEditingBrand({ ...editingBrand, country: e.target.value })}
                            placeholder="Emiratos Árabes Unidos"
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">URL Logotipo (opcional)</label>
                          <input
                            type="text"
                            value={editingBrand.logo || ''}
                            onChange={(e) => setEditingBrand({ ...editingBrand, logo: e.target.value })}
                            placeholder="https://..."
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Descripción de la Marca</label>
                        <input
                          type="text"
                          value={editingBrand.description}
                          onChange={(e) => setEditingBrand({ ...editingBrand, description: e.target.value })}
                          placeholder="Historia y sello olfativo de la casa perfumista..."
                          className="aroma-input w-full rounded px-3 py-2 text-xs"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setEditingBrand(null)} className="px-4 py-2 border border-white/20 rounded text-xs">
                          Cancelar
                        </button>
                        <button type="submit" style={{ backgroundColor: siteConfig.brandColors.gold }} className="text-[#0A0B11] font-bold px-5 py-2 rounded text-xs">
                          Guardar Marca
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {brandsList.map((brand) => {
                      const prodCount = products.filter((p) => p.brand.toUpperCase() === brand.name.toUpperCase()).length;
                      return (
                        <div key={brand.id} className="bg-[#12141E] border border-white/10 rounded-xl p-4 flex flex-col justify-between gap-3">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-serif-luxury text-lg font-bold text-[#D1B27E]">{brand.name}</span>
                                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-neutral-300">{brand.country}</span>
                              </div>
                              <p className="text-xs text-neutral-400 mt-1">{brand.description}</p>
                            </div>
                            <button
                              onClick={() =>
                                setBrandsList((prev) =>
                                  prev.map((b) => (b.id === brand.id ? { ...b, active: !b.active } : b))
                                )
                              }
                              className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                                brand.active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                              }`}
                            >
                              {brand.active ? 'Activa' : 'Inactiva'}
                            </button>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                            <span className="text-neutral-400">{prodCount} perfumes asignados</span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setSelectedBrand(brand.name);
                                  setIsAdminPanelOpen(false);
                                  setTimeout(() => scrollToSection('catalogo-grid'), 150);
                                }}
                                className="text-[#D1B27E] hover:underline text-[11px]"
                              >
                                Ver página individual →
                              </button>
                              <button
                                onClick={() => setEditingBrand(brand)}
                                className="p-1.5 bg-white/10 hover:bg-[#D1B27E] hover:text-[#0A0B11] rounded"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setBrandsList((prev) => prev.filter((b) => b.id !== brand.id))}
                                className="p-1.5 bg-red-500/15 hover:bg-red-500 text-red-300 hover:text-white rounded"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 4: CATEGORÍAS Y SUBCATEGORÍAS
              =============================================================== */}
              {adminTab === 'categories' && (
                <div className="max-w-5xl mx-auto space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                        MÓDULO 4 · ORGANIZACIÓN DEL CATÁLOGO
                      </span>
                      <h2 className="font-serif-luxury text-2xl font-bold text-white">
                        Categorías y Subcategorías ({categoriesList.length})
                      </h2>
                    </div>
                    <button
                      onClick={() =>
                        setEditingCategory({
                          id: 'cat-' + Date.now(),
                          name: '',
                          code: '',
                          parent: '',
                          description: '',
                          active: true
                        })
                      }
                      style={{ backgroundColor: siteConfig.brandColors.gold }}
                      className="text-[#0A0B11] font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Nueva Categoría</span>
                    </button>
                  </div>

                  {editingCategory && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!editingCategory.name.trim()) return;
                        const item = {
                          ...editingCategory,
                          code: (editingCategory.code || editingCategory.name).toUpperCase()
                        };
                        setCategoriesList((prev) =>
                          prev.some((c) => c.id === item.id)
                            ? prev.map((c) => (c.id === item.id ? item : c))
                            : [...prev, item]
                        );
                        setEditingCategory(null);
                        showToast(`Categoría "${item.name}" guardada`);
                      }}
                      className="bg-[#12141E] border border-[#D1B27E]/50 rounded-xl p-5 space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Nombre Categoría *</label>
                          <input
                            type="text"
                            value={editingCategory.name}
                            onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                            placeholder="Ej. Sets de Regalo o Decants"
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Categoría Padre (Opcional)</label>
                          <select
                            value={editingCategory.parent || ''}
                            onChange={(e) => setEditingCategory({ ...editingCategory, parent: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          >
                            <option value="">Ninguna (Categoría Principal)</option>
                            {categoriesList.map((c) => (
                              <option key={c.id} value={c.name}>{c.name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Descripción</label>
                          <input
                            type="text"
                            value={editingCategory.description}
                            onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setEditingCategory(null)} className="px-4 py-2 border border-white/20 rounded text-xs">
                          Cancelar
                        </button>
                        <button type="submit" style={{ backgroundColor: siteConfig.brandColors.gold }} className="text-[#0A0B11] font-bold px-5 py-2 rounded text-xs">
                          Guardar Categoría
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {categoriesList.map((cat) => (
                      <div key={cat.id} className="bg-[#12141E] border border-white/10 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-[#D1B27E]">{cat.name}</span>
                            {cat.parent && (
                              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Sub de: {cat.parent}</span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-400 mt-1.5">{cat.description}</p>
                        </div>
                        <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10">
                          <span className="text-[10px] text-emerald-400 font-semibold">Activa</span>
                          <div className="flex gap-1.5">
                            <button onClick={() => setEditingCategory(cat)} className="p-1 bg-white/10 hover:bg-[#D1B27E] hover:text-[#0A0B11] rounded">
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setCategoriesList((prev) => prev.filter((c) => c.id !== cat.id))}
                              className="p-1 bg-red-500/15 hover:bg-red-500 text-red-300 hover:text-white rounded"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 5: FAMILIAS OLFATIVAS
              =============================================================== */}
              {adminTab === 'families' && (
                <div className="max-w-5xl mx-auto space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                        MÓDULO 5 · CLASIFICACIÓN SENSORIAL
                      </span>
                      <h2 className="font-serif-luxury text-2xl font-bold text-white">
                        Familias Olfativas ({olfactoryFamilies.length})
                      </h2>
                    </div>
                    <button
                      onClick={() =>
                        setEditingFamily({
                          id: 'fam-' + Date.now(),
                          name: '',
                          color: '#D1B27E',
                          description: '',
                          image: ''
                        })
                      }
                      style={{ backgroundColor: siteConfig.brandColors.gold }}
                      className="text-[#0A0B11] font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Nueva Familia Olfativa</span>
                    </button>
                  </div>

                  {editingFamily && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!editingFamily.name.trim()) return;
                        setOlfactoryFamilies((prev) =>
                          prev.some((f) => f.id === editingFamily.id)
                            ? prev.map((f) => (f.id === editingFamily.id ? editingFamily : f))
                            : [...prev, editingFamily]
                        );
                        setEditingFamily(null);
                        showToast(`Familia olfativa "${editingFamily.name}" guardada`);
                      }}
                      className="bg-[#12141E] border border-[#D1B27E]/50 rounded-xl p-5 space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Nombre de la Familia *</label>
                          <input
                            type="text"
                            value={editingFamily.name}
                            onChange={(e) => setEditingFamily({ ...editingFamily, name: e.target.value })}
                            placeholder="Ej. Amaderados, Gourmand..."
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Color Representativo</label>
                          <input
                            type="color"
                            value={editingFamily.color || '#D1B27E'}
                            onChange={(e) => setEditingFamily({ ...editingFamily, color: e.target.value })}
                            className="w-full h-9 rounded bg-white p-1 cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">URL de Imagen</label>
                          <input
                            type="text"
                            value={editingFamily.image || ''}
                            onChange={(e) => setEditingFamily({ ...editingFamily, image: e.target.value })}
                            placeholder="https://..."
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Descripción Olfativa</label>
                        <input
                          type="text"
                          value={editingFamily.description}
                          onChange={(e) => setEditingFamily({ ...editingFamily, description: e.target.value })}
                          className="aroma-input w-full rounded px-3 py-2 text-xs"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setEditingFamily(null)} className="px-4 py-2 border border-white/20 rounded text-xs">
                          Cancelar
                        </button>
                        <button type="submit" style={{ backgroundColor: siteConfig.brandColors.gold }} className="text-[#0A0B11] font-bold px-5 py-2 rounded text-xs">
                          Guardar Familia
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {olfactoryFamilies.map((fam) => (
                      <div key={fam.id} className="bg-[#12141E] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between">
                        <div>
                          <div className="h-28 bg-black/40 relative overflow-hidden">
                            {fam.image && (
                              <img src={fam.image} alt={fam.name} className="w-full h-full object-cover opacity-75" />
                            )}
                            <div
                              className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow"
                              style={{ backgroundColor: fam.color }}
                            >
                              {fam.name}
                            </div>
                          </div>
                          <div className="p-3.5">
                            <h4 className="font-bold text-sm text-white">{fam.name}</h4>
                            <p className="text-xs text-neutral-400 mt-1">{fam.description}</p>
                          </div>
                        </div>
                        <div className="px-3.5 pb-3 flex justify-end gap-1.5">
                          <button onClick={() => setEditingFamily(fam)} className="p-1.5 bg-white/10 hover:bg-[#D1B27E] hover:text-[#0A0B11] rounded">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setOlfactoryFamilies((prev) => prev.filter((f) => f.id !== fam.id))}
                            className="p-1.5 bg-red-500/15 hover:bg-red-500 text-red-300 hover:text-white rounded"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 6: INVENTARIO (ENTRADAS, SALIDAS, STOCK MÍNIMO E HISTORIAL)
              =============================================================== */}
              {adminTab === 'inventory' && (
                <div className="max-w-6xl mx-auto space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                        MÓDULO 6 · CONTROL DE DISPONIBILIDAD
                      </span>
                      <h2 className="font-serif-luxury text-2xl font-bold text-white">
                        Control de Inventario y Variantes
                      </h2>
                    </div>
                    <button
                      onClick={() => setInventoryFilterLow((prev) => !prev)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 border transition ${
                        inventoryFilterLow
                          ? 'bg-amber-500 text-[#0A0B11] border-amber-400'
                          : 'bg-[#12141E] text-amber-300 border-amber-500/40'
                      }`}
                    >
                      <AlertTriangle className="w-4 h-4" />
                      <span>
                        {inventoryFilterLow ? 'Mostrando Agotados / Bajo Mínimo' : 'Filtrar Agotados / Bajo Mínimo'}
                      </span>
                    </button>
                  </div>

                  {/* Modal para Registrar Entrada o Salida de Stock */}
                  {stockMovementModal && (
                    <form
                      onSubmit={handleRegisterStockMovement}
                      className="bg-[#12141E] border-2 border-[#D1B27E] rounded-xl p-5 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif-luxury text-xl font-bold text-[#D1B27E]">
                          Registrar {stockMovementModal.type} de Inventario · {stockMovementModal.product.name}
                        </h4>
                        <button type="button" onClick={() => setStockMovementModal(null)}>
                          <X className="w-4 h-4 text-neutral-400" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Cantidad de Unidades *</label>
                          <input
                            type="number"
                            min="1"
                            value={stockMovementModal.qty}
                            onChange={(e) => setStockMovementModal({ ...stockMovementModal, qty: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs font-bold"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Variante / Tamaño</label>
                          <select
                            value={stockMovementModal.variant}
                            onChange={(e) => setStockMovementModal({ ...stockMovementModal, variant: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          >
                            {(stockMovementModal.product.sizes || ['30 ml', '50 ml', '100 ml']).map((sz) => (
                              <option key={sz} value={sz}>{sz}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Motivo / Observación</label>
                          <input
                            type="text"
                            value={stockMovementModal.note}
                            onChange={(e) => setStockMovementModal({ ...stockMovementModal, note: e.target.value })}
                            placeholder="Ej. Recepción proveedor / Venta WhatsApp"
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setStockMovementModal(null)} className="px-4 py-2 border border-white/20 rounded text-xs">
                          Cancelar
                        </button>
                        <button type="submit" style={{ backgroundColor: siteConfig.brandColors.gold }} className="text-[#0A0B11] font-bold px-5 py-2 rounded text-xs">
                          Confirmar {stockMovementModal.type}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Tabla de Stock por Producto */}
                  <div className="bg-[#12141E] border border-white/10 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto max-h-96">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-white/10 text-[10px] uppercase text-[#D1B27E] bg-white/5 sticky top-0">
                            <th className="p-3">Perfume</th>
                            <th className="p-3">Variantes</th>
                            <th className="p-3">Stock Actual</th>
                            <th className="p-3">Stock Mínimo</th>
                            <th className="p-3">Estado</th>
                            <th className="p-3 text-right">Movimientos</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {products
                            .filter((p) =>
                              inventoryFilterLow ? (p.stock ?? 0) <= (p.minStock ?? 5) : true
                            )
                            .map((prod) => {
                              const currentStock = prod.stock ?? 15;
                              const minSt = prod.minStock ?? 5;
                              return (
                                <tr key={prod.id} className="hover:bg-white/5">
                                  <td className="p-3">
                                    <div className="font-bold text-white">{prod.name}</div>
                                    <div className="text-[10px] text-[#D1B27E]">{prod.brand}</div>
                                  </td>
                                  <td className="p-3 text-neutral-300">
                                    {(prod.sizes || ['100 ml']).join(', ')}
                                  </td>
                                  <td className="p-3">
                                    <input
                                      type="number"
                                      min="0"
                                      value={currentStock}
                                      onChange={(e) => {
                                        const val = Math.max(0, Number(e.target.value) || 0);
                                        setProducts((prev) =>
                                          prev.map((item) => (item.id === prod.id ? { ...item, stock: val } : item))
                                        );
                                      }}
                                      className="w-20 bg-black/50 border border-white/20 rounded px-2 py-1 text-white font-bold"
                                    />
                                  </td>
                                  <td className="p-3">
                                    <input
                                      type="number"
                                      min="0"
                                      value={minSt}
                                      onChange={(e) => {
                                        const val = Math.max(0, Number(e.target.value) || 0);
                                        setProducts((prev) =>
                                          prev.map((item) => (item.id === prod.id ? { ...item, minStock: val } : item))
                                        );
                                      }}
                                      className="w-16 bg-black/50 border border-white/20 rounded px-2 py-1 text-neutral-300"
                                    />
                                  </td>
                                  <td className="p-3">
                                    {currentStock <= 0 ? (
                                      <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-[10px] font-bold">
                                        Agotado
                                      </span>
                                    ) : currentStock <= minSt ? (
                                      <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold">
                                        Bajo Mínimo
                                      </span>
                                    ) : (
                                      <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold">
                                        Óptimo
                                      </span>
                                    )}
                                  </td>
                                  <td className="p-3 text-right">
                                    <div className="inline-flex gap-1.5">
                                      <button
                                        onClick={() =>
                                          setStockMovementModal({
                                            product: prod,
                                            type: 'Entrada',
                                            qty: 10,
                                            variant: (prod.sizes && prod.sizes[0]) || '100 ml',
                                            note: ''
                                          })
                                        }
                                        className="px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-black rounded text-[11px] font-bold transition"
                                      >
                                        + Entrada
                                      </button>
                                      <button
                                        onClick={() =>
                                          setStockMovementModal({
                                            product: prod,
                                            type: 'Salida',
                                            qty: 1,
                                            variant: (prod.sizes && prod.sizes[0]) || '100 ml',
                                            note: ''
                                          })
                                        }
                                        className="px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-black rounded text-[11px] font-bold transition"
                                      >
                                        - Salida
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Historial de Modificaciones de Inventario */}
                  <div className="bg-[#12141E] border border-white/10 rounded-xl p-5">
                    <h3 className="font-serif-luxury text-xl font-semibold text-[#D1B27E] mb-3">
                      Historial de Modificaciones de Inventario
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-white/10 text-[10px] uppercase text-neutral-400">
                            <th className="pb-2">Fecha</th>
                            <th className="pb-2">Producto</th>
                            <th className="pb-2">Tipo</th>
                            <th className="pb-2">Cantidad / Variante</th>
                            <th className="pb-2">Motivo</th>
                            <th className="pb-2 text-right">Responsable</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {inventoryLogs.map((log) => (
                            <tr key={log.id}>
                              <td className="py-2 text-neutral-400">{log.date}</td>
                              <td className="py-2 font-semibold text-white">{log.productName}</td>
                              <td className="py-2">
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                    log.type === 'Entrada' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                                  }`}
                                >
                                  {log.type}
                                </span>
                              </td>
                              <td className="py-2 font-bold text-[#D1B27E]">
                                {log.qty} u. ({log.variant})
                              </td>
                              <td className="py-2 text-neutral-300">{log.note}</td>
                              <td className="py-2 text-right text-neutral-400">{log.user}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 7: BANNERS Y CONTENIDO VISUAL
              =============================================================== */}
              {adminTab === 'banners' && (
                <div className="max-w-5xl mx-auto space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                        MÓDULO 7 · APARIENCIA PRINCIPAL
                      </span>
                      <h2 className="font-serif-luxury text-2xl font-bold text-white">
                        Banners y Contenido Visual ({bannersList.length})
                      </h2>
                    </div>
                    <button
                      onClick={() =>
                        setEditingBanner({
                          id: 'ban-' + Date.now(),
                          title: '',
                          subtitle: '',
                          ctaText: 'Ver Catálogo',
                          link: '#catalogo-grid',
                          image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1800&q=85',
                          startDate: '2026-01-01',
                          endDate: '2026-12-31',
                          order: bannersList.length + 1,
                          active: true
                        })
                      }
                      style={{ backgroundColor: siteConfig.brandColors.gold }}
                      className="text-[#0A0B11] font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Crear Banner</span>
                    </button>
                  </div>

                  {editingBanner && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!editingBanner.title.trim()) return;
                        setBannersList((prev) =>
                          prev.some((b) => b.id === editingBanner.id)
                            ? prev.map((b) => (b.id === editingBanner.id ? editingBanner : b))
                            : [...prev, editingBanner]
                        );
                        setEditingBanner(null);
                        showToast('Banner actualizado y sincronizado con la portada');
                      }}
                      className="bg-[#12141E] border border-[#D1B27E]/50 rounded-xl p-5 space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Título del Banner *</label>
                          <input
                            type="text"
                            value={editingBanner.title}
                            onChange={(e) => setEditingBanner({ ...editingBanner, title: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">URL Imagen Panorámica *</label>
                          <input
                            type="text"
                            value={editingBanner.image}
                            onChange={(e) => setEditingBanner({ ...editingBanner, image: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Subtítulo Promocional</label>
                        <input
                          type="text"
                          value={editingBanner.subtitle}
                          onChange={(e) => setEditingBanner({ ...editingBanner, subtitle: e.target.value })}
                          className="aroma-input w-full rounded px-3 py-2 text-xs"
                        />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Texto Botón CTA</label>
                          <input
                            type="text"
                            value={editingBanner.ctaText}
                            onChange={(e) => setEditingBanner({ ...editingBanner, ctaText: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Enlace Destino</label>
                          <input
                            type="text"
                            value={editingBanner.link}
                            onChange={(e) => setEditingBanner({ ...editingBanner, link: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Fecha Inicio</label>
                          <input
                            type="date"
                            value={editingBanner.startDate}
                            onChange={(e) => setEditingBanner({ ...editingBanner, startDate: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Fecha Fin</label>
                          <input
                            type="date"
                            value={editingBanner.endDate}
                            onChange={(e) => setEditingBanner({ ...editingBanner, endDate: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setEditingBanner(null)} className="px-4 py-2 border border-white/20 rounded text-xs">
                          Cancelar
                        </button>
                        <button type="submit" style={{ backgroundColor: siteConfig.brandColors.gold }} className="text-[#0A0B11] font-bold px-5 py-2 rounded text-xs">
                          Guardar Banner
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="space-y-3">
                    {bannersList.map((ban, idx) => (
                      <div key={ban.id} className="bg-[#12141E] border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4 w-full">
                          <img src={ban.image} alt={ban.title} className="w-28 h-16 object-cover rounded-lg border border-white/15 shrink-0" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] bg-[#D1B27E] text-[#0A0B11] font-bold px-2 py-0.5 rounded">
                                Orden #{idx + 1}
                              </span>
                              <span className="text-[11px] text-neutral-400">
                                Vigencia: {ban.startDate} a {ban.endDate}
                              </span>
                            </div>
                            <h4 className="font-serif-luxury text-lg font-bold text-white mt-0.5">{ban.title}</h4>
                            <p className="text-xs text-neutral-400 line-clamp-1">{ban.subtitle}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() =>
                              setBannersList((prev) =>
                                prev.map((b) => (b.id === ban.id ? { ...b, active: !b.active } : b))
                              )
                            }
                            className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                              ban.active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                            }`}
                          >
                            {ban.active ? 'Activo' : 'Inactivo'}
                          </button>
                          <button onClick={() => setEditingBanner(ban)} className="p-1.5 bg-white/10 hover:bg-[#D1B27E] hover:text-[#0A0B11] rounded">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setBannersList((prev) => prev.filter((b) => b.id !== ban.id))}
                            className="p-1.5 bg-red-500/15 hover:bg-red-500 text-red-300 hover:text-white rounded"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 8: SECCIONES DE LA PÁGINA WEB
              =============================================================== */}
              {adminTab === 'sections' && (
                <div className="max-w-5xl mx-auto space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                      MÓDULO 8 · CONTENIDO E INTERFAZ
                    </span>
                    <h2 className="font-serif-luxury text-2xl font-bold text-white">
                      Secciones de la Página Web
                    </h2>
                  </div>

                  {/* Interruptores de Visibilidad de Bloques de la Tienda */}
                  <div className="bg-[#12141E] border border-white/10 rounded-xl p-5">
                    <h3 className="font-serif-luxury text-lg font-semibold text-[#D1B27E] mb-3">
                      Visibilidad de Secciones en la Tienda
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        { key: 'heroBanner', label: 'Página de Inicio (Hero)' },
                        { key: 'trustBar', label: 'Barra de Confianza' },
                        { key: 'featuredProducts', label: 'Productos Destacados' },
                        { key: 'newReleases', label: 'Nuevos Lanzamientos' },
                        { key: 'specialCollections', label: 'Familias Olfativas / Colecciones' },
                        { key: 'olfactoryBlog', label: 'Blog Olfativo' },
                        { key: 'faqSection', label: 'Preguntas Frecuentes (FAQ)' }
                      ].map((sec) => {
                        const isVisible = siteConfig.sectionsVisibility?.[sec.key] !== false;
                        return (
                          <div key={sec.key} className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/10">
                            <span className="text-xs font-medium text-white">{sec.label}</span>
                            <button
                              onClick={() =>
                                setSiteConfig((prev) => ({
                                  ...prev,
                                  sectionsVisibility: {
                                    ...(prev.sectionsVisibility || {}),
                                    [sec.key]: !isVisible
                                  }
                                }))
                              }
                              className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                                isVisible ? 'bg-emerald-500/20 text-emerald-300' : 'bg-neutral-700 text-neutral-300'
                              }`}
                            >
                              {isVisible ? 'Visible' : 'Oculto'}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Textos Institucionales y Legales (Privacidad, Términos, Reembolsos y Cookies) */}
                  <div className="bg-[#12141E] border border-white/10 rounded-xl p-5 space-y-4">
                    <h3 className="font-serif-luxury text-lg font-semibold text-[#0A0B11]">
                      Políticas Legales: Privacidad, Términos, Reembolsos y Cookies
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Política de Privacidad</label>
                        <textarea
                          rows={4}
                          value={siteConfig.privacyPolicyText || ''}
                          onChange={(e) => setSiteConfig({ ...siteConfig, privacyPolicyText: e.target.value })}
                          className="aroma-input w-full border border-neutral-300 rounded p-2.5 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Términos y Condiciones</label>
                        <textarea
                          rows={4}
                          value={siteConfig.termsText || ''}
                          onChange={(e) => setSiteConfig({ ...siteConfig, termsText: e.target.value })}
                          className="aroma-input w-full border border-neutral-300 rounded p-2.5 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Política de Reembolsos y Devoluciones</label>
                        <textarea
                          rows={4}
                          value={siteConfig.refundPolicyText || siteConfig.returnPolicyText || ''}
                          onChange={(e) =>
                            setSiteConfig({
                              ...siteConfig,
                              refundPolicyText: e.target.value,
                              returnPolicyText: e.target.value
                            })
                          }
                          className="aroma-input w-full border border-neutral-300 rounded p-2.5 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Política de Cookies</label>
                        <textarea
                          rows={4}
                          value={siteConfig.cookiesPolicyText || INITIAL_SITE_CONFIG.cookiesPolicyText || ''}
                          onChange={(e) => setSiteConfig({ ...siteConfig, cookiesPolicyText: e.target.value })}
                          className="aroma-input w-full border border-neutral-300 rounded p-2.5 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 9: CUPONES Y DESCUENTOS
              =============================================================== */}
              {adminTab === 'coupons' && (
                <div className="max-w-5xl mx-auto space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                        MÓDULO 9 · PROMOCIONES ACTIVAS
                      </span>
                      <h2 className="font-serif-luxury text-2xl font-bold text-white">
                        Cupones y Descuentos ({couponsList.length})
                      </h2>
                    </div>
                    <button
                      onClick={() =>
                        setEditingCoupon({
                          id: 'cup-' + Date.now(),
                          code: '',
                          type: 'percentage',
                          value: 10,
                          scope: 'all',
                          target: 'TODOS',
                          validUntil: '2026-12-31',
                          active: true
                        })
                      }
                      style={{ backgroundColor: siteConfig.brandColors.gold }}
                      className="text-[#0A0B11] font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Crear Cupón</span>
                    </button>
                  </div>

                  {editingCoupon && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!editingCoupon.code.trim()) return;
                        const clean = {
                          ...editingCoupon,
                          code: editingCoupon.code.trim().toUpperCase(),
                          value: Number(editingCoupon.value) || 0
                        };
                        setCouponsList((prev) =>
                          prev.some((c) => c.id === clean.id)
                            ? prev.map((c) => (c.id === clean.id ? clean : c))
                            : [clean, ...prev]
                        );
                        setEditingCoupon(null);
                        showToast(`Cupón "${clean.code}" guardado y listo para usar en el carrito`);
                      }}
                      className="bg-[#12141E] border border-[#D1B27E]/50 rounded-xl p-5 space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Código de Descuento *</label>
                          <input
                            type="text"
                            value={editingCoupon.code}
                            onChange={(e) => setEditingCoupon({ ...editingCoupon, code: e.target.value })}
                            placeholder="Ej. AROMALUXE10"
                            className="aroma-input w-full rounded px-3 py-2 text-xs uppercase font-bold"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Tipo de Descuento</label>
                          <select
                            value={editingCoupon.type}
                            onChange={(e) => setEditingCoupon({ ...editingCoupon, type: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          >
                            <option value="percentage">Porcentaje (%)</option>
                            <option value="fixed">Monto Fijo ($ CLP)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Valor ({editingCoupon.type === 'percentage' ? '%' : '$ CLP'})</label>
                          <input
                            type="number"
                            min="1"
                            value={editingCoupon.value}
                            onChange={(e) => setEditingCoupon({ ...editingCoupon, value: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs font-bold"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Fecha de Vigencia</label>
                          <input
                            type="date"
                            value={editingCoupon.validUntil}
                            onChange={(e) => setEditingCoupon({ ...editingCoupon, validUntil: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Alcance de la Promoción</label>
                          <select
                            value={editingCoupon.scope}
                            onChange={(e) => setEditingCoupon({ ...editingCoupon, scope: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          >
                            <option value="all">Todo el Catálogo</option>
                            <option value="brand">Por Marca Específica</option>
                            <option value="product">Por Producto Específico</option>
                          </select>
                        </div>
                        {editingCoupon.scope !== 'all' && (
                          <div>
                            <label className="block text-xs text-neutral-300 mb-1">
                              {editingCoupon.scope === 'brand' ? 'Nombre de la Marca (ej. LATTAFA)' : 'Nombre del Producto'}
                            </label>
                            <input
                              type="text"
                              value={editingCoupon.target}
                              onChange={(e) => setEditingCoupon({ ...editingCoupon, target: e.target.value })}
                              className="aroma-input w-full rounded px-3 py-2 text-xs"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setEditingCoupon(null)} className="px-4 py-2 border border-white/20 rounded text-xs">
                          Cancelar
                        </button>
                        <button type="submit" style={{ backgroundColor: siteConfig.brandColors.gold }} className="text-[#0A0B11] font-bold px-5 py-2 rounded text-xs">
                          Guardar Cupón
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {couponsList.map((cup) => (
                      <div key={cup.id} className="bg-[#12141E] border border-[#D1B27E]/40 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="bg-[#D1B27E] text-[#0A0B11] font-extrabold text-xs px-3 py-1 rounded tracking-wider">
                              {cup.code}
                            </span>
                            <button
                              onClick={() =>
                                setCouponsList((prev) =>
                                  prev.map((c) => (c.id === cup.id ? { ...c, active: !c.active } : c))
                                )
                              }
                              className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                cup.active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                              }`}
                            >
                              {cup.active ? 'Activo' : 'Inactivo'}
                            </button>
                          </div>
                          <div className="text-xl font-extrabold text-white mt-3">
                            {cup.type === 'percentage' ? `${cup.value}% OFF` : `${formatCLP(cup.value)} OFF`}
                          </div>
                          <div className="text-xs text-neutral-400 mt-1">
                            Aplica a: <strong>{cup.scope === 'all' ? 'Todo el catálogo' : cup.target}</strong>
                          </div>
                          <div className="text-[11px] text-neutral-500 mt-0.5">Válido hasta: {cup.validUntil}</div>
                        </div>
                        <div className="flex justify-end gap-1.5 pt-3 mt-3 border-t border-white/10">
                          <button onClick={() => setEditingCoupon(cup)} className="p-1.5 bg-white/10 hover:bg-[#D1B27E] hover:text-[#0A0B11] rounded">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setCouponsList((prev) => prev.filter((c) => c.id !== cup.id))}
                            className="p-1.5 bg-red-500/15 hover:bg-red-500 text-red-300 hover:text-white rounded"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 10: RESEÑAS Y VALORACIONES
              =============================================================== */}
              {adminTab === 'blog' && (
                <BlogAdmin
                  posts={blogPosts}
                  setPosts={setBlogPosts}
                  logAdminAction={logAdminAction}
                  showToast={showToast}
                  gold={siteConfig.brandColors.gold}
                  onViewPost={(post) => {
                    setIsAdminPanelOpen(false);
                    navigatePublic('blog', post.slug);
                  }}
                />
              )}

              {adminTab === 'reviews' && (
                <div className="max-w-5xl mx-auto space-y-5">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                      MÓDULO 10 · REPUTACIÓN Y COMENTARIOS
                    </span>
                    <h2 className="font-serif-luxury text-2xl font-bold text-white">
                      Moderación de Reseñas ({reviewsList.length})
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {reviewsList.map((rev) => (
                      <div key={rev.id} className="bg-[#12141E] border border-white/10 rounded-xl p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <span className="text-xs font-bold text-[#D1B27E]">{rev.productName}</span>
                            <div className="flex items-center gap-2 text-xs text-white mt-0.5">
                              <strong>{rev.author}</strong>
                              <span className="text-amber-400">{'★'.repeat(rev.rating || 5)}</span>
                              <span className="text-neutral-500">{rev.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                                rev.status === 'Aprobada'
                                  ? 'bg-emerald-500/20 text-emerald-300'
                                  : rev.status === 'Rechazada'
                                  ? 'bg-red-500/20 text-red-300'
                                  : 'bg-amber-500/20 text-amber-300'
                              }`}
                            >
                              {rev.status}
                            </span>
                            <button
                              onClick={() =>
                                setReviewsList((prev) =>
                                  prev.map((r) => (r.id === rev.id ? { ...r, status: 'Aprobada' } : r))
                                )
                              }
                              className="px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-black rounded text-[11px] font-semibold"
                            >
                              Aprobar
                            </button>
                            <button
                              onClick={() =>
                                setReviewsList((prev) =>
                                  prev.map((r) => (r.id === rev.id ? { ...r, status: 'Rechazada' } : r))
                                )
                              }
                              className="px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-black rounded text-[11px] font-semibold"
                            >
                              Rechazar
                            </button>
                            <button
                              onClick={() => setReviewsList((prev) => prev.filter((r) => r.id !== rev.id))}
                              className="p-1.5 bg-red-500/15 hover:bg-red-500 text-red-300 hover:text-white rounded"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <p className="text-xs text-neutral-300 bg-black/30 p-3 rounded">{rev.comment}</p>

                        {rev.reply && (
                          <div className="text-xs text-[#D1B27E] pl-3 border-l-2 border-[#D1B27E]">
                            <strong>Respuesta oficial:</strong> {rev.reply}
                          </div>
                        )}

                        {replyingReviewId === rev.id ? (
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              placeholder="Escribe la respuesta oficial de AromaLuxe..."
                              className="aroma-input flex-grow rounded px-3 py-1.5 text-xs"
                            />
                            <button
                              onClick={() => {
                                setReviewsList((prev) =>
                                  prev.map((r) => (r.id === rev.id ? { ...r, reply: replyText, status: 'Aprobada' } : r))
                                );
                                setReplyingReviewId(null);
                                setReplyText('');
                                showToast('Respuesta publicada en la reseña');
                              }}
                              style={{ backgroundColor: siteConfig.brandColors.gold }}
                              className="text-[#0A0B11] font-bold text-xs px-4 py-1.5 rounded"
                            >
                              Responder
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setReplyingReviewId(rev.id);
                              setReplyText(rev.reply || '');
                            }}
                            className="text-[11px] text-[#D1B27E] hover:underline"
                          >
                            {rev.reply ? 'Editar respuesta' : 'Responder comentario'}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 11: USUARIOS Y PERMISOS
              =============================================================== */}
              {adminTab === 'users' && (
                <div className="max-w-5xl mx-auto space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                        MÓDULO 11 · CONTROL DE ACCESO
                      </span>
                      <h2 className="font-serif-luxury text-2xl font-bold text-white">
                        Usuarios, Roles y Permisos Administrativos
                      </h2>
                    </div>
                    <button
                      onClick={() =>
                        setEditingAdminUser({
                          id: 'usr-' + Date.now(),
                          name: '',
                          email: '',
                          password: '',
                          role: 'Gestor de Catálogo',
                          isAdmin: true
                        })
                      }
                      style={{ backgroundColor: siteConfig.brandColors.gold }}
                      className="text-[#0A0B11] font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Crear Administrador</span>
                    </button>
                  </div>

                  {editingAdminUser && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!editingAdminUser.email.trim()) return;
                        const clean = {
                          ...editingAdminUser,
                          email: editingAdminUser.email.trim().toLowerCase(),
                          isAdmin: editingAdminUser.role !== 'customer'
                        };
                        setUsersDb((prev) =>
                          prev.some((u) => u.email.toLowerCase() === clean.email)
                            ? prev.map((u) => (u.email.toLowerCase() === clean.email ? clean : u))
                            : [clean, ...prev]
                        );
                        logAdminAction(`Usuario administrativo actualizado: ${clean.email} (${clean.role})`);
                        setEditingAdminUser(null);
                        showToast(`Usuario "${clean.name}" guardado`);
                      }}
                      className="bg-[#12141E] border border-[#D1B27E]/50 rounded-xl p-5 space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Nombre *</label>
                          <input
                            type="text"
                            value={editingAdminUser.name}
                            onChange={(e) => setEditingAdminUser({ ...editingAdminUser, name: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Correo Electrónico *</label>
                          <input
                            type="email"
                            value={editingAdminUser.email}
                            onChange={(e) => setEditingAdminUser({ ...editingAdminUser, email: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Rol Asignado</label>
                          <select
                            value={editingAdminUser.role || 'Gestor de Catálogo'}
                            onChange={(e) => setEditingAdminUser({ ...editingAdminUser, role: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs"
                          >
                            <option value="Super Administrador">Super Administrador</option>
                            <option value="Gestor de Catálogo">Gestor de Catálogo</option>
                            <option value="Encargado de Inventario">Encargado de Inventario</option>
                            <option value="Editor de Contenido">Editor de Contenido</option>
                            <option value="customer">Cliente Registrado</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-neutral-300 mb-1">Cambiar Contraseña *</label>
                          <input
                            type="text"
                            value={editingAdminUser.password}
                            onChange={(e) => setEditingAdminUser({ ...editingAdminUser, password: e.target.value })}
                            className="aroma-input w-full rounded px-3 py-2 text-xs font-bold"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setEditingAdminUser(null)} className="px-4 py-2 border border-white/20 rounded text-xs">
                          Cancelar
                        </button>
                        <button type="submit" style={{ backgroundColor: siteConfig.brandColors.gold }} className="text-[#0A0B11] font-bold px-5 py-2 rounded text-xs">
                          Guardar Usuario
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="bg-[#12141E] border border-white/10 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-[10px] uppercase text-[#D1B27E] bg-white/5">
                          <th className="p-3">Nombre</th>
                          <th className="p-3">Correo</th>
                          <th className="p-3">Rol y Permisos</th>
                          <th className="p-3 text-right">Acciones</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {usersDb.map((usr, i) => (
                          <tr key={usr.email + i}>
                            <td className="p-3 font-bold text-white">{usr.name}</td>
                            <td className="p-3 text-neutral-300">{usr.email}</td>
                            <td className="p-3">
                              <span className="bg-[#D1B27E]/20 text-[#D1B27E] px-2.5 py-0.5 rounded text-[10px] font-bold">
                                {usr.role || 'Cliente'}
                              </span>
                            </td>
                            <td className="p-3 text-right">
                              <div className="inline-flex gap-1.5">
                                <button
                                  onClick={() => setEditingAdminUser(usr)}
                                  className="p-1.5 bg-white/10 hover:bg-[#D1B27E] hover:text-[#0A0B11] rounded"
                                  title="Editar / Cambiar contraseña"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                {usr.email.toLowerCase() !== ADMIN_EMAIL && (
                                  <button
                                    onClick={() => setUsersDb((prev) => prev.filter((u) => u.email !== usr.email))}
                                    className="p-1.5 bg-red-500/15 hover:bg-red-500 text-red-300 hover:text-white rounded"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Registro de Actividad Administrativa */}
                  <div className="bg-[#12141E] border border-white/10 rounded-xl p-5">
                    <h3 className="font-serif-luxury text-lg font-semibold text-[#D1B27E] mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      <span>Actividad Administrativa Reciente</span>
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto text-xs">
                      {adminActivityLogs.map((act) => (
                        <div key={act.id} className="flex items-center justify-between py-1.5 border-b border-white/5">
                          <span className="text-white">{act.action}</span>
                          <span className="text-[11px] text-neutral-400">
                            {act.user} · {act.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ===============================================================
                  MÓDULO 12: CONFIGURACIÓN GENERAL DE LA TIENDA
              =============================================================== */}
              {adminTab === 'settings' && (
                <div className="max-w-5xl mx-auto space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D1B27E] font-bold">
                      MÓDULO 12 · PARÁMETROS GLOBALES
                    </span>
                    <h2 className="font-serif-luxury text-2xl font-bold text-white">
                      Configuración General de la Tienda
                    </h2>
                  </div>

                  {/* Identidad, Dominio, Moneda y Contacto */}
                  <div className="bg-[#12141E] border border-white/10 rounded-xl p-5 space-y-4">
                    <h3 className="font-serif-luxury text-lg font-semibold text-[#D1B27E]">
                      Identidad, Contacto, Moneda y Dominio
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Nombre de la Página</label>
                        <input
                          type="text"
                          value={siteConfig.storeName || 'AROMALUXE PERFUMES'}
                          onChange={(e) => setSiteConfig({ ...siteConfig, storeName: e.target.value })}
                          className="aroma-input w-full rounded px-3 py-2 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Dominio Oficial</label>
                        <input
                          type="text"
                          value={siteConfig.domain || 'www.aromaluxeperfumes.cl'}
                          onChange={(e) => setSiteConfig({ ...siteConfig, domain: e.target.value })}
                          className="aroma-input w-full rounded px-3 py-2 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Moneda Activa</label>
                        <select
                          value={siteConfig.currency || 'CLP ($)'}
                          onChange={(e) => setSiteConfig({ ...siteConfig, currency: e.target.value })}
                          className="aroma-input w-full rounded px-3 py-2 text-xs"
                        >
                          <option value="CLP ($)">Peso Chileno - CLP ($)</option>
                          <option value="USD ($)">Dólar - USD ($)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">WhatsApp de Ventas</label>
                        <input
                          type="text"
                          value={siteConfig.whatsappNumber}
                          onChange={(e) => setSiteConfig({ ...siteConfig, whatsappNumber: e.target.value })}
                          className="aroma-input w-full rounded px-3 py-2 text-xs font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Correo de Contacto y Notificaciones</label>
                        <input
                          type="email"
                          value={siteConfig.contactEmail}
                          onChange={(e) => setSiteConfig({ ...siteConfig, contactEmail: e.target.value })}
                          className="aroma-input w-full rounded px-3 py-2 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Texto Barra Superior</label>
                        <input
                          type="text"
                          value={siteConfig.topBarText}
                          onChange={(e) => setSiteConfig({ ...siteConfig, topBarText: e.target.value })}
                          className="aroma-input w-full rounded px-3 py-2 text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Paleta de Colores Corporativos Oficiales */}
                  <div className="bg-[#12141E] border border-white/10 rounded-xl p-5 space-y-4">
                    <h3 className="font-serif-luxury text-lg font-semibold text-[#D1B27E]">
                      Colores Corporativos y Tipografías
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { key: 'gold', label: 'Dorado / Arena (#D1B27E)' },
                        { key: 'black', label: 'Negro Profundo (#0A0B11)' },
                        { key: 'gray', label: 'Gris Medio (#686868)' },
                        { key: 'smoke', label: 'Blanco Humo (#F4F4F4)' }
                      ].map((c) => (
                        <div key={c.key} className="bg-black/30 p-3 rounded-lg border border-white/10">
                          <label className="block text-[11px] text-neutral-300 mb-1.5">{c.label}</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              value={siteConfig.brandColors?.[c.key] || '#D1B27E'}
                              onChange={(e) =>
                                setSiteConfig({
                                  ...siteConfig,
                                  brandColors: { ...siteConfig.brandColors, [c.key]: e.target.value }
                                })
                              }
                              className="w-8 h-8 rounded cursor-pointer"
                            />
                            <span className="text-xs font-mono text-white">{siteConfig.brandColors?.[c.key]}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Configuración SEO, Redes Sociales e Integraciones */}
                  <div className="bg-[#12141E] border border-white/10 rounded-xl p-5 space-y-4">
                    <h3 className="font-serif-luxury text-lg font-semibold text-[#D1B27E]">
                      Configuración de SEO, Redes Sociales e Integraciones
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Meta Título SEO</label>
                        <input
                          type="text"
                          value={siteConfig.seo?.metaTitle || ''}
                          onChange={(e) =>
                            setSiteConfig({
                              ...siteConfig,
                              seo: { ...(siteConfig.seo || {}), metaTitle: e.target.value }
                            })
                          }
                          className="aroma-input w-full border border-neutral-300 rounded px-3 py-2 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Palabras Clave SEO</label>
                        <input
                          type="text"
                          value={siteConfig.seo?.keywords || ''}
                          onChange={(e) =>
                            setSiteConfig({
                              ...siteConfig,
                              seo: { ...(siteConfig.seo || {}), keywords: e.target.value }
                            })
                          }
                          className="aroma-input w-full border border-neutral-300 rounded px-3 py-2 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Instagram Oficial</label>
                        <input
                          type="text"
                          value={siteConfig.socialLinks?.instagram || '@aromaluxe.cl'}
                          onChange={(e) =>
                            setSiteConfig({
                              ...siteConfig,
                              socialLinks: { ...(siteConfig.socialLinks || {}), instagram: e.target.value }
                            })
                          }
                          className="aroma-input w-full border border-neutral-300 rounded px-3 py-2 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-300 mb-1">Google Analytics / Meta Pixel ID (Opcional)</label>
                        <input
                          type="text"
                          value={siteConfig.integrations?.googleAnalyticsId || ''}
                          placeholder="Desactivado por defecto para máxima privacidad"
                          onChange={(e) =>
                            setSiteConfig({
                              ...siteConfig,
                              integrations: { ...(siteConfig.integrations || {}), googleAnalyticsId: e.target.value }
                            })
                          }
                          className="aroma-input w-full border border-neutral-300 rounded px-3 py-2 text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* AUDITORÍA DE SDKS DE TERCEROS Y VERIFICACIÓN DE CERO PATRONES OSCUROS */}
                  <div className="bg-[#12141E] border border-white/10 rounded-xl p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-serif-luxury text-lg font-semibold text-[#0A0B11]">
                          Auditoría de SDKs de Terceros y Verificación Anti-Patrones Oscuros
                        </h3>
                        <p className="text-xs text-[#686868]">
                          Control de scripts externos, transparencia de consentimiento y ausencia de casillas premarcadas.
                        </p>
                      </div>
                      <span className="text-[11px] bg-emerald-100 text-emerald-800 px-3 py-1 rounded font-semibold self-start">
                        Cumplimiento Verificado
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {(siteConfig.sdkAudit || INITIAL_SITE_CONFIG.sdkAudit).map((sdk) => (
                        <div key={sdk.id} className="p-3.5 rounded-lg border border-neutral-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-0.5 text-xs">
                            <div className="font-semibold text-[#0A0B11] flex items-center gap-2">
                              <span>{sdk.name}</span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-[#686868]">
                                {sdk.category}
                              </span>
                            </div>
                            <p className="text-[#686868] text-[11px]">{sdk.purpose}</p>
                            <p className="text-[#686868] text-[11px]">
                              <strong>Datos compartidos:</strong> {sdk.dataShared}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-[11px] font-medium text-emerald-700 block">{sdk.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}