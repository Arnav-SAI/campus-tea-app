import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';

const NotificationPanel = ({ onClose, requests, accepted, onAcceptRequest }) => {
  const [tab, setTab] = useState('requests');
  const [viewingProfile, setViewingProfile] = useState(null);

  // ─── PROFILE PREVIEW OVERLAY ────────────────────────────────
  if (viewingProfile) {
    const p = viewingProfile;
    return (
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.6)', zIndex: 200,
        display: 'flex', flexDirection: 'column',
      }}>
        <div className="animate-slide-up" style={{
          background: C.bg, marginTop: 60, flex: 1,
          borderTop: BORDER, display: 'flex', flexDirection: 'column',
        }}>
          {/* Header */}
          <div style={{
            background: C.black, padding: '14px 20px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderBottom: BORDER,
          }}>
            <button onClick={() => setViewingProfile(null)} style={{
              background: C.white, border: BORDER, padding: '4px 10px',
              fontSize: 10, fontWeight: 700, fontFamily: FONT.body,
            }}>← BACK</button>
            <div style={{
              fontFamily: FONT.heading, fontSize: 18,
              color: C.yellow, letterSpacing: '-0.5px',
            }}>PROFILE</div>
            <div style={{ width: 60 }} />
          </div>

          {/* Profile content */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px 14px' }}>
            {/* Avatar + Name card */}
            <div className="animate-pop" style={{
              background: C.white, border: BORDER, boxShadow: SHADOW.lg,
              padding: 20, marginBottom: 14, textAlign: 'center',
            }}>
              <div style={{
                width: 80, height: 80, background: p.color,
                border: BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: FONT.heading, fontSize: 28, color: C.black,
                boxShadow: SHADOW.md, margin: '0 auto 14px',
              }}>{p.avatar}</div>
              <div style={{
                fontFamily: FONT.heading, fontSize: 24,
                color: C.black, letterSpacing: '-0.5px', marginBottom: 4,
              }}>{p.name}</div>
              <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 10 }}>
                <span style={{
                  background: C.bg, border: BORDER_SM, padding: '3px 8px',
                  fontSize: 8, fontWeight: 700,
                }}>{p.year}</span>
                <span style={{
                  background: C.bg, border: BORDER_SM, padding: '3px 8px',
                  fontSize: 8, fontWeight: 700,
                }}>{p.dept}</span>
              </div>
              {p.bio && (
                <div style={{
                  fontSize: 11, color: '#333', lineHeight: 1.6,
                  borderTop: BORDER_SM, paddingTop: 12,
                }}>{p.bio}</div>
              )}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => {
                onAcceptRequest(p.id);
                setViewingProfile(null);
              }} style={{
                flex: 1, background: C.green, color: C.white, border: BORDER,
                padding: '14px', fontFamily: FONT.body, fontWeight: 700,
                fontSize: 12, boxShadow: SHADOW.md, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}>✓ ACCEPT</button>
              <button onClick={() => setViewingProfile(null)} style={{
                flex: 1, background: C.white, color: C.black, border: BORDER,
                padding: '14px', fontFamily: FONT.body, fontWeight: 700,
                fontSize: 12, boxShadow: SHADOW.md, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}>✕ DECLINE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── MAIN PANEL ─────────────────────────────────────────────
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.6)', zIndex: 200,
      display: 'flex', flexDirection: 'column',
    }}>
      <div className="animate-slide-up" style={{
        background: C.bg, marginTop: 60, flex: 1,
        borderTop: BORDER,
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          background: C.black, padding: '14px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: BORDER,
        }}>
          <div style={{
            fontFamily: FONT.heading, fontSize: 20,
            color: C.yellow, letterSpacing: '-0.5px',
          }}>NOTIFICATIONS</div>
          <button onClick={onClose} style={{
            background: C.white, border: BORDER, padding: '4px 10px',
            fontSize: 10, fontWeight: 700, fontFamily: FONT.body,
          }}>✕</button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: BORDER_SM }}>
          {['requests', 'accepted'].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: '10px',
              background: tab === t ? C.yellow : C.white,
              border: 'none', borderRight: t === 'requests' ? BORDER_SM : 'none',
              fontFamily: FONT.body, fontWeight: 700, fontSize: 9,
              cursor: 'pointer', letterSpacing: '0.08em',
            }}>
              {t === 'requests' ? '💌 REQUESTS' : '✅ ACCEPTED'}
              {t === 'requests' && requests.length > 0 && (
                <span style={{
                  background: C.pink, color: C.white, padding: '1px 5px',
                  fontSize: 7, fontWeight: 700, marginLeft: 6, border: `1px solid ${C.black}`,
                }}>{requests.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 14px' }}>
          {tab === 'requests' ? (
            requests.length > 0 ? requests.map(req => (
              <div key={req.id} className="animate-slide-up" style={{
                background: C.white, border: BORDER, boxShadow: SHADOW.sm,
                padding: 14, marginBottom: 8,
                cursor: 'pointer',
              }} onClick={() => setViewingProfile(req)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 42, height: 42, background: req.color,
                    border: BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 12, color: C.black, flexShrink: 0,
                  }}>{req.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 2 }}>
                      {req.name}
                    </div>
                    <div style={{ fontSize: 8, color: C.grey }}>
                      {req.dept} · {req.year}
                    </div>
                  </div>
                  <div style={{
                    background: C.bg, border: BORDER_SM, padding: '4px 8px',
                    fontSize: 8, fontWeight: 700, color: C.greyDark,
                  }}>VIEW →</div>
                </div>
              </div>
            )) : (
              <div style={{
                padding: 40, textAlign: 'center', border: `2px dashed ${C.greyLight}`,
                color: C.grey, fontSize: 11,
              }}>
                No requests yet.<br />Use Potential Window to connect!
              </div>
            )
          ) : (
            accepted.length > 0 ? accepted.map(acc => (
              <div key={acc.id} className="animate-slide-up" style={{
                background: C.white, border: BORDER, boxShadow: SHADOW.sm,
                padding: 14, marginBottom: 10,
              }}>
                {/* Profile header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12,
                }}>
                  <div style={{
                    width: 46, height: 46, background: acc.color,
                    border: BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 14, color: C.black, flexShrink: 0,
                    boxShadow: SHADOW.sm,
                  }}>{acc.avatar}</div>
                  <div>
                    <div style={{
                      fontFamily: FONT.heading, fontSize: 18,
                      color: C.black, letterSpacing: '-0.3px',
                    }}>{acc.name}</div>
                    <div style={{ fontSize: 8, color: C.grey }}>{acc.dept} · {acc.year}</div>
                  </div>
                </div>

                {/* Match confirmation */}
                <div style={{
                  background: C.green + '22', border: `2px solid ${C.green}`,
                  padding: '8px 12px', fontSize: 9, fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: 6,
                  marginBottom: 12,
                }}>
                  <span>🎉</span>
                  <span>It's a match! Here are their contact details</span>
                </div>

                {/* Contact / Socials blocks */}
                <div style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                  color: C.greyDark, marginBottom: 8,
                }}>🔗 SOCIALS</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {acc.socials?.instagram && (
                    <div style={{
                      background: C.bg, border: BORDER, padding: '8px 14px',
                      fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6,
                      boxShadow: SHADOW.sm,
                    }}>📸 {acc.socials.instagram}</div>
                  )}
                  {acc.socials?.linkedin && (
                    <div style={{
                      background: C.bg, border: BORDER, padding: '8px 14px',
                      fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6,
                      boxShadow: SHADOW.sm,
                    }}>💼 {acc.socials.linkedin}</div>
                  )}
                </div>
              </div>
            )) : (
              <div style={{
                padding: 40, textAlign: 'center', border: `2px dashed ${C.greyLight}`,
                color: C.grey, fontSize: 11,
              }}>
                No matches yet.<br />Keep swiping in Potential Window! 💫
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
