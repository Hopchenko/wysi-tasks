import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardHeader from '@material-ui/core/CardHeader';

const WysiCard = ({ name, taskText }) => {
  return (
    <Card className="Card">
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body2">{taskText}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

WysiCard.propTypes = {
  name: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired
};

export default WysiCard;
