import Header from "../components/Header";
import VideoList from "../components/VideoList";

export default function Main() {
  return (
    <>
      <Header />
      <h1>Main</h1>
      <VideoList isMainPage={true} keyword="" />
    </>
  );
}
