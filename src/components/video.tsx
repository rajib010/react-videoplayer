import { useEffect, useRef } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import { type videoJsOptionsType } from "../App";

interface VideoJsProps {
  options: videoJsOptionsType;
  onReady?: (player: any) => void;
}

function VideoJs({ options, onReady }: VideoJsProps) {
  const playerRef = useRef<any>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered", "video-js");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(
        videoElement,
        options,
        () => {
          videojs.log("player is ready");
          onReady?.(player);
        }
      ));
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay ?? false);
      player.src(options.sources ?? []);
    }
  }, [onReady, options]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <div ref={videoRef}></div>
    </div>
  );
}

export default VideoJs;
