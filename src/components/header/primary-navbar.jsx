// import React from "react";
import "../../styles/header.scss";
import TvShows from "../pages/tv-shows.jsx";
import Movies from "../pages/movies.jsx";
import NewAndPopular from "../pages/new-and-popular.jsx";
import MyList from "../pages/my-list.jsx";
import BrowseByLanguages from "../pages/browse-by-languages.jsx";

export default function primaryNavbar() {
	return (
		<div className="primary-navbar-wrapper">
			<div className="primary-navbar-logo-wrapper">
				<img
					className="netflix-logo"
					src="./src/assets/netflix-logo.svg"
					alt="Netflix-Logo"
				/>
			</div>
			<div className="primary-navbar-links-wrapper">
				<div className="primary-navbar-link">
					<a id="primary-navbar-home-link" href="/">Home</a>
				</div>
				<div className="primary-navbar-link">
					<TvShows />
				</div>
				<div className="primary-navbar-link">
					<Movies />
				</div>
				<div className="primary-navbar-link">
					<NewAndPopular />
				</div>
				<div className="primary-navbar-link">
					<MyList />
				</div>
				<div className="primary-navbar-link">
					<BrowseByLanguages />
				</div>
			</div>
		</div>
	);
}
