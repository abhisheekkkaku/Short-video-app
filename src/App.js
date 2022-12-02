import "./App.css";
import Video from "./Video";
function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="tram.mp4"
          channel="abhishek"
          description="Check the pc and video"
          song="I am a Windows PC"
          likes={345}
          shares={200}
          messages={90}
        />
        <Video
          url="Hotair.mp4"
          channel="thewebdev"
          description="Tuesday morning editing "
          song="Kdenlive is great"
          likes={445}
          shares={290}
          messages={109}
        />
      </div>
    </div>
  );
}
export default App;
