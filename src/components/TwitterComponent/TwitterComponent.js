import { useState, useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function TwitterComponent() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  const displayTwitter = () => {
    // console.log("width: ",width);
    if (width >= 900) {
      return (<TwitterTimelineEmbed sourceType="profile" screenName="ProjectSakura_" theme="dark" options={{ height: 500 }} />);
    }
    return (<div />);
  };

  return (
    displayTwitter()
  );
}
export default TwitterComponent;
