import { C, BORDER, SHADOW, FONT } from '../design';

const AnnouncementCard = ({ announcement }) => (
  <div className="animate-slide-up" style={{
    background: C.yellow,
    border: BORDER,
    boxShadow: SHADOW.lg,
    overflow: 'hidden',
  }}>
    {/* Header bar */}
    <div style={{
      background: C.black,
      padding: '6px 14px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {announcement.pinned && <span style={{ fontSize: 10 }}>📌</span>}
        <span style={{
          color: C.yellow, fontSize: 8, fontWeight: 700,
          letterSpacing: '0.15em',
        }}>ANNOUNCEMENT</span>
      </div>
      <span style={{ color: C.grey, fontSize: 8 }}>{announcement.time} ago</span>
    </div>

    {/* Content */}
    <div style={{ padding: '12px 14px' }}>
      <div style={{
        fontFamily: FONT.heading, fontSize: 16,
        color: C.black, marginBottom: 6, lineHeight: 1.3,
        letterSpacing: '-0.3px',
      }}>{announcement.title}</div>
      <div style={{
        fontSize: 10, color: '#333', lineHeight: 1.6, marginBottom: 8,
      }}>{announcement.content}</div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <div style={{
          width: 18, height: 18, background: C.black,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 8, color: C.yellow, fontWeight: 700,
        }}>★</div>
        <span style={{ fontSize: 9, fontWeight: 700, color: C.black }}>{announcement.author}</span>
      </div>
    </div>
  </div>
);

export default AnnouncementCard;
