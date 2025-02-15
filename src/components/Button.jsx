import React from 'react';
import { Button } from '@mui/material';

function ButtonHeader({ name }) {
  return (
    <div>
      <Button variant="contained">{name}</Button>
    </div>
  );
}

export default ButtonHeader;
