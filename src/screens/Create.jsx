import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';

const CreateScreen = ({ mode = 'post', onClose }) => {
  const [caption, setCaption] = useState('');
  const [createType, setCreateType] = useState(mode); // 'post', 'poll', 'story', 'thread'
  const [pollQuestion, setPollQuestion] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '']);
  const [threadTitle, setThreadTitle] = useState('');
  const [threadContent, setThreadContent] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('general');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const addPollOption = () => {
    if (pollOptions.length < 4) setPollOptions([...pollOptions, '']);
  };

  const boardList = ['general', 'academics', 'placements', 'campus-life', 'events', 'confessions'];

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: C.bg, zIndex: 900,
      maxWidth: 390, margin: '0 auto',
      display: 'flex', flexDirection: 'column',
      fontFamily: FONT.body,
      animation: 'slideUp 0.25s ease',
    }}>
      {/* Header */}
      <div style={{
        background: C.black, padding: '14px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: BORDER,
      }}>
        <button onClick={onClose} style={{
          background: C.white, border: BORDER, padding: '4px 10px',
          fontSize: 10, fontWeight: 700,
        }}>✕ CLOSE</button>
        <div style={{
          fontFamily: FONT.heading, fontSize: 18,
          color: C.yellow, letterSpacing: '-0.3px',
        }}>
          {createType === 'post' && 'NEW POST'}
          {createType === 'poll' && 'NEW POLL'}
          {createType === 'story' && 'NEW STORY'}
          {createType === 'thread' && 'NEW THREAD'}
        </div>
        <div style={{ width: 70 }} />
      </div>

      {/* Type selector */}
      <div style={{
        display: 'flex', borderBottom: BORDER_SM,
      }}>
        {[
          { id: 'post', label: '📷 POST' },
          { id: 'poll', label: '📊 POLL' },
          { id: 'story', label: '⚡ STORY' },
          { id: 'thread', label: '💬 THREAD' },
        ].map((t, i) => (
          <button key={t.id} onClick={() => setCreateType(t.id)} style={{
            flex: 1, padding: '10px 4px',
            background: createType === t.id ? C.yellow : C.white,
            border: 'none',
            borderRight: i < 3 ? BORDER_SM : 'none',
            fontFamily: FONT.body, fontWeight: 700, fontSize: 8,
            letterSpacing: '0.04em',
          }}>{t.label}</button>
        ))}
      </div>

      {/* Content area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>

        {/* ─── POST / STORY MODE ───────────────────────────────────── */}
        {(createType === 'post' || createType === 'story') && (
          <>
            <div style={{
              border: `3px dashed ${C.black}`, background: C.white,
              height: createType === 'story' ? 300 : 200,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              marginBottom: 20, cursor: 'pointer', gap: 8,
              boxShadow: SHADOW.sm,
              transition: 'box-shadow 0.15s',
            }}>
              <div style={{ fontSize: 36 }}>{createType === 'story' ? '⚡' : '📷'}</div>
              <div style={{ fontSize: 12, fontWeight: 700 }}>
                TAP TO ADD {createType === 'story' ? 'STORY' : 'PHOTO'}
              </div>
              <div style={{ fontSize: 9, color: C.grey }}>
                {createType === 'post' ? 'SELECT MULTIPLE FOR CAROUSEL' : 'FROM GALLERY OR CAMERA'}
              </div>
            </div>

            {createType === 'post' && (
              <>
                {/* Caption */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                    marginBottom: 6, color: C.greyDark,
                  }}>CAPTION</div>
                  <textarea
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                    placeholder="What's happening on campus?"
                    style={{
                      width: '100%', height: 80, border: BORDER, padding: 12,
                      fontSize: 11, resize: 'none', background: C.white,
                      boxSizing: 'border-box', boxShadow: SHADOW.sm,
                    }}
                  />
                </div>

                {/* Tags */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                    marginBottom: 8, color: C.greyDark,
                  }}>TAG</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {['Campus Life', 'Events', 'Classes', 'Food', 'Sports', 'General'].map(t => (
                      <button key={t} style={{
                        background: C.white, border: BORDER_SM,
                        padding: '6px 10px', fontSize: 8, fontWeight: 700,
                      }}>{t}</button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                    marginBottom: 6, color: C.greyDark,
                  }}>LOCATION</div>
                  <div style={{
                    border: BORDER, background: C.white, padding: '10px 14px',
                    boxShadow: SHADOW.sm, display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span>📍</span>
                    <span style={{ fontSize: 10, color: C.grey }}>Add location...</span>
                  </div>
                </div>

                {/* Tag people */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                    marginBottom: 6, color: C.greyDark,
                  }}>TAG PEOPLE</div>
                  <div style={{
                    border: BORDER, background: C.white, padding: '10px 14px',
                    boxShadow: SHADOW.sm, display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span>@</span>
                    <span style={{ fontSize: 10, color: C.grey }}>Tag people...</span>
                  </div>
                </div>
              </>
            )}
          </>
        )}

        {/* ─── POLL MODE ───────────────────────────────────────────── */}
        {createType === 'poll' && (
          <>
            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                marginBottom: 6, color: C.greyDark,
              }}>QUESTION</div>
              <input
                value={pollQuestion}
                onChange={e => setPollQuestion(e.target.value)}
                placeholder="Ask your campus something..."
                style={{
                  width: '100%', border: BORDER, padding: 12,
                  fontSize: 12, fontWeight: 700, background: C.white,
                  boxSizing: 'border-box', boxShadow: SHADOW.sm,
                }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                marginBottom: 8, color: C.greyDark,
              }}>OPTIONS</div>
              {pollOptions.map((opt, i) => (
                <input
                  key={i}
                  value={opt}
                  onChange={e => {
                    const newOpts = [...pollOptions];
                    newOpts[i] = e.target.value;
                    setPollOptions(newOpts);
                  }}
                  placeholder={`Option ${i + 1}`}
                  style={{
                    width: '100%', border: BORDER_SM, padding: '10px 12px',
                    fontSize: 11, background: C.white,
                    boxSizing: 'border-box', marginBottom: 6,
                  }}
                />
              ))}
              {pollOptions.length < 4 && (
                <button onClick={addPollOption} style={{
                  background: C.bg, border: `2px dashed ${C.black}`,
                  padding: '8px 12px', fontSize: 9, fontWeight: 700,
                  width: '100%', marginTop: 4,
                }}>+ ADD OPTION</button>
              )}
            </div>
          </>
        )}

        {/* ─── THREAD MODE ─────────────────────────────────────────── */}
        {createType === 'thread' && (
          <>
            {/* Board selector */}
            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                marginBottom: 8, color: C.greyDark,
              }}>BOARD</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {boardList.map(b => (
                  <button key={b} onClick={() => {
                    setSelectedBoard(b);
                    if (b === 'confessions') setIsAnonymous(true);
                    else setIsAnonymous(false);
                  }} style={{
                    background: selectedBoard === b ? C.black : C.white,
                    color: selectedBoard === b ? C.yellow : C.black,
                    border: BORDER_SM, padding: '6px 10px',
                    fontSize: 8, fontWeight: 700,
                    textTransform: 'capitalize',
                  }}>{b.replace('-', ' ')}</button>
                ))}
              </div>
            </div>

            {/* Anonymous toggle for confessions */}
            {selectedBoard === 'confessions' && (
              <div style={{
                background: C.pink, border: BORDER, padding: '8px 12px',
                marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: SHADOW.sm,
              }}>
                <span style={{ fontSize: 14 }}>🎭</span>
                <span style={{
                  fontSize: 9, fontWeight: 700, color: C.white,
                }}>THIS WILL BE POSTED ANONYMOUSLY</span>
              </div>
            )}

            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                marginBottom: 6, color: C.greyDark,
              }}>TITLE</div>
              <input
                value={threadTitle}
                onChange={e => setThreadTitle(e.target.value)}
                placeholder="What do you want to discuss?"
                style={{
                  width: '100%', border: BORDER, padding: 12,
                  fontSize: 12, fontWeight: 700, background: C.white,
                  boxSizing: 'border-box', boxShadow: SHADOW.sm,
                }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                marginBottom: 6, color: C.greyDark,
              }}>CONTENT</div>
              <textarea
                value={threadContent}
                onChange={e => setThreadContent(e.target.value)}
                placeholder="Share your thoughts..."
                style={{
                  width: '100%', height: 120, border: BORDER, padding: 12,
                  fontSize: 11, resize: 'none', background: C.white,
                  boxSizing: 'border-box', boxShadow: SHADOW.sm,
                }}
              />
            </div>

            {/* Optional image */}
            <div style={{
              border: `2px dashed ${C.greyLight}`, background: C.white,
              padding: '14px', display: 'flex', alignItems: 'center',
              gap: 10, cursor: 'pointer', marginBottom: 16,
            }}>
              <span style={{ fontSize: 18 }}>📎</span>
              <span style={{ fontSize: 10, color: C.grey }}>Attach an image (optional)</span>
            </div>
          </>
        )}
      </div>

      {/* Submit button */}
      <div style={{ padding: '12px 20px 24px', borderTop: BORDER }}>
        <button style={{
          width: '100%', background: C.black, color: C.yellow,
          border: BORDER, padding: 16,
          fontFamily: FONT.body, fontWeight: 700, fontSize: 13,
          cursor: 'pointer', boxShadow: SHADOW.lg,
          letterSpacing: '0.1em',
        }}>
          {createType === 'post' && 'POST TO IITB →'}
          {createType === 'poll' && 'POST POLL →'}
          {createType === 'story' && 'SHARE STORY →'}
          {createType === 'thread' && (isAnonymous ? 'POST ANONYMOUSLY →' : 'POST THREAD →')}
        </button>
      </div>
    </div>
  );
};

export default CreateScreen;
