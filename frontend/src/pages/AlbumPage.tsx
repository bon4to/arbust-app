import { albumInfo } from "../mock/albumInfo";
import { Button } from "../components/ui/Button";
import { Star } from "lucide-react";
import BaseLayout from "../layouts/BaseLayout";

export default function AlbumPage() {
  const album = albumInfo;

  return (
    <BaseLayout>
      {/* Banner */}
      <section 
        className="relative w-full h-[40vh] md:h-[48vh] bg-cover bg-center flex items-center justify-center text-white -mt-20"
        style={{ backgroundImage: `url(${album.background})` }}
        aria-label={`${album.title} by ${album.artist}`}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark opacity-40"></div>
      </section>  

      {/* Main Layout */}
      <div className="flex max-w-6xl mx-auto mt-8 px-4 gap-10 text-white">
        {/* Sticky Sidebar */}
        <aside className="w-64 flex-shrink-0 sticky top-24 h-fit">
          <img
            src={album.cover}
            alt={`Cover of ${album.title} by ${album.artist}`}
            className="rounded-xl shadow-lg w-full"
          />
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="default" className="w-full">Like</Button>
            <Button variant="default" className="w-full">Rate</Button>
            <Button variant="ghost" className="text-blue-400 hover:underline">View Artist</Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          {/* Album Header */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">{album.title}</h1>
            <p className="text-lg text-neutral-400">{album.artist}</p>
            <div className="flex items-center gap-2 text-yellow-400">
              <Star fill="currentColor" /> {album.averageNote.toFixed(1)} / 5
            </div>
            <p className="text-neutral-300 text-sm">{album.description}</p>
            <ul className="text-sm text-neutral-400 space-y-1 pt-2">
              <li><strong>Release Date:</strong> {album.releaseDate}</li>
              <li><strong>Genre:</strong> {album.genre}</li>
              <li><strong>Duration:</strong> {album.duration}</li>
              <li><strong>Label:</strong> {album.label}</li>
            </ul>
          </div>

          {/* Tracklist */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Tracklist</h2>
            <ol className="list-decimal pl-5 text-neutral-300 space-y-1">
              {album.tracks.map((track, i) => (
                <li key={i}>{track}</li>
              ))}
            </ol>
          </section>

          {/* Popular Reviews (mock) */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Popular Reviews</h2>
            <div className="space-y-4 text-neutral-300 text-sm">
              <p><strong>@user123</strong>: This album changed my life. Daft Punk forever!</p>
              <p><strong>@audiophile</strong>: The perfect mix of nostalgia and innovation. 5/5.</p>
            </div>
          </section>

          {/* Similar Songs (mock) */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Similar Songs</h2>
            <ul className="text-sm text-blue-300 space-y-1">
              <li>Digital Love – Daft Punk</li>
              <li>Get Lucky – Daft Punk</li>
              <li>Midnight City – M83</li>
              <li>Someone Great – LCD Soundsystem</li>
            </ul>
          </section>

          {/* More by Artist (mock) */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">More by Daft Punk</h2>
            <ul className="text-sm text-blue-300 space-y-1">
              <li>Random Access Memories</li>
              <li>Homework</li>
              <li>Alive 2007</li>
            </ul>
          </section>
        </main>
      </div>
    </BaseLayout>
  );
}