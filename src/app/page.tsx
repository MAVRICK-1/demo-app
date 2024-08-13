const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/deadpool-wolverine-bye-bye.mp4"
        autoPlay
        loop
        controls
        preload="auto"
      />
    </div>
  );
};

export default Home;
