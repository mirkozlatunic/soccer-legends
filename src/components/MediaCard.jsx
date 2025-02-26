import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

MediaCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default function MediaCard({ name, description, rating }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating name="size-medium" defaultValue={rating} />
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
