[rpcord](README.md) / Exports

# rpcord

## Table of contents

### Enumerations

- [ActivityFlags](enums/activityflags.md)
- [ActivityType](enums/activitytype.md)
- [Command](enums/command.md)
- [DeviceType](enums/devicetype.md)
- [KeyType](enums/keytype.md)
- [LobbyType](enums/lobbytype.md)
- [OpCode](enums/opcode.md)
- [PremiumType](enums/premiumtype.md)
- [RPCEvent](enums/rpcevent.md)

### Classes

- [DiscordIPC](classes/discordipc.md)
- [Packet](classes/packet.md)
- [Presence](classes/presence.md)
- [RPClient](classes/rpclient.md)

### Interfaces

- [ActivityAssets](interfaces/activityassets.md)
- [ActivityButton](interfaces/activitybutton.md)
- [ActivityParty](interfaces/activityparty.md)
- [ActivityPayload](interfaces/activitypayload.md)
- [ActivitySecrets](interfaces/activitysecrets.md)
- [ActivityTimestamps](interfaces/activitytimestamps.md)
- [Application](interfaces/application.md)
- [ChannelPayload](interfaces/channelpayload.md)
- [ClientConfig](interfaces/clientconfig.md)
- [Device](interfaces/device.md)
- [DeviceModel](interfaces/devicemodel.md)
- [DeviceVendor](interfaces/devicevendor.md)
- [GetImageOptions](interfaces/getimageoptions.md)
- [Guild](interfaces/guild.md)
- [Lobby](interfaces/lobby.md)
- [LobbyMetadata](interfaces/lobbymetadata.md)
- [LobbyOptions](interfaces/lobbyoptions.md)
- [Message](interfaces/message.md)
- [NetworkingConfig](interfaces/networkingconfig.md)
- [PartialChannel](interfaces/partialchannel.md)
- [PartialGuild](interfaces/partialguild.md)
- [RPClientOptions](interfaces/rpclientoptions.md)
- [ShortcutKeyCombo](interfaces/shortcutkeycombo.md)
- [User](interfaces/user.md)
- [UserVoiceSettings](interfaces/uservoicesettings.md)
- [UserVoiceSettingsPan](interfaces/uservoicesettingspan.md)
- [VoiceSettings](interfaces/voicesettings.md)
- [VoiceSettingsInput](interfaces/voicesettingsinput.md)
- [VoiceSettingsMode](interfaces/voicesettingsmode.md)
- [VoiceSettingsOutput](interfaces/voicesettingsoutput.md)
- [VoiceState](interfaces/voicestate.md)
- [VoiceStateData](interfaces/voicestatedata.md)

### Functions

- [findIPC](modules.md#findipc)
- [getIPCPath](modules.md#getipcpath)

## Functions

### findIPC

▸ **findIPC**(`id?`: *number*): *Promise*<Socket\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *number* | 0 |

**Returns:** *Promise*<Socket\>

Defined in: [src/ipc.ts:7](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/ipc.ts#L7)

___

### getIPCPath

▸ **getIPCPath**(`id`: *number*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`id` | *number* |

**Returns:** *string*

Defined in: [src/util.ts:1](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/util.ts#L1)
