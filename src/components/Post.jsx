import { MoreVert, Favorite, FavoriteBorder, Share } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';

function Post() {
  return (
    <Card sx={{ margin: '5px' }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: 'red' }}
            aria-label='recipe'
            src='https://material-ui.com/static/images/avatar/2.jpg'
          />
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title='ShlomiCohen'
        subheader='September 14, 2022'
      />
      <CardMedia
        component='img'
        height='20%'
        image='https://images.pexels.com/photos/9746/people-mother-family-father.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
