const StratusLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10L75 35L50 60L25 35L50 10Z" fill="hsl(0, 72%, 51%)" />
    <path d="M50 30L65 45L50 60L35 45L50 30Z" fill="hsl(0, 72%, 40%)" />
    <path d="M50 40L70 60L50 80L30 60L50 40Z" fill="hsl(0, 72%, 51%)" />
    <path d="M50 55L62 67L50 79L38 67L50 55Z" fill="hsl(0, 72%, 40%)" />
  </svg>
);

export default StratusLogo;
