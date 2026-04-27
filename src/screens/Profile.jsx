import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';
import { currentUser } from '../data/mock';
import Tag from '../components/Tag';

const ProfileScreen = ({ onEditProfile }) => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isPrivate, setIsPrivate] = useState(currentUser.isPrivate);

  return (
    <div style={{ background: C.bg, minHeight: '100%', fontFamily: FONT.body }}>
      {/* Header */}
      <div style={{
        background: C.black, padding: '14px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: BORDER,
      }}>
        <div style={{
          fontFamily: FONT.heading, fontSize: 22,
          color: C.yellow, letterSpacing: '-0.5px',
        }}>PROFILE</div>
        <button onClick={onEditProfile} style={{
          background: C.white, border: BORDER, padding: '4px 10px',
          fontSize: 9, fontWeight: 700, boxShadow: SHADOW.sm,
        }}>⚙ EDIT</button>
      </div>

      <div style={{ padding: '16px 14px 0' }}>
        {/* Profile card */}
        <div className="animate-slide-up" style={{
          background: C.white, border: BORDER, boxShadow: SHADOW.lg,
          padding: 16, marginBottom: 14,
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{
              width: 64, height: 64, background: currentUser.avatarColor,
              border: BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: FONT.heading, fontSize: 24, color: C.black,
              boxShadow: SHADOW.md, flexShrink: 0,
            }}>{currentUser.avatar}</div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: FONT.heading, fontSize: 22,
                color: C.black, letterSpacing: '-0.5px', marginBottom: 2,
              }}>{currentUser.name}</div>
              <div style={{ fontSize: 10, color: C.grey, marginBottom: 6 }}>@{currentUser.username}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <Tag label={currentUser.collegeShort} color={C.yellow} small />
                <Tag label={currentUser.year} color={C.bg} small />
                <Tag label={currentUser.department} color={C.bg} small />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div style={{
            fontSize: 11, color: '#333', lineHeight: 1.6,
            marginBottom: 14, paddingBottom: 14,
            borderBottom: BORDER_SM,
          }}>{currentUser.bio}</div>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {[
              [currentUser.postsCount, 'POSTS'],
              [currentUser.followers, 'FOLLOWERS'],
              [currentUser.following, 'FOLLOWING'],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: FONT.heading, fontSize: 22, color: C.black,
                }}>{n}</div>
                <div style={{ fontSize: 7, color: C.grey, letterSpacing: '0.12em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs */}
        <div className="animate-slide-up" style={{
          background: C.white, border: BORDER, boxShadow: SHADOW.sm,
          padding: 12, marginBottom: 14,
        }}>
          <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
            color: C.greyDark, marginBottom: 8,
          }}>🎯 CLUBS</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {currentUser.clubs.map(club => (
              <Tag key={club} label={club} color={C.bg} small />
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="animate-slide-up" style={{
          background: C.white, border: BORDER, boxShadow: SHADOW.sm,
          padding: 12, marginBottom: 14,
        }}>
          <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
            color: C.greyDark, marginBottom: 8,
          }}>🔗 SOCIALS</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{
              background: C.bg, border: BORDER_SM, padding: '6px 10px',
              fontSize: 9, fontWeight: 700,
            }}>📸 {currentUser.socialLinks.instagram}</div>
            <div style={{
              background: C.bg, border: BORDER_SM, padding: '6px 10px',
              fontSize: 9, fontWeight: 700,
            }}>💼 {currentUser.socialLinks.linkedin}</div>
          </div>
        </div>

        {/* Privacy toggle */}
        <div className="animate-slide-up" style={{
          background: C.white, border: BORDER, boxShadow: SHADOW.sm,
          padding: 12, marginBottom: 14,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700 }}>🔒 Private Profile</div>
            <div style={{ fontSize: 8, color: C.grey }}>Only followers can see your posts</div>
          </div>
          <button onClick={() => setIsPrivate(!isPrivate)} style={{
            width: 44, height: 24,
            background: isPrivate ? C.yellow : C.greyLight,
            border: BORDER_SM,
            position: 'relative', cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}>
            <div style={{
              width: 16, height: 16,
              background: C.black,
              position: 'absolute', top: 2,
              left: isPrivate ? 24 : 2,
              transition: 'left 0.2s ease',
            }} />
          </button>
        </div>

        {/* Content tabs */}
        <div style={{
          display: 'flex', border: BORDER, marginBottom: 12,
          boxShadow: SHADOW.sm,
        }}>
          {[
            ['posts', '⊞ POSTS'],
            ['threads', '◈ THREADS'],
          ].map(([id, label]) => (
            <button key={id} onClick={() => setActiveTab(id)} style={{
              flex: 1, padding: 10,
              background: activeTab === id ? C.black : C.white,
              color: activeTab === id ? C.yellow : C.black,
              border: 'none',
              borderRight: id === 'posts' ? BORDER_SM : 'none',
              fontFamily: FONT.body, fontWeight: 700, fontSize: 9,
              cursor: 'pointer',
              transition: 'all 0.12s ease',
            }}>{label}</button>
          ))}
        </div>

        {/* Post grid */}
        {activeTab === 'posts' && (
          <div className="animate-fade" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
            gap: 4, paddingBottom: 16,
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
              <div key={i} style={{
                border: BORDER_SM, overflow: 'hidden',
                cursor: 'pointer',
              }}>
                <img
                  src={`https://picsum.photos/seed/prof${i}/200/200`}
                  alt=""
                  style={{ width: '100%', height: 95, objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Threads list */}
        {activeTab === 'threads' && (
          <div className="animate-fade stagger" style={{
            display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 16,
          }}>
            {[
              { title: 'Which elective should I take next sem?', board: 'Academics', votes: 56, comments: 34 },
              { title: 'Mess food review — week 12', board: 'General', votes: 23, comments: 45 },
              { title: 'Looking for hackathon teammates', board: 'Events', votes: 12, comments: 8 },
            ].map((t, i) => (
              <div key={i} className="animate-slide-up" style={{
                background: C.white, border: BORDER, boxShadow: SHADOW.sm,
                padding: 12,
              }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                  <Tag label={t.board} color={C.bg} small />
                </div>
                <div style={{ fontWeight: 700, fontSize: 11, marginBottom: 6 }}>{t.title}</div>
                <div style={{ display: 'flex', gap: 10, fontSize: 9, color: C.grey }}>
                  <span>▲ {t.votes}</span>
                  <span>◈ {t.comments}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
