export default function LanguageBadge({ lang }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      <span>{lang.name}</span>
      <span className="text-white/40">{lang.count}</span>
    </span>
  );
}
