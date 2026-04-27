import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';
import { potentialProfiles } from '../data/mock';

const PotentialWindow = ({ onSendRequest }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDir, setSwipeDir] = useState(null);
  const [exhausted, setExhausted] = useState(false);

  const profile = potentialProfiles[currentIndex];

  const handleSwipe = (liked) => {
    setSwipeDir(liked ? 'right' : 'left');
    if (liked && onSendRequest) {
      onSendRequest(profile);
    }
    setTimeout(() => {
      setSwipeDir(null);
      if (currentIndex < potentialProfiles.length - 1) {
        setCurrentIndex(i => i + 1);
      } else {
        setExhausted(true);
      }
    }, 300);
  };

  if (exhausted) {
    return (
      <div style={{
        padding: '60px 30px', textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        <div style={{ fontSize: 48 }}>✨</div>
        <div style={{
          fontFamily: FONT.heading, fontSize: 24, color: C.black,
        }}>THAT'S ALL FOR TODAY</div>
        <div style={{ fontSize: 11, color: C.grey, lineHeight: 1.6 }}>
          Come back tomorrow for new potential matches!<br />
          Check your notifications for any requests.
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '10px 14px' }}>

      {/* Card */}
      <div className="animate-pop" style={{
        background: C.white, border: BORDER, boxShadow: SHADOW.lg,
        overflow: 'hidden',
        transform: swipeDir === 'right' ? 'translateX(100%) rotate(15deg)' :
                   swipeDir === 'left' ? 'translateX(-100%) rotate(-15deg)' : 'none',
        opacity: swipeDir ? 0 : 1,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
      }}>
        {/* Profile visual */}
        <div style={{
          height: 220, background: `linear-gradient(135deg, ${profile.color}44, ${profile.color}22)`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          borderBottom: BORDER,
          position: 'relative',
        }}>
          <div style={{
            width: 90, height: 90, background: profile.color,
            border: BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: FONT.heading, fontSize: 32, color: C.black,
            boxShadow: SHADOW.lg,
          }}>{profile.avatar}</div>
          <div style={{
            fontFamily: FONT.heading, fontSize: 24, color: C.black,
            marginTop: 12, letterSpacing: '-0.5px',
          }}>{profile.name}</div>
          {/* Counter */}
          <div style={{
            position: 'absolute', top: 10, right: 10,
            background: C.black, color: C.yellow,
            padding: '3px 8px', fontSize: 8, fontWeight: 700,
            border: `2px solid ${C.yellow}`,
          }}>{currentIndex + 1}/{potentialProfiles.length}</div>
        </div>

        {/* Details */}
        <div style={{ padding: 16 }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
            <span style={{
              background: C.bg, border: BORDER_SM, padding: '3px 8px',
              fontSize: 8, fontWeight: 700,
            }}>{profile.year}</span>
            <span style={{
              background: C.bg, border: BORDER_SM, padding: '3px 8px',
              fontSize: 8, fontWeight: 700,
            }}>{profile.dept}</span>
          </div>
          <div style={{
            fontSize: 12, color: '#333', lineHeight: 1.6,
            borderTop: BORDER_SM, paddingTop: 12,
          }}>{profile.bio}</div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 24,
        marginTop: 20,
      }}>
        <button onClick={() => handleSwipe(false)} style={{
          width: 60, height: 60, borderRadius: '50%',
          background: C.white, border: BORDER,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24, boxShadow: SHADOW.md,
          cursor: 'pointer', color: '#FF4444',
          transition: 'transform 0.1s',
        }}>✕</button>
        <button onClick={() => handleSwipe(true)} style={{
          width: 60, height: 60, borderRadius: '50%',
          background: C.green, border: BORDER,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24, boxShadow: SHADOW.md,
          cursor: 'pointer', color: C.white,
          transition: 'transform 0.1s',
        }}>✓</button>
      </div>

      <div style={{
        textAlign: 'center', fontSize: 8, color: C.grey,
        marginTop: 12, letterSpacing: '0.05em',
      }}>SWIPE RIGHT TO CONNECT · LEFT TO PASS</div>
    </div>
  );
};

export default PotentialWindow;
