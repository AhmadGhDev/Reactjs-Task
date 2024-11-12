// eslint-disable-next-line react/prop-types
export default function OpenTimeFlag({ opensAt }) {
  return (
    <div className="open-flag">
      <div className="open-time">Opens at {opensAt}</div>
    </div>
  );
}
