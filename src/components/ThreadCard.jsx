import { C, BORDER, SHADOW, FONT } from '../design';
import Tag from './Tag';

const boardColors = {
  general: '#FFE033',
  academics: '#1A3FFF',
  placements: '#00C851',
  'campus-life': '#FF5C1A',
  events: '#8B5CF6',
  confessions: '#FF2D78',
};

const ThreadCard = ({ thread, onTap, onUpvote }) => {
  const color = boardColors[thread.board] || C.yellow;

  return (
    <div
      onClick={onTap}
      className="animate-slide-up"
      style={{
        background: C.white, border: BORDER, boxShadow: SHADOW.md,
        padding: 14, cursor: 'pointer',
        transition: 'box-shadow 0.1s ease',
      }}
    >
      {/* Top row: tag + badges */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <Tag label={thread.board.replace('-', ' ')} color={color} small />
          {thread.pinned && <Tag label="📌 Pinned" color={C.bg} small />}
        </div>
        {thread.hot && <Tag label="🔥 HOT" color={C.orange} small />}
      </div>

      {/* Title */}
      <div style={{
        fontWeight: 700, fontSize: 13, lineHeight: 1.4,
        marginBottom: 8, color: C.black,
      }}>{thread.title}</div>

      {/* Preview */}
      {thread.content && (
        <div style={{
          fontSize: 10, color: C.greyDark, lineHeight: 1.5,
          marginBottom: 10,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{thread.content}</div>
      )}

      {/* Bottom row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {thread.isAnonymous ? (
            <span style={{ fontSize: 9, color: C.pink, fontWeight: 700 }}>🎭 Anonymous</span>
          ) : (
            <>
              <div style={{
                width: 20, height: 20, background: thread.avatarColor || C.yellow,
                border: `2px solid ${C.black}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 7, fontWeight: 700,
              }}>{thread.avatar}</div>
              <span style={{ fontSize: 9, color: C.grey }}>{thread.author}</span>
            </>
          )}
          <span style={{ fontSize: 9, color: C.grey }}>· {thread.time}</span>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button onClick={(e) => { e.stopPropagation(); onUpvote && onUpvote(thread.id); }} style={{
            background: 'transparent', border: `2px solid ${C.greyLight}`,
            padding: '3px 8px', fontFamily: FONT.body,
            fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 3,
          }}>▲ {thread.votes}</button>
          <span style={{ fontSize: 10, color: C.grey, fontWeight: 700 }}>◈ {thread.commentCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
