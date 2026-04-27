import { C } from '../design';

const Tag = ({ label, color = C.yellow, small = false }) => (
  <span style={{
    fontFamily: "'Space Mono', monospace",
    fontSize: small ? 8 : 9,
    fontWeight: 700,
    background: color,
    color: C.black,
    border: `2px solid ${C.black}`,
    padding: small ? '1px 6px' : '2px 8px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    display: 'inline-block',
  }}>{label}</span>
);

export default Tag;
