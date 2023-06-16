import { useParams } from "react-router-dom";
import Header from "../components/Header";
import VideoList from "../components/VideoList";

export default function List() {
  const { keyword } = useParams();
  return (
    <>
      <Header />
      <h1>List</h1>
      <VideoList isMainPage={false} keyword={keyword} />
    </>
  );
}
