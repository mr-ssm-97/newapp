import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";

export default function NewsItem(props) {
  function getDate(date) {
    return `${new Date(date).getDate()}-${new Date(date).getMonth()}-${new Date(
      date
    ).getFullYear()}`;
  }
  return (
    <>
      <Grid item lg={3} md={4} xs={12}>
        <Card sx={{ width: 320 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="150"
              image={props.pic}
              alt="NewsPic"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h5 style={{ height: 50, overflow: "hidden" }}>
                  {props.title.slice(0, 60) + "..."}
                </h5>
                <hr />
                <Box
                  fontSize={"small"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <p>{props.source}</p>
                  <p>{getDate(props.date)}</p>
                </Box>
              </Typography>
              <Typography variant="body2" color="text.secondary" height={80}>
                {props.description && props.description.slice(0, 133) + "..."}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              variant="contained"
              target="_blank"
              fullWidth
              onClick={() => {
                window.open(props.url, "_blank");
              }}
            >
              Read Full Articles
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
