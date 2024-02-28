import React from 'react'
import {  Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'


const Post = () => {
  return (
    <div>
        <Card sx={{
            margin:5
        }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            RW
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Robot Wipro"
        subheader="September 14, 2024"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.jpg?s=2048x2048&w=is&k=20&c=cM_JXt2TA5RkUwemBr30OYs_v_Wz2KaQD-Lze6Koz88="
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
    
      </CardActions>
    </Card>
    </div>
  )
}

export default Post
