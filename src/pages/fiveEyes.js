import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';


function FiveEyes() {
    return (
        
<Card>
        <CardHeader
          avatar={<InfoIcon />}
          title="About the Five Eyes Cyber Security"
        />
        <CardContent>
          <Typography>
            The Five Eyes is an intelligence alliance comprising Australia, Canada,
            New Zealand, the United Kingdom and the United States. These countries
            are bound by the multilateral UKUSA Agreement, a treaty for joint
            cooperation in signals intelligence.<br/><br/>

            The origins of the FVEY can be traced back to the post–World War II
            period, when the Atlantic Charter was issued by the Allies to lay out
            their goals for a post-war world. During the course of the Cold War,
            the ECHELON surveillance system was initially developed by the FVEY to
            monitor the communications of the former Soviet Union and the Eastern
            Bloc.

          </Typography>
        </CardContent>
        
      </Card>
      
      

        
      
     
    );
  }
  
  export default FiveEyes;
  