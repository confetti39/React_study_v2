import { useNavigate } from "react-router-dom";

export default function VideoBox({ item }) {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate(`/videos/watch/${itme.snippet.channelId}`);
    navigate(`/videos/watch/owjVpYCmwcg`);
  };
  return (
    <>
      <img src={item.snippet.thumbnails.medium.url} onClick={handleClick} />
      <h1>{item.snippet.title}</h1>
      <p>{item.snippet.channelTitle}</p>
      <p>{item.snippet.publishedAt}</p>
      <p>{item.snippet.channelId}</p>
    </>
  );
}
