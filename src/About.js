import CommonHeader from "./Common-Header";
import useAboutDetails from "./Hooks/useAboutDetails";
import Footer from "./Footer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loader from "./shared/Loader";

const AboutUs = () => {
  const data = useAboutDetails();

  return data ? (
    <div className="about-us-page">
      <CommonHeader header={"About Us"} />
      <div className="about-us-card">
        <Card sx={{ maxWidth: 345 }} className="inside-card-about-us">
          <CardMedia
            sx={{ height: 400 }}
            image={data?.avatar_url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Software Developer working in {data?.location}
            </Typography>
          </CardContent>
          <CardActions>
            <a href={data?.html_url}>
              <Button size="small">Git Profile</Button>
            </a>
          </CardActions>
        </Card>
      </div>

      <Footer className="common-footer" />
    </div>
  ) : (
    <Loader />
  );
};

export default AboutUs;
