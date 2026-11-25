import { Link } from "react-router";

function DropdownMenu({ group, onSelect }) {
  return (
    <div className="dropdown-panel">
      <div className="dropdown-intro">
        <span className="eyebrow">Explore</span>
        <h2>{group.title}</h2>
        <p>{group.intro}</p>
        <Link className="dropdown-overview" to={group.to} onClick={onSelect}>
          View overview <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="dropdown-options">
        {group.items.map(([label, to], index) => (
          <Link to={to} onClick={onSelect} key={label}>
            <span className="option-number">0{index + 1}</span>
            <span>{label}</span>
            <span className="option-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
