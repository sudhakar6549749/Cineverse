import MovieCard from "./MovieCard";

function MovieRow({ title, movies }) {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2
        style={{
          color: "white",
          marginBottom: "20px",
          marginLeft: "20px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "15px",
          padding: "10px 20px",
          scrollbarWidth: "none",
        }}
      >
        {movies.map((movie, index) => (
          <div
            key={index}
            style={{
              minWidth: "200px",
              flexShrink: 0,
            }}
          >
            <MovieCard
              title={movie.title}
              image={movie.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;