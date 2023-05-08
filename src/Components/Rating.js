import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function BasicRating() {
    const [value, setValue] = React.useState(5);

    return (


        <Rating
            style={{ maxWidth: 180 }}
            value={4}
            readOnly
        />


    );
}