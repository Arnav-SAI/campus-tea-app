import { useState } from 'react';
import { C, BORDER, SHADOW, FONT } from '../design';
import { boards, threads } from '../data/mock';
import ThreadCard from '../components/ThreadCard';

const DiscussScreen = ({ onOpenThread, onCreateThread }) => {
  const [activeBoard, setActiveBoard] = useState('all');

  const filtered = activeBoard === 'all'
    ? threads
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
        {boards.map(b => (
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

      {/* Confessions banner */}
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

      {/* Thread list */}
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
    </div>
  );
};

export default DiscussScreen;
