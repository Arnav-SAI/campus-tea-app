// ─── CAMPUS TEA DESIGN TOKENS ────────────────────────────────────────────────

export const C = {
  bg: '#F5F0E8',
  black: '#0A0A0A',
  white: '#FFFFFF',
  yellow: '#FFE033',
  orange: '#FF5C1A',
  blue: '#1A3FFF',
  green: '#00C851',
  pink: '#FF2D78',
  purple: '#8B5CF6',
  grey: '#888',
  greyLight: '#ccc',
  greyDark: '#555',
};

export const BORDER = `3px solid ${C.black}`;
export const BORDER_SM = `2px solid ${C.black}`;

export const SHADOW = {
  sm: '2px 2px 0 #0A0A0A',
  md: '4px 4px 0 #0A0A0A',
  lg: '6px 6px 0 #0A0A0A',
  pressed: '1px 1px 0 #0A0A0A',
};

export const FONT = {
  heading: "'Anton', sans-serif",
  body: "'Space Mono', monospace",
};

// Common style mixins
export const cardStyle = {
  background: C.white,
  border: BORDER,
  boxShadow: SHADOW.md,
};

export const headerStyle = {
  background: C.black,
  padding: '16px 20px',
  borderBottom: BORDER,
};

export const btnPrimary = {
  background: C.black,
  color: C.yellow,
  border: BORDER,
  padding: '12px 20px',
  fontFamily: FONT.body,
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: '0.1em',
  cursor: 'pointer',
  boxShadow: SHADOW.md,
  textTransform: 'uppercase',
};

export const btnSecondary = {
  background: C.white,
  color: C.black,
  border: BORDER,
  padding: '8px 14px',
  fontFamily: FONT.body,
  fontWeight: 700,
  fontSize: 11,
  cursor: 'pointer',
  boxShadow: SHADOW.sm,
};
