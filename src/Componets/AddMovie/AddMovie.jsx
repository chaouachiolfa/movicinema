import React , {useState} from 'react'
import { Modal , Button, FormControl } from 'react-bootstrap';
import './AddMovie.css'

const AddMovie = ({hdData}) => {
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [newMovi , setNewMovi]=useState({
    titre :" " ,
    description :" ",
    poster :" " ,
    rating : 0
})
const hdChanged=(e)=>{
    setNewMovi({...newMovi ,[e.target.name] : e.target.value})
}
const handleSubmit=()=>{
    hdData(newMovi)
    handleClose()

}

return (

    <div className='colr'>


<button className='btn' onClick={handleShow}>Add Movie</button>

    <Modal  show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
        
      </Modal.Header>
     
          <FormControl className='text' type="text" placeholder='enter le titre' name='titre' onChange={hdChanged}/> 
          <FormControl  className='text' type="text" placeholder='enter la description' name='description' onChange={hdChanged}/>
          <FormControl  className='text' type="text" placeholder='poster' name='poster' onChange={hdChanged}/>
          <FormControl   className='text'type="number" placeholder='rating' name='rating' onChange={hdChanged}/>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClik={handleSubmit}>
          Save Changes
        </Button>
     
    </Modal>



    </div>
  )
}

export default AddMovie