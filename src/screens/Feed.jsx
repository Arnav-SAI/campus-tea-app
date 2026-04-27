import { C, BORDER, SHADOW, FONT } from '../design';
import { stories, feedPosts } from '../data/mock';
import StoryBar from '../components/StoryBar';
import PostCard from '../components/PostCard';
import PollCard from '../components/PollCard';

const FeedScreen = ({ onCreateStory, onCreatePost }) => {
  return (
    <div style={{ background: C.bg, minHeight: '100%', fontFamily: FONT.body }}>
      {/* Header */}
      <div style={{
        background: C.black, padding: '14px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: BORDER,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Add Story button (Instagram-style top-left +) */}
          <button onClick={onCreateStory} style={{
            background: C.yellow, border: BORDER,
            width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 700, color: C.black,
            boxShadow: SHADOW.sm,
          }}>+</button>
          <div>
            <div style={{
              fontFamily: FONT.heading, fontSize: 22,
              color: C.yellow, letterSpacing: '-0.5px',
            }}>CAMPUS TEA //</div>
            <div style={{ fontSize: 8, color: '#666', letterSpacing: '0.12em' }}>IIT BOMBAY</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={onCreatePost} style={{
            background: C.yellow, border: BORDER,
            width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 15, color: C.black, boxShadow: SHADOW.sm,
          }}>📷</button>
          <button style={{
            background: 'transparent', border: `2px solid #444`,
            width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, color: C.white,
          }}>🔔</button>
        </div>
      </div>

      {/* Stories */}
      <StoryBar stories={stories} onAddStory={onCreateStory} />

      {/* Posts */}
      <div style={{ padding: '0 0 20px' }}>
        {feedPosts.map(post => (
          <div key={post.id} style={{ margin: '14px 14px 0' }}>
            {post.type === 'poll' ? (
              <PollCard post={post} />
            ) : (
              <PostCard post={post} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedScreen;
