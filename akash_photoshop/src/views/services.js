import { Grid, Card, CardMedia, Typography, makeStyles } from "@material-ui/core";
import '../App.css'
const useStyles = makeStyles((theme) => ({
  container: {
    width:"75%",
    margin:"auto",
    textAlign:'center',
    flexGrow: 2,
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
  },
  card: {
    maxWidth: 345,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  media: {
    height: 140,
  },
 
}));

const Services = () => {
  const classes = useStyles();
  const services = [
    { name: "Photoshop", image: "" },
    { name: "Photoshoot", image: "photoshoot.jpg" },
    { name: "Video Editing", image: "video-editing.jpg" },
    { name: "Short Film Making", image: "short-film-making.jpg" },
    { name: "Event Recording", image: "event-recording.jpg" },
    { name: "Frame Making", image: "frame-making.jpg" },
  ];

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.name}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={service.image} title={service.name} />
              <div style={{ padding: "0 16px 16px" }}>
                <Typography variant="h6">{service.name}</Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
