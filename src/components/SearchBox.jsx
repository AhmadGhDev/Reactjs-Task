// eslint-disable-next-line react/prop-types
export default function SearchBox({ placeholder }) {
  return (
    <div className="search-box">
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
