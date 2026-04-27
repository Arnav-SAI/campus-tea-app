import { useState, useRef, useEffect } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';

const MAX_MESSAGES = 50;

const BlindChat = () => {
  const [phase, setPhase] = useState('select'); // select, searching, chatting, reveal
  const [preference, setPreference] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [revealChoice, setRevealChoice] = useState(null);
  const [partnerRevealed, setPartnerRevealed] = useState(null);
  const msgEndRef = useRef(null);

  const msgsLeft = MAX_MESSAGES - messages.length;

  useEffect(() => {
    if (msgEndRef.current) {
      msgEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSearch = (pref) => {
    setPreference(pref);
    setPhase('searching');
    // Simulate finding a match
    setTimeout(() => setPhase('chatting'), 2500);
  };

  const sendMessage = () => {
    if (!input.trim() || msgsLeft <= 0) return;
    const newMsg = { id: Date.now(), text: input, sender: 'me', time: 'now' };
    const updatedMsgs = [...messages, newMsg];
    setMessages(updatedMsgs);
    setInput('');

    // Simulate reply
    if (MAX_MESSAGES - updatedMsgs.length > 0) {
      const replies = [
        'haha thats interesting!', 'no way 😂', 'tell me more!',
        'same here lol', 'wait really??', 'thats so cool!',
        'omg i relate to this sm', 'lmaooo', 'what year are u in?',
        'have u been to the new cafe?',
      ];
      setTimeout(() => {
        const reply = {
          id: Date.now() + 1,
          text: replies[Math.floor(Math.random() * replies.length)],
          sender: 'them', time: 'now',
        };
        setMessages(prev => {
          const next = [...prev, reply];
          if (MAX_MESSAGES - next.length <= 0) {
            setTimeout(() => setPhase('reveal'), 500);
          }
          return next;
        });
      }, 1000 + Math.random() * 1500);
    }

    if (MAX_MESSAGES - updatedMsgs.length <= 0) {
      setTimeout(() => setPhase('reveal'), 500);
    }
  };

  const handleReveal = (choice) => {
    setRevealChoice(choice);
    // Simulate partner's choice
    setTimeout(() => {
      const partnerChoice = Math.random() > 0.4;
      setPartnerRevealed(partnerChoice);
    }, 1500);
  };

  // ─── SELECT PREFERENCE ──────────
  if (phase === 'select') {
    return (
      <div style={{ padding: '16px 14px', textAlign: 'center' }}>
        <div style={{
          fontFamily: FONT.heading, fontSize: 24, color: C.black,
          marginBottom: 8,
        }}>WHO DO YOU WANT TO TALK TO?</div>
        <div style={{ fontSize: 10, color: C.grey, marginBottom: 20 }}>
          Your identity stays hidden until you both agree to reveal
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button onClick={() => handleSearch('female')} style={{
            width: 120, height: 120, background: C.pink + '22',
            border: BORDER, boxShadow: SHADOW.md,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 8, cursor: 'pointer',
          }}>
            <span style={{ fontSize: 36 }}>👩</span>
            <span style={{ fontFamily: FONT.body, fontWeight: 700, fontSize: 10 }}>FEMALE</span>
          </button>
          <button onClick={() => handleSearch('male')} style={{
            width: 120, height: 120, background: C.blue + '22',
            border: BORDER, boxShadow: SHADOW.md,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 8, cursor: 'pointer',
          }}>
            <span style={{ fontSize: 36 }}>👨</span>
            <span style={{ fontFamily: FONT.body, fontWeight: 700, fontSize: 10 }}>MALE</span>
          </button>
        </div>
      </div>
    );
  }

  // ─── SEARCHING ──────────
  if (phase === 'searching') {
    return (
      <div style={{
        padding: '60px 30px', textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        <div className="animate-bounce" style={{ fontSize: 48 }}>🔍</div>
        <div style={{
          fontFamily: FONT.heading, fontSize: 22, color: C.black,
        }}>SEARCHING...</div>
        <div style={{ fontSize: 10, color: C.grey }}>
          Looking for someone who's also searching right now
        </div>
        <div style={{
          width: 200, height: 4, background: C.greyLight, border: `1px solid ${C.black}`,
          overflow: 'hidden', marginTop: 8,
        }}>
          <div style={{
            height: '100%', background: C.purple,
            animation: 'shimmer 1.5s infinite',
            width: '40%',
          }} />
        </div>
      </div>
    );
  }

  // ─── REVEAL PHASE ──────────
  if (phase === 'reveal') {
    if (revealChoice === null) {
      return (
        <div style={{
          padding: '40px 20px', textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        }}>
          <div style={{ fontSize: 48 }}>💬</div>
          <div style={{
            fontFamily: FONT.heading, fontSize: 22, color: C.black,
          }}>50 MESSAGES DONE!</div>
          <div style={{ fontSize: 11, color: C.grey, lineHeight: 1.6, maxWidth: 260 }}>
            Would you like to share your details with this person?
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <button onClick={() => handleReveal(true)} style={{
              background: C.green, color: C.white, border: BORDER,
              padding: '12px 24px', fontFamily: FONT.body, fontWeight: 700,
              fontSize: 11, boxShadow: SHADOW.md, cursor: 'pointer',
            }}>YES, SHARE 🤝</button>
            <button onClick={() => handleReveal(false)} style={{
              background: C.white, color: C.black, border: BORDER,
              padding: '12px 24px', fontFamily: FONT.body, fontWeight: 700,
              fontSize: 11, boxShadow: SHADOW.md, cursor: 'pointer',
            }}>NO THANKS</button>
          </div>
        </div>
      );
    }

    if (partnerRevealed === null) {
      return (
        <div style={{
          padding: '60px 30px', textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        }}>
          <div className="animate-bounce" style={{ fontSize: 48 }}>⏳</div>
          <div style={{ fontFamily: FONT.heading, fontSize: 20, color: C.black }}>
            WAITING FOR THEIR RESPONSE...
          </div>
        </div>
      );
    }

    const bothYes = revealChoice && partnerRevealed;
    return (
      <div style={{
        padding: '40px 20px', textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        <div style={{ fontSize: 48 }}>{bothYes ? '🎉' : '🐟'}</div>
        <div style={{
          fontFamily: FONT.heading, fontSize: 22, color: C.black,
        }}>{bothYes ? 'IT\'S A MATCH!' : 'MAYBE NEXT TIME'}</div>
        {bothYes ? (
          <div style={{
            background: C.green + '22', border: `2px solid ${C.green}`,
            padding: '12px 16px', fontSize: 10, fontWeight: 700, maxWidth: 280,
          }}>
            🎊 Contact shared! Check your notifications for details.
          </div>
        ) : (
          <div style={{
            fontSize: 12, color: C.grey, lineHeight: 1.6, maxWidth: 280,
          }}>
            There are a lot of fishes in the sea 🌊<br />
            Don't worry, you can try again tomorrow!
          </div>
        )}
        <button onClick={() => {
          setPhase('select');
          setMessages([]);
          setRevealChoice(null);
          setPartnerRevealed(null);
        }} style={{
          background: C.black, color: C.yellow, border: BORDER,
          padding: '10px 20px', fontFamily: FONT.body, fontWeight: 700,
          fontSize: 10, boxShadow: SHADOW.md, cursor: 'pointer', marginTop: 8,
        }}>DONE</button>
      </div>
    );
  }

  // ─── CHATTING ──────────
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100%',
    }}>
      {/* Chat header */}
      <div style={{
        background: C.purple + '22', border: BORDER_SM,
        padding: '8px 14px', margin: '10px 14px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 30, height: 30, background: C.purple,
            border: BORDER_SM, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, color: C.white,
          }}>🎭</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 10 }}>STRANGER</div>
            <div style={{ fontSize: 7, color: C.grey }}>Blind Chat</div>
          </div>
        </div>
        <div style={{
          background: msgsLeft <= 10 ? C.orange : C.black,
          color: msgsLeft <= 10 ? C.white : C.yellow,
          padding: '3px 8px', fontSize: 8, fontWeight: 700,
          border: BORDER_SM,
        }}>{msgsLeft} msgs left</div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: 'auto', padding: '10px 14px',
        display: 'flex', flexDirection: 'column', gap: 6,
      }}>
        {/* System message */}
        <div style={{
          textAlign: 'center', fontSize: 8, color: C.grey,
          padding: '8px 0', marginBottom: 4,
        }}>
          🌙 Connected! You have {MAX_MESSAGES} messages. Make them count!
        </div>
        {messages.map(msg => (
          <div key={msg.id} style={{
            alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
            maxWidth: '75%',
          }}>
            <div style={{
              background: msg.sender === 'me' ? C.black : C.white,
              color: msg.sender === 'me' ? C.yellow : C.black,
              border: BORDER_SM, padding: '8px 12px',
              fontSize: 11, lineHeight: 1.5,
              boxShadow: SHADOW.sm,
            }}>{msg.text}</div>
          </div>
        ))}
        <div ref={msgEndRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: '10px 14px', borderTop: BORDER_SM,
        display: 'flex', gap: 8, background: C.white,
      }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder={msgsLeft <= 0 ? 'No messages left' : 'Type a message...'}
          disabled={msgsLeft <= 0}
          style={{
            flex: 1, border: BORDER_SM, padding: '8px 12px',
            fontFamily: FONT.body, fontSize: 10, background: C.bg,
          }}
        />
        <button onClick={sendMessage} disabled={msgsLeft <= 0} style={{
          background: msgsLeft <= 0 ? C.greyLight : C.black,
          color: C.yellow, border: BORDER_SM, padding: '8px 14px',
          fontFamily: FONT.body, fontWeight: 700, fontSize: 9,
          cursor: msgsLeft <= 0 ? 'not-allowed' : 'pointer',
        }}>SEND</button>
      </div>
    </div>
  );
};

export default BlindChat;
