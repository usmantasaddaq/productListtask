import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./ProductListStyle.css";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import Data from "./Data";
import EditProductList from "./EditProductList";
import Pagination from "./pagination";
function ProductList() {
  const [inputText, setInputText] = useState("");
  const [edit, setEdit] = useState(false);
  const [showList, setShowList] = useState(true);
  const [data, setData] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState([]);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    setData(filteredColor);
  };

  const filteredColor = Data.filter((el) => {
    //if no input the return the original
    if (inputText === "") {
      return el;
    } else {
      return el.color.toLowerCase().includes(inputText);
    }
  });

  const editHandler = (e, i) => {
    setEditData(e, i);
    setEdit(true);
    setShowList(false);
  };

  const handleDelete = (e) => {
    const items = currentRecords.filter((item) => item.id !== e.id);
    setData(items);
  };

  return (
    <>
      {showList && (
        <>
          <h1 style={{ paddingLeft: "200px" }}>ProductList</h1>
          <div className="productListContainer">
            <Box sx={{ width: "100%" }}>
              <div style={{ paddingLeft: "55px" }}>
                <TextField
                  style={{ height: "22px" }}
                  label="Search.."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={inputHandler}
                />
              </div>
              <div style={{ marginTop: "100px" }}>
                <table>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          width: "250px",
                          justifyContent: "center",
                        }}
                      >
                        Name
                      </td>
                      <td
                        style={{
                          minWidth: "153px",
                          justifyContent: "center",
                        }}
                      >
                        Color
                      </td>
                      <td
                        style={{
                          minWidth: "153px",
                          justifyContent: "center",
                        }}
                      >
                        Type
                      </td>
                      <td
                        style={{
                          minWidth: "153px",
                          justifyContent: "center",
                        }}
                      >
                        Cost
                      </td>
                      <td
                        style={{
                          minWidth: "153px",
                          justifyContent: "center",
                        }}
                      >
                        Edit
                      </td>
                      <td
                        style={{
                          minWidth: "153px",
                          justifyContent: "center",
                        }}
                      >
                        Delete
                      </td>
                    </tr>
                  </tbody>
                  {currentRecords.map((item, i) => (
                    <>
                      <tr key={i}>
                        <td
                          style={{
                            minWidth: "250px",
                            justifyContent: "center",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          style={{
                            minWidth: "153px",
                            justifyContent: "center",
                          }}
                        >
                          {item.color}
                        </td>{" "}
                        <td
                          style={{
                            minWidth: "153px",
                            justifyContent: "center",
                          }}
                        >
                          {item.type}
                        </td>
                        <td
                          style={{
                            minWidth: "153px",
                            justifyContent: "center",
                          }}
                        >
                          {item.price}
                        </td>
                        <td
                          style={{
                            minWidth: "153px",
                            justifyContent: "center",
                          }}
                        >
                          <Button onClick={() => editHandler(item, i)}>
                            <EditIcon />
                          </Button>
                        </td>
                        <td
                          style={{
                            minWidth: "153px",
                            justifyContent: "center",
                          }}
                        >
                          <Button onClick={() => handleDelete(item, i)}>
                            <DeleteIcon />
                          </Button>
                        </td>
                      </tr>
                    </>
                  ))}
                </table>
                <Pagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </Box>{" "}
          </div>
        </>
      )}

      {edit === true ? (
        <EditProductList
          setData={setData}
          setEditData={setEditData}
          currentRecords={currentRecords}
          editData={editData}
          setEdit={setEdit}
          setShowList={setShowList}
          edit={edit}
        />
      ) : null}
    </>
  );
}

export default ProductList;
