export type BlendSpaceCategory = 'all' | 'trending' | 'music' | 'faith' | 'comedy' | 'lifestyle' | 'gaming' | 'fashion' | 'tech' | 'creative';

export type AccountMode = 'private' | 'public' | 'professional';

export interface UserProfile {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatar: string;
  coverImage: string;
  followers: number;
  following: number;
  totalLikesReceived: number;
  blinPoints: number;
  verified: boolean;
  tagline: string;
  website?: string;
  location?: string;
  accountType: AccountMode;
  profileVisibility: 'public' | 'private';
  vibeStatus?: {
    emoji: string;
    text: string;
    color: string;
    song?: string;
    expiresIn: string;
  };
}

export interface PointsLedgerItem {
  id: string;
  sourceType: 'like_received' | 'like_milestone_bonus' | 'follower_gained' | 'challenge_reward';
  referenceId: string;
  points: number;
  timestamp: string;
  description: string;
}

export interface CommentItem {
  id: string;
  author: string;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  liked?: boolean;
}

export interface PostItem {
  id: string;
  author: string;
  username: string;
  avatar: string;
  verified?: boolean;
  content: string;
  image?: string;
  videoUrl?: string;
  likes: number;
  commentsCount: number;
  repostsCount: number;
  savesCount: number;
  liked: boolean;
  saved: boolean;
  reposted: boolean;
  timestamp: string;
  tags: string[];
  blendSpace: BlendSpaceCategory;
  comments: CommentItem[];
  quotePost?: {
    author: string;
    username: string;
    content: string;
    avatar: string;
  };
}

export interface FeaturedSpotlightPreview {
  id: string;
  title: string;
  views: string;
  image: string;
  duration?: string;
}

export interface SpotlightItem {
  id: string;
  creatorName: string;
  creatorHandle: string;
  avatar: string;
  verified?: boolean;
  caption: string;
  soundTitle: string;
  soundArtist: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  liked: boolean;
  saved: boolean;
  tags: string[];
  duration: string;
  gradientTheme: string;
  accentColor: string;
  overlayBadge?: string;
  videoImageUrl?: string;
}

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'seen';

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  isMe: boolean;
  text: string;
  mediaUrl?: string;
  timestamp: string;
  status: MessageStatus;
  sentAt: string;
  deliveredAt: string;
  seenAt: string;
  isVoice?: boolean;
  voiceDuration?: string;
  reactions: { emoji: string; count: number; users: string[] }[];
  replyTo?: {
    sender: string;
    text: string;
  };
}

export interface Conversation {
  id: string;
  name: string;
  username?: string;
  avatar: string;
  isGroup: boolean;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  online: boolean;
  lastSeen: string;
  isTyping?: boolean;
  pinned?: boolean;
  muted?: boolean;
  status?: MessageStatus;
  memberCount?: number;
  description?: string;
}

export interface StoryItem {
  id: string;
  username: string;
  userAvatar: string;
  title: string;
  image: string;
  createdAt: string;
  hasUnseen: boolean;
  vibe: string;
}

export interface VibeSignal {
  id: string;
  username: string;
  name: string;
  avatar: string;
  emoji: string;
  text: string;
  color: string;
  song?: string;
  expiresIn: string;
  active: boolean;
}

export interface BlendBoardItem {
  id: string;
  type: 'note' | 'photo' | 'idea' | 'link';
  title: string;
  content: string;
  color: string;
  author: string;
  tags: string[];
  reactions: number;
  liked?: boolean;
}

export interface ThreadWorldNode {
  id: string;
  branchTitle: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  color: string;
  children?: ThreadWorldNode[];
}

export interface CommunityItem {
  id: string;
  name: string;
  handle: string;
  description: string;
  banner: string;
  icon: string;
  category: string;
  memberCount: number;
  activeMembers: number;
  isPrivate: boolean;
  isJoined: boolean;
  rules: string[];
  recentTopic: string;
}

export interface UserSettings {
  // A. Account & Profile
  accountType: AccountMode; // Private | Public | Professional
  profileVisibility: 'public' | 'private';

  // B. Privacy & Activity
  onlineStatusVisibility: 'everyone' | 'contacts' | 'nobody';
  lastSeenVisibility: 'everyone' | 'contacts' | 'nobody';
  readReceipts: boolean; // blue ticks
  typingIndicators: boolean;
  privateAccountApproval: boolean;
  whoCanMention: 'everyone' | 'contacts' | 'nobody';
  whoCanMessage: 'everyone' | 'contacts' | 'nobody';
  whoCanComment: 'everyone' | 'contacts' | 'nobody';
  allowRemix: boolean;
  allowDownloads: boolean;
  showFollowerList: boolean;
  locationSharing: boolean;
  restrictedWords: string;

  // C. Messaging
  chatWallpaper: 'cosmic' | 'midnight' | 'neon_purple' | 'cyan_glow';
  chatBubbleColor: 'indigo' | 'purple' | 'cyan' | 'pink';
  disappearingMessages: 'off' | '24h' | '7d' | '90d';
  voicePlaybackSpeed: '1x' | '1.5x' | '2x';
  mediaAutoDownload: 'wifi_cellular' | 'wifi_only' | 'never';
  dataSaver: boolean;

  // D. Notifications & Sounds
  notificationsLikes: boolean;
  notificationsComments: boolean;
  notificationsFollowers: boolean;
  notificationsMessages: boolean;
  notificationsReels: boolean;
  notificationsPoints: boolean;
  soundEffects: boolean;
  quietHoursEnabled: boolean;
  pauseAllNotifications: boolean;

  // E. Appearance & Accessibility
  theme: 'neon' | 'violet' | 'cyan' | 'midnight';
  fontSize: 'small' | 'medium' | 'large';
  reduceMotion: boolean;
  highContrast: boolean;
  captionsDefault: boolean;
  language: string;

  // F. Security & Login
  twoFactorAuth: boolean;
  passkeysEnabled: boolean;
  loginAlerts: boolean;

  // G. Professional Mode & Creator Tools
  creatorCategory: string;
  brandPartnershipRequests: boolean;
  scheduledPublishing: boolean;

  // H. AI Settings
  aiEnabled: boolean;
  aiPersonalization: boolean;
  aiResponseLanguage: string;

  // I. Storage & Data
  totalStorageUsageMB: number;
  cachedMediaMB: number;
}

export interface ReportItem {
  id: string;
  targetType: 'post' | 'user' | 'message' | 'community';
  targetTitle: string;
  reportedBy: string;
  reason: string;
  timestamp: string;
  status: 'pending' | 'resolved' | 'dismissed';
}
