import { DiscussionEmbed } from "disqus-react"
const DisqusComments = ({ post }) => {
    const disqusShortname = ""
    const disqusConfig = {
        url: "",
        identifier: "",
        title: "",
    }
    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}
export default DisqusComments;