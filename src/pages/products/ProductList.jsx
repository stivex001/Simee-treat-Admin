import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

const Container = styled.div`
  flex: 4;
`;
const Products = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])
  

    const handleDelete = (id) => {
        deleteProduct(id, dispatch)
      };

      const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          editable: true,
          renderCell: (params) => {
            return (
              <Products>
                <Image src={params.row.img} alt={params.row.title} />
                {params.row.title}
              </Products>
            );
          },
        },
        {
          field: "inStock",
          headerName: "Stock",
          width: 100,
          editable: true,
        },
        
        {
          field: "price",
          headerName: "Price (#)",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => (
            <>
              <Link to={"/product/" + params.row._id}>
                <Button>ProductListEdit</Button>
                </Link>
                <DeleteOutline
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleDelete(params.row._id)}
                />
    
            </>
          ),
        },
      ];
    
  return (
    <Container>
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Container>
  )
}

export default ProductList