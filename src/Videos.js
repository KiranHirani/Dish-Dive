import YoutubeEmbed from "./YoutubeEmbed";

const Videos = ({ data }) => {
  const embedId = data.link?.split("v=")[1];

  return (
    <div className="outer-container">
      <div className="video-details-card">
        {/* Youtube Video */}
        <YoutubeEmbed embedId={embedId} />
      </div>
    </div>
  );
};

export default Videos;
