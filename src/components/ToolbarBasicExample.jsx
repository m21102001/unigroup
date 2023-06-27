import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import "./ToolbarExample.css"
function ToolbarBasicExample() {
  
  return (
    <ButtonToolbar className='contant-center justify-content-center' aria-label="Toolbar with button groups">
      <ButtonGroup className="department me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' active>All</Button> 
      </ButtonGroup>
      <ButtonGroup className="department me-5" aria-label="Second group">
        <Button className='buttonGroup' variant='outline-dark'>Markting</Button>
      </ButtonGroup>
      <ButtonGroup className="department me-5" aria-label="Third group">
        <Button className='buttonGroup' variant='outline-dark'>Business</Button>
      </ButtonGroup>
      <ButtonGroup className="department me-5" aria-label="Third group">
        <Button className='buttonGroup' variant='outline-dark'>Development</Button>
      </ButtonGroup>
      <ButtonGroup className="department me-5" aria-label="Third group">
        <Button className='buttonGroup' variant='outline-dark'>Art&Design</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default ToolbarBasicExample;