import React from "react";
import { useState, useEffect } from "react";
import Data from "./Data";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./ProductListStyle.css";

const EditProductList = ({ edit, setEdit, setShowList }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [errortype, setErrorType] = useState("");
  const handleChange = (event) => {
    let value = event.target.value;
    if (isNaN(value) || value < 0) {
      setError("Please enter a valid number greater than or equal to 0.");
    } else {
      setError("");
    }
  };
  const handleChangeText = (event) => {
    let value = event.target.value;
    if (value.length > 56) {
      setErrorType("Input must be less than 56 characters");
    } else {
      setErrorType("");
    }
  };

  var index = Data.map((e) => e.id).indexOf(id);
  const handleSubmit = (e) => {
    e.preventDefault();

    // let a = Data[index];
    // a.name = name;
    // a.color = color;
    // a.type = type;
    // a.price = price;
    // a.description = description;
  };
  useEffect(() => {
    setName(localStorage.getItem("name"));
    setColor(localStorage.getItem("color"));
    setType(localStorage.getItem("type"));
    setPrice(localStorage.getItem("price"));
    setDescription(localStorage.getItem("description"));
    setId(localStorage.getItem("id"));
  }, [Data]);

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
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                type="text"
                placeholder="Enter color"
                value={color}
                required
                maxlength="56"
                onChange={((e) => setColor(e.target.value), handleChangeText)}
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
                value={type}
                required
                maxlength="56"
                onChange={((e) => setType(e.target.value), handleChangeText)}
              />
              <TextField
                type="number"
                placeholder="Enter Price"
                value={price}
                required
                onChange={((e) => setPrice(e.target.value), handleChange)}
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
                value={description}
                required
                maxlength="56"
                onChange={
                  ((e) => setDescription(e.target.value), handleChangeText)
                }
              />
              <br></br>
              <Button
                variant="contained"
                onClick={(e) => {
                  handleSubmit(e);
                  setShowList(true);
                  setEdit(false);
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
