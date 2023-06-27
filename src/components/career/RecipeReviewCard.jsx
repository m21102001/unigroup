import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from 'react-bootstrap';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import { Stack } from '@mui/material';

// for themes
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function RecipeReviewCard() {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //     setExpanded(!expanded);
  // };

  return (
    <Card className='py-4 ' sx={{ height: 310 }}
      // classes='mx-3'
      style={{backgroundColor:'rgb(208 208 208 / 6%)',
      borderRadius:'5px',
      marginBottom:'2rem'
    }}
    >
      <CardHeader
        title="UI/UX Designer"
        className='text-center'
        style={{
          textAlign: "center"
        }}
      />
      <CardContent>
        <Stack spacing={{ xs: 1, sm: 1 }} direction="row" flexWrap="nowrap" className='justify-content-center'>
          <Button variant="" className='p-0'>
            <LocationOnOutlinedIcon />
            office
          </Button>
          <Button variant="" className='p-0'>
            <BusinessCenterOutlinedIcon />
            Fulltime
          </Button>
          <Button variant="" className='p-0'>
            <ImportContactsOutlinedIcon />
            Design
          </Button>
        </Stack>
        <Typography variant="body2" color="text.secondary" className='py-4'
        > CSS,  HTML, JS, Photoshop, Woo-Commerce, WordPres
        </Typography>
      </CardContent>
      <Button
        className='buttonGroup'
        onClick={() => { }}
        style={
          {
            backgroundColor: "rgb(249 161 58)",
            width: "80%"
          }
        }
      >
        <div className='px-2'> More...</div>
      </Button>
    </Card>
  );
}