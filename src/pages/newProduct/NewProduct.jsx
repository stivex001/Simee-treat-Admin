import { useState } from "react"
import { Button, Container, Form, FormItems, Input, Label, Option, Select, Title } from "./newProduct.styles"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";


const NewProduct = () => {
const [inputs, setInputs] = useState({})
const [file, setFile] = useState(null)
const [cat, setCat] = useState([])

const handleChange = (e) => {
  setInputs(prev => {
    return {...prev, [e.target.name]: e.target.value}
  })
}
const handleCat = (e) => {
  setCat(e.target.value.split(','))
}

const handleClick = (e) => {
  e.preventDefault()
  const fileName = new Date().getTime() + file.name
  const storage = getStorage(app)
  const storageRef = ref(storage, fileName) 
  const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);

}

  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <FormItems>
          <Label>Image</Label>
          <Input type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
        </FormItems>
        <FormItems>
          <Label>Title</Label>
          <Input name="title" type="text" placeholder="Cake" onChange={handleChange} />
        </FormItems>
        <FormItems>
          <Label>Description</Label>
          <Input name="desc" type="text" placeholder="description...." onChange={handleChange}/>
        </FormItems>
        <FormItems>
          <Label>Price</Label>
          <Input name="price" type="number" placeholder="#500" onChange={handleChange}/>
        </FormItems>
        <FormItems>
          <Label>Categories</Label>
          <Input  type="text" placeholder="cupcakes, meatpie, snacks..." onChange={handleCat}/>
        </FormItems>
        <FormItems>
          <Label>Stock</Label>
          <Select onChange={handleChange}>
            <Option value='true'>Yes</Option>
            <Option value='false'>No</Option>
          </Select>
        </FormItems>
        <Button onClick={handleClick}>Create</Button>
      </Form>
    </Container>
  )
}

export default NewProduct