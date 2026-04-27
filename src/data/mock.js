// ─── CAMPUS TEA MOCK DATA ────────────────────────────────────────────────────

// Current logged-in user
export const currentUser = {
  id: 0,
  name: 'Arnav Saini',
  username: 'arnav_s',
  avatar: 'AS',
  avatarColor: '#FFE033',
  bio: 'CS undergrad • building cool stuff • ☕ powered',
  year: '3rd Year',
  department: 'Computer Science',
  college: 'IIT Bombay',
  collegeShort: 'IITB',
  clubs: ['Coding Club', 'E-Cell', 'Photography Club'],
  socialLinks: { instagram: '@arnav.saini', linkedin: 'arnav-saini' },
  followers: 891,
  following: 344,
  postsCount: 24,
  threadsCount: 8,
  isPrivate: false,
};

// ─── STORIES ─────────────────────────────────────────────────────────────────

export const stories = [
  { id: 1, user: 'priya_k', avatar: 'PK', color: '#FF2D78', image: 'https://picsum.photos/seed/st1/400/700', time: '1h', viewed: false },
  { id: 2, user: 'rahul_ds', avatar: 'RD', color: '#1A3FFF', image: 'https://picsum.photos/seed/st2/400/700', time: '2h', viewed: false },
  { id: 3, user: 'dev_sh', avatar: 'DS', color: '#00C851', image: 'https://picsum.photos/seed/st3/400/700', time: '3h', viewed: false },
  { id: 4, user: 'ananya_m', avatar: 'AM', color: '#FF5C1A', image: 'https://picsum.photos/seed/st4/400/700', time: '4h', viewed: true },
  { id: 5, user: 'sid_p', avatar: 'SP', color: '#8B5CF6', image: 'https://picsum.photos/seed/st5/400/700', time: '5h', viewed: true },
  { id: 6, user: 'megha_r', avatar: 'MR', color: '#FFE033', image: 'https://picsum.photos/seed/st6/400/700', time: '6h', viewed: false },
  { id: 7, user: 'vikram_j', avatar: 'VJ', color: '#FF2D78', image: 'https://picsum.photos/seed/st7/400/700', time: '8h', viewed: true },
];

// ─── FEED POSTS ──────────────────────────────────────────────────────────────

export const feedPosts = [
  {
    id: 1, type: 'photo',
    user: { username: 'priya_k', avatar: 'PK', color: '#FF2D78' },
    images: ['https://picsum.photos/seed/campus1/400/400'],
    caption: 'Library grind szn 📚 who else pulling all-nighters before midsems?',
    likes: 142, comments: 23, time: '2h',
    location: 'Central Library', tags: ['Campus Life'],
  },
  {
    id: 2, type: 'carousel',
    user: { username: 'rahul_ds', avatar: 'RD', color: '#1A3FFF' },
    images: [
      'https://picsum.photos/seed/fest1/400/400',
      'https://picsum.photos/seed/fest2/400/400',
      'https://picsum.photos/seed/fest3/400/400',
    ],
    caption: 'Techfest Day 1 was INSANE 🚀 swipe for more highlights →',
    likes: 312, comments: 45, time: '4h',
    location: 'Main Grounds', tags: ['Events'],
  },
  {
    id: 3, type: 'poll',
    user: { username: 'foodie_iitb', avatar: 'FI', color: '#00C851' },
    question: 'Which mess food is actually edible this week?',
    options: [
      { id: 1, text: 'H1 Mess', votes: 45 },
      { id: 2, text: 'H4 Mess', votes: 89 },
      { id: 3, text: 'H7 Mess', votes: 23 },
      { id: 4, text: 'None lol 💀', votes: 156 },
    ],
    totalVotes: 313,
    caption: '',
    likes: 67, comments: 34, time: '6h',
    tags: ['Food'],
  },
  {
    id: 4, type: 'photo',
    user: { username: 'ananya_m', avatar: 'AM', color: '#FF5C1A' },
    images: ['https://picsum.photos/seed/campus4/400/400'],
    caption: 'Golden hour at the lake ✨ this campus never stops surprising me',
    likes: 203, comments: 18, time: '8h',
    location: 'Powai Lake', tags: ['Campus Life'],
  },
  {
    id: 5, type: 'carousel',
    user: { username: 'dev_sh', avatar: 'DS', color: '#00C851' },
    images: [
      'https://picsum.photos/seed/hostel1/400/400',
      'https://picsum.photos/seed/hostel2/400/400',
    ],
    caption: 'Hostel room glow-up 🛏️ before → after. Rate /10?',
    likes: 178, comments: 52, time: '12h',
    location: 'Hostel 4', tags: ['General'],
  },
  {
    id: 6, type: 'poll',
    user: { username: 'sid_p', avatar: 'SP', color: '#8B5CF6' },
    question: 'Best study spot on campus?',
    options: [
      { id: 1, text: 'Central Library', votes: 120 },
      { id: 2, text: 'SOM Reading Room', votes: 67 },
      { id: 3, text: 'SAC Café', votes: 89 },
      { id: 4, text: 'Under a tree lol', votes: 45 },
    ],
    totalVotes: 321,
    caption: '',
    likes: 45, comments: 21, time: '1d',
    tags: ['Campus Life'],
  },
];

// ─── DISCUSSION BOARDS ───────────────────────────────────────────────────────

export const boards = [
  { id: 'all', name: 'All', icon: '◎', color: '#FFE033' },
  { id: 'general', name: 'General', icon: '💬', color: '#FFE033' },
  { id: 'academics', name: 'Academics', icon: '📚', color: '#1A3FFF' },
  { id: 'placements', name: 'Placements', icon: '💼', color: '#00C851' },
  { id: 'campus-life', name: 'Campus Life', icon: '🏫', color: '#FF5C1A' },
  { id: 'events', name: 'Events', icon: '🎉', color: '#8B5CF6' },
  { id: 'confessions', name: 'Confessions', icon: '🎭', color: '#FF2D78' },
];

export const threads = [
  {
    id: 1, board: 'academics',
    title: 'Prof Sharma\'s DS exam — anyone else found it brutal?',
    author: 'sleep_deprived', avatar: 'SD', avatarColor: '#1A3FFF',
    content: 'Literally couldn\'t solve Q3 and Q5. The time limit was insane. How did it go for everyone else?',
    votes: 89, commentCount: 56, time: '3h', hot: true, pinned: false, isAnonymous: false,
  },
  {
    id: 2, board: 'campus-life',
    title: 'Best spots to study that aren\'t the main library?',
    author: 'curious_coder', avatar: 'CC', avatarColor: '#00C851',
    content: 'Library is always packed. Need quiet places with power outlets. Any hidden gems?',
    votes: 47, commentCount: 23, time: '5h', hot: true, pinned: false, isAnonymous: false,
  },
  {
    id: 3, board: 'events',
    title: 'Techfest volunteer signups are open!',
    author: 'events_cell', avatar: 'EC', avatarColor: '#8B5CF6',
    content: 'Registrations close Friday. Sign up on the portal. Perks include free merch + fest pass.',
    votes: 134, commentCount: 12, time: '8h', hot: false, pinned: true, isAnonymous: false,
  },
  {
    id: 4, board: 'general',
    title: 'Mess food has actually improved this semester',
    author: 'foodie_iitb', avatar: 'FI', avatarColor: '#FF5C1A',
    content: 'H4 mess paneer today was legit good. Am I dreaming or has the mess vendor changed?',
    votes: 22, commentCount: 67, time: '12h', hot: false, pinned: false, isAnonymous: false,
  },
  {
    id: 5, board: 'placements',
    title: 'Internship season prep — what resources are you using?',
    author: 'grind_mode', avatar: 'GM', avatarColor: '#FFE033',
    content: 'Starting prep for summer internships. LeetCode or GeeksForGeeks? What DSA sheet works best?',
    votes: 201, commentCount: 89, time: '1d', hot: true, pinned: false, isAnonymous: false,
  },
  {
    id: 6, board: 'confessions',
    title: 'I have a crush on someone in my DSA class...',
    author: 'Anonymous', avatar: '🎭', avatarColor: '#FF2D78',
    content: 'They always sit in the third row and explain doubts so patiently. I\'m too shy to even say hi. What do I do 😭',
    votes: 312, commentCount: 145, time: '6h', hot: true, pinned: false, isAnonymous: true,
  },
  {
    id: 7, board: 'confessions',
    title: 'Haven\'t attended a single lecture this week',
    author: 'Anonymous', avatar: '🎭', avatarColor: '#FF2D78',
    content: 'And honestly? Zero regrets. YouTube lectures >>> 2 hour 8am classes. Fight me.',
    votes: 178, commentCount: 98, time: '1d', hot: false, pinned: false, isAnonymous: true,
  },
  {
    id: 8, board: 'academics',
    title: 'Which elective should I take next sem?',
    author: 'confused_3rd_yr', avatar: 'C3', avatarColor: '#1A3FFF',
    content: 'Torn between ML, Computer Vision, and NLP. Which prof is the best? Any recommendations?',
    votes: 56, commentCount: 34, time: '2d', hot: false, pinned: false, isAnonymous: false,
  },
];

export const threadComments = [
  {
    id: 1, author: 'code_monkey', avatar: 'CM', avatarColor: '#00C851',
    content: 'Q3 was literally from a topic he never taught in class lol', votes: 34, time: '2h',
    replies: [
      { id: 11, author: 'sleep_deprived', avatar: 'SD', avatarColor: '#1A3FFF', content: 'RIGHT?? I checked the syllabus twice', votes: 12, time: '1h', replies: [] },
      { id: 12, author: 'math_wiz', avatar: 'MW', avatarColor: '#FFE033', content: 'It was actually in tutorial sheet 5, page 3 🤓', votes: 8, time: '45m', replies: [] },
    ],
  },
  {
    id: 2, author: 'topper_vibes', avatar: 'TV', avatarColor: '#FF5C1A',
    content: 'I thought Q5 was fair tbh. It was a direct application of AVL rotations.', votes: 5, time: '3h',
    replies: [
      { id: 21, author: 'not_a_topper', avatar: 'NT', avatarColor: '#8B5CF6', content: 'Must be nice being smart 😂', votes: 23, time: '2h', replies: [] },
    ],
  },
  {
    id: 3, author: 'anonymous_user', avatar: 'AU', avatarColor: '#FF2D78',
    content: 'At this point I\'m just hoping for relative grading to save us all', votes: 67, time: '1h',
    replies: [],
  },
];

// ─── COLLEGES ────────────────────────────────────────────────────────────────

export const colleges = [
  { id: 1, name: 'IIT Delhi', shortName: 'IITD', color: '#1A3FFF', members: '4.2k', posts: '892', description: 'Indian Institute of Technology Delhi — one of India\'s premier engineering institutions, known for cutting-edge research and vibrant campus life.' },
  { id: 2, name: 'BITS Pilani', shortName: 'BITS', color: '#FF2D78', members: '3.8k', posts: '671', description: 'Birla Institute of Technology & Science — known for its unique academic flexibility and legendary fest culture.' },
  { id: 3, name: 'NIT Trichy', shortName: 'NITT', color: '#FF5C1A', members: '2.9k', posts: '445', description: 'National Institute of Technology Tiruchirappalli — top NIT with a strong coding culture and beautiful campus.' },
  { id: 4, name: 'VIT Vellore', shortName: 'VIT', color: '#00C851', members: '5.1k', posts: '1.2k', description: 'Vellore Institute of Technology — one of India\'s largest private universities with a massive student community.' },
  { id: 5, name: 'SRCC Delhi', shortName: 'SRCC', color: '#8B5CF6', members: '1.8k', posts: '334', description: 'Shri Ram College of Commerce — Delhi University\'s crown jewel for commerce and economics.' },
  { id: 6, name: 'St. Xavier\'s Mumbai', shortName: 'SXC', color: '#FFE033', members: '2.1k', posts: '289', description: 'One of Mumbai\'s most prestigious liberal arts colleges with a rich heritage.' },
  { id: 7, name: 'Jadavpur University', shortName: 'JU', color: '#FF5C1A', members: '3.2k', posts: '512', description: 'Kolkata\'s top public university, known for engineering excellence and cultural depth.' },
  { id: 8, name: 'IIT Madras', shortName: 'IITM', color: '#1A3FFF', members: '4.5k', posts: '967', description: 'Located inside a national park, IITM is renowned for research, startups, and deer on campus.' },
];

// ─── MY CAMPUS DATA (IIT Bombay) ─────────────────────────────────────────────

export const myCampus = {
  name: 'IIT Bombay',
  shortName: 'IITB',
  color: '#FFE033',
  members: '5.8k',
  posts: '1.4k',
  description: 'Indian Institute of Technology Bombay — India\'s top engineering school, located on the shores of Powai Lake.',
};

export const clubs = [
  { id: 1, name: 'Coding Club', icon: '💻', members: 342, description: 'Competitive programming, hackathons, and open-source projects.' },
  { id: 2, name: 'E-Cell', icon: '🚀', members: 210, description: 'Entrepreneurship cell — startup talks, pitch nights, and incubation.' },
  { id: 3, name: 'Photography Club', icon: '📸', members: 156, description: 'Campus shoots, photo walks, and annual exhibitions.' },
  { id: 4, name: 'Dramatics Club', icon: '🎭', members: 89, description: 'Theatre productions, improv nights, and inter-college competitions.' },
  { id: 5, name: 'Music Club', icon: '🎵', members: 178, description: 'Open mics, band nights, and the annual Battle of Bands.' },
  { id: 6, name: 'Robotics Club', icon: '🤖', members: 124, description: 'Building robots, competing in national competitions, and weekend builds.' },
  { id: 7, name: 'Literary Arts', icon: '✍️', members: 67, description: 'Creative writing, poetry slams, and the campus magazine.' },
  { id: 8, name: 'Sports Council', icon: '⚽', members: 445, description: 'Inter-hostel tournaments, coaching, and sports infrastructure.' },
];

export const events = [
  { id: 1, title: 'Techfest 2026', club: 'Tech Council', date: 'May 15-17', location: 'Main Grounds', attendees: 2400, description: 'Asia\'s largest science & tech festival. Three days of competitions, exhibitions, and talks.', color: '#1A3FFF' },
  { id: 2, title: 'Open Mic Night', club: 'Music Club', date: 'Apr 30', location: 'SAC Auditorium', attendees: 120, description: 'Monthly open mic — bring your guitar, poetry, or stand-up.', color: '#FF2D78' },
  { id: 3, title: 'Hackathon: Build for India', club: 'Coding Club', date: 'May 3-4', location: 'CS Department', attendees: 200, description: '24-hour hackathon. Build solutions for real social problems.', color: '#00C851' },
  { id: 4, title: 'Photography Walk', club: 'Photography Club', date: 'May 1', location: 'Powai Lake', attendees: 45, description: 'Golden hour campus walk with mentors. Bring your camera or phone.', color: '#FF5C1A' },
  { id: 5, title: 'Startup Pitch Night', club: 'E-Cell', date: 'May 8', location: 'Victor Menezes Convention Centre', attendees: 300, description: 'Top 10 student startups pitch to real VCs. Networking dinner included.', color: '#8B5CF6' },
];

export const announcements = [
  { id: 1, title: '🚨 Mid-semester exam schedule released', content: 'Check the academic portal for your personalized timetable. Exams start May 5th. No re-scheduling requests after April 30.', author: 'Academic Office', time: '2h', pinned: true },
  { id: 2, title: '🏗️ New gym facility opening next week', content: 'The new fitness center near H7 is ready. Free access for all students with valid ID. Timings: 6am-10pm.', author: 'Admin', time: '1d', pinned: true },
  { id: 3, title: '📢 Wi-Fi maintenance tonight 11pm-3am', content: 'Campus-wide network upgrade. Please download materials in advance. Hostels H1-H5 will be affected.', author: 'IT Services', time: '5h', pinned: false },
];

// ─── EXPLORE DATA ────────────────────────────────────────────────────────────

export const explorePosts = [
  { id: 1, image: 'https://picsum.photos/seed/exp1/300/300', college: 'BITS', collegeColor: '#FF2D78', likes: 892, user: 'bits_life' },
  { id: 2, image: 'https://picsum.photos/seed/exp2/300/300', college: 'IITD', collegeColor: '#1A3FFF', likes: 1204, user: 'delhi_diaries' },
  { id: 3, image: 'https://picsum.photos/seed/exp3/300/300', college: 'NITT', collegeColor: '#FF5C1A', likes: 567, user: 'nitt_tales' },
  { id: 4, image: 'https://picsum.photos/seed/exp4/300/300', college: 'VIT', collegeColor: '#00C851', likes: 2341, user: 'vit_vibes' },
  { id: 5, image: 'https://picsum.photos/seed/exp5/300/300', college: 'IITM', collegeColor: '#1A3FFF', likes: 445, user: 'madras_moods' },
  { id: 6, image: 'https://picsum.photos/seed/exp6/300/300', college: 'SRCC', collegeColor: '#8B5CF6', likes: 789, user: 'srcc_squad' },
  { id: 7, image: 'https://picsum.photos/seed/exp7/300/300', college: 'JU', collegeColor: '#FF5C1A', likes: 334, user: 'ju_stories' },
  { id: 8, image: 'https://picsum.photos/seed/exp8/300/300', college: 'SXC', collegeColor: '#FFE033', likes: 612, user: 'xaviers_life' },
  { id: 9, image: 'https://picsum.photos/seed/exp9/300/300', college: 'BITS', collegeColor: '#FF2D78', likes: 1567, user: 'pilani_pages' },
];

export const trendingMixed = [
  { id: 1, type: 'post', image: 'https://picsum.photos/seed/trend1/400/300', college: 'IIT Delhi', collegeShort: 'IITD', likes: 2341, caption: 'The new library wing is absolutely stunning 🏛️', user: 'iitd_explorer' },
  { id: 2, type: 'thread', college: 'BITS Pilani', collegeShort: 'BITS', title: 'BITS vs IITs debate — let\'s settle this once and for all', votes: 567, commentCount: 234, board: 'General' },
  { id: 3, type: 'post', image: 'https://picsum.photos/seed/trend3/400/300', college: 'VIT Vellore', collegeShort: 'VIT', likes: 1892, caption: 'Riviera fest highlights — this was EPIC 🎪', user: 'vit_official' },
  { id: 4, type: 'thread', college: 'NIT Trichy', collegeShort: 'NITT', title: 'Placement stats this year are insane — 45 LPA median for CS', votes: 890, commentCount: 156, board: 'Placements' },
  { id: 5, type: 'post', image: 'https://picsum.photos/seed/trend5/400/300', college: 'IIT Madras', collegeShort: 'IITM', likes: 3100, caption: 'Spotted: deer family near the research park 🦌', user: 'iitm_wildlife' },
  { id: 6, type: 'thread', college: 'SRCC Delhi', collegeShort: 'SRCC', title: 'Is an MBA worth it after BCom? Alumni weigh in', votes: 234, commentCount: 89, board: 'Academics' },
];

// Onboarding college list
export const onboardingColleges = [
  'IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kanpur', 'IIT Kharagpur',
  'BITS Pilani', 'NIT Trichy', 'NIT Warangal', 'VIT Vellore', 'SRM Chennai',
  'SRCC Delhi', 'St. Xavier\'s Mumbai', 'Jadavpur University', 'Anna University',
  'Delhi University', 'IIIT Hyderabad', 'NSUT Delhi', 'DTU Delhi',
];

// ─── NOTICE BOARD ────────────────────────────────────────────────────────────

export const notices = [
  { id: 1, text: 'Found a blue ID card near the canteen bench. DM me to claim!', author: 'Anonymous', time: '2h ago', hoursLeft: 22, color: '#FFE033' },
  { id: 2, text: 'Lost my charger in LH-101. If anyone found it please return to H4 room 203', author: 'Anonymous', time: '5h ago', hoursLeft: 19, color: '#FF2D78' },
  { id: 3, text: 'Free snacks outside SAC auditorium — leftover from yesterday\'s event 🍕', author: 'Anonymous', time: '1h ago', hoursLeft: 23, color: '#00C851' },
  { id: 4, text: 'Anyone interested in a morning jog group? Meet at the lake at 6am', author: 'Anonymous', time: '8h ago', hoursLeft: 16, color: '#1A3FFF' },
  { id: 5, text: 'Found a set of keys near parking lot B. Has a keychain with "R" on it', author: 'Anonymous', time: '3h ago', hoursLeft: 21, color: '#FF5C1A' },
];

// ─── STUDENT DIRECTORY ───────────────────────────────────────────────────────

export const studentDirectory = [
  { id: 1, name: 'Arnav Saini', course: 'B.Tech Computer Science', year: '3rd Year' },
  { id: 2, name: 'Priya Kapoor', course: 'B.Tech Electrical Engg.', year: '2nd Year' },
  { id: 3, name: 'Rahul Das Sharma', course: 'B.Tech Mechanical Engg.', year: '4th Year' },
  { id: 4, name: 'Dev Sharma', course: 'B.Tech Computer Science', year: '2nd Year' },
  { id: 5, name: 'Ananya Mehta', course: 'B.Des Industrial Design', year: '3rd Year' },
  { id: 6, name: 'Siddharth Patil', course: 'M.Tech AI & Data Science', year: '1st Year' },
  { id: 7, name: 'Megha Reddy', course: 'B.Tech Chemical Engg.', year: '4th Year' },
  { id: 8, name: 'Vikram Joshi', course: 'B.Tech Civil Engg.', year: '3rd Year' },
  { id: 9, name: 'Neha Gupta', course: 'B.Tech Computer Science', year: '2nd Year' },
  { id: 10, name: 'Aditya Kumar', course: 'M.Sc Physics', year: '1st Year' },
  { id: 11, name: 'Isha Verma', course: 'B.Tech Aerospace Engg.', year: '3rd Year' },
  { id: 12, name: 'Rohan Singh', course: 'B.Tech Electrical Engg.', year: '4th Year' },
  { id: 13, name: 'Kavya Nair', course: 'B.Des Communication Design', year: '2nd Year' },
  { id: 14, name: 'Harsh Agarwal', course: 'B.Tech Computer Science', year: '1st Year' },
  { id: 15, name: 'Tanvi Shah', course: 'B.Tech Biotech', year: '3rd Year' },
  { id: 16, name: 'Arjun Reddy', course: 'B.Tech Mechanical Engg.', year: '2nd Year' },
  { id: 17, name: 'Simran Kaur', course: 'M.Tech VLSI Design', year: '1st Year' },
  { id: 18, name: 'Manish Tiwari', course: 'B.Tech Metallurgical Engg.', year: '4th Year' },
  { id: 19, name: 'Riya Chopra', course: 'B.Tech Computer Science', year: '3rd Year' },
  { id: 20, name: 'Kunal Malhotra', course: 'B.Tech Energy Engg.', year: '2nd Year' },
];

// ─── POTENTIAL WINDOW (Tinder-like) ──────────────────────────────────────────

export const potentialProfiles = [
  { id: 1, name: 'Priya K.', avatar: 'PK', color: '#FF2D78', year: '2nd Year', dept: 'Electrical Engg.', bio: 'Music lover 🎵 Coffee addict ☕', gender: 'female' },
  { id: 2, name: 'Rahul D.', avatar: 'RD', color: '#1A3FFF', year: '4th Year', dept: 'Mechanical Engg.', bio: 'Cricket fanatic 🏏 & gym rat 💪', gender: 'male' },
  { id: 3, name: 'Ananya M.', avatar: 'AM', color: '#FF5C1A', year: '3rd Year', dept: 'Industrial Design', bio: 'Sketching my way through college ✏️', gender: 'female' },
  { id: 4, name: 'Dev S.', avatar: 'DS', color: '#00C851', year: '2nd Year', dept: 'Computer Science', bio: 'Open source contributor & gamer 🎮', gender: 'male' },
  { id: 5, name: 'Megha R.', avatar: 'MR', color: '#8B5CF6', year: '4th Year', dept: 'Chemical Engg.', bio: 'Chai over coffee, always ☕', gender: 'female' },
  { id: 6, name: 'Sid P.', avatar: 'SP', color: '#FFE033', year: '3rd Year', dept: 'Computer Science', bio: 'Photography & late night coding sessions', gender: 'male' },
];

// ─── CAMPUS ANONYMOUS POSTS ─────────────────────────────────────────────────

export const campusAnonPosts = [
  { id: 101, text: 'Just saw a cat inside the lecture hall during a viva 😂 Prof didn\'t even notice', image: 'https://picsum.photos/seed/anoncat/400/300', likes: 89, comments: 12, time: '1h ago', tag: 'Spotted' },
  { id: 102, text: 'Someone parked their cycle ON the staircase of H3. Absolute madlad energy', likes: 134, comments: 23, time: '3h ago', tag: 'Spotted' },
  { id: 103, text: 'The sunset from the 5th floor of the main building today was unreal 🌅', image: 'https://picsum.photos/seed/anonsunset/400/300', likes: 201, comments: 8, time: '5h ago', tag: 'Vibes' },
  { id: 104, text: 'Power cut in H7 during the cricket match final over. The chaos was legendary', likes: 312, comments: 45, time: '8h ago', tag: 'Drama' },
];

// ─── TEA (anonymous discussion) ──────────────────────────────────────────────

export const teaThreads = [
  { id: 201, title: 'That couple in the library who think nobody can see them holding hands behind the shelf 👀', votes: 456, commentCount: 89, time: '1h', hot: true },
  { id: 202, title: 'Prof who comes in a Ferrari but gives us assignments like we have no life', votes: 312, commentCount: 67, time: '3h', hot: true },
  { id: 203, title: 'The unspoken rule about not sitting in someone\'s "seat" in the last bench', votes: 178, commentCount: 45, time: '5h', hot: false },
  { id: 204, title: 'Whoever is cooking maggi at 3am in H4 — drop the recipe, it smells incredible', votes: 234, commentCount: 34, time: '8h', hot: true },
  { id: 205, title: 'That one friend who says "I didn\'t study at all" and then scores 95', votes: 567, commentCount: 123, time: '12h', hot: true },
];
