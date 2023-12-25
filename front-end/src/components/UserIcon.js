import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const UserAvatar = ({userData}) => {
    const firstName = userData.userData
    console.log(firstName)
  const firstLetter = firstName ? firstName.charAt(0).toUpperCase() : '';
  const randomColor = getRandomColor();

  return <Avatar sx={{ bgcolor: randomColor }}>{firstLetter}</Avatar>;
};

export default function LetterAvatars({ userData }) {
  return (
    <Stack direction="row" spacing={2}>
      <UserAvatar firstName={userData.firstName} />
      <UserAvatar firstName="John" />
      <Stack direction="row" spacing={0}>
        <UserAvatar firstName="Alice" />
        <UserAvatar firstName="Bob" />
      </Stack>
    </Stack>
  );
}
