import { ImageKitProvider,Video } from "@imagekit/react"

const IMAGEKIT_URL_ENDPOINT = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT

function ImagekitPlayer() {
  return (
    <ImageKitProvider urlEndpoint={IMAGEKIT_URL_ENDPOINT}>
        <Video
            src="/cr.mp4"
            controls
            width={800}
            height={400}
            transformation={[{quality:80},{format:"auto"}]}
            poster="/cr.mp4/ik-thumbnail.jpg?tr=w-800,h-450"
        />
    </ImageKitProvider>
  )
}

export default ImagekitPlayer