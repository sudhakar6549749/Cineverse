import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import {
  trendingMovies,
  actionMovies,
  sciFiMovies,
  thrillerMovies,
} from "../Data/movies";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div
        style={{
          backgroundColor: "#141414",
          minHeight: "100vh",
          paddingTop: "20px",
          paddingBottom: "50px",
        }}
      >
        <MovieRow
          title="🔥 Trending Now"
          movies={trendingMovies}
        />

        <MovieRow
          title="💥 Action Movies"
          movies={actionMovies}
        />

        <MovieRow
          title="🚀 Sci-Fi Collection"
          movies={sciFiMovies}
        />

        <MovieRow
          title="🕵️ Thriller Picks"
          movies={thrillerMovies}
        />
      </div>
    </>
  );
}

export default Home;