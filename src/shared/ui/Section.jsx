export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-24 py-16 text-white md:py-20 lg:py-24 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}
