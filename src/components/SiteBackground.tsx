export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--color-frame)]">
      <div
        className="blob"
        style={{
          width: 720,
          height: 720,
          left: "-10%",
          top: "-5%",
          background:
            "radial-gradient(circle, rgba(74,222,128,0.18), rgba(74,222,128,0) 70%)",
          animation: "drift-1 22s ease-in-out infinite",
        }}
      />
      <div
        className="blob"
        style={{
          width: 640,
          height: 640,
          right: "-15%",
          top: "25%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.14), rgba(34,197,94,0) 70%)",
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
            "radial-gradient(circle, rgba(22,163,74,0.12), rgba(22,163,74,0) 70%)",
          animation: "drift-3 32s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-frame)]" />
    </div>
  );
}
