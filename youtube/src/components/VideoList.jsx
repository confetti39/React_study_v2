import { useQuery } from "@tanstack/react-query";
import VideoBox from "./VideoBox";

export default function VideoList({ isMainPage, keyword }) {
  const fetchVideos = async () => {
    return await fetch(
      `http://localhost:3000/data/videosByKeyword${
        isMainPage ? `Default` : `BTS`
      }.json`
    ).then((res) => res.json());
  };
  const { isLoading, isError, data } = useQuery(
    ["videos", keyword],
    fetchVideos
    // {
    //   refetchOnWindowFocus: false,
    // }
  );

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <>
      {data.items.map((item) => {
        return <VideoBox key={item.id.videoId} item={item} />;
      })}
    </>
  );
}
