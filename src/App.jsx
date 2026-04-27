import { useState } from "react";

const COLORS = {
  bg: "#F5F0E8",
  black: "#0A0A0A",
  white: "#FFFFFF",
  yellow: "#FFE033",
  orange: "#FF5C1A",
  blue: "#1A3FFF",
  green: "#00C851",
  pink: "#FF2D78",
  border: "3px solid #0A0A0A",
  shadow: "4px 4px 0px #0A0A0A",
  shadowLg: "6px 6px 0px #0A0A0A",
};

const mockPosts = [
  { id: 1, user: "priya_k", avatar: "PK", college: "IIT Bombay", image: "https://picsum.photos/seed/campus1/400/300", likes: 142, comments: 23, caption: "Library grind szn 📚 who else pulling all-nighters?", time: "2h" },
  { id: 2, user: "rahul_ds", avatar: "RD", college: "IIT Bombay", image: "https://picsum.photos/seed/campus2/400/300", likes: 89, comments: 11, caption: "Canteen samosas hit different at 11pm ngl", time: "4h" },
  { id: 3, user: "ananya_m", avatar: "AM", college: "IIT Bombay", image: "https://picsum.photos/seed/campus3/400/300", likes: 203, comments: 41, caption: "Convocation season!! We made it 🎓✨", time: "6h" },
];

const mockDiscussions = [
  { id: 1, title: "Best spots to study that aren't the main library?", author: "curious_coder", votes: 47, comments: 23, tag: "Campus Life", hot: true },
  { id: 2, title: "Prof Sharma's DS exam — anyone else found it brutal?", author: "sleep_deprived", votes: 89, comments: 56, tag: "Classes", hot: true },
  { id: 3, title: "Techfest volunteer signups are open!", author: "events_cell", votes: 134, comments: 12, tag: "Events", hot: false },
  { id: 4, title: "Mess food has actually improved this semester", author: "foodie_iitb", votes: 22, comments: 67, tag: "General", hot: false },
];

const mockColleges = [
  { id: 1, name: "IIT Delhi", shortName: "IITD", color: "#1A3FFF", members: "4.2k", posts: "892" },
  { id: 2, name: "BITS Pilani", shortName: "BITS", color: "#FF2D78", members: "3.8k", posts: "671" },
  { id: 3, name: "NIT Trichy", shortName: "NITT", color: "#FF5C1A", members: "2.9k", posts: "445" },
  { id: 4, name: "VIT Vellore", shortName: "VIT", color: "#00C851", members: "5.1k", posts: "1.2k" },
];

const explorePosts = [
  { id: 1, image: "https://picsum.photos/seed/exp1/200/200", college: "BITS", likes: 892 },
  { id: 2, image: "https://picsum.photos/seed/exp2/200/200", college: "IITD", likes: 1204 },
  { id: 3, image: "https://picsum.photos/seed/exp3/200/200", college: "NIT", likes: 567 },
  { id: 4, image: "https://picsum.photos/seed/exp4/200/200", college: "VIT", likes: 2341 },
  { id: 5, image: "https://picsum.photos/seed/exp5/200/200", college: "IITB", likes: 445 },
  { id: 6, image: "https://picsum.photos/seed/exp6/200/200", college: "IITM", likes: 789 },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const NavBar = ({ active, setScreen }) => {
  const tabs = [
    { id: "feed", icon: "⊞", label: "Feed" },
    { id: "discuss", icon: "◈", label: "Talk" },
    { id: "create", icon: "＋", label: "Post" },
    { id: "explore", icon: "◎", label: "Explore" },
    { id: "profile", icon: "◉", label: "Me" },
  ];
  return (
    <div style={{
      display: "flex", justifyContent: "space-around", alignItems: "center",
      background: COLORS.black, borderTop: COLORS.border,
      padding: "10px 8px 16px", position: "sticky", bottom: 0, zIndex: 100,
    }}>
      {tabs.map(t => (
        <button key={t.id}
          onClick={() => setScreen(t.id)}
          style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
            background: active === t.id ? COLORS.yellow : "transparent",
            border: active === t.id ? COLORS.border : "3px solid transparent",
            padding: "6px 12px", cursor: "pointer",
            boxShadow: active === t.id ? "2px 2px 0 #fff" : "none",
          }}>
          <span style={{ fontSize: 18, color: active === t.id ? COLORS.black : COLORS.white }}>{t.icon}</span>
          <span style={{ fontSize: 9, fontFamily: "'Space Mono', monospace", fontWeight: 700, color: active === t.id ? COLORS.black : "#888", letterSpacing: "0.05em" }}>{t.label.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};

const Tag = ({ label, color = COLORS.yellow }) => (
  <span style={{
    fontFamily: "'Space Mono', monospace", fontSize: 9, fontWeight: 700,
    background: color, color: COLORS.black, border: "2px solid " + COLORS.black,
    padding: "2px 8px", letterSpacing: "0.08em", textTransform: "uppercase",
  }}>{label}</span>
);

// ─── SCREENS ─────────────────────────────────────────────────────────────────

const OnboardingScreen = ({ onDone }) => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const colleges = ["IIT Bombay", "IIT Delhi", "BITS Pilani", "NIT Trichy", "VIT Vellore", "SRCC Delhi", "St. Xavier's", "Jadavpur Uni"];

  if (step === 0) return (
    <div style={{ background: COLORS.yellow, minHeight: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 28, fontFamily: "'Space Mono', monospace" }}>
      <div style={{ border: COLORS.border, background: COLORS.white, padding: 4, display: "inline-block", width: "fit-content", boxShadow: COLORS.shadowLg, marginBottom: 32 }}>
        <div style={{ background: COLORS.black, padding: "6px 14px" }}>
          <span style={{ color: COLORS.yellow, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em" }}>CAMPUS //</span>
        </div>
      </div>
      <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 52, lineHeight: 1, color: COLORS.black, margin: "0 0 16px", letterSpacing: "-1px" }}>YOUR CAMPUS.<br />YOUR CROWD.</h1>
      <p style={{ fontSize: 12, color: COLORS.black, lineHeight: 1.6, margin: "0 0 40px", opacity: 0.7 }}>A social network that actually knows where you go to college. No randos. No algorithm. Just your people.</p>
      <button onClick={() => setStep(1)} style={{
        background: COLORS.black, color: COLORS.yellow, border: COLORS.border,
        padding: "16px 24px", fontFamily: "'Space Mono', monospace", fontWeight: 700,
        fontSize: 13, letterSpacing: "0.1em", cursor: "pointer",
        boxShadow: COLORS.shadowLg, textTransform: "uppercase",
      }}>JOIN YOUR CAMPUS →</button>
    </div>
  );

  return (
    <div style={{ background: COLORS.bg, minHeight: "100%", padding: 24, fontFamily: "'Space Mono', monospace" }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, color: COLORS.black, letterSpacing: "-0.5px", marginBottom: 4 }}>FIND YOUR COLLEGE</div>
        <p style={{ fontSize: 11, color: "#555", margin: 0 }}>Select your institution to join its community</p>
      </div>
      <div style={{ border: COLORS.border, background: COLORS.white, padding: "10px 14px", boxShadow: COLORS.shadow, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 14 }}>◎</span>
        <span style={{ fontSize: 12, color: "#888" }}>Search colleges...</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {colleges.map(c => (
          <button key={c} onClick={() => setSelected(c)} style={{
            background: selected === c ? COLORS.yellow : COLORS.white,
            border: selected === c ? "3px solid " + COLORS.black : "2px solid #ccc",
            padding: "14px 16px", textAlign: "left", cursor: "pointer",
            fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 12,
            boxShadow: selected === c ? COLORS.shadow : "none",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span>{c}</span>
            {selected === c && <span>✓</span>}
          </button>
        ))}
      </div>
      {selected && (
        <button onClick={onDone} style={{
          width: "100%", marginTop: 24, background: COLORS.black, color: COLORS.yellow,
          border: COLORS.border, padding: 16, fontFamily: "'Space Mono', monospace",
          fontWeight: 700, fontSize: 13, cursor: "pointer", boxShadow: COLORS.shadowLg,
          letterSpacing: "0.1em",
        }}>JOIN {selected.toUpperCase()} →</button>
      )}
    </div>
  );
};

const FeedScreen = () => {
  const [liked, setLiked] = useState({});
  return (
    <div style={{ background: COLORS.bg, minHeight: "100%", fontFamily: "'Space Mono', monospace" }}>
      {/* Header */}
      <div style={{ background: COLORS.black, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: COLORS.border }}>
        <div>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: COLORS.yellow, letterSpacing: "-0.5px" }}>CAMPUS //</div>
          <div style={{ fontSize: 9, color: "#888", letterSpacing: "0.1em" }}>IIT BOMBAY</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={{ background: "transparent", border: "2px solid #555", color: COLORS.white, width: 36, height: 36, cursor: "pointer", fontSize: 14 }}>◎</button>
          <button style={{ background: COLORS.yellow, border: COLORS.border, color: COLORS.black, width: 36, height: 36, cursor: "pointer", fontSize: 14 }}>🔔</button>
        </div>
      </div>
      {/* Stories */}
      <div style={{ padding: "14px 16px", overflowX: "auto", display: "flex", gap: 12, borderBottom: "2px solid " + COLORS.black }}>
        {["Add", "priya", "rahul", "dev", "ananya", "sid"].map((s, i) => (
          <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
            <div style={{
              width: 52, height: 52, border: i === 0 ? "2px dashed " + COLORS.black : "3px solid " + (i % 2 === 0 ? COLORS.orange : COLORS.blue),
              background: i === 0 ? COLORS.white : [COLORS.yellow, COLORS.pink, COLORS.blue, COLORS.green, COLORS.orange][i % 5],
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: i === 0 ? 20 : 12, color: COLORS.black,
              boxShadow: "2px 2px 0 " + COLORS.black,
            }}>{i === 0 ? "+" : s.slice(0, 2).toUpperCase()}</div>
            <span style={{ fontSize: 8, letterSpacing: "0.05em" }}>{s}</span>
          </div>
        ))}
      </div>
      {/* Posts */}
      <div style={{ padding: "0 0 16px" }}>
        {mockPosts.map(post => (
          <div key={post.id} style={{ margin: "16px 16px 0", border: COLORS.border, background: COLORS.white, boxShadow: COLORS.shadowLg }}>
            {/* Post header */}
            <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid " + COLORS.black }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 34, height: 34, background: COLORS.yellow, border: COLORS.border, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 11 }}>{post.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12 }}>{post.user}</div>
                  <div style={{ fontSize: 9, color: "#888" }}>{post.time} ago</div>
                </div>
              </div>
              <span style={{ fontSize: 18, color: "#888", cursor: "pointer" }}>···</span>
            </div>
            {/* Image */}
            <div style={{ borderBottom: "2px solid " + COLORS.black, overflow: "hidden" }}>
              <img src={post.image} alt="" style={{ width: "100%", display: "block", height: 220, objectFit: "cover" }} />
            </div>
            {/* Actions */}
            <div style={{ padding: "10px 14px", borderBottom: "2px solid " + COLORS.black, display: "flex", gap: 12, alignItems: "center" }}>
              <button onClick={() => setLiked(l => ({ ...l, [post.id]: !l[post.id] }))} style={{
                background: liked[post.id] ? COLORS.pink : "transparent",
                border: liked[post.id] ? "2px solid " + COLORS.black : "2px solid #ccc",
                padding: "4px 10px", cursor: "pointer", fontFamily: "'Space Mono', monospace",
                fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", gap: 4,
              }}>♥ {post.likes + (liked[post.id] ? 1 : 0)}</button>
              <button style={{ background: "transparent", border: "2px solid #ccc", padding: "4px 10px", cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700 }}>◈ {post.comments}</button>
              <button style={{ background: "transparent", border: "2px solid #ccc", padding: "4px 10px", cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700, marginLeft: "auto" }}>↗</button>
            </div>
            {/* Caption */}
            <div style={{ padding: "10px 14px" }}>
              <span style={{ fontWeight: 700, fontSize: 11 }}>{post.user} </span>
              <span style={{ fontSize: 11, color: "#333" }}>{post.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DiscussScreen = () => {
  const tags = ["All", "Campus Life", "Classes", "Events", "General"];
  const [activeTag, setActiveTag] = useState("All");
  const tagColors = { "Campus Life": COLORS.blue, "Classes": COLORS.orange, "Events": COLORS.green, "General": COLORS.pink };
  return (
    <div style={{ background: COLORS.bg, minHeight: "100%", fontFamily: "'Space Mono', monospace" }}>
      <div style={{ background: COLORS.black, padding: "16px 20px", borderBottom: COLORS.border }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: COLORS.yellow, letterSpacing: "-0.5px" }}>IITB TALK</div>
        <div style={{ fontSize: 9, color: "#888", letterSpacing: "0.1em" }}>DISCUSSION BOARD</div>
      </div>
      {/* Filter tags */}
      <div style={{ padding: "12px 16px", display: "flex", gap: 8, overflowX: "auto", borderBottom: "2px solid " + COLORS.black }}>
        {tags.map(t => (
          <button key={t} onClick={() => setActiveTag(t)} style={{
            background: activeTag === t ? COLORS.black : COLORS.white,
            color: activeTag === t ? COLORS.yellow : COLORS.black,
            border: COLORS.border, padding: "6px 12px", cursor: "pointer",
            fontFamily: "'Space Mono', monospace", fontSize: 9, fontWeight: 700,
            letterSpacing: "0.08em", flexShrink: 0,
            boxShadow: activeTag === t ? COLORS.shadow : "none",
          }}>{t.toUpperCase()}</button>
        ))}
      </div>
      {/* New thread CTA */}
      <div style={{ margin: "16px 16px 0", background: COLORS.yellow, border: COLORS.border, padding: "12px 14px", boxShadow: COLORS.shadow, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ flex: 1, fontSize: 11, color: "#888", background: COLORS.white, border: "2px solid " + COLORS.black, padding: "8px 12px" }}>Start a discussion...</div>
        <button style={{ background: COLORS.black, color: COLORS.yellow, border: COLORS.border, padding: "8px 14px", fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 11, cursor: "pointer" }}>+ POST</button>
      </div>
      {/* Discussions */}
      <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        {mockDiscussions.map(d => (
          <div key={d.id} style={{ background: COLORS.white, border: COLORS.border, boxShadow: COLORS.shadow, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <Tag label={d.tag} color={tagColors[d.tag] || COLORS.yellow} />
              {d.hot && <Tag label="🔥 HOT" color={COLORS.orange} />}
            </div>
            <div style={{ fontWeight: 700, fontSize: 13, lineHeight: 1.4, marginBottom: 8, color: COLORS.black }}>{d.title}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9, color: "#888" }}>by {d.author}</span>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700 }}>▲ {d.votes}</span>
                <span style={{ fontSize: 10, color: "#888" }}>◈ {d.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExploreScreen = ({ setScreen }) => {
  const [view, setView] = useState("posts");
  return (
    <div style={{ background: COLORS.bg, minHeight: "100%", fontFamily: "'Space Mono', monospace" }}>
      <div style={{ background: COLORS.black, padding: "16px 20px", borderBottom: COLORS.border }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: COLORS.yellow, letterSpacing: "-0.5px" }}>EXPLORE</div>
        <div style={{ fontSize: 9, color: "#888", letterSpacing: "0.1em" }}>ACROSS ALL CAMPUSES</div>
      </div>
      {/* Toggle */}
      <div style={{ display: "flex", borderBottom: "2px solid " + COLORS.black }}>
        {["posts", "colleges"].map(v => (
          <button key={v} onClick={() => setView(v)} style={{
            flex: 1, padding: "12px", background: view === v ? COLORS.yellow : COLORS.white,
            border: "none", borderRight: v === "posts" ? "2px solid " + COLORS.black : "none",
            fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 10,
            cursor: "pointer", letterSpacing: "0.08em",
          }}>{v === "posts" ? "🔥 TRENDING POSTS" : "🏛 ALL COLLEGES"}</button>
        ))}
      </div>
      {view === "posts" ? (
        <div style={{ padding: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {explorePosts.map(p => (
              <div key={p.id} style={{ border: COLORS.border, boxShadow: COLORS.shadow, overflow: "hidden", position: "relative" }}>
                <img src={p.image} alt="" style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.85)", padding: "6px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: COLORS.yellow, fontSize: 9, fontWeight: 700 }}>{p.college}</span>
                  <span style={{ color: COLORS.white, fontSize: 9 }}>♥ {p.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {mockColleges.map(c => (
            <div key={c.id} onClick={() => setScreen("college")} style={{ background: COLORS.white, border: COLORS.border, boxShadow: COLORS.shadow, padding: 14, display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
              <div style={{ width: 48, height: 48, background: c.color, border: COLORS.border, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Anton', sans-serif", fontSize: 14, color: COLORS.white, flexShrink: 0 }}>{c.shortName}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{c.name}</div>
                <div style={{ display: "flex", gap: 12 }}>
                  <span style={{ fontSize: 9, color: "#888" }}>👥 {c.members} members</span>
                  <span style={{ fontSize: 9, color: "#888" }}>📸 {c.posts} posts</span>
                </div>
              </div>
              <div style={{ background: COLORS.bg, border: "2px solid " + COLORS.black, padding: "4px 8px", fontSize: 9, fontWeight: 700 }}>VIEW →</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CollegeViewScreen = ({ goBack }) => (
  <div style={{ background: COLORS.bg, minHeight: "100%", fontFamily: "'Space Mono', monospace" }}>
    {/* Banner */}
    <div style={{ background: COLORS.blue, padding: "20px 20px 16px", borderBottom: COLORS.border, position: "relative" }}>
      <button onClick={goBack} style={{ background: COLORS.white, border: COLORS.border, padding: "4px 10px", fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700, cursor: "pointer", marginBottom: 16 }}>← BACK</button>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 56, height: 56, background: COLORS.white, border: "3px solid " + COLORS.black, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Anton', sans-serif", fontSize: 16, color: COLORS.blue, boxShadow: COLORS.shadow }}>IITD</div>
        <div>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 24, color: COLORS.white, letterSpacing: "-0.5px" }}>IIT DELHI</div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em" }}>4,200 MEMBERS · 892 POSTS</div>
        </div>
      </div>
      {/* Read-only badge */}
      <div style={{ marginTop: 12, background: COLORS.black, border: "2px solid " + COLORS.yellow, padding: "6px 12px", display: "inline-flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: COLORS.yellow, fontSize: 9, fontWeight: 700, letterSpacing: "0.1em" }}>👁 READ-ONLY — YOU CAN'T POST HERE</span>
      </div>
    </div>
    <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
      {mockPosts.slice(0, 2).map(post => (
        <div key={post.id} style={{ border: COLORS.border, background: COLORS.white, boxShadow: COLORS.shadow, opacity: 0.95 }}>
          <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: "2px solid " + COLORS.black }}>
            <div style={{ width: 30, height: 30, background: COLORS.blue, border: COLORS.border, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: COLORS.white }}>{post.avatar}</div>
            <span style={{ fontWeight: 700, fontSize: 11 }}>{post.user}</span>
          </div>
          <img src={post.image} alt="" style={{ width: "100%", height: 180, objectFit: "cover", display: "block", borderBottom: "2px solid " + COLORS.black }} />
          <div style={{ padding: "8px 12px", display: "flex", justifyContent: "space-between", opacity: 0.6 }}>
            <span style={{ fontSize: 10 }}>♥ {post.likes}</span>
            <span style={{ fontSize: 10 }}>◈ {post.comments}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CreateScreen = () => {
  const [caption, setCaption] = useState("");
  return (
    <div style={{ background: COLORS.bg, minHeight: "100%", fontFamily: "'Space Mono', monospace" }}>
      <div style={{ background: COLORS.black, padding: "16px 20px", borderBottom: COLORS.border }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: COLORS.yellow, letterSpacing: "-0.5px" }}>NEW POST</div>
        <div style={{ fontSize: 9, color: "#888", letterSpacing: "0.1em" }}>SHARE TO IITB</div>
      </div>
      <div style={{ padding: 20 }}>
        {/* Upload zone */}
        <div style={{ border: "3px dashed " + COLORS.black, background: COLORS.white, height: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 20, cursor: "pointer", gap: 8 }}>
          <div style={{ fontSize: 36 }}>📷</div>
          <div style={{ fontSize: 12, fontWeight: 700 }}>TAP TO ADD PHOTO</div>
          <div style={{ fontSize: 9, color: "#888" }}>FROM GALLERY OR CAMERA</div>
        </div>
        {/* Caption */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>CAPTION</div>
          <textarea
            value={caption}
            onChange={e => setCaption(e.target.value)}
            placeholder="What's happening on campus?"
            style={{ width: "100%", height: 80, border: COLORS.border, padding: 10, fontFamily: "'Space Mono', monospace", fontSize: 11, resize: "none", background: COLORS.white, boxSizing: "border-box", boxShadow: COLORS.shadow }}
          />
        </div>
        {/* Tags */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>TAG</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Campus Life", "Events", "Classes", "Food", "Sports"].map(t => (
              <button key={t} style={{ background: COLORS.white, border: COLORS.border, padding: "6px 10px", fontFamily: "'Space Mono', monospace", fontSize: 9, fontWeight: 700, cursor: "pointer" }}>{t}</button>
            ))}
          </div>
        </div>
        <button style={{ width: "100%", background: COLORS.black, color: COLORS.yellow, border: COLORS.border, padding: 16, fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 13, cursor: "pointer", boxShadow: COLORS.shadowLg, letterSpacing: "0.1em" }}>
          POST TO IITB →
        </button>
      </div>
    </div>
  );
};

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("posts");
  return (
    <div style={{ background: COLORS.bg, minHeight: "100%", fontFamily: "'Space Mono', monospace" }}>
      <div style={{ background: COLORS.black, padding: "16px 20px", borderBottom: COLORS.border, display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: COLORS.yellow }}>PROFILE</div>
        <button style={{ background: COLORS.white, border: COLORS.border, padding: "4px 10px", fontSize: 10, fontWeight: 700, cursor: "pointer" }}>⚙ EDIT</button>
      </div>
      {/* Profile block */}
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ background: COLORS.white, border: COLORS.border, boxShadow: COLORS.shadowLg, padding: 16, marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
            <div style={{ width: 60, height: 60, background: COLORS.yellow, border: COLORS.border, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Anton', sans-serif", fontSize: 22, color: COLORS.black, boxShadow: COLORS.shadow }}>PK</div>
            <div>
              <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 20, color: COLORS.black, letterSpacing: "-0.5px" }}>priya_k</div>
              <Tag label="IIT BOMBAY" color={COLORS.yellow} />
            </div>
          </div>
          <div style={{ borderTop: "2px solid " + COLORS.black, paddingTop: 12, display: "flex", justifyContent: "space-around" }}>
            {[["24", "POSTS"], ["891", "FOLLOWERS"], ["344", "FOLLOWING"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: COLORS.black }}>{n}</div>
                <div style={{ fontSize: 8, color: "#888", letterSpacing: "0.1em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Tabs */}
        <div style={{ display: "flex", border: COLORS.border, marginBottom: 12, boxShadow: COLORS.shadow }}>
          {[["posts", "⊞ POSTS"], ["discuss", "◈ THREADS"]].map(([id, label]) => (
            <button key={id} onClick={() => setActiveTab(id)} style={{
              flex: 1, padding: 10, background: activeTab === id ? COLORS.black : COLORS.white,
              color: activeTab === id ? COLORS.yellow : COLORS.black,
              border: "none", borderRight: id === "posts" ? "2px solid " + COLORS.black : "none",
              fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 9, cursor: "pointer",
            }}>{label}</button>
          ))}
        </div>
        {/* Post grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} style={{ border: "2px solid " + COLORS.black, overflow: "hidden" }}>
              <img src={`https://picsum.photos/seed/prof${i}/120/120`} alt="" style={{ width: "100%", height: 90, objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [onboarded, setOnboarded] = useState(false);
  const [screen, setScreen] = useState("feed");
  const [prevScreen, setPrevScreen] = useState(null);

  const navigateTo = (s) => {
    setPrevScreen(screen);
    setScreen(s);
  };

  if (!onboarded) return (
    <div style={{ maxWidth: 390, margin: "0 auto", height: "100vh", overflow: "auto", fontFamily: "'Space Mono', monospace", background: COLORS.yellow }}>
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      <OnboardingScreen onDone={() => setOnboarded(true)} />
    </div>
  );

  const renderScreen = () => {
    if (screen === "college") return <CollegeViewScreen goBack={() => setScreen(prevScreen || "explore")} />;
    if (screen === "create") return <CreateScreen />;
    if (screen === "discuss") return <DiscussScreen />;
    if (screen === "explore") return <ExploreScreen setScreen={navigateTo} />;
    if (screen === "profile") return <ProfileScreen />;
    return <FeedScreen />;
  };

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "'Space Mono', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      <div style={{ flex: 1, overflowY: "auto" }}>
        {renderScreen()}
      </div>
      {screen !== "college" && <NavBar active={screen} setScreen={setScreen} />}
    </div>
  );
}