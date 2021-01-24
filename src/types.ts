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
