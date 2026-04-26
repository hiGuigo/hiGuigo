export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`w-full py-24 md:py-24 bg-black text-white ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}
