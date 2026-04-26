export default function LanguageBadge({ lang }) {
  return (
    <span
      className="
        px-3 py-1 text-xs
        rounded-full
        bg-white/5
        border border-white/10
        text-white/60
        hover:border-cyan-400
        hover:text-cyan-300
        transition
      "
    >
      {lang.name} ({lang.count})
    </span>
  );
}