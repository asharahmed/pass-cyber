import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';

function ThirdCard() {
    return (
<Card>
        <CardHeader
            avatar={<InfoIcon />}
            title="The Five Eyes Agencies"
        />
        <CardContent>
            <Typography>
            <ul>
                    <li>Australian Signals Directorate (ASD)</li>
                    <li>Communications Security Establishment (CSE)</li>
                    <li>Government Communications Security Bureau (GCSB)</li>
                    <li>Government Communications Headquarters (GCHQ)</li>
                    <li>National Security Agency (NSA)</li>
                </ul>
            </Typography>
        </CardContent>
        </Card>
    )
}

export default ThirdCard;

