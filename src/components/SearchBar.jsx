import { C, BORDER, SHADOW } from '../design';

const SearchBar = ({ placeholder = 'Search...', value, onChange }) => (
  <div style={{
    border: BORDER, background: C.white,
    padding: '10px 14px', boxShadow: SHADOW.sm,
    display: 'flex', alignItems: 'center', gap: 10,
  }}>
    <span style={{ fontSize: 14, color: C.grey }}>◎</span>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        flex: 1, border: 'none', background: 'transparent',
        fontSize: 11, fontWeight: 700, color: C.black,
        outline: 'none',
      }}
    />
  </div>
);

export default SearchBar;
