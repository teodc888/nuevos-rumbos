import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Mui
import { CardActions, Input} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//Redux
import { buscarProductosAuto } from "../../redux/actions/index";

export default function Buscador() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");



  const handleInputChange = e => {
    e.preventDefault();
    setInput(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();
    dispatch(buscarProductosAuto(input));
    setInput("");
};


  return (
    <>
    <form onSubmit={handleSubmit}>
        <CardActions>
            <SearchIcon />

            <Input

            type='text'
            name='text'
            value={input}
            placeholder="SEARCH..."
            onChange={e=>handleInputChange(e)}
            sx={{bgcolor:"#e1bee7", borderColor:"black", width:"100%", borderRadius:"10px", color:"black"}}
            />
        </CardActions>
      </form>
    </>
  );
}
