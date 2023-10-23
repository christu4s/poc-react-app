import React from 'react';
import Button from '@mui/material/Button';

function CommonButton({variant, size, onclick, sx, children, color, disabled}) {
  return (
    <Button color={color} disabled={disabled} onClick={onclick} size={size} sx={sx} variant={variant}>
        {children}
    </Button>
  )
}

export default CommonButton


