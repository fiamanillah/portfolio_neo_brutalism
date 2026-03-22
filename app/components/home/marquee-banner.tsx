export default function MarqueeBanner() {
  const techStack = [
    "GO/GOLANG", "RUST", "NODE.JS", "PYTHON", "POSTGRESQL", "REDIS", 
    "KUBERNETES", "DOCKER", "AWS", "KAFKA", "GRAPHQL", "gRPC", "MONGODB"
  ];

  return (
    <div className="neo-marquee bg-neo-pink text-white py-4 border-y-4 border-border z-30 relative shadow-neo">
      <div className="neo-marquee-content flex gap-8 items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-8 items-center font-black font-mono text-2xl uppercase">
            {techStack.map((tech) => (
              <span key={tech} className="flex items-center gap-8 whitespace-nowrap">
                {tech} <span className="text-black/30">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
