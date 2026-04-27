import { useState } from 'react';
import { C, BORDER, BORDER_SM, SHADOW, FONT } from '../design';
import { studentDirectory } from '../data/mock';

const StudentDirectory = () => {
  const [search, setSearch] = useState('');

  const filtered = studentDirectory.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.course.toLowerCase().includes(search.toLowerCase()) ||
    s.year.toLowerCase().includes(search.toLowerCase())
  );

  const getInitials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const colors = ['#FF2D78', '#1A3FFF', '#00C851', '#FF5C1A', '#8B5CF6', '#FFE033'];

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{
        fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
        color: C.greyDark, marginBottom: 10,
      }}>👥 STUDENT DIRECTORY</div>

      {/* Search */}
      <div style={{
        background: C.white, border: BORDER, boxShadow: SHADOW.sm,
        padding: '8px 12px', marginBottom: 10,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontSize: 12 }}>🔍</span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search students by name or course..."
          style={{
            flex: 1, border: 'none', background: 'transparent',
            fontFamily: FONT.body, fontSize: 10, outline: 'none',
          }}
        />
        {search && (
          <button onClick={() => setSearch('')} style={{
            background: C.greyLight, border: 'none', width: 18, height: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 10, cursor: 'pointer', color: C.black,
          }}>✕</button>
        )}
      </div>

      <div style={{ fontSize: 8, color: C.grey, marginBottom: 8 }}>
        {filtered.length} student{filtered.length !== 1 ? 's' : ''} found
      </div>

      {/* Student list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {filtered.map(student => (
          <div key={student.id} className="animate-fade" style={{
            background: C.white, border: BORDER_SM,
            padding: '10px 12px',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              width: 32, height: 32,
              background: colors[(student.id - 1) % colors.length],
              border: BORDER_SM,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 9, color: C.black, flexShrink: 0,
            }}>{getInitials(student.name)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 11 }}>{student.name}</div>
              <div style={{ fontSize: 8, color: C.grey }}>
                {student.course} · {student.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDirectory;
