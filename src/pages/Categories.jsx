import CategoryCard from "../components/CategoryCard";
import SearchBox from "../components/SearchBox";
import ControlCenter from "../components/ControlCenter";
import { useCategoriesContext } from "../hooks/useCategoriesContext";
import LoadingPage from "../pages/LoadingPage";
export default function Categories() {
  const { categories } = useCategoriesContext();

  if (!categories) {
    return <LoadingPage />;
  } else
    return (
      <>
        <SearchBox placeholder={"Search for Categories..."} />
        <div className="categories">
          {categories.map((category) => {
            return <CategoryCard key={category.id} categoryDet={category} />;
          })}
        </div>
        <ControlCenter />
      </>
    );
}
