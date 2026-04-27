import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';
import { currentUser } from '../data/mock';

const EditProfile = ({ onBack }) => {
  const [name, setName] = useState(currentUser.name);
  const [username, setUsername] = useState(currentUser.username);
  const [bio, setBio] = useState(currentUser.bio);
  const [year, setYear] = useState(currentUser.year);
  const [department, setDepartment] = useState(currentUser.department);
  const [instagram, setInstagram] = useState(currentUser.socialLinks.instagram);
  const [linkedin, setLinkedin] = useState(currentUser.socialLinks.linkedin);

  const Field = ({ label, value, onChange, placeholder, multiline = false }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{
        fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
        marginBottom: 6, color: C.greyDark,
      }}>{label}</div>
      {multiline ? (
        <textarea
          value={value} onChange={onChange} placeholder={placeholder}
          style={{
            width: '100%', height: 70, border: BORDER, padding: 12,
            fontSize: 11, resize: 'none', background: C.white,
            boxSizing: 'border-box', boxShadow: SHADOW.sm,
            fontFamily: FONT.body,
          }}
        />
      ) : (
        <input
          value={value} onChange={onChange} placeholder={placeholder}
          style={{
            width: '100%', border: BORDER, padding: '10px 14px',
            fontSize: 11, background: C.white,
            boxSizing: 'border-box', boxShadow: SHADOW.sm,
          }}
        />
      )}
    </div>
  );

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
        <button onClick={onBack} style={{
          background: C.white, border: BORDER, padding: '4px 10px',
          fontSize: 10, fontWeight: 700,
        }}>← BACK</button>
        <div style={{
          fontFamily: FONT.heading, fontSize: 18,
          color: C.yellow, letterSpacing: '-0.3px',
        }}>EDIT PROFILE</div>
        <div style={{ width: 60 }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
        {/* Avatar */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{
            width: 80, height: 80, background: C.yellow,
            border: BORDER, display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            fontFamily: FONT.heading, fontSize: 30, color: C.black,
            boxShadow: SHADOW.lg, cursor: 'pointer',
            marginBottom: 8,
          }}>{currentUser.avatar}</div>
          <div style={{ fontSize: 9, color: C.blue, fontWeight: 700, cursor: 'pointer' }}>
            CHANGE PHOTO
          </div>
        </div>

        <Field label="NAME" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
        <Field label="USERNAME" value={username} onChange={e => setUsername(e.target.value)} placeholder="@username" />
        <Field label="BIO" value={bio} onChange={e => setBio(e.target.value)} placeholder="Tell us about yourself" multiline />
        <Field label="YEAR" value={year} onChange={e => setYear(e.target.value)} placeholder="e.g. 3rd Year" />
        <Field label="DEPARTMENT" value={department} onChange={e => setDepartment(e.target.value)} placeholder="e.g. Computer Science" />

        <div style={{
          fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
          color: C.greyDark, marginBottom: 12, marginTop: 8,
        }}>🔗 SOCIAL LINKS</div>
        <Field label="INSTAGRAM" value={instagram} onChange={e => setInstagram(e.target.value)} placeholder="@handle" />
        <Field label="LINKEDIN" value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="username" />
      </div>

      {/* Save button */}
      <div style={{ padding: '12px 20px 24px', borderTop: BORDER }}>
        <button onClick={onBack} style={{
          width: '100%', background: C.black, color: C.yellow,
          border: BORDER, padding: 16,
          fontFamily: FONT.body, fontWeight: 700, fontSize: 13,
          cursor: 'pointer', boxShadow: SHADOW.lg,
          letterSpacing: '0.1em',
        }}>SAVE CHANGES →</button>
      </div>
    </div>
  );
};

export default EditProfile;
