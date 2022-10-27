import Avatars from '../../../../assets/images/Avatars/1.png'
import Avatars2 from '../../../../assets/images/Avatars/2.png'
import Avatars3 from '../../../../assets/images/Avatars/3.png'
import Avatars4 from '../../../../assets/images/Avatars/4.png'
import Avatars5 from '../../../../assets/images/Avatars/5.png'

import { Box, Avatar } from '@mui/material';

import './ObjectCardinfoBackers.scss'

const ObjectCardinfoBackers = () => {
    return (
        <Box component="div"
            className='objectCardinfoBackers_wrapper'
        >
            <Box className='objectCardinfoBackers' component="div">
                <Avatar
                    alt="Adam Neuman"
                    src={Avatars}
                    sx={{ width: 70, height: 70, margin: '0 auto 13px' }}
                />
                Adam
                Neuman
            </Box>
            <Box className='objectCardinfoBackers' component="div" sx={{ textAlign: 'center', width: '70px' }}>
                <Avatar
                    alt="Adam Neuman"
                    src={Avatars2}
                    sx={{ width: 70, height: 70, margin: '0 auto 13px' }}
                />
                Michael
                Johrdan
            </Box>
            <Box className='objectCardinfoBackers' component="div" sx={{ textAlign: 'center', width: '70px' }}>
                <Avatar
                    alt="Adam Neuman"
                    src={Avatars3}
                    sx={{ width: 70, height: 70, margin: '0 auto 13px' }}
                />
                50
                Cent
            </Box>
            <Box className='objectCardinfoBackers' component="div" sx={{ textAlign: 'center', width: '70px' }}>
                <Avatar
                    alt="Adam Neuman"
                    src={Avatars4}
                    sx={{ width: 70, height: 70, margin: '0 auto 13px' }}
                />
                Jason
                Statham
            </Box>
            <Box className='objectCardinfoBackers' component="div" sx={{ textAlign: 'center', width: '70px' }}>
                <Avatar
                    alt="Adam Neuman"
                    src={Avatars5}
                    sx={{ width: 70, height: 70, margin: '0 auto 13px' }}
                />
                Cameron
                Diaz
            </Box>
            <Box className='objectCardinfoBackers_text' component="div" sx={{ lineHeight: '1.62', fontWeight: '500', color: "#8F90A6", width: '103px', display: 'flex', alignItems: 'center' }}>
                and other
                2,365 backers
            </Box>
        </Box>
    )
}

export default ObjectCardinfoBackers
