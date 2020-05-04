import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './loginnew.css'

export default function Checkboxes() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="checkbox">
              <FormControlLabel
        control={<Checkbox
            checked={checked}
            onChange={handleChange}
            label="Remember me"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />   }
        label="Remember me"
      />

         
    </div>
  );
}
