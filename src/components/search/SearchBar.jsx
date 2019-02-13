import React from "react";
import {IconButton, InputBase, Paper} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import "../../ui/index.scss";
import "./SearchBar.scss";

export default class SearchBar extends React.Component {
	render() {
		return(
			<Paper className="search-bar-root" elevation={1}>
				<InputBase className="search-bar-input" />
				<IconButton className="search-bar-icon-button" color="primary">
					<SearchIcon />
				</IconButton>
			</Paper>
		)
	}
}