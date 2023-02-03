import React from "react";
import { useState, useEffect } from "react";
import Data from "./Data";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./ProductListStyle.css";

const EditProductList = ({
  editData,
  currentRecords,
  setData,
  edit,
  setEdit,
  setShowList,
}) => {
  const [update, setUpdate] = useState({
    name: "",
    color: "",
    type: "",
    price: "",
    description: "",
  });
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [errortype, setErrorType] = useState("");

  const handlChangeName = (e) => {
    setUpdate({
      ...update,
      name: e.target.value,
    });
  };

  const handlChangeColor = (e) => {
    let value = e.target.value;
    if (value.length > 56) {
      setErrorType("Input must be less than 56 characters");
    } else {
      setErrorType("");
    }

    setUpdate({
      ...update,
      color: value,
    });
  };

  const handlChangeType = (e) => {
    let value = e.target.value;
    if (value.length > 56) {
      setErrorType("Input must be less than 56 characters");
    } else {
      setErrorType("");
    }
    setUpdate({
      ...update,
      type: value,
    });
  };
  const handlChangePrice = (e) => {
    let value = e.target.value;
    if (isNaN(value) || value < 0) {
      setError("Please enter a valid number greater than or equal to 0.");
    } else {
      setError("");
    }
    setUpdate({
      ...update,
      price: value,
    });
  };

  const handlChangeDescription = (e) => {
    let value = e.target.value;
    if (value.length > 56) {
      setErrorType("Input must be less than 56 characters");
    } else {
      setErrorType("");
    }
    setUpdate({
      ...update,
      description: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowList(true);
    setEdit(false);
    const index = currentRecords.find((o) => o.id === editData.id);
    currentRecords.splice(index, 1, update);
    setData(currentRecords);
  };

  useEffect(() => {
    setUpdate(localStorage.getItem("name"));
    setUpdate(localStorage.getItem("color"));
    setUpdate(localStorage.getItem("type"));
    setUpdate(localStorage.getItem("price"));
    setUpdate(localStorage.getItem("description"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <>
      <div className="ContainerEditStyle">
        <h1>You Can edit your List</h1>
        {edit === true ? (
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <>
              <TextField
                type="text"
                placeholder="Enter name"
                defaultValue={editData.name}
                required
                onChange={handlChangeName}
              />
              <TextField
                type="text"
                placeholder="Enter color"
                defaultValue={editData.color}
                required
                maxlength="56"
                onChange={handlChangeColor}
              />
              <p
                style={{
                  color: "red",
                  disply: "flex",
                  position: "absolute",
                  left: "290px",
                  Top: "10px",
                }}
              >
                {errortype}
              </p>
              <TextField
                type="text"
                placeholder="Enter Type"
                defaultValue={editData.type}
                required
                maxlength="56"
                onChange={handlChangeType}
              />
              <TextField
                type="number"
                placeholder="Enter Price"
                defaultValue={editData.price}
                required
                onChange={handlChangePrice}
              />
              {error && (
                <p
                  style={{
                    color: "red",
                    disply: "flex",
                    position: "absolute",
                    left: "530px",
                    Top: "10px",
                  }}
                >
                  {error}
                </p>
              )}

              <TextField
                id="outlined-basic"
                label="Description"
                style={{ width: "600px", marginTop: "5%", marginBottom: "5%" }}
                type="textarea"
                defaultValue={editData.description}
                required
                onChange={handlChangeDescription}
              />
              <br></br>
              <Button
                variant="contained"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                type="submit"
              >
                Update
              </Button>
            </>
          </Box>
        ) : null}
      </div>
    </>
  );
};

export default EditProductList;
