import { NavLink } from "react-router-dom";

const Navbar = ({ names }) => {
	return (
		<nav>
			<NavLink to="/dogs">Home</NavLink>
			{names.map((name) => (
				<NavLink to={`/dogs/${name.toLowerCase()}`} key={name}>
					{name}
				</NavLink>
			))}
		</nav>
	);
};

export default Navbar;
