import './photoVideoReport.scss';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import photo from '../../../../assets/images/photovideoreport.png'

const PhotoVideoReport = () => {
    return (
        <div className="photovideoreport">
            <h3>Photo & Video report</h3>
            <div className="photovideoreport_inner">
                <Card className="photovideoreport_card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={photo}
                            alt="photo"
                        />
                        <div className="photovideoreport_text">
                            <p>March 2022</p>
                            <p>10 photo</p>
                        </div>
                    </CardActionArea>
                </Card>

                <Card className="photovideoreport_card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={photo}
                            alt="photo"
                        />
                        <div className="photovideoreport_text">
                            <p>March 2022</p>
                            <p>10 photo</p>
                        </div>
                    </CardActionArea>
                </Card>

                <Card className="photovideoreport_card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={photo}
                            alt="photo"
                        />
                        <div className="photovideoreport_text">
                            <p>March 2022</p>
                            <p>10 photo</p>
                        </div>
                    </CardActionArea>
                </Card>

            </div>

        </div>

    )
}

export default PhotoVideoReport
