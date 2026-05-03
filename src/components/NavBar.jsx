import { C, BORDER, SHADOW, FONT } from '../design';

const NavBar = ({ active, setScreen }) => {
  const tabs = [
    { id: 'feed', icon: '⊞', label: 'Home' },
    { id: 'discuss', icon: '◈', label: 'Talk' },
    { id: 'campus', icon: '🏛', label: 'Campus' },
    { id: 'explore', icon: '◎', label: 'Explore' },
    { id: 'profile', icon: '◉', label: 'Me' },
  ];

  return (
    <div style={{
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      background: C.black, borderTop: BORDER,
      padding: '8px 4px',
      paddingBottom: 'max(20px, env(safe-area-inset-bottom, 20px))',
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: 390,
      zIndex: 100,
    }}>
      {tabs.map(t => (
        <button key={t.id}
          onClick={() => setScreen(t.id)}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            background: active === t.id ? C.yellow : 'transparent',
            border: active === t.id ? BORDER : '3px solid transparent',
            padding: '6px 14px', cursor: 'pointer',
            boxShadow: active === t.id ? SHADOW.sm : 'none',
            transition: 'all 0.12s ease',
          }}>
          <span style={{
            fontSize: 18,
            color: active === t.id ? C.black : C.white,
            transition: 'color 0.12s ease',
          }}>{t.icon}</span>
          <span style={{
            fontSize: 8, fontFamily: FONT.body, fontWeight: 700,
            color: active === t.id ? C.black : '#666',
            letterSpacing: '0.08em',
          }}>{t.label.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};

export default NavBar;
