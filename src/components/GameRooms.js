import { Typography, Grid, Paper, Card, Chip } from '@mui/material';
import headerImage from '../images/arcade.jpg'

const styles = {
    paperContainer: {
        height: 350,
        width: 'auto',
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        marginTop: -100
    }
  };

export default function GameRoom() {
    return (
        <div>
            <Paper style={styles.paperContainer} square/>
            <Grid container justifyContent="flex-start" alignItems="center" padding={2} spacing={2}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((gameRoomNumber) => (
                    <Grid xs={3} padding={2} item>
                        <Card key={gameRoomNumber} sx={{ minWidth: "stretch", height: 200 }}>
                        <Typography>
                            Game Room Title {gameRoomNumber}
                        </Typography>
                        <Chip label="Austin" />
                        <Chip label="Dylan"/>
                        </Card>
                    </Grid>
                    ))}
            </Grid>
        </div>
    )
}
