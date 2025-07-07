import { useRef } from "react";
import VideoJs from "./components/video";

export type videoJsOptionsType = {
  autoplay: boolean;
  controls: boolean;
  responsive: boolean;
  fluid: boolean;
  playbackRates: Number[];
  sources: {
    src: string;
    type: string;
  }[];
  poster: string;
  tracks: {
    kind: string;
    src: string;
    srclang: string;
    label: string;
    default?: true;
  }[];
  chapters: {
    kind: string;
    src: string;
    srclang: string;
    label: string;
    default?: true;
  };
};

function App() {
  const playerRef = useRef(null);
  // const videoRef = useRef(null);
  const videoJsOptions: videoJsOptionsType = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.25, 0.5, 1, 1.5, 2],
    sources: [
      {
        src: "https://ik.imagekit.io/ofpyxioc6c/cr.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080",
        type: "application/x-mpegURL",
      },
    ],
    poster: "",
    tracks: [
      {
        kind: "captions",
        src: "/english.vtt",
        srclang: "en",
        label: "English",
        default: true,
      },
      {
        kind: "captions",
        src: "/nepali.vtt",
        srclang: "ne",
        label: "Nepali",
      },
    ],
    chapters: {
      kind: "chapters",
      src: "/chapters.vtt",
      srclang: "en",
      label: "Chapters",
      default: true,
    },
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <div className="container">
      <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default App;
