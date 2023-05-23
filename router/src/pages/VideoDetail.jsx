import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams(); //구조 분해 할당
  return <div>VideoDetail id: {videoId}</div>;
}
