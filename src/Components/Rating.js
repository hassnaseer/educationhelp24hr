import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function BasicRating() {
    const [value, setValue] = React.useState(4);

    return (


        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />


    );
}