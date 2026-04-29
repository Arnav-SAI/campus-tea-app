import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';
import { explorePosts, colleges, trendingMixed } from '../data/mock';
import SearchBar from '../components/SearchBar';
import Tag from '../components/Tag';

const ExploreScreen = ({ onViewCollege }) => {
  const [view, setView] = useState('images');
  const [search, setSearch] = useState('');
  const [followedColleges, setFollowedColleges] = useState({});

  const tabs = [
    { id: 'images', label: '🔥 IMAGES' },
    { id: 'colleges', label: '🏛 COLLEGES' },
    { id: 'trending', label: '📈 TRENDING' },
  ];

  const toggleFollow = (id) => {
    setFollowedColleges(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ background: C.bg, minHeight: '100%', fontFamily: FONT.body }}>
      {/* Header */}
      <div style={{
        background: C.black, padding: '14px 20px',
        borderBottom: BORDER,
      }}>
        <div style={{
          fontFamily: FONT.heading, fontSize: 22,
          color: C.yellow, letterSpacing: '-0.5px',
        }}>EXPLORE</div>
        <div style={{ fontSize: 8, color: '#666', letterSpacing: '0.12em' }}>ACROSS ALL CAMPUSES</div>
      </div>

      {/* Search */}
      <div style={{ padding: '12px 14px', borderBottom: BORDER_SM }}>
        <SearchBar
          placeholder="Search people, posts, colleges, #hashtags..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', borderBottom: BORDER_SM }}>
        {tabs.map((t, i) => (
          <button key={t.id} onClick={() => setView(t.id)} style={{
            flex: 1, padding: '11px 8px',
            background: view === t.id ? C.yellow : C.white,
            border: 'none',
            borderRight: i < tabs.length - 1 ? BORDER_SM : 'none',
            fontFamily: FONT.body, fontWeight: 700, fontSize: 9,
            cursor: 'pointer', letterSpacing: '0.05em',
            transition: 'background 0.12s ease',
          }}>{t.label}</button>
        ))}
      </div>

      {/* ─── IMAGES TAB ─────────────────────────────────────────── */}
      {view === 'images' && (
        <div className="animate-fade" style={{ padding: 12 }}>
          <div style={{
            columnCount: 2, columnGap: 12,
          }}>
            {explorePosts.map(p => (
              <div key={p.id} style={{
                border: BORDER_SM, overflow: 'hidden',
                position: 'relative', cursor: 'pointer',
                transition: 'transform 0.1s',
                marginBottom: 12, breakInside: 'avoid',
              }}>
                <img src={p.image} alt="" style={{
                  width: '100%', display: 'block',
                }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'rgba(0,0,0,0.7)', padding: '6px 8px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span style={{
                    color: p.collegeColor, fontSize: 10, fontWeight: 700,
                  }}>{p.college}</span>
                  <span style={{ color: C.white, fontSize: 10 }}>♥ {p.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── COLLEGES TAB ───────────────────────────────────────── */}
      {view === 'colleges' && (
        <div className="animate-fade stagger" style={{
          padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {colleges.map(c => (
            <div key={c.id} className="animate-slide-up" style={{
              background: C.white, border: BORDER, boxShadow: SHADOW.md,
              padding: 14, display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 48, height: 48, background: c.color,
                border: BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: FONT.heading, fontSize: 12, color: C.white, flexShrink: 0,
              }}>{c.shortName}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{c.name}</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ fontSize: 8, color: C.grey }}>👥 {c.members}</span>
                  <span style={{ fontSize: 8, color: C.grey }}>📸 {c.posts}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <button onClick={() => onViewCollege(c)} style={{
                  background: C.bg, border: BORDER_SM,
                  padding: '4px 8px', fontSize: 8, fontWeight: 700,
                  fontFamily: FONT.body,
                }}>VIEW →</button>
                <button onClick={() => toggleFollow(c.id)} style={{
                  background: followedColleges[c.id] ? C.yellow : C.white,
                  border: BORDER_SM,
                  padding: '4px 8px', fontSize: 7, fontWeight: 700,
                  fontFamily: FONT.body,
                }}>{followedColleges[c.id] ? '✓ FOLLOWING' : '+ FOLLOW'}</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── TRENDING TAB ───────────────────────────────────────── */}
      {view === 'trending' && (
        <div className="animate-fade stagger" style={{
          padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {trendingMixed.map(item => (
            <div key={item.id} className="animate-slide-up" style={{
              background: C.white, border: BORDER, boxShadow: SHADOW.md,
              overflow: 'hidden',
            }}>
              {item.type === 'post' ? (
                <>
                  <img src={item.image} alt="" style={{
                    width: '100%', height: 160, objectFit: 'cover',
                    borderBottom: BORDER_SM,
                  }} />
                  <div style={{ padding: '10px 12px' }}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', marginBottom: 6,
                    }}>
                      <Tag label={item.collegeShort} color={C.blue} small />
                      <span style={{ fontSize: 9, color: C.grey }}>♥ {item.likes}</span>
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.4 }}>
                      {item.caption}
                    </div>
                    <div style={{ fontSize: 8, color: C.grey, marginTop: 4 }}>
                      by @{item.user} · {item.college}
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ padding: '12px 14px' }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', marginBottom: 8,
                  }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <Tag label={item.collegeShort} color={C.orange} small />
                      <Tag label={item.board} color={C.bg} small />
                    </div>
                    <Tag label="THREAD" color={C.blue} small />
                  </div>
                  <div style={{
                    fontWeight: 700, fontSize: 13, lineHeight: 1.4,
                    marginBottom: 8,
                  }}>{item.title}</div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 9, color: C.grey }}>
                    <span>▲ {item.votes}</span>
                    <span>◈ {item.commentCount} comments</span>
                    <span>· {item.college}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreScreen;
