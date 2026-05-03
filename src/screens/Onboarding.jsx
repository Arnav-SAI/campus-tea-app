import { useState } from 'react';
import { C, BORDER, SHADOW, FONT } from '../design';
import { onboardingColleges } from '../data/mock';

const OnboardingScreen = ({ onDone }) => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = onboardingColleges.filter(c =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  // ─── SPLASH ──────────────────────────────────────────────────────────
  if (step === 0) return (
    <div style={{
      background: C.yellow,
      minHeight: '100vh', minHeight: '100dvh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 28,
      paddingBottom: 'max(28px, env(safe-area-inset-bottom, 28px))',
      fontFamily: FONT.body,
    }}>
      {/* Logo */}
      <div className="animate-pop" style={{
        border: BORDER, background: C.white,
        padding: 4, display: 'inline-block', width: 'fit-content',
        boxShadow: SHADOW.lg, marginBottom: 36,
      }}>
        <div style={{ background: C.black, padding: '8px 16px' }}>
          <span style={{
            color: C.yellow, fontSize: 12, fontWeight: 700, letterSpacing: '0.15em',
          }}>CAMPUS TEA //</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="animate-slide-up" style={{
        fontFamily: FONT.heading, fontSize: 52, lineHeight: 1,
        color: C.black, margin: '0 0 16px', letterSpacing: '-1px',
      }}>
        YOUR<br />CAMPUS.<br />YOUR<br />CROWD.
      </h1>

      <p className="animate-slide-up" style={{
        fontSize: 11, color: C.black, lineHeight: 1.7,
        margin: '0 0 44px', opacity: 0.65, maxWidth: 280,
      }}>
        A social network that actually knows where you go to college.
        No randos. No algorithm. Just your people.
      </p>

      <button
        onClick={() => setStep(1)}
        className="animate-slide-up"
        style={{
          background: C.black, color: C.yellow, border: BORDER,
          padding: '16px 24px', fontFamily: FONT.body, fontWeight: 700,
          fontSize: 13, letterSpacing: '0.1em', cursor: 'pointer',
          boxShadow: SHADOW.lg, textTransform: 'uppercase',
          alignSelf: 'flex-start',
        }}
      >JOIN YOUR CAMPUS →</button>
    </div>
  );

  // ─── COLLEGE SELECT ──────────────────────────────────────────────────
  return (
    <div style={{
      background: C.bg,
      height: '100%',
      display: 'flex', flexDirection: 'column',
      fontFamily: FONT.body,
    }}>
      {/* Fixed header */}
      <div style={{ padding: '24px 24px 0' }}>
        <div className="animate-slide-up" style={{ marginBottom: 24 }}>
          <div style={{
            fontFamily: FONT.heading, fontSize: 30,
            color: C.black, letterSpacing: '-0.5px', marginBottom: 4,
          }}>FIND YOUR COLLEGE</div>
          <p style={{ fontSize: 10, color: C.greyDark, margin: 0 }}>
            Select your institution to join its community
          </p>
        </div>

        {/* Search */}
        <div className="animate-slide-up" style={{
          border: BORDER, background: C.white,
          padding: '10px 14px', boxShadow: SHADOW.sm, marginBottom: 20,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 14 }}>◎</span>
          <input
            type="text"
            placeholder="Search colleges..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1, border: 'none', background: 'transparent',
              fontSize: 11, fontWeight: 700, outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Scrollable college list */}
      <div style={{
        flex: 1, overflowY: 'auto', padding: '0 24px',
        WebkitOverflowScrolling: 'touch',
      }}>
        <div className="stagger" style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 8 }}>
          {filtered.map(c => (
            <button
              key={c}
              onClick={() => setSelected(c)}
              className="animate-slide-up"
              style={{
                background: selected === c ? C.yellow : C.white,
                border: selected === c ? BORDER : `2px solid ${C.greyLight}`,
                padding: '14px 16px', textAlign: 'left', cursor: 'pointer',
                fontFamily: FONT.body, fontWeight: 700, fontSize: 12,
                boxShadow: selected === c ? SHADOW.md : 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                transition: 'all 0.12s ease',
              }}
            >
              <span>{c}</span>
              {selected === c && <span style={{ fontSize: 16 }}>✓</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Sticky join button at the bottom */}
      {selected && (
        <div style={{
          padding: '16px 24px',
          paddingBottom: 'max(16px, env(safe-area-inset-bottom, 16px))',
          background: C.bg,
          borderTop: `2px solid ${C.greyLight}`,
          flexShrink: 0,
        }}>
          <button
            onClick={onDone}
            className="animate-pop"
            style={{
              width: '100%',
              background: C.black, color: C.yellow,
              border: BORDER, padding: 16,
              fontFamily: FONT.body, fontWeight: 700, fontSize: 13,
              cursor: 'pointer', boxShadow: SHADOW.lg,
              letterSpacing: '0.1em',
            }}
          >JOIN {selected.toUpperCase()} →</button>
        </div>
      )}
    </div>
  );
};

export default OnboardingScreen;
