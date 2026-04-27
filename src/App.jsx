import { useState } from 'react';
import NavBar from './components/NavBar';
import OnboardingScreen from './screens/Onboarding';
import FeedScreen from './screens/Feed';
import DiscussScreen from './screens/Discuss';
import ThreadView from './screens/ThreadView';
import ExploreScreen from './screens/Explore';
import CollegePage from './screens/CollegePage';
import CreateScreen from './screens/Create';
import ProfileScreen from './screens/Profile';
import EditProfile from './screens/EditProfile';
import NotificationPanel from './components/NotificationPanel';

export default function App() {
  const [onboarded, setOnboarded] = useState(false);
  const [screen, setScreen] = useState('feed');

  // Overlay states
  const [createOpen, setCreateOpen] = useState(false);
  const [createMode, setCreateMode] = useState('post');
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  // Thread view
  const [activeThread, setActiveThread] = useState(null);

  // College view
  const [viewingCollege, setViewingCollege] = useState(null);

  // Potential Window state
  const [potentialRequests, setPotentialRequests] = useState([
    { id: 99, name: 'Neha Gupta', avatar: 'NG', color: '#8B5CF6', dept: 'Computer Science', year: '2nd Year', bio: 'Bookworm 📚 and coffee addict ☕', socials: { instagram: '@neha.gupta', linkedin: 'neha-gupta' } },
  ]);
  const [acceptedMatches, setAcceptedMatches] = useState([]);

  // ─── NAVIGATION HELPERS ──────────────────────────────────────────────

  const openCreate = (mode = 'post') => {
    setCreateMode(mode);
    setCreateOpen(true);
  };

  const openThread = (thread) => {
    setActiveThread(thread);
  };

  const viewCollege = (college) => {
    setViewingCollege(college);
  };

  const handleSendPotentialRequest = (profile) => {
    // In real app, this sends a request to the other user
    console.log('Sent interest to:', profile.name);
  };

  const handleAcceptRequest = (reqId) => {
    const req = potentialRequests.find(r => r.id === reqId);
    if (req) {
      setAcceptedMatches(prev => [...prev, { ...req }]);
      setPotentialRequests(prev => prev.filter(r => r.id !== reqId));
    }
  };

  // ─── RENDER SCREENS ──────────────────────────────────────────────────

  const renderScreen = () => {
    // Thread view (overlays discuss)
    if (activeThread) {
      return <ThreadView thread={activeThread} onBack={() => setActiveThread(null)} />;
    }

    // College view from explore (overlays explore)
    if (viewingCollege) {
      return (
        <CollegePage
          college={viewingCollege}
          isOwnCampus={false}
          goBack={() => setViewingCollege(null)}
        />
      );
    }

    switch (screen) {
      case 'feed':
        return (
          <FeedScreen
            onCreateStory={() => openCreate('story')}
            onCreatePost={() => openCreate('post')}
            onOpenNotifications={() => setNotifOpen(true)}
            requestCount={potentialRequests.length}
          />
        );
      case 'discuss':
        return (
          <DiscussScreen
            onOpenThread={openThread}
            onCreateThread={() => openCreate('thread')}
            onSendPotentialRequest={handleSendPotentialRequest}
          />
        );
      case 'campus':
        return <CollegePage isOwnCampus={true} />;
      case 'explore':
        return <ExploreScreen onViewCollege={viewCollege} />;
      case 'profile':
        return (
          <ProfileScreen
            onEditProfile={() => setEditProfileOpen(true)}
          />
        );
      default:
        return <FeedScreen onCreateStory={() => openCreate('story')} onCreatePost={() => openCreate('post')} onOpenNotifications={() => setNotifOpen(true)} requestCount={potentialRequests.length} />;
    }
  };

  // ─── ONBOARDING ──────────────────────────────────────────────────────

  if (!onboarded) {
    return (
      <div style={{
        maxWidth: 390, margin: '0 auto', height: '100vh',
        overflow: 'auto', fontFamily: "'Space Mono', monospace",
        background: '#FFE033',
      }}>
        <OnboardingScreen onDone={() => setOnboarded(true)} />
      </div>
    );
  }

  // ─── MAIN APP ────────────────────────────────────────────────────────

  return (
    <div style={{
      maxWidth: 390, margin: '0 auto', height: '100vh',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      fontFamily: "'Space Mono', monospace",
      background: '#F5F0E8',
      position: 'relative',
    }}>
      {/* Screen content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {renderScreen()}
      </div>

      {/* Bottom nav */}
      {!activeThread && !viewingCollege && (
        <NavBar active={screen} setScreen={(s) => {
          setScreen(s);
          setActiveThread(null);
          setViewingCollege(null);
        }} />
      )}

      {/* Create overlay */}
      {createOpen && (
        <CreateScreen
          mode={createMode}
          onClose={() => setCreateOpen(false)}
        />
      )}

      {/* Edit profile overlay */}
      {editProfileOpen && (
        <EditProfile onBack={() => setEditProfileOpen(false)} />
      )}

      {/* Notification panel overlay */}
      {notifOpen && (
        <NotificationPanel
          onClose={() => setNotifOpen(false)}
          requests={potentialRequests}
          accepted={acceptedMatches}
          onAcceptRequest={handleAcceptRequest}
        />
      )}
    </div>
  );
}