export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--color-bg)]">
      <div
        className="blob"
        style={{
          width: 720,
          height: 720,
          left: "-10%",
          top: "-10%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.55), rgba(139,92,246,0) 70%)",
          animation: "drift-1 22s ease-in-out infinite",
        }}
      />
      <div
        className="blob"
        style={{
          width: 640,
          height: 640,
          right: "-15%",
          top: "20%",
          background:
            "radial-gradient(circle, rgba(232,121,249,0.45), rgba(232,121,249,0) 70%)",
          animation: "drift-2 28s ease-in-out infinite",
        }}
      />
      <div
        className="blob"
        style={{
          width: 560,
          height: 560,
          left: "30%",
          bottom: "-15%",
          background:
            "radial-gradient(circle, rgba(212,255,58,0.28), rgba(212,255,58,0) 70%)",
          animation: "drift-3 32s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />
    </div>
  );
}
