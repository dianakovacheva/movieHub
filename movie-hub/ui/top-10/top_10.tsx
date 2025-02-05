import MovieCard from "./movie-card/movie_card";

export default function Top10() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-5">Top 10 on IMDb this week</h2>
      <div className="carousel rounded-box w-auto h-[450px] gap-4">
        <div className="carousel-item">
          <div className="w-full">
            <MovieCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-full">
            <MovieCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-full">
            <MovieCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-full">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
