import React from 'react';
import { AppProvider, useApp } from './context/AppContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { BottomNav } from './components/BottomNav.tsx';
import { HomeFeed } from './components/HomeFeed.tsx';
import { SpotlightFeed } from './components/SpotlightFeed.tsx';
import { ChatScreen } from './components/ChatScreen.tsx';
import { ProfileScreen } from './components/ProfileScreen.tsx';
import { CommunitiesScreen } from './components/CommunitiesScreen.tsx';
import { BlendBoardScreen } from './components/BlendBoardScreen.tsx';
import { MobileFrame } from './components/MobileFrame.tsx';

// Modals
import { AiAssistantModal } from './components/AiAssistantModal.tsx';
import { SettingsModal } from './components/SettingsModal.tsx';
import { AdminModal } from './components/AdminModal.tsx';
import { PointsLedgerModal } from './components/PointsLedgerModal.tsx';
import { ThreadWorldModal } from './components/ThreadWorldModal.tsx';
import { StoryViewerModal } from './components/StoryViewerModal.tsx';
import { CreateModal } from './components/CreateModal.tsx';
import { MessageDetailModal } from './components/MessageDetailModal.tsx';
import { TermsModal } from './components/TermsModal.tsx';

import { TrendingUp, Radio, Award, Sparkles, Heart } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { activeTab, vibeSignals, setIsLedgerOpen, setIsIdeaSparkOpen } = useApp();

  return (
    <div className="min-h-screen bg-[#050713] text-slate-100 flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Body Area */}
      <div className="flex-1 flex mx-auto w-full max-w-7xl">
        {/* Desktop Left Sidebar */}
        <Sidebar />

        {/* Dynamic Center Stage */}
        <main className="flex-1 flex flex-col min-w-0">
          {activeTab === 'home' && <HomeFeed />}
          {activeTab === 'spotlight' && <SpotlightFeed />}
          {activeTab === 'chat' && <ChatScreen />}
          {activeTab === 'profile' && <ProfileScreen />}
          {activeTab === 'communities' && <CommunitiesScreen />}
          {activeTab === 'blendboard' && <BlendBoardScreen />}
        </main>

        {/* Right Desktop Discover & VibeSignals Widget (Shown when not in chat or spotlight) */}
        {activeTab !== 'chat' && activeTab !== 'spotlight' && (
          <aside className="hidden xl:flex flex-col w-72 shrink-0 border-l border-white/10 p-5 space-y-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Live VibeSignals Widget */}
            <div className="rounded-2xl border border-purple-500/20 bg-slate-900/50 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Radio className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
                  <span>Friend VibeSignals</span>
                </span>
                <span className="text-[10px] text-purple-300 font-semibold">Active now</span>
              </div>

              <div className="space-y-2.5">
                {vibeSignals.map((v) => (
                  <div
                    key={v.id}
                    className="flex items-center gap-2.5 rounded-xl bg-slate-950/60 p-2.5 border border-white/5"
                  >
                    <div className="relative">
                      <img
                        src={v.avatar}
                        alt={v.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="absolute -bottom-1 -right-1 text-xs">
                        {v.emoji}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="truncate text-xs font-bold text-white block">
                        {v.name}
                      </span>
                      <p className="truncate text-[10px] text-purple-200">{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending on BLiN */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 space-y-3">
              <span className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                <TrendingUp className="h-3.5 w-3.5 text-sky-400" />
                <span>Trending Tags</span>
              </span>

              <div className="space-y-2">
                {[
                  { tag: '#BlendBoard', count: '14.2K posts', space: 'Creative' },
                  { tag: '#SpotlightAudio', count: '9.8K posts', space: 'Music' },
                  { tag: '#GLSLShaders', count: '5.1K posts', space: 'Gaming' },
                  { tag: '#TokyoCyberwear', count: '4.4K posts', space: 'Fashion' },
                  { tag: '#IdeaSparkAI', count: '3.9K posts', space: 'Tech' },
                ].map((item) => (
                  <div
                    key={item.tag}
                    className="flex items-center justify-between py-1 cursor-pointer hover:bg-white/5 rounded-lg px-2 -mx-2 transition"
                  >
                    <div>
                      <span className="text-xs font-bold text-white">{item.tag}</span>
                      <p className="text-[10px] text-slate-400">{item.count}</p>
                    </div>
                    <span className="text-[10px] rounded-full bg-slate-800 px-2 py-0.5 text-purple-300">
                      {item.space}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Creators Leaderboard */}
            <div
              onClick={() => setIsLedgerOpen(true)}
              className="cursor-pointer rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-slate-900/80 p-4 transition hover:border-amber-500/40"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <Award className="h-4 w-4" />
                  <span>Creator Leaderboard</span>
                </span>
                <span className="text-[10px] text-amber-400 font-mono">Week 42</span>
              </div>

              <div className="space-y-2">
                {[
                  { rank: 1, name: 'Alex Vance (You)', pts: '1,028 pts', medal: '🥇' },
                  { rank: 2, name: 'Elena Rostova', pts: '980 pts', medal: '🥈' },
                  { rank: 3, name: 'Maya Lin', pts: '840 pts', medal: '🥉' },
                ].map((c) => (
                  <div key={c.rank} className="flex items-center justify-between text-xs py-0.5">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <span>{c.medal}</span>
                      <span className="truncate max-w-[120px]">{c.name}</span>
                    </span>
                    <span className="font-bold text-amber-300 font-mono text-[11px]">{c.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* Global Modals */}
      <AiAssistantModal />
      <SettingsModal />
      <AdminModal />
      <PointsLedgerModal />
      <ThreadWorldModal />
      <StoryViewerModal />
      <CreateModal />
      <MessageDetailModal />
      <TermsModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MobileFrame>
        <MainLayout />
      </MobileFrame>
    </AppProvider>
  );
}
