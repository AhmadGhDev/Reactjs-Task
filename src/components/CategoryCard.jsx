/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import OpenTimeFlag from "./OpenTimeFlag";

export default function CategoryCard({ categoryDet }) {
  const { id, display_name, image, opens_at } = categoryDet;
  return (
    <Link
      style={{ backgroundImage: `url(${image})` }}
      to={`/${id}`}
      className="category-card"
    >
      {opens_at && <OpenTimeFlag opensAt={opens_at} />}
      <h3 className="category-title">{display_name}</h3>
    </Link>
  );
}
