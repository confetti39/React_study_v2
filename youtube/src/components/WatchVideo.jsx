import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function WatchVideo() {
  const { videoId } = useParams();
  const fetchVideo = async () => {
    return await fetch(`http://localhost:3000/data/videoByVideoId.json`).then(
      (res) => res.json()
    );
  };
  const { isLoading, isError, data } = useQuery(["video", videoId], fetchVideo);

  if (isLoading) return <>Loading ...</>;
  if (isError) return <>Error ...</>;
  return (
    <>
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="390"
        src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      <h2>{data.items[0].snippet.title}</h2>
      <p>{data.items[0].snippet.publishedAt}</p>
      <p>{data.items[0].snippet.channelId}</p>
      <p>{data.items[0].snippet.description}</p>
      {data.items[0].snippet.tags.map((tag, index) => {
        return <span key={index}>{tag} </span>;
      })}
    </>
  );
}
