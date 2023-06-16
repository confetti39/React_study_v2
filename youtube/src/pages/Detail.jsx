import Header from "../components/Header";
import RelatedVideo from "../components/RelatedVideo";
import WatchVideo from "../components/WatchVideo";

export default function Detail() {
  return (
    <>
      <Header />
      <h1>Detail</h1>
      <WatchVideo />
      <h1 style={{ color: "blue" }}>Related Videos</h1>
      <RelatedVideo />
    </>
  );
}
