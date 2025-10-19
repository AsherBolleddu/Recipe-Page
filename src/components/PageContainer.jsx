export default function PageContainer({ children }) {
  return (
    <main
      className={`min-h-screen bg-white px-10 py-8 md:py-10 md:min-h-0 overflow-hidden flex flex-col gap-10 items-start`}
    >
      {children}
    </main>
  );
}
