import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "13866985-b0d36856b22e5dd4d0662a012",
    images: []
  };

  render() {
    return (
      <div>
        <TextField 
            name="searchText"
            value={this.state.searchText}
            onChange={this.onTextChange}
            floatingLabelText="Search for Images"
            fullWidth={true}
        />
      </div>
    );
  }
}

export default Search;
