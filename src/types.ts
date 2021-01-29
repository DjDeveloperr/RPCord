/** Op Codes sent by IPC Messages. */
export enum OpCode {
  Handshake,
  Frame,
  Close,
  Ping,
  Pong,
}

/** Commands used to communicate with IPC. */
export enum Command {
  Dispatch = "DISPATCH",
  Authorize = "AUTHORIZE",
  Authenticate = "AUTHENTICATE",
  GetGuild = "GET_GUILD",
  GetGuilds = "GET_GUILDS",
  GetChannel = "GET_CHANNEL",
  GetChannels = "GET_CHANNELS",
  Subscribe = "SUBSCRIBE",
  Unsubscribe = "UNSUBSCRIBE",
  SetUserVoiceSettings = "SET_USER_VOICE_SETTINGS",
  SelectVoiceChannel = "SELECT_VOICE_CHANNEL",
  GetSelectedVoiceChannel = "GET_SELECTED_VOICE_CHANNEL",
  SelectTextChannel = "SELECT_TEXT_CHANNEL",
  GetVoiceSettings = "GET_VOICE_SETTINGS",
  SetVoiceSettings = "SET_VOICE_SETTINGS",
  CaptureShortcut = "CAPTURE_SHORTCUT",
  SetCertifiedDevices = "SET_CERTIFIED_DEVICES",
  SetActivity = "SET_ACTIVITY",
  SendActivityJoinInvite = "SEND_ACTIVITY_JOIN_INVITE",
  CloseActivityRequest = "CLOSE_ACTIVITY_REQUEST",
  SetUserAchievement = "SET_USER_ACHIEVEMENT",
  GetUserAchievements = "GET_USER_ACHIEVEMENTS",
  GetActivityJoinTicket = "GET_ACTIVITY_JOIN_TICKET",
  SendGenericEvent = "SEND_GENERIC_EVENT",
  NetworkingSystemMetrics = "NETWORKING_SYSTEM_METRICS",
  NetworkingPeerMetrics = "NETWORKING_PEER_METRICS",
  NetworkingCreateToken = "NETWORKING_CREATE_TOKEN",
  GetSkus = "GET_SKUS",
  GetEntitlements = "GET_ENTITLEMENTS",
  GetNetworkingConfig = "GET_NETWORKING_CONFIG",
  StartPurchase = "START_PURCHASE",
  GetEntitlementTicket = "GET_ENTITLEMENT_TICKET",
  GetApplicationTicket = "GET_APPLICATION_TICKET",
  ValidateApplication = "VALIDATE_APPLICATION",
  OpenOverlayVoiceSettings = "OPEN_OVERLAY_VOICE_SETTINGS",
  OpenOverlayGuildInvite = "OPEN_OVERLAY_GUILD_INVITE",
  OpenOverlayActivityInvite = "OVEN_OVERLAY_ACTIVITY_INVITE",
  SetOverlayLocked = "SET_OVERLAY_LOCKED",
  DisconnectFromLobbyVoice = "DISCONNECT_FROM_LOBBY_VOICE",
  ConnectToLobbyVoice = "CONNECT_TO_LOBBY_VOICE",
  SearchLobbies = "SEARCH_LOBBIES",
  SendToLobby = "SEND_TO_LOBBY",
  DisconnectFromLobby = "DISCONNECT_FROM_LOBBY",
  ConnectToLobby = "CONNECT_TO_LOBBY",
  UpdateLobbyMember = "UPDATE_LOBBY_MEMBER",
  DeleteLobby = "DELETE_LOBBY",
  UpdateLobby = "UPDATE_LOBBY",
  CreateLobby = "CREATE_LOBBY",
  GetImage = "GET_IMAGE",
  BrowserHandoff = "BROWSER_HANDOFF",
  Overlay = "OVERLAY",
  GuildTemplateBrowser = "GUILD_TEMPLATE_BROWSER",
  GiftCodeBrowser = "GIFT_CODE_BROWSER",
  BraintreePopupBridgeCallback = "BRAINTREE_POPUP_BRIDGE_CALLBACK",
  ConnectionsCallback = "CONNECTIONS_CALLBACK",
  DeepLink = "DEEP_LINK",
  InviteBrowser = "INVITE_BROWSER",
  OpenInviteDialog = "OPEN_INVITE_DIALOG",
  AcceptActivityInvite = "ACCEPT_ACTIVITY_INVITE",
  ActivityInviteUser = "ACTIVITY_INVITE_USER",
  CloseActivityJoinRequest = "CLOSE_ACTIVITY_JOIN_REQUEST",
  SetVoiceSettings2 = "SET_VOICE_SETTINGS_2",
  SetUserVoiceSettings2 = "SET_USER_VOICE_SETTINGS_2",
  CreateChannelInvite = "CREATE_CHANNEL_INVITE",
  GetRelationships = "GET_RELATIONSHIPS",
}

/** Events DISPATCH'd from IPC. */
export enum RPCEvent {
  Ready = "READY",
  Error = "ERROR",
  GuildStatus = "GUILD_STATUS",
  GuildCreate = "GUILD_CREATE",
  ChannelCreate = "CHANNEL_CREATE",
  VoiceChannelSelect = "VOICE_CHANNEL_SELECT",
  VoiceStateCreate = "VOICE_STATE_CREATE",
  VoiceStateUpdate = "VOICE_STATE_UPDATE",
  VoiceStateDelete = "VOICE_STATE_DELETE",
  VoiceSettingsUpdate = "VOICE_SETTINGS_UPDATE",
  VoiceConnectionStatus = "VOICE_CONNECTION_STATUS",
  SpeakingStart = "SPEAKING_START",
  SpeakingStop = "SPEAKING_STOP",
  MessageCreate = "MESSAGE_CREATE",
  MessageUpdate = "MESSAGE_UPDATE",
  MessageDelete = "MESSAGE_DELETE",
  NotificationCreate = "NOTIFICATION_CREATE",
  CaptureShortcutChange = "CAPTURE_SHORTCUT_CHANGE",
  ActivityJoin = "ACTIVITY_JOIN",
  ActivityJoinRequest = "ACTIVITY_JOIN_REQUEST",
  ActivitySpectate = "ACTIVITY_SPECTATE",
  CurrentUserUpdate = "CURRENT_USER_UPDATE",
  RelationshipUpdate = "RELATIONSHIP_UPDATE",
  VoiceSettingsUpdate2 = "VOICE_SETTINGS_UPDATE_2",
  GameJoin = "GAME_JOIN",
  GameSpectate = "GAME_SPECTATE",
  LobbyDelete = "LOBBY_DELETE",
  LobbyUpdate = "LOBBY_UPDATE",
  LobbyMemberConnect = "LOBBY_MEMBER_CONNECT",
  LobbyMemberDisconnect = "LOBBY_MEMBER_DISCONNECT",
  LobbyMemberUpdate = "LOBBY_MEMBER_UPDATE",
  LobbyMessage = "LOBBY_MESSAGE",
  Overlay = "OVERLAY",
  OverlayUpdate = "OVERLAY_UPDATE",
  EntitlementCreate = "ENTITLEMENT_CREATE",
  EntitlementDelete = "ENTITLEMENT_DELETE",
  UserAchievementUpdate = "USER_ACHIEVEMENT_UPDATE",
}

/** Nitro type of User. */
export enum PremiumType {
  None,
  NitroClassic,
  Nitro,
}

/** Partial User object */
export interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  bot: boolean;
  flags: number;
  premium_type: PremiumType;
}

/** Client Config sent on Ready event. */
export interface ClientConfig {
  cdn_host: string;
  api_endpoint: string;
  environment: string;
}

export interface UserVoiceSettingsPan {
  left: number;
  right: number;
}

export interface UserVoiceSettings {
  user_id: string;
  pan?: UserVoiceSettingsPan;
  volume?: number;
  mute?: boolean;
}

export interface Application {
  id: string;
  description: string;
  icon: string;
  rpc_origins: string[];
  name: string;
}

export interface VoiceSettingsInput {
  device_id: string;
  volume: number;
  available_devices: any[];
}

export interface VoiceSettingsOutput extends VoiceSettingsInput {}

export interface ShortcutKeyCombo {
  type: KeyType;
  code: number;
  name: string;
}

export interface VoiceSettingsMode {
  type: string;
  auto_threshold: boolean;
  threshold: number;
  shortcut: ShortcutKeyCombo;
  delay: number;
}

export enum KeyType {
  KeyboardKey,
  MouseButton,
  KeyboardModifierKey,
  GamepadButton,
}

export interface VoiceSettings {
  input: VoiceSettingsInput;
  output: VoiceSettingsOutput;
  mode: VoiceSettingsMode;
  automatic_gain_control: boolean;
  echo_cancellation: boolean;
  noise_cancellation: boolean;
  qos: boolean;
  silence_warning: boolean;
  deaf: boolean;
  mute: boolean;
}

export interface DeviceVendor {
  name: string;
  url: string;
}

export interface DeviceModel {
  name: string;
  url: string;
}

export enum DeviceType {
  AudioInput = "audioinput",
  AudioOutput = "audiooutput",
  VideoInput = "videoinput",
}

export interface Device {
  type: DeviceType;
  id: string;
  vendor: DeviceVendor;
  model: DeviceModel;
  related: string[];
  echo_cancellation?: boolean;
  noise_cancellation?: boolean;
  automatic_gain_control?: boolean;
  hardware_mute?: boolean;
}

export interface VoiceStateData {
  mute: boolean;
  deaf: boolean;
  self_mute: boolean;
  self_deaf: boolean;
  suppress: boolean;
}

export interface VoiceState {
  voice_state: VoiceStateData;
  user: User;
  nick?: string | null;
  mute: boolean;
  volume: number;
  pan: UserVoiceSettingsPan;
}

export interface Message {
  id: string;
  [name: string]: any;
}

export interface ChannelPayload {
  id: string;
  name: string;
  type: number;
  topic?: string;
  bitrate?: number;
  user_limit?: number;
  guild_id: string;
  position: number;
  voice_states?: VoiceState[];
  messages?: Message[];
}

export interface PartialChannel {
  id: string;
  name: string;
  type: number;
}

export interface Guild {
  id: string;
  name: string;
  icon_url: string | null;
}

export interface PartialGuild {
  id: string;
  name: string;
}

export interface GetImageOptions {
  type: "user";
  id: string;
  format: "png" | "apng" | "webp" | "gif" | "jpg";
  size: number;
}

export enum LobbyType {
  Private = 1,
  Public = 2,
}

export interface LobbyMetadata {
  [name: string]: string | number;
}

export interface LobbyOptions {
  type?: LobbyType;
  owner_id?: string;
  capacity?: number;
  metadata?: LobbyMetadata;
  locked?: boolean;
}

export interface Lobby {
  application_id: string;
  capacity: number;
  id: string;
  locked: boolean;
  members: Array<{ metadata: LobbyMetadata; user: User }>;
  metadata: LobbyMetadata;
  owner_id: string;
  region: string;
  secret: string;
  type: LobbyType;
  voice_states: VoiceState[];
}
