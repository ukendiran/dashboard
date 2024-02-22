
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const Cards = ({ carddata ,active}) => {
     return (

        <Card key={carddata.id} sx={{ display: 'flex', borderRadius: "15px" }}  >
            <Box  >
                <CardContent  >
                  
                    <Typography variant="h6" style={{fontSize: "16px"}} color="text.secondary"  component="div">
                        {carddata.desc}
                    </Typography>
                    <Typography variant="subtitle1"  component="div"   style={{  fontSize: "14px",color: "#387ADF" }}  >
                        {carddata?.count}
                    </Typography>
                </CardContent>

            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: "20px", justifyContent: 'flex-end', flex: 1 }}>
                {carddata.total}

            </Box>
        </Card>
    )
}