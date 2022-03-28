import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

import Tooltip from '@mui/material/Tooltip';

import PRIcon from "../../../_assets/pull-request.svg";
import ClosedIcon from "../../../_assets/issue-closed.svg";
import styles from './card.module.scss'

export default function Card(props) {
    const { icon, state, labels, title, children } = props
    return (
        <Box sx={{ border: 1, height: '250px' }} className={styles.__CardStyle}>
            {icon === "PullRequest" && <PRIcon className={styles.svg} />}
            {icon === "Issue" && state === "CLOSED" && <ClosedIcon className={styles.svg} />}

            <CardContent >
                <div className={styles.cardContent}>
                    <Tooltip title={title} arrow placement="top-start" role="note">
                        <Typography variant="h5" component="div" className={styles.title}>
                            {title}
                        </Typography>
                    </Tooltip>
                </div>
                <div className={styles.bodyText}>
                    <Typography variant="body2">
                        {children}
                    </Typography>
                </div>
                <div className={styles.cardContent}>
                    {labels.map((item, i) => (
                        <Tooltip key={i} title={item.name} arrow role="note">
                            <Chip className={styles.chip} variant="outlined" size="small" icon={<>{'\u2022'}</>} label={item.name} />
                        </Tooltip>
                    ))}

                </div>
            </CardContent>

        </Box >
    );
}
