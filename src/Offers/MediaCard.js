import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <>
      <div className="offer-card">
        <div className="single-card">
          <Card sx={{ maxWidth: 360 ,pb:4}}>
            <CardMedia
              sx={{ height: 160 }}
              image="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/%7B32926B10-8EE8-4639-B2DD-AC55F70CB76D%7Dslcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div" sx={{pt:0,pb:2}}>
              Rooms & Suites

              </Typography>
              <Typography variant="body2" color="black" textAlign={'center'} paddingBottom='10px'>
              Shangri–La Circle Exclusive Member Rate with Breakfast
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign={'center'} paddingBottom='10px'>
              Exclusive Member Rate with Breakfast for Shangri-La Circle member.
              </Typography>
              <Typography variant="body1" color="black" textAlign={'center'} paddingBottom='10px'>
              From LKR 65,680.20 Average Per Night

              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{left:120,color:'#876a20',borderColor:'#876a20'}} size="small" variant="outlined" >View Details</Button>
            </CardActions>
          </Card>
        </div>

        <div className="single-card">
          <Card sx={{ maxWidth: 360,pb:4 }}>
            <CardMedia
              sx={{ height: 160 }}
              image="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/%7BA8B2E679-6D4A-497F-95C4-A905821952F5%7Dslcmemberrate.jpg?w=360&h=175&mode=crop&quality=100&scale=both"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div" sx={{pt:0,pb:4}}>
              Rooms & Suites

              </Typography>
              <Typography variant="body2" color="black" textAlign={'center'} paddingBottom='10px'>
              Shangri–La Circle Exclusive Member Rate              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign={'center'} paddingBottom='10px'>
              Exclusive Member Rate for Shangri-La Circle member.
              </Typography>
              <Typography variant="body1" color="black" textAlign={'center'} paddingBottom='10px'>
              From LKR 58,382.40 Average Per Night
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{left:120,color:'#876a20',borderColor:'#876a20'}} size="small" variant="outlined">View Details</Button>
            </CardActions>
          </Card>
        </div>
        <div className="single-card">
          <Card sx={{ maxWidth: 360 ,pb:4}}>
            <CardMedia
              sx={{ height: 160 }}
              image="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/4/8/3/%7B4835D553-4207-4DFC-B256-52D227A8066B%7D201201_SLCB_APNewOffer.jpg?w=360&h=175&mode=crop&quality=100&scale=both"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div" sx={{pt:0,pb:4}}>
              Rooms & Suites

              </Typography>
              <Typography variant="body2" color="black" textAlign={'center'} paddingBottom='10px'>
              Book Early and Save with Flexibility
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign={'center'} paddingBottom='10px'>
              Book in advance and save up to 15% with complimentary date changes.
              </Typography>
              <Typography variant="body1" color="black" textAlign={'center'} paddingBottom='10px'>
              From LKR 67,504.65 Average Per Night
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{left:120,color:'#876a20',borderColor:'#876a20'}} size="small" variant="outlined"> View Details</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}
