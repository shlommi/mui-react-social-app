import { Box, Stack, Skeleton } from '@mui/material';
import Post from './Post';
import React, { useState } from 'react';

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <Box flex={4} p={2}>
      {loading ? (
        <Stack>
          <Skeleton variant='text' height={100} />
          <Skeleton variant='rectangular' height={300} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='text' height={20} />
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
};

export default Feed;
