import { TwitterTimelineEmbed } from "react-twitter-embed";
//styles
import { Body } from "./styles";

function TwitterComponent() {
  return (
    <Body>
      <TwitterTimelineEmbed sourceType="profile" screenName="ProjectSakura_" theme="dark" options={{ height: 400 }} />
    </Body>

  );
}
export default TwitterComponent;
