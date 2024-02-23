import CommonHeader from "./Common-Header";
import Footer from "./Footer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useRandomJoke from "./Hooks/useRandomJoke";

const RandomFoodJoke = () => {
  const joke = useRandomJoke();
  return (
    <div className="random-joke-page">
      <CommonHeader header={"FoodJoke 😄 "} />;
      <div>
        <Card sx={{ maxWidth: 345 }} className="inside-card-joke">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {joke?.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Funny</Button>

            <Button size="small">Ughh, not fun</Button>
          </CardActions>
        </Card>
      </div>
      <Footer className="common-footer" />;
    </div>
  );
};

export default RandomFoodJoke;
