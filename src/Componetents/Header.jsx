export default function Header() {
  return (
    
    <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between rounded-2xl bg-[#8496a7] px-8 py-4 text-white">
      {/* Left side text */}
      <span className="text-xl font-semibold">
        Elevate
      </span>

      {/* Center text */}
      <span className="absolute left-1/2 -translate-x-1/2 text-lg font-medium">
        Frontend Advanced Bootcamp Task
      </span>
      
      {/* Empty div to balance flexbox if needed, or just leave as is */}
      <div className="w-16"></div>
    </nav>
  );
}