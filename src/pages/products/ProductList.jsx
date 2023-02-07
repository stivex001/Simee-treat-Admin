import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productRows } from "../../components/chart/data";

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
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };

      const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 150,
          editable: true,
          renderCell: (params) => {
            return (
              <Products>
                <Image src={params.row.img} alt="products" />
                {params.row.name}
              </Products>
            );
          },
        },
        {
          field: "stock",
          headerName: "Stock",
          width: 150,
          editable: true,
        },
        {
          field: "status",
          headerName: "Status",
          width: 110,
          editable: true,
        },
        {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => (
            <>
              <Link to={"/product/" + params.row.id}>
                <Button>ProductListEdit</Button>
                </Link>
                <DeleteOutline
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleDelete(params.row.id)}
                />
    
            </>
          ),
        },
      ];
    
  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
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