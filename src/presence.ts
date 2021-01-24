export enum ActivityType {
  Game,
  Streaming,
  Listening,
  Custom,
  Competing,
}

export interface ActivityTimestamps {
  start?: number;
  end?: number;
}

export interface ActivityParty {
  id?: string;
  size?: [number, number];
}

export interface ActivityAssets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

export interface ActivitySecrets {
  join?: string;
  spectate?: string;
  match?: string;
}

export enum ActivityFlags {
  Instance = 1 << 0,
  Join = 1 << 1,
  Spectate = 1 << 2,
  JoinRequest = 1 << 3,
  Sync = 1 << 4,
  Play = 1 << 5,
}

export interface ActivityButton {
  label: string;
  url: string;
}

export interface ActivityPayload {
  name?: string;
  type?: ActivityType;
  url?: string;
  created_at?: string;
  timestamps?: ActivityTimestamps;
  application_id?: string;
  details?: string | null;
  state?: string | null;
  emoji?: any;
  party?: ActivityParty;
  assets?: ActivityAssets;
  secrets?: ActivitySecrets;
  instance?: boolean;
  buttons?: ActivityButton[];
  flags?: number;
}

export class Presence implements ActivityPayload {
  type?: ActivityType;
  timestamps?: ActivityTimestamps;
  details?: string | null;
  state?: string | null;
  party?: ActivityParty;
  assets?: ActivityAssets;
  secrets?: ActivitySecrets;
  instance?: boolean;
  buttons?: ActivityButton[];
  flags?: number;

  constructor(data?: ActivityPayload) {
    if (data) Object.assign(this, data);
  }

  setType(type: ActivityType | undefined) {
    this.type = type;
    return this;
  }

  setTimestamps(ts?: {
    start?: Date | number | string;
    end?: Date | number | string;
  }) {
    if (!ts) {
      this.timestamps = undefined;
      return this;
    }
    if (!this.timestamps) this.timestamps = {};
    this.timestamps.start = ts.start ? new Date(ts.start).getTime() : undefined;
    this.timestamps.end = ts.end ? new Date(ts.end).getTime() : undefined;
    return this;
  }

  setStartTimestamp(ts?: Date | number | string) {
    if (!ts) {
      if (this.timestamps && this.timestamps.start)
        this.timestamps.start = undefined;
      return this;
    }

    if (!this.timestamps) this.timestamps = {};
    this.timestamps.start = ts ? new Date(ts).getTime() : undefined;
    return this;
  }

  setEndTimestamp(ts?: Date | number | string) {
    if (!ts) {
      if (this.timestamps && this.timestamps.end)
        this.timestamps.end = undefined;
      return this;
    }

    if (!this.timestamps) this.timestamps = {};
    this.timestamps.end = ts ? new Date(ts).getTime() : undefined;
    return this;
  }

  setDetails(details?: string) {
    this.details = details;
    return this;
  }

  setState(state?: string) {
    this.state = state;
    return this;
  }

  setParty(party?: ActivityParty) {
    this.party = party;
    return this;
  }

  setPartyID(id?: string) {
    if (!id) {
      if (this.party && this.party.id) this.party.id = undefined;
      return this;
    }

    if (!this.party) this.party = {};
    this.party.id = id;
    return this;
  }

  setPartySize(current?: number, max?: number) {
    if (!max && !current) {
      if (this.party && this.party.size) this.party.size = undefined;
      return this;
    }

    if (!this.party) this.party = {};
    this.party.size = [current ?? max ?? 1, max ?? current ?? 1];
    return this;
  }

  setAssets(assets?: ActivityAssets) {
    this.assets = assets;
    return this;
  }

  setLargeAssets(text?: string, image?: string) {
    if (!this.assets) this.assets = {};
    this.assets.large_text = text;
    this.assets.large_image = image;
    return this;
  }

  setSmallAssets(text?: string, image?: string) {
    if (!this.assets) this.assets = {};
    this.assets.small_text = text;
    this.assets.small_image = image;
    return this;
  }

  setLargeText(text?: string) {
    if (!this.assets) this.assets = {};
    this.assets.large_text = text;
    return this;
  }

  setLargeImage(image?: string) {
    if (!this.assets) this.assets = {};
    this.assets.large_image = image;
    return this;
  }

  setSmallText(text?: string) {
    if (!this.assets) this.assets = {};
    this.assets.small_text = text;
    return this;
  }

  setSmallImage(image?: string) {
    if (!this.assets) this.assets = {};
    this.assets.small_image = image;
    return this;
  }

  setSecrets(secrets?: ActivitySecrets) {
    this.secrets = secrets;
    return this;
  }

  setJoinSecret(secret?: string) {
    if (!this.secrets) this.secrets = {};
    this.secrets.join = secret;
    return this;
  }

  setSpectateSecret(secret?: string) {
    if (!this.secrets) this.secrets = {};
    this.secrets.spectate = secret;
    return this;
  }

  setMatchSecret(secret?: string) {
    if (!this.secrets) this.secrets = {};
    this.secrets.match = secret;
    return this;
  }

  setInstance(instance?: boolean) {
    this.instance = instance;
    return this;
  }

  setFlags(...flags: ActivityFlags[]) {
    if (!flags.length) {
      this.flags = undefined;
      return this;
    }

    this.flags = flags.reduce((p, a) => p | a, 0);
    return this;
  }

  setButtons(
    ...buttons: [ActivityButton | undefined, ActivityButton | undefined]
  ) {
    this.buttons = buttons.filter((e) => e !== undefined) as ActivityButton[];
    if (this.buttons.length === 0) this.buttons = undefined;
    return this;
  }

  addButton(button: ActivityButton) {
    if (!this.buttons) this.buttons = [];
    this.buttons.push(button);
    return this;
  }
}
