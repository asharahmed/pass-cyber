import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';


function C26() {
    return (
      <Card>
        <CardHeader
          avatar={<InfoIcon />}
          title="About Bill C-26: An Act Respecting Cybersecurity"
        />
        <CardContent>
          <Typography>
            <i>Bill C-26</i> is an act that aims to strengthen Canada&apos;s cybersecurity laws
            by updating and modernizing the current legislation. The bill was
            introduced in the House of Commons in June 2022 and has since been
            undergoing review and debate.
            <br/><br/>
            To learn more about the bill, please visit the <a href="https://www.parl.ca/LegisInfo/BillDetails.aspx?Language=E&billId=12026138">Parliament of Canada website</a>.
          </Typography>
        </CardContent>
      </Card>
    );
  }
  
  export default C26;
  