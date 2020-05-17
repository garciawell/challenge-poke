import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import { Search as SearchIcon } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { Box } from './styles';

interface IInputProps {
  className?: string;
}

const Input: React.FC<IInputProps> = ({ className }) => {
  return (
    <Box>
      <TextField
        className={className}
        fullWidth
        placeholder="What pokémon are you looking for?"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Input;
