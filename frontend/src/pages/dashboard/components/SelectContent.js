import * as React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import Select, { selectClasses } from '@mui/material/Select';

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.secondary,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
}));

export default function SelectContent() {
  const [company, setCompany] = React.useState('');

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <Select
      labelId="company-select"
      id="company-simple-select"
      value={company}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Seleccionar empresa' }}
      fullWidth
      sx={{
        maxHeight: 56,
        width: 215,
        [`& .${selectClasses.select}`]: {
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          pl: 1,
        },
      }}
    >
      <MenuItem value="">
        <Avatar alt="Logo de la empresa">
          <DevicesRoundedIcon sx={{ fontSize: '1rem' }} />
        </Avatar>
        <span>Empresa</span>
      </MenuItem>
    </Select>
  );
}
