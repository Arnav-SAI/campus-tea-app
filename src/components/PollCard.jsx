import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';

const PollCard = ({ post, style }) => {
  const [voted, setVoted] = useState(null);
  const [liked, setLiked] = useState(false);

  const totalVotes = post.options.reduce((sum, o) => sum + o.votes, 0) + (voted !== null ? 1 : 0);

  const handleVote = (optionId) => {
    if (voted === null) setVoted(optionId);
  };

  return (
    <div className="animate-slide-up" style={{
      border: BORDER, background: C.white, boxShadow: SHADOW.lg,
      ...style,
    }}>
      {/* Header */}
      <div style={{
        padding: '10px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: BORDER_SM,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            background: post.user.color,
            border: BORDER,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: 11, color: C.black,
          }}>{post.user.avatar}</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 12 }}>{post.user.username}</div>
            <div style={{ fontSize: 9, color: C.grey }}>{post.time} ago</div>
          </div>
        </div>
        <span style={{
          background: C.blue, color: C.white, border: BORDER,
          padding: '2px 8px', fontSize: 8, fontWeight: 700, letterSpacing: '0.1em',
        }}>POLL</span>
      </div>

      {/* Question */}
      <div style={{
        padding: '14px 14px 10px',
        fontFamily: FONT.heading, fontSize: 18, lineHeight: 1.3,
        color: C.black, letterSpacing: '-0.3px',
        borderBottom: BORDER_SM,
      }}>
        {post.question}
      </div>

      {/* Options */}
      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {post.options.map(option => {
          const optionVotes = option.votes + (voted === option.id ? 1 : 0);
          const pct = totalVotes > 0 ? Math.round((optionVotes / totalVotes) * 100) : 0;
          const isSelected = voted === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              style={{
                position: 'relative', textAlign: 'left',
                background: C.white,
                border: isSelected ? BORDER : `2px solid ${C.greyLight}`,
                padding: '10px 14px',
                fontFamily: FONT.body, fontSize: 11, fontWeight: 700,
                boxShadow: isSelected ? SHADOW.sm : 'none',
                overflow: 'hidden',
                cursor: voted === null ? 'pointer' : 'default',
              }}
            >
              {/* Fill bar */}
              {voted !== null && (
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  background: isSelected ? C.yellow : '#F0EBE0',
                  width: `${pct}%`,
                  animation: 'pollFill 0.6s ease forwards',
                  zIndex: 0,
                }} />
              )}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{option.text}</span>
                {voted !== null && (
                  <span style={{ fontSize: 10, color: isSelected ? C.black : C.grey }}>{pct}%</span>
                )}
              </div>
            </button>
          );
        })}
        <div style={{ fontSize: 9, color: C.grey, textAlign: 'center', marginTop: 4 }}>
          {totalVotes} votes
        </div>
      </div>

      {/* Actions */}
      <div style={{
        padding: '8px 14px 12px',
        borderTop: BORDER_SM,
        display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <button onClick={() => setLiked(!liked)} style={{
          background: liked ? C.pink : 'transparent',
          border: liked ? BORDER : `2px solid ${C.greyLight}`,
          padding: '5px 12px', fontFamily: FONT.body,
          fontSize: 11, fontWeight: 700,
          color: liked ? C.white : C.black,
        }}>♥ {post.likes + (liked ? 1 : 0)}</button>
        <button style={{
          background: 'transparent', border: `2px solid ${C.greyLight}`,
          padding: '5px 12px', fontFamily: FONT.body,
          fontSize: 11, fontWeight: 700,
        }}>◈ {post.comments}</button>
      </div>
    </div>
  );
};

export default PollCard;
