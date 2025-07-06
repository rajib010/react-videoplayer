import { useRef } from "react";
import VideoJs from "./components/video";


export type videoJsOptionsType = {
  autoplay: boolean;
  controls: boolean;
  responsive: boolean;
  fluid: boolean;
  sources: {
    src: string;
    type: string;
  }[];
};

function App() {
  const playerRef = useRef(null);
  // const videoRef = useRef(null);
  const videoJsOptions: videoJsOptionsType = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://ik.imagekit.io/ofpyxioc6c/cr.mp4?updatedAt=1751810331094",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player:any) => {
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
