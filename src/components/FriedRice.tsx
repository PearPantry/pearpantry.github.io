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


import rice from '../assets/easy_fried_rice.jpeg';

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
        title="Fried Rice"
      />
      <CardMedia
        component="img"
        height="194"
        image={rice} // Use the 'image' attribute to set the image source
        alt="mac&cheese"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
        An easy and delicious fried rice that will go perfectly to any chinese dish </Typography>
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
        Preheat a large skillet or wok to medium heat. Add the sesame oil, onion, peas, and carrots. Cook until tender.
Slide the onion, peas, and carrots to the side, and pour the beaten eggs onto the other side of the skillet. Using a spatula, scramble the eggs. Once cooked, mix the eggs with the vegetable mix.
Add the rice to the veggie and egg mixture. Pour the soy sauce on top. Stir and fry the rice and veggie mixture until warmed through and combined.
Add chopped green onions if desired.
  Source: https://therecipecritic.com/easy-fried-rice/

        </CardContent>
      </Collapse>
    </Card>
  );
}

