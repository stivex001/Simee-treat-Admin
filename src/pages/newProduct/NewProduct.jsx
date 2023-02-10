import { useState } from "react"
import { Button, Container, Form, FormItems, Input, Label, Option, Select, Title } from "./newProduct.styles"


const NewProduct = () => {
const [inputs, setInputs] = useState({})
const [file, setFile] = useState(null)
const [cat, setCat] = useState([])

const handleChange = (e) => {}
const handleCat = (e) => {}

  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <FormItems>
          <Label>Image</Label>
          <Input type="file" id="file" onChange={e=>setFile(e.target.files)[0]}/>
        </FormItems>
        <FormItems>
          <Label>Title</Label>
          <Input type="text" placeholder="Cake" onChange={handleChange} />
        </FormItems>
        <FormItems>
          <Label>Description</Label>
          <Input type="text" placeholder="description...." onChange={handleChange}/>
        </FormItems>
        <FormItems>
          <Label>Price</Label>
          <Input type="text" placeholder="#500" onChange={handleChange}/>
        </FormItems>
        <FormItems>
          <Label>Categories</Label>
          <Input type="text" placeholder="cupcakes, meatpie, snacks..." onChange={handleCat}/>
        </FormItems>
        <FormItems>
          <Label>Stock</Label>
          <Select>
            <Option value='true'>Yes</Option>
            <Option value='false'>No</Option>
          </Select>
        </FormItems>
        <Button>Create</Button>
      </Form>
    </Container>
  )
}

export default NewProduct