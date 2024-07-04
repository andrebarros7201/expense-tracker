import { Link } from "react-router-dom";

export default function DetailsNav() {
  return (
    <nav>
      <Link to="/">Table</Link>
      <Link to="/chart">Chart</Link>
    </nav>
  );
}
