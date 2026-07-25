function MovieCard({ title, image }) {
  return (
    <div
      style={{
        width: "200px",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.6)",
        }}
      />

      <h5
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "12px",
          fontWeight: "600",
        }}
      >
        {title}
      </h5>
    </div>
  );
}

export default MovieCard;