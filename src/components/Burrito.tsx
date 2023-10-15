import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import burrito from '../assets/Burrito.png';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Quick and Easy Burrito"
      />
      <CardMedia
        component="img"
        height="194"
        image={burrito} // Use the 'image' attribute to set the image source
        alt="mac&cheese"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
        This is truly the easiest burrito recipe to make at home — and they're freezer-friendly! Keep a stash in your kitchen and you can satisfying your Mexican food cravings any night of the week.        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        •	Preheat oven to 350° F. Spray 9 x 13-inch baking dish with cooking spray and set aside.
	•	Cook beef with taco seasoning mix, according to seasoning package instructions.
	•	To prepare 1 burrito: spread ¼ cup beans down center of tortillas; top with ½ cup rice, beef, 2 tablespoons corn, and ¼ cup cheese.
	•	Fold in opposite sides of each tortilla, then roll up, burrito style. Place, seam-sides down, in prepared dish. Repeat with remaining ingredients to prepare 6 total burritos.
	•	Cover with foil and bake for 25 minutes (until heated through). If you are baking the burritos from the refrigerator while they’re still cold, it will take about 30-35 minutes for them to heat through.
  Source: https://www.theseasonedmom.com/easiest-burrito-recipe/#wprm-recipe-container-43871

        </CardContent>
      </Collapse>
    </Card>
  );
}

