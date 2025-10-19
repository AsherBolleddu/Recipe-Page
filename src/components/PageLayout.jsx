export default function PageLayout({ children }) {
  return (
    <div className="md:bg-stone-100 md:min-h-screen md:py-32 md:px-12">
      {children}
    </div>
  );
}
