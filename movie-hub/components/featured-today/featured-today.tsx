import { getTrendingMoviesToday } from "../../app/actions/movies/movies";
import moviePosterURL from "../../app/actions/movies/image-API-URL";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedToday() {
  const trendingMoviesToday = await getTrendingMoviesToday();

  return trendingMoviesToday ? (
    <>
      <h1 className="text-3xl font-extrabold text-[#f5c518] tracking-wide pb-5">
        Featured today
      </h1>
      <div className="carousel rounded-box w-[60vw]">
        <div className="carousel-item gap-1">
          {trendingMoviesToday.map((movie) => (
            <Link href={"/"} key={movie.id}>
              <Image
                src={`${moviePosterURL}/${movie!.poster_path}`}
                alt={`${movie?.title}'s poster`}
                width={250}
                height={250}
                key={movie.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  ) : (
    <p>No movie to show.</p>
  );
}
