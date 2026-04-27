import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';
import { boards, threads, teaThreads } from '../data/mock';
import ThreadCard from '../components/ThreadCard';
import PotentialWindow from '../components/PotentialWindow';
import BlindChat from '../components/BlindChat';

const DiscussScreen = ({ onOpenThread, onCreateThread, onSendPotentialRequest }) => {
  const [activeBoard, setActiveBoard] = useState('mix');

  // Filter out 'all' board
  const filteredBoards = boards.filter(b => b.id !== 'all');

  // Add mix board at the beginning
  const allBoards = [
    { id: 'mix', name: 'Mix', icon: '✨', color: '#FFE033' },
    { id: 'tea', name: 'Tea', icon: '🍵', color: '#FF2D78' },
    ...filteredBoards,
  ];

  const filtered = (activeBoard === 'mix' || activeBoard === 'tea')
    ? []
    : threads.filter(t => t.board === activeBoard);

  return (
    <div style={{ background: C.bg, minHeight: '100%', fontFamily: FONT.body }}>
      {/* Header */}
      <div style={{
        background: C.black, padding: '14px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: BORDER,
      }}>
        <div>
          <div style={{
            fontFamily: FONT.heading, fontSize: 22,
            color: C.yellow, letterSpacing: '-0.5px',
          }}>IITB TALK</div>
          <div style={{ fontSize: 8, color: '#666', letterSpacing: '0.12em' }}>DISCUSSION BOARDS</div>
        </div>
        <button onClick={onCreateThread} style={{
          background: C.yellow, border: BORDER,
          padding: '6px 12px', fontFamily: FONT.body,
          fontWeight: 700, fontSize: 10, color: C.black,
          boxShadow: SHADOW.sm, letterSpacing: '0.05em',
          display: 'flex', alignItems: 'center', gap: 4,
        }}>+ THREAD</button>
      </div>

      {/* Board tabs */}
      <div style={{
        padding: '10px 14px',
        display: 'flex', gap: 6, overflowX: 'auto',
        borderBottom: `2px solid ${C.black}`,
        background: C.white,
      }}>
        {allBoards.map(b => (
          <button
            key={b.id}
            onClick={() => setActiveBoard(b.id)}
            style={{
              background: activeBoard === b.id ? C.black : C.white,
              color: activeBoard === b.id ? C.yellow : C.black,
              border: BORDER, padding: '6px 12px', cursor: 'pointer',
              fontFamily: FONT.body, fontSize: 8, fontWeight: 700,
              letterSpacing: '0.08em', flexShrink: 0,
              boxShadow: activeBoard === b.id ? SHADOW.sm : 'none',
              transition: 'all 0.1s ease',
            }}
          >
            {b.icon} {b.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ─── MIX TAB ─────────────────────────────────────────────── */}
      {activeBoard === 'mix' && (
        <div>
          {/* Tea section */}
          <div style={{ padding: '14px 14px 0' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
            }}>
              <span style={{ fontSize: 16 }}>🍵</span>
              <div style={{
                fontFamily: FONT.heading, fontSize: 16, color: C.black,
                letterSpacing: '-0.3px',
              }}>TEA</div>
              <div style={{ fontSize: 8, color: C.grey }}>· anonymous</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {teaThreads.slice(0, 3).map(tea => (
                <div key={tea.id} className="animate-slide-up" style={{
                  background: C.white, border: BORDER, boxShadow: SHADOW.sm, padding: 12,
                }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', marginBottom: 6,
                  }}>
                    <span style={{
                      fontFamily: FONT.body, fontSize: 7, fontWeight: 700,
                      background: C.pink, color: C.white, border: `2px solid ${C.black}`,
                      padding: '2px 6px', letterSpacing: '0.08em',
                    }}>🍵 TEA</span>
                    {tea.hot && (
                      <span style={{
                        fontFamily: FONT.body, fontSize: 7, fontWeight: 700,
                        background: C.orange, color: C.white, border: `2px solid ${C.black}`,
                        padding: '2px 6px',
                      }}>🔥 HOT</span>
                    )}
                  </div>
                  <div style={{
                    fontWeight: 700, fontSize: 12, lineHeight: 1.4,
                    marginBottom: 6, color: C.black,
                  }}>{tea.title}</div>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <span style={{ fontSize: 8, color: C.grey }}>🎭 Anonymous · {tea.time} ago</span>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <span style={{ fontSize: 9, fontWeight: 700 }}>▲ {tea.votes}</span>
                      <span style={{ fontSize: 9, color: C.grey }}>◈ {tea.commentCount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{
            borderBottom: `2px solid ${C.black}`, margin: '18px 14px 0',
          }} />

          {/* Potentials section */}
          <div style={{ padding: '14px 14px 0' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4,
            }}>
              <span style={{ fontSize: 16 }}>💘</span>
              <div style={{
                fontFamily: FONT.heading, fontSize: 16, color: C.black,
                letterSpacing: '-0.3px',
              }}>POTENTIALS</div>
              <div style={{
                background: C.pink + '22', border: `1px solid ${C.pink}`,
                padding: '2px 6px', fontSize: 7, color: C.pink, fontWeight: 700,
              }}>5PM–10PM</div>
            </div>
            <div style={{ fontSize: 8, color: C.grey, marginBottom: 4 }}>
              Swipe to find your match · both swipe right = contact shared
            </div>
          </div>
          <PotentialWindow onSendRequest={onSendPotentialRequest} />

          {/* Divider */}
          <div style={{
            borderBottom: `2px solid ${C.black}`, margin: '0 14px',
          }} />

          {/* Blind Chat section */}
          <div style={{ padding: '14px 14px 0' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4,
            }}>
              <span style={{ fontSize: 16 }}>🌙</span>
              <div style={{
                fontFamily: FONT.heading, fontSize: 16, color: C.black,
                letterSpacing: '-0.3px',
              }}>BLIND CHAT</div>
              <div style={{
                background: C.purple + '22', border: `1px solid ${C.purple}`,
                padding: '2px 6px', fontSize: 7, color: C.purple, fontWeight: 700,
              }}>10PM–12AM</div>
            </div>
            <div style={{ fontSize: 8, color: C.grey, marginBottom: 4 }}>
              Anonymous chat · 50 messages · both agree to reveal
            </div>
          </div>
          <BlindChat />
          <div style={{ paddingBottom: 20 }} />
        </div>
      )}

      {/* ─── TEA TAB ─────────────────────────────────────────────── */}
      {activeBoard === 'tea' && (
        <>
          <div className="animate-fade" style={{
            margin: '12px 14px 0',
            background: C.pink + '22', border: `2px solid ${C.pink}`,
            padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ fontSize: 18 }}>🍵</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 11, color: C.pink }}>TEA MODE</div>
              <div style={{ fontSize: 8, color: C.grey }}>Everything here is 100% anonymous</div>
            </div>
          </div>
          <div className="stagger" style={{
            padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            {teaThreads.map(tea => (
              <div key={tea.id} className="animate-slide-up" style={{
                background: C.white, border: BORDER, boxShadow: SHADOW.sm, padding: 14,
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', marginBottom: 8,
                }}>
                  <span style={{
                    fontFamily: FONT.body, fontSize: 8, fontWeight: 700,
                    background: C.pink, color: C.white, border: `2px solid ${C.black}`,
                    padding: '2px 8px', letterSpacing: '0.08em',
                  }}>🍵 TEA</span>
                  {tea.hot && (
                    <span style={{
                      fontFamily: FONT.body, fontSize: 8, fontWeight: 700,
                      background: C.orange, color: C.white, border: `2px solid ${C.black}`,
                      padding: '2px 8px',
                    }}>🔥 HOT</span>
                  )}
                </div>
                <div style={{
                  fontWeight: 700, fontSize: 13, lineHeight: 1.4,
                  marginBottom: 8, color: C.black,
                }}>{tea.title}</div>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span style={{ fontSize: 9, color: C.grey }}>🎭 Anonymous · {tea.time} ago</span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <span style={{ fontSize: 10, fontWeight: 700 }}>▲ {tea.votes}</span>
                    <span style={{ fontSize: 10, color: C.grey }}>◈ {tea.commentCount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ─── CONFESSIONS BANNER ──────────────────────────────────── */}
      {activeBoard === 'confessions' && (
        <div className="animate-fade" style={{
          margin: '12px 14px 0',
          background: C.pink, border: BORDER, padding: '10px 14px',
          boxShadow: SHADOW.sm,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 18 }}>🎭</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 11, color: C.white }}>CONFESSIONS MODE</div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.7)' }}>All posts here are anonymous</div>
          </div>
        </div>
      )}

      {/* ─── THREAD LIST (non-mix, non-tea boards) ───────────────── */}
      {activeBoard !== 'mix' && activeBoard !== 'tea' && (
        <div className="stagger" style={{
          padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {filtered.length > 0 ? filtered.map(thread => (
            <ThreadCard
              key={thread.id}
              thread={thread}
              onTap={() => onOpenThread(thread)}
            />
          )) : (
            <div style={{
              padding: 40, textAlign: 'center',
              border: `2px dashed ${C.greyLight}`,
              color: C.grey, fontSize: 11,
            }}>
              No threads in this board yet.<br />Be the first to post!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DiscussScreen;
