import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';

const NoticeBoard = ({ notices: initialNotices }) => {
  const [notices, setNotices] = useState(initialNotices);
  const [showAdd, setShowAdd] = useState(false);
  const [newNote, setNewNote] = useState('');
  const noteColors = ['#FFE033', '#FF2D78', '#00C851', '#1A3FFF', '#FF5C1A', '#8B5CF6'];

  const handleAdd = () => {
    if (!newNote.trim()) return;
    const note = {
      id: Date.now(),
      text: newNote,
      author: 'Anonymous',
      time: 'Just now',
      hoursLeft: 24,
      color: noteColors[Math.floor(Math.random() * noteColors.length)],
    };
    setNotices([note, ...notices]);
    setNewNote('');
    setShowAdd(false);
  };

  return (
    <div style={{ padding: '12px 14px 0' }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 10,
      }}>
        <div style={{
          fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
          color: C.greyDark, display: 'flex', alignItems: 'center', gap: 6,
        }}>📌 NOTICE BOARD</div>
        <button onClick={() => setShowAdd(!showAdd)} style={{
          background: C.yellow, border: BORDER_SM, padding: '3px 8px',
          fontSize: 8, fontWeight: 700, fontFamily: FONT.body,
          boxShadow: SHADOW.sm, cursor: 'pointer',
        }}>+ ADD</button>
      </div>

      {/* Add notice form */}
      {showAdd && (
        <div className="animate-slide-up" style={{
          background: C.white, border: BORDER, boxShadow: SHADOW.md,
          padding: 12, marginBottom: 10,
        }}>
          <textarea
            value={newNote}
            onChange={e => setNewNote(e.target.value)}
            placeholder="Found something? Lost something? Post a notice..."
            style={{
              width: '100%', height: 60, border: BORDER_SM, padding: 8,
              fontFamily: FONT.body, fontSize: 10, resize: 'none',
              background: C.bg, boxSizing: 'border-box',
            }}
          />
          <div style={{ display: 'flex', gap: 6, marginTop: 8, justifyContent: 'flex-end' }}>
            <button onClick={() => setShowAdd(false)} style={{
              background: C.white, border: BORDER_SM, padding: '4px 10px',
              fontSize: 8, fontWeight: 700, fontFamily: FONT.body,
            }}>CANCEL</button>
            <button onClick={handleAdd} style={{
              background: C.black, color: C.yellow, border: BORDER_SM,
              padding: '4px 10px', fontSize: 8, fontWeight: 700, fontFamily: FONT.body,
            }}>POST</button>
          </div>
        </div>
      )}

      {/* Notices - horizontal scroll */}
      <div style={{
        display: 'flex', gap: 8, overflowX: 'auto',
        paddingBottom: 14,
      }}>
        {notices.map(note => (
          <div key={note.id} className="animate-pop" style={{
            minWidth: 140, maxWidth: 160, padding: 10,
            background: note.color + '22',
            border: BORDER_SM,
            boxShadow: SHADOW.sm,
            flexShrink: 0,
            position: 'relative',
            transform: `rotate(${(note.id % 3 - 1) * 1.5}deg)`,
          }}>
            {/* Pin icon */}
            <div style={{
              position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
              width: 12, height: 12, borderRadius: '50%',
              background: note.color, border: `2px solid ${C.black}`,
            }} />
            <div style={{
              fontSize: 10, fontWeight: 700, color: C.black,
              lineHeight: 1.5, marginBottom: 8, marginTop: 4,
              wordBreak: 'break-word',
            }}>{note.text}</div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ fontSize: 7, color: C.grey }}>{note.time}</span>
              <span style={{
                fontSize: 7, color: note.hoursLeft <= 6 ? C.orange : C.grey,
                fontWeight: 700,
              }}>⏳ {note.hoursLeft}h left</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
