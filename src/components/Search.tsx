import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "./Search.css";
type SearchProps = {
  filterText: string;
  isInStock: boolean;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
  onInStockChange: React.Dispatch<React.SetStateAction<boolean>>;
};

function Search({
  filterText,
  isInStock,
  onFilterTextChange,
  onInStockChange,
}: SearchProps) {
  return (
    <div className="items">
      <TextField
        id="outlined-name"
        label="Search"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={isInStock}
            onChange={(e) => onInStockChange(e.target.checked)}
          />
        }
        label="Only Show Products in Stock"
      />
    </div>
  );
}

export default Search;
