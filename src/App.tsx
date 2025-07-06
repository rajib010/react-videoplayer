function App() {
  return (
    <div className="container">
      <video
        src="https://ik.imagekit.io/ofpyxioc6c/cr.mp4?updatedAt=1751810331094?tr=w-800"
        height="400"
        width="800"
        controls
        autoPlay
        muted
        loop
      >
        <track kind="subtitles" src="/english.vtt" srcLang="en" label="English" default />
        <track kind="subtitles" src="/nepali.vtt" srcLang="ne" label="Nepali"  />
      </video>
    </div>
  );
}

export default App;
