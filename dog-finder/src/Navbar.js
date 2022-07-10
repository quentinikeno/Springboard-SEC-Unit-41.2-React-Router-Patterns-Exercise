import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ names }) => {
	return (
		<nav className="Navbar">
			<NavLink exact to="/dogs">
				Home
			</NavLink>
			{names.map((name) => (
				<NavLink exact to={`/dogs/${name.toLowerCase()}`} key={name}>
					{name}
				</NavLink>
			))}
		</nav>
	);
};

export default Navbar;
