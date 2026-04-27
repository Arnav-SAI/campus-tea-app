import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';
import { threadComments } from '../data/mock';
import Tag from '../components/Tag';

const boardColors = {
  general: '#FFE033', academics: '#1A3FFF', placements: '#00C851',
  'campus-life': '#FF5C1A', events: '#8B5CF6', confessions: '#FF2D78',
};

// ─── COMMENT COMPONENT (recursive for nesting) ──────────────────────────────

const Comment = ({ comment, depth = 0 }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [showReply, setShowReply] = useState(false);

  return (
    <div style={{ marginLeft: depth > 0 ? 16 : 0, marginTop: depth > 0 ? 8 : 12 }}>
      <div style={{
        background: depth > 0 ? '#FAFAF5' : C.white,
        border: depth > 0 ? BORDER_SM : BORDER,
        padding: '10px 12px',
        boxShadow: depth === 0 ? SHADOW.sm : 'none',
      }}>
        {/* Author */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6,
        }}>
          <div style={{
            width: 22, height: 22, background: comment.avatarColor,
            border: `2px solid ${C.black}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 7, fontWeight: 700,
          }}>{comment.avatar}</div>
          <span style={{ fontWeight: 700, fontSize: 10 }}>{comment.author}</span>
          <span style={{ fontSize: 8, color: C.grey }}>· {comment.time}</span>
        </div>

        {/* Content */}
        <div style={{ fontSize: 11, lineHeight: 1.6, color: '#222', marginBottom: 8 }}>
          {comment.content}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button onClick={() => setUpvoted(!upvoted)} style={{
            background: upvoted ? C.yellow : 'transparent',
            border: `2px solid ${upvoted ? C.black : C.greyLight}`,
            padding: '2px 8px', fontFamily: FONT.body,
            fontSize: 9, fontWeight: 700,
          }}>▲ {comment.votes + (upvoted ? 1 : 0)}</button>
          <button onClick={() => setShowReply(!showReply)} style={{
            background: 'transparent', border: 'none',
            fontSize: 9, fontWeight: 700, color: C.blue,
            fontFamily: FONT.body, padding: 0,
          }}>Reply</button>
        </div>

        {/* Reply input */}
        {showReply && (
          <div style={{
            marginTop: 8, display: 'flex', gap: 6,
          }}>
            <input placeholder="Write a reply..." style={{
              flex: 1, border: BORDER_SM, padding: '6px 10px',
              fontSize: 10, background: C.white,
            }} />
            <button style={{
              background: C.black, color: C.yellow, border: BORDER_SM,
              padding: '4px 10px', fontSize: 9, fontWeight: 700,
              fontFamily: FONT.body,
            }}>↗</button>
          </div>
        )}
      </div>

      {/* Nested replies */}
      {comment.replies && comment.replies.map(reply => (
        <Comment key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
};

// ─── THREAD VIEW SCREEN ─────────────────────────────────────────────────────

const ThreadView = ({ thread, onBack }) => {
  const [replyText, setReplyText] = useState('');
  const color = boardColors[thread.board] || C.yellow;

  return (
    <div style={{ background: C.bg, minHeight: '100%', fontFamily: FONT.body }}>
      {/* Header */}
      <div style={{
        background: C.black, padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: 12,
        borderBottom: BORDER,
      }}>
        <button onClick={onBack} style={{
          background: C.white, border: BORDER, padding: '4px 10px',
          fontSize: 10, fontWeight: 700,
        }}>← BACK</button>
        <div style={{
          fontFamily: FONT.heading, fontSize: 16,
          color: C.yellow, letterSpacing: '-0.3px',
        }}>THREAD</div>
      </div>

      {/* Thread content */}
      <div style={{ padding: '16px 14px' }}>
        <div className="animate-slide-up" style={{
          background: C.white, border: BORDER, boxShadow: SHADOW.lg,
          padding: 16,
        }}>
          {/* Tags */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
            <Tag label={thread.board.replace('-', ' ')} color={color} />
            {thread.hot && <Tag label="🔥 HOT" color={C.orange} />}
            {thread.pinned && <Tag label="📌 PINNED" color={C.bg} />}
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: FONT.heading, fontSize: 22,
            color: C.black, lineHeight: 1.2, marginBottom: 12,
            letterSpacing: '-0.5px',
          }}>{thread.title}</h2>

          {/* Author */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            marginBottom: 14, paddingBottom: 14,
            borderBottom: BORDER_SM,
          }}>
            {thread.isAnonymous ? (
              <span style={{ fontSize: 10, color: C.pink, fontWeight: 700 }}>🎭 Anonymous</span>
            ) : (
              <>
                <div style={{
                  width: 28, height: 28, background: thread.avatarColor,
                  border: BORDER_SM, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, fontWeight: 700,
                }}>{thread.avatar}</div>
                <span style={{ fontWeight: 700, fontSize: 11 }}>{thread.author}</span>
              </>
            )}
            <span style={{ fontSize: 9, color: C.grey }}>· {thread.time} ago</span>
          </div>

          {/* Content */}
          <div style={{ fontSize: 12, lineHeight: 1.7, color: '#222', marginBottom: 14 }}>
            {thread.content}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button style={{
              background: C.yellow, border: BORDER,
              padding: '5px 14px', fontFamily: FONT.body,
              fontSize: 11, fontWeight: 700, boxShadow: SHADOW.sm,
              display: 'flex', alignItems: 'center', gap: 4,
            }}>▲ {thread.votes}</button>
            <span style={{ fontSize: 11, color: C.grey, fontWeight: 700 }}>
              ◈ {thread.commentCount} comments
            </span>
          </div>
        </div>

        {/* Comments */}
        <div style={{ marginTop: 16 }}>
          <div style={{
            fontWeight: 700, fontSize: 10, letterSpacing: '0.1em',
            color: C.greyDark, marginBottom: 8,
          }}>COMMENTS ({thread.commentCount})</div>
          {threadComments.map(c => (
            <Comment key={c.id} comment={c} />
          ))}
        </div>
      </div>

      {/* Reply bar */}
      <div style={{
        position: 'sticky', bottom: 0,
        background: C.white, borderTop: BORDER,
        padding: '10px 14px', display: 'flex', gap: 8,
      }}>
        <input
          value={replyText}
          onChange={e => setReplyText(e.target.value)}
          placeholder="Add a comment..."
          style={{
            flex: 1, border: BORDER, padding: '10px 14px',
            fontSize: 11, background: C.bg, boxShadow: SHADOW.sm,
          }}
        />
        <button style={{
          background: C.black, color: C.yellow, border: BORDER,
          padding: '8px 16px', fontWeight: 700, fontSize: 11,
          fontFamily: FONT.body, boxShadow: SHADOW.sm,
        }}>↗</button>
      </div>
    </div>
  );
};

export default ThreadView;
