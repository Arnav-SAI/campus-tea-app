import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';
import Tag from './Tag';

const PostCard = ({ post, style }) => {
  const [liked, setLiked] = useState(false);
  const [heartAnim, setHeartAnim] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      setHeartAnim(true);
      setTimeout(() => setHeartAnim(false), 400);
    }
  };

  const isCarousel = post.type === 'carousel' && post.images?.length > 1;

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
            <div style={{ fontSize: 9, color: C.grey, display: 'flex', gap: 6, alignItems: 'center' }}>
              <span>{post.time} ago</span>
              {post.location && <><span>·</span><span>📍 {post.location}</span></>}
            </div>
          </div>
        </div>
        <span style={{ fontSize: 18, color: C.grey, cursor: 'pointer', padding: '0 4px' }}>···</span>
      </div>

      {/* Image / Carousel */}
      <div style={{ borderBottom: BORDER_SM, overflow: 'hidden', position: 'relative' }}>
        <div style={{
          display: 'flex',
          transform: `translateX(-${carouselIndex * 100}%)`,
          transition: 'transform 0.3s ease',
        }}>
          {(post.images || []).map((img, i) => (
            <img key={i} src={img} alt="" style={{
              width: '100%', flexShrink: 0,
              height: 280, objectFit: 'cover',
            }} />
          ))}
        </div>

        {/* Carousel navigation */}
        {isCarousel && (
          <>
            {carouselIndex > 0 && (
              <button onClick={() => setCarouselIndex(i => i - 1)} style={{
                position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
                background: C.white, border: BORDER, width: 30, height: 30,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, boxShadow: SHADOW.sm,
              }}>←</button>
            )}
            {carouselIndex < post.images.length - 1 && (
              <button onClick={() => setCarouselIndex(i => i + 1)} style={{
                position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                background: C.white, border: BORDER, width: 30, height: 30,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, boxShadow: SHADOW.sm,
              }}>→</button>
            )}
            {/* Dots */}
            <div style={{
              position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
              display: 'flex', gap: 5,
            }}>
              {post.images.map((_, i) => (
                <div key={i} style={{
                  width: i === carouselIndex ? 16 : 6, height: 6,
                  background: i === carouselIndex ? C.yellow : C.white,
                  border: `2px solid ${C.black}`,
                  transition: 'all 0.2s ease',
                }} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Actions */}
      <div style={{
        padding: '10px 14px',
        borderBottom: BORDER_SM,
        display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <button onClick={handleLike} className={heartAnim ? 'animate-heart' : ''} style={{
          background: liked ? C.pink : 'transparent',
          border: liked ? BORDER : `2px solid ${C.greyLight}`,
          padding: '5px 12px', fontFamily: FONT.body,
          fontSize: 11, fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: 5,
          color: liked ? C.white : C.black,
          boxShadow: liked ? SHADOW.sm : 'none',
        }}>
          ♥ {post.likes + (liked ? 1 : 0)}
        </button>
        <button style={{
          background: 'transparent', border: `2px solid ${C.greyLight}`,
          padding: '5px 12px', fontFamily: FONT.body,
          fontSize: 11, fontWeight: 700,
        }}>◈ {post.comments}</button>
        <button style={{
          background: 'transparent', border: `2px solid ${C.greyLight}`,
          padding: '5px 12px', fontFamily: FONT.body,
          fontSize: 11, fontWeight: 700, marginLeft: 'auto',
        }}>↗</button>
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div style={{ padding: '6px 14px 0', display: 'flex', gap: 6 }}>
          {post.tags.map(t => <Tag key={t} label={t} small />)}
        </div>
      )}

      {/* Caption */}
      {post.caption && (
        <div style={{ padding: '8px 14px 12px' }}>
          <span style={{ fontWeight: 700, fontSize: 11 }}>{post.user.username} </span>
          <span style={{ fontSize: 11, color: '#333', lineHeight: 1.5 }}>{post.caption}</span>
        </div>
      )}
    </div>
  );
};

export default PostCard;
