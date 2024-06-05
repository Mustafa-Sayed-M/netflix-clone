import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import MediaCollection from "@/components/MediaCollection/MediaCollection";
import NowPlaying from "@/components/NowPlaying/NowPlaying";

export default function Home() {
  return (
    <div className="home-page">
      <main>
        {/* Landing */}
        <Landing />
        {/* Media Collection */}
        <MediaCollection />
        {/* Now Playing */}
        <NowPlaying />
        {/* Footer */}
        {/* <Footer /> */}
      </main>
    </div>
  );
};