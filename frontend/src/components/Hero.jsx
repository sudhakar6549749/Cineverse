function Hero() {
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          paddingLeft: "80px",
          paddingTop: "220px",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
          INTERSTELLAR
        </h1>

        <p style={{ fontSize: "22px" }}>
          Journey beyond the stars to save humanity.
        </p>

        <button className="btn btn-light btn-lg me-3">
          ▶ Play
        </button>

        <button className="btn btn-secondary btn-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default Hero;