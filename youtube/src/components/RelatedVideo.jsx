import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoBox from "./VideoBox";

export default function RelatedVideo() {
  const { videoId } = useParams();
  const fetchRelatedVideos = async () => {
    return await fetch(`http://localhost:3000/data/relatedVideos.json`).then(
      (res) => res.json()
    );
  };
  const { data } = useQuery(["related", videoId], fetchRelatedVideos);
  return (
    <>
      {data.items.map((item) => {
        return <VideoBox key={item.id.videoId} item={item} />;
      })}
    </>
  );
}
