const HeroGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Cyan Blob */}
      <div className="absolute top-0 right-[30%] w-72 h-72 bg-cyan-400 opacity-40 rounded-full blur-3xl animate-pulse" />
      {/* Orange Blob */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-orange-400 opacity-30 rounded-full blur-3xl animate-pulse" />
      {/* Pink Blob */}
      <div className="absolute bottom-0 left-[35%] w-96 h-96 bg-pink-400 opacity-30 rounded-full blur-3xl animate-pulse" />
      {/* Purple Blob */}
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse" />
    </div>
  );
};

export default HeroGradient;