import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';
import { feedPosts, clubs as clubsData, events as eventsData, announcements as announcementsData } from '../data/mock';
import AnnouncementCard from '../components/AnnouncementCard';
import PostCard from '../components/PostCard';
import Tag from '../components/Tag';

const CollegePage = ({ college, isOwnCampus = false, goBack }) => {
  const [activeTab, setActiveTab] = useState('feed');

  const tabs = [
    { id: 'feed', label: '📸 FEED' },
    { id: 'clubs', label: '🎯 CLUBS' },
    { id: 'events', label: '📅 EVENTS' },
    { id: 'info', label: 'ℹ️ INFO' },
  ];

  return (
    <div style={{ background: C.bg, minHeight: '100%', fontFamily: FONT.body }}>
      {/* Banner */}
      <div style={{
        background: isOwnCampus ? C.black : (college?.color || C.blue),
        padding: '16px 20px 14px',
        borderBottom: BORDER,
        position: 'relative',
      }}>
        {!isOwnCampus && (
          <button onClick={goBack} style={{
            background: C.white, border: BORDER, padding: '4px 10px',
            fontFamily: FONT.body, fontSize: 10, fontWeight: 700,
            cursor: 'pointer', marginBottom: 12,
          }}>← BACK</button>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 56, height: 56,
            background: isOwnCampus ? C.yellow : C.white,
            border: BORDER,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: FONT.heading, fontSize: 15,
            color: isOwnCampus ? C.black : (college?.color || C.blue),
            boxShadow: SHADOW.md,
          }}>{isOwnCampus ? 'IITB' : (college?.shortName || '??')}</div>
          <div>
            <div style={{
              fontFamily: FONT.heading, fontSize: 24,
              color: isOwnCampus ? C.yellow : C.white,
              letterSpacing: '-0.5px',
            }}>{isOwnCampus ? 'MY CAMPUS' : (college?.name || 'College')}</div>
            <div style={{
              fontSize: 8,
              color: isOwnCampus ? '#888' : 'rgba(255,255,255,0.7)',
              letterSpacing: '0.1em',
            }}>
              {isOwnCampus ? '5,800 MEMBERS · 1,400 POSTS' : `${college?.members || '0'} MEMBERS · ${college?.posts || '0'} POSTS`}
            </div>
          </div>
        </div>

        {/* Read-only badge for other colleges */}
        {!isOwnCampus && (
          <div style={{
            marginTop: 12,
            background: C.black, border: `2px solid ${C.yellow}`,
            padding: '6px 12px', display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{
              color: C.yellow, fontSize: 8, fontWeight: 700, letterSpacing: '0.1em',
            }}>👁 READ-ONLY — YOU CAN'T POST HERE</span>
          </div>
        )}

        {isOwnCampus && (
          <div style={{
            fontSize: 8, color: '#888', letterSpacing: '0.1em',
            marginTop: 8,
          }}>IIT BOMBAY · YOUR COMMUNITY</div>
        )}
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', borderBottom: BORDER_SM }}>
        {tabs.map((t, i) => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
            flex: 1, padding: '10px 4px',
            background: activeTab === t.id ? C.yellow : C.white,
            border: 'none',
            borderRight: i < tabs.length - 1 ? BORDER_SM : 'none',
            fontFamily: FONT.body, fontWeight: 700, fontSize: 8,
            cursor: 'pointer', letterSpacing: '0.04em',
            transition: 'background 0.12s ease',
          }}>{t.label}</button>
        ))}
      </div>

      {/* ─── ANNOUNCEMENTS (shown on feed tab) ─────────────────────────── */}
      {activeTab === 'feed' && (
        <div style={{ padding: '12px 14px 0' }}>
          {/* Announcements */}
          <div style={{ marginBottom: 12 }}>
            <div style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
              color: C.greyDark, marginBottom: 8,
            }}>📢 ANNOUNCEMENTS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {announcementsData.map(a => (
                <AnnouncementCard key={a.id} announcement={a} />
              ))}
            </div>
          </div>

          {/* Feed posts */}
          <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
            color: C.greyDark, marginBottom: 8, marginTop: 16,
          }}>📸 RECENT POSTS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 16 }}>
            {feedPosts.filter(p => p.type !== 'poll').slice(0, 3).map(post => (
              <PostCard
                key={post.id}
                post={post}
                style={!isOwnCampus ? { opacity: 0.92 } : {}}
              />
            ))}
          </div>
        </div>
      )}

      {/* ─── CLUBS TAB ─────────────────────────────────────────────────── */}
      {activeTab === 'clubs' && (
        <div className="stagger" style={{
          padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {clubsData.map(club => (
            <div key={club.id} className="animate-slide-up" style={{
              background: C.white, border: BORDER, boxShadow: SHADOW.sm,
              padding: 14, display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 42, height: 42, background: C.bg,
                border: BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, flexShrink: 0,
              }}>{club.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 2 }}>{club.name}</div>
                <div style={{ fontSize: 9, color: C.greyDark, lineHeight: 1.4, marginBottom: 4 }}>
                  {club.description}
                </div>
                <span style={{ fontSize: 8, color: C.grey }}>👥 {club.members} members</span>
              </div>
              {isOwnCampus && (
                <button style={{
                  background: C.yellow, border: BORDER_SM,
                  padding: '4px 8px', fontSize: 7, fontWeight: 700,
                  fontFamily: FONT.body, flexShrink: 0,
                }}>JOIN</button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ─── EVENTS TAB ────────────────────────────────────────────────── */}
      {activeTab === 'events' && (
        <div className="stagger" style={{
          padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {eventsData.map(event => (
            <div key={event.id} className="animate-slide-up" style={{
              background: C.white, border: BORDER, boxShadow: SHADOW.md,
              overflow: 'hidden',
            }}>
              {/* Color strip */}
              <div style={{ height: 4, background: event.color }} />
              <div style={{ padding: 14 }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', marginBottom: 8,
                }}>
                  <div>
                    <div style={{
                      fontFamily: FONT.heading, fontSize: 16,
                      color: C.black, marginBottom: 2, letterSpacing: '-0.3px',
                    }}>{event.title}</div>
                    <div style={{ fontSize: 9, color: event.color, fontWeight: 700 }}>{event.club}</div>
                  </div>
                  <div style={{
                    background: C.bg, border: BORDER_SM, padding: '4px 8px',
                    textAlign: 'center', flexShrink: 0,
                  }}>
                    <div style={{ fontFamily: FONT.heading, fontSize: 14, color: C.black }}>{event.date.split(' ')[0]}</div>
                    <div style={{ fontSize: 7, color: C.grey }}>{event.date.split(' ').slice(1).join(' ')}</div>
                  </div>
                </div>
                <div style={{ fontSize: 10, color: C.greyDark, lineHeight: 1.5, marginBottom: 10 }}>
                  {event.description}
                </div>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', gap: 10, fontSize: 8, color: C.grey }}>
                    <span>📍 {event.location}</span>
                    <span>👥 {event.attendees} going</span>
                  </div>
                  {isOwnCampus && (
                    <button style={{
                      background: C.black, color: C.yellow, border: BORDER_SM,
                      padding: '4px 10px', fontSize: 8, fontWeight: 700,
                      fontFamily: FONT.body,
                    }}>RSVP</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── INFO TAB ──────────────────────────────────────────────────── */}
      {activeTab === 'info' && (
        <div className="animate-fade" style={{ padding: '16px 14px' }}>
          <div style={{
            background: C.white, border: BORDER, boxShadow: SHADOW.lg,
            padding: 16,
          }}>
            <div style={{
              fontFamily: FONT.heading, fontSize: 20,
              color: C.black, marginBottom: 12, letterSpacing: '-0.5px',
            }}>{isOwnCampus ? 'IIT BOMBAY' : (college?.name || 'College')}</div>
            <div style={{
              fontSize: 11, color: '#333', lineHeight: 1.7, marginBottom: 16,
            }}>
              {isOwnCampus
                ? 'Indian Institute of Technology Bombay — India\'s top engineering school, located on the shores of Powai Lake. Known for its vibrant campus life, cutting-edge research, and a student community that\'s second to none.'
                : (college?.description || 'No description available.')
              }
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 8, marginBottom: 16,
            }}>
              {[
                ['Members', isOwnCampus ? '5,800' : (college?.members || '0')],
                ['Posts', isOwnCampus ? '1,400' : (college?.posts || '0')],
                ['Clubs', '8'],
                ['Events', '5 upcoming'],
              ].map(([label, value]) => (
                <div key={label} style={{
                  background: C.bg, border: BORDER_SM, padding: '10px 12px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: FONT.heading, fontSize: 18, color: C.black }}>{value}</div>
                  <div style={{ fontSize: 7, color: C.grey, letterSpacing: '0.1em', marginTop: 2 }}>{label.toUpperCase()}</div>
                </div>
              ))}
            </div>

            {/* Campus photos */}
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: C.greyDark, marginBottom: 8 }}>
              📸 CAMPUS PHOTOS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} style={{ border: BORDER_SM, overflow: 'hidden' }}>
                  <img
                    src={`https://picsum.photos/seed/campus_${isOwnCampus ? 'iitb' : (college?.shortName || 'x')}${i}/200/200`}
                    alt=""
                    style={{ width: '100%', height: 80, objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegePage;
