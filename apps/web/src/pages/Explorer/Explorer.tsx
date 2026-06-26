import "./Explorer.css";

export default function Explorer() {
  return (
    <div className="explorer">

      <div className="explorer-header">

        <h1>Fixtures Explorer</h1>

        <div className="toolbar">

          <input
            type="text"
            placeholder="Search fixture..."
          />

          <select>
            <option>All Leagues</option>
          </select>

          <select>
            <option>All Markets</option>
          </select>

          <button>Refresh</button>

        </div>

      </div>

      <div className="grid-placeholder">

        AG GRID

      </div>

      <div className="explorer-footer">

        <span>Active Filters : 0</span>

        <span>Results : 0</span>

      </div>

    </div>
  );
}