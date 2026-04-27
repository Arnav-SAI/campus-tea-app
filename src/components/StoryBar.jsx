import { useState } from 'react';
import { C, BORDER, SHADOW, FONT } from '../design';

// ─── STORY VIEWER (Instagram-style fullscreen) ──────────────────────────────

const StoryViewer = ({ stories, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [progress, setProgress] = useState(0);
  const story = stories[currentIndex];

  const goNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(i => i + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setProgress(0);
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: C.black, zIndex: 1000,
      display: 'flex', flexDirection: 'column',
      animation: 'fadeIn 0.2s ease',
      maxWidth: 390, margin: '0 auto',
    }}>
      {/* Progress bars */}
      <div style={{ display: 'flex', gap: 3, padding: '12px 12px 0', zIndex: 10 }}>
        {stories.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 3, background: 'rgba(255,255,255,0.25)', overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              background: C.white,
              width: i < currentIndex ? '100%' : i === currentIndex ? '0%' : '0%',
              animation: i === currentIndex ? 'progressBar 5s linear forwards' : 'none',
            }} onAnimationEnd={goNext} />
          </div>
        ))}
      </div>

      {/* User info */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px', zIndex: 10,
      }}>
        <div style={{
          width: 36, height: 36, background: story.color, border: `2px solid ${C.white}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: 11, color: C.black,
        }}>{story.avatar}</div>
        <div>
          <div style={{ color: C.white, fontWeight: 700, fontSize: 12 }}>{story.user}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9 }}>{story.time} ago</div>
        </div>
        <button onClick={onClose} style={{
          marginLeft: 'auto', background: 'none', border: 'none',
          color: C.white, fontSize: 22, cursor: 'pointer', padding: 4,
        }}>✕</button>
      </div>

      {/* Story image */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <img
          src={story.image}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Tap zones */}
        <div onClick={goPrev} style={{
          position: 'absolute', left: 0, top: 0, width: '30%', height: '100%', cursor: 'pointer',
        }} />
        <div onClick={goNext} style={{
          position: 'absolute', right: 0, top: 0, width: '70%', height: '100%', cursor: 'pointer',
        }} />
      </div>

      {/* Reply bar */}
      <div style={{ padding: '12px 16px 24px', display: 'flex', gap: 10 }}>
        <div style={{
          flex: 1, border: `2px solid rgba(255,255,255,0.3)`, padding: '10px 14px',
          color: 'rgba(255,255,255,0.4)', fontSize: 11,
        }}>Reply to {story.user}...</div>
        <button style={{
          background: C.yellow, border: BORDER, padding: '8px 14px',
          fontWeight: 700, fontSize: 11, color: C.black,
        }}>↗</button>
      </div>
    </div>
  );
};

// ─── STORY BAR ──────────────────────────────────────────────────────────────

const StoryBar = ({ stories, onAddStory }) => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerStart, setViewerStart] = useState(0);

  const openStory = (index) => {
    setViewerStart(index);
    setViewerOpen(true);
  };

  return (
    <>
      <div style={{
        padding: '14px 16px',
        overflowX: 'auto',
        display: 'flex',
        gap: 14,
        borderBottom: `2px solid ${C.black}`,
        background: C.bg,
      }}>
        {/* Add Story */}
        <div onClick={onAddStory} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, flexShrink: 0, cursor: 'pointer',
        }}>
          <div style={{
            width: 56, height: 56,
            border: `2px dashed ${C.black}`,
            background: C.white,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, fontWeight: 700, color: C.black,
            transition: 'transform 0.1s',
          }}>+</div>
          <span style={{ fontSize: 8, letterSpacing: '0.05em', fontWeight: 700 }}>YOUR STORY</span>
        </div>

        {/* Story items */}
        {stories.map((s, i) => (
          <div key={s.id} onClick={() => openStory(i)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, flexShrink: 0, cursor: 'pointer',
          }}>
            <div className={!s.viewed ? 'story-ring-unseen' : undefined} style={{
              width: 56, height: 56,
              border: `3px solid ${s.viewed ? C.greyLight : s.color}`,
              background: s.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 13, color: C.black,
              boxShadow: SHADOW.sm,
              opacity: s.viewed ? 0.55 : 1,
              transition: 'transform 0.1s, opacity 0.2s',
            }}>{s.avatar}</div>
            <span style={{
              fontSize: 8, letterSpacing: '0.03em',
              color: s.viewed ? C.grey : C.black,
              fontWeight: s.viewed ? 400 : 700,
            }}>{s.user}</span>
          </div>
        ))}
      </div>

      {/* Story Viewer Overlay */}
      {viewerOpen && (
        <StoryViewer
          stories={stories}
          startIndex={viewerStart}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </>
  );
};

export default StoryBar;
