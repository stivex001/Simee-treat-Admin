import { useState } from "react"
import { Button, Container, Form, FormItems, Input, Label, Option, Select, Title } from "./newProduct.styles"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


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