[rpcord](../README.md) / [Exports](../modules.md) / RPClient

# Class: RPClient

High-level wrapper over Discord IPC.

## Hierarchy

* *EventEmitter*

  ↳ **RPClient**

## Table of contents

### Constructors

- [constructor](rpclient.md#constructor)

### Properties

- [accessToken](rpclient.md#accesstoken)
- [application](rpclient.md#application)
- [authCode](rpclient.md#authcode)
- [authenticated](rpclient.md#authenticated)
- [authorized](rpclient.md#authorized)
- [config](rpclient.md#config)
- [connected](rpclient.md#connected)
- [expires](rpclient.md#expires)
- [id](rpclient.md#id)
- [ipc](rpclient.md#ipc)
- [scopes](rpclient.md#scopes)
- [secret](rpclient.md#secret)
- [user](rpclient.md#user)
- [userVoiceSettings](rpclient.md#uservoicesettings)
- [v](rpclient.md#v)
- [captureRejectionSymbol](rpclient.md#capturerejectionsymbol)
- [captureRejections](rpclient.md#capturerejections)
- [defaultMaxListeners](rpclient.md#defaultmaxlisteners)
- [errorMonitor](rpclient.md#errormonitor)

### Methods

- [addListener](rpclient.md#addlistener)
- [authenticate](rpclient.md#authenticate)
- [authorize](rpclient.md#authorize)
- [captureShortcut](rpclient.md#captureshortcut)
- [closeActivityRequest](rpclient.md#closeactivityrequest)
- [connect](rpclient.md#connect)
- [connectToLobby](rpclient.md#connecttolobby)
- [connectToLobbyVoice](rpclient.md#connecttolobbyvoice)
- [createLobby](rpclient.md#createlobby)
- [deleteLobby](rpclient.md#deletelobby)
- [disconnect](rpclient.md#disconnect)
- [disconnectFromLobby](rpclient.md#disconnectfromlobby)
- [disconnectFromLobbyVoice](rpclient.md#disconnectfromlobbyvoice)
- [emit](rpclient.md#emit)
- [eventNames](rpclient.md#eventnames)
- [fetchAccessToken](rpclient.md#fetchaccesstoken)
- [getChannel](rpclient.md#getchannel)
- [getChannels](rpclient.md#getchannels)
- [getEntitlements](rpclient.md#getentitlements)
- [getGuild](rpclient.md#getguild)
- [getGuilds](rpclient.md#getguilds)
- [getImage](rpclient.md#getimage)
- [getMaxListeners](rpclient.md#getmaxlisteners)
- [getNetworkingConfig](rpclient.md#getnetworkingconfig)
- [getRelationships](rpclient.md#getrelationships)
- [getSelectedVoiceChannel](rpclient.md#getselectedvoicechannel)
- [getSkus](rpclient.md#getskus)
- [getUserAchievements](rpclient.md#getuserachievements)
- [getVoiceSettings](rpclient.md#getvoicesettings)
- [listenerCount](rpclient.md#listenercount)
- [listeners](rpclient.md#listeners)
- [networkingCreateToken](rpclient.md#networkingcreatetoken)
- [networkingPeerMetrics](rpclient.md#networkingpeermetrics)
- [networkingSystemMetrics](rpclient.md#networkingsystemmetrics)
- [off](rpclient.md#off)
- [on](rpclient.md#on)
- [once](rpclient.md#once)
- [openOverlayGuildInvite](rpclient.md#openoverlayguildinvite)
- [openOverlayVoiceSettings](rpclient.md#openoverlayvoicesettings)
- [prependListener](rpclient.md#prependlistener)
- [prependOnceListener](rpclient.md#prependoncelistener)
- [processEvent](rpclient.md#processevent)
- [processPacket](rpclient.md#processpacket)
- [rawListeners](rpclient.md#rawlisteners)
- [removeAllListeners](rpclient.md#removealllisteners)
- [removeListener](rpclient.md#removelistener)
- [searchLobbies](rpclient.md#searchlobbies)
- [selectTextChannel](rpclient.md#selecttextchannel)
- [selectVoiceChannel](rpclient.md#selectvoicechannel)
- [sendActivityJoinInvite](rpclient.md#sendactivityjoininvite)
- [setActivity](rpclient.md#setactivity)
- [setCertifiedDevices](rpclient.md#setcertifieddevices)
- [setMaxListeners](rpclient.md#setmaxlisteners)
- [setUserAchievement](rpclient.md#setuserachievement)
- [setUserVoiceSettings](rpclient.md#setuservoicesettings)
- [setVoiceSettings](rpclient.md#setvoicesettings)
- [startCaptureShortcut](rpclient.md#startcaptureshortcut)
- [stopCaptureShortcut](rpclient.md#stopcaptureshortcut)
- [subscribe](rpclient.md#subscribe)
- [unsubscribe](rpclient.md#unsubscribe)
- [updateLobby](rpclient.md#updatelobby)
- [waitFor](rpclient.md#waitfor)
- [listenerCount](rpclient.md#listenercount)
- [on](rpclient.md#on)
- [once](rpclient.md#once)

## Constructors

### constructor

\+ **new RPClient**(`id`: *string*, `options?`: [*RPClientOptions*](../interfaces/rpclientoptions.md)): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | [*RPClientOptions*](../interfaces/rpclientoptions.md) |

**Returns:** [*RPClient*](rpclient.md)

Defined in: [src/client.ts:65](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L65)

## Properties

### accessToken

• `Optional` **accessToken**: *undefined* \| *string*

Access Token saved from `authenticate`

Defined in: [src/client.ts:49](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L49)

___

### application

• `Optional` **application**: *undefined* \| [*Application*](../interfaces/application.md)

Application object of the Client

Defined in: [src/client.ts:63](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L63)

___

### authCode

• `Optional` **authCode**: *undefined* \| *string*

Auth Code saved from `authorize`

Defined in: [src/client.ts:47](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L47)

___

### authenticated

• **authenticated**: *boolean*= false

Whether Client is Authenticated yet or not

Defined in: [src/client.ts:45](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L45)

___

### authorized

• **authorized**: *boolean*= false

Whether Client is Authorized yet or not

Defined in: [src/client.ts:43](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L43)

___

### config

• `Optional` **config**: *undefined* \| [*ClientConfig*](../interfaces/clientconfig.md)

RPC Client Config (Discord)

Defined in: [src/client.ts:57](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L57)

___

### connected

• **connected**: *boolean*= false

Whether Client is connected or not

Defined in: [src/client.ts:65](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L65)

___

### expires

• `Optional` **expires**: *undefined* \| *number*

Expiration of Access Token

Defined in: [src/client.ts:61](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L61)

___

### id

• **id**: *string*

Client ID

Defined in: [src/client.ts:37](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L37)

___

### ipc

• **ipc**: [*DiscordIPC*](discordipc.md)

Internal IPC

Defined in: [src/client.ts:41](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L41)

___

### scopes

• `Optional` **scopes**: *undefined* \| *string*[]

Scopes to use for Authorization

Defined in: [src/client.ts:51](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L51)

___

### secret

• `Optional` **secret**: *undefined* \| *string*

Client Secret (for fetching Access Token from Auth Code)

Defined in: [src/client.ts:53](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L53)

___

### user

• `Optional` **user**: *undefined* \| [*User*](../interfaces/user.md)

Underlying User account of the Discord Client

Defined in: [src/client.ts:55](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L55)

___

### userVoiceSettings

• `Optional` **userVoiceSettings**: *undefined* \| [*UserVoiceSettings*](../interfaces/uservoicesettings.md)

User's cached Voice Settings

Defined in: [src/client.ts:59](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L59)

___

### v

• **v**: *number*= 1

Discord RPC Version

Defined in: [src/client.ts:39](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L39)

___

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](discordipc.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:38

___

### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:44

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](discordipc.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:37

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:57

___

### authenticate

▸ **authenticate**(`token?`: *string*): *Promise*<[*RPClient*](rpclient.md)\>

Authenticate using an existing Access Token

#### Parameters:

Name | Type |
------ | ------ |
`token?` | *string* |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:252](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L252)

___

### authorize

▸ **authorize**(`scopes?`: *string*[]): *Promise*<[*RPClient*](rpclient.md)\>

Authorize for given scopes (or scopes in Client Options).

#### Parameters:

Name | Type |
------ | ------ |
`scopes?` | *string*[] |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:226](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L226)

___

### captureShortcut

▸ **captureShortcut**(`action`: *START* \| *STOP*, `timeout?`: *number*): *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

START or STOP capturing shortcut

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`action` | *START* \| *STOP* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Defined in: [src/client.ts:557](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L557)

___

### closeActivityRequest

▸ **closeActivityRequest**(`id`: *string*): *void*

Close (decline) an Activity Join Request

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *void*

Defined in: [src/client.ts:633](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L633)

___

### connect

▸ **connect**(): *Promise*<[*RPClient*](rpclient.md)\>

Connect to Discord IPC.

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:210](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L210)

___

### connectToLobby

▸ **connectToLobby**(`id`: *string*, `secret`: *string*, `timeout?`: *number*): *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Connect to a Lobby

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`secret` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Defined in: [src/client.ts:954](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L954)

___

### connectToLobbyVoice

▸ **connectToLobbyVoice**(`id`: *string*, `timeout?`: *number*): *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Disconnect from a Lobby Voice

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Defined in: [src/client.ts:1021](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L1021)

___

### createLobby

▸ **createLobby**(`options?`: [*LobbyOptions*](../interfaces/lobbyoptions.md), `timeout?`: *number*): *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Create a new Lobby with given options

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`options?` | [*LobbyOptions*](../interfaces/lobbyoptions.md) | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Defined in: [src/client.ts:866](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L866)

___

### deleteLobby

▸ **deleteLobby**(`id`: *string*, `timeout?`: *number*): *Promise*<[*RPClient*](rpclient.md)\>

Delete a Lobby

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:933](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L933)

___

### disconnect

▸ **disconnect**(): *void*

Disconnect from Discord IPC

**Returns:** *void*

Defined in: [src/client.ts:1086](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L1086)

___

### disconnectFromLobby

▸ **disconnectFromLobby**(`id`: *string*, `timeout?`: *number*): *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Disconnect from a Lobby

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Defined in: [src/client.ts:979](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L979)

___

### disconnectFromLobbyVoice

▸ **disconnectFromLobbyVoice**(`id`: *string*, `timeout?`: *number*): *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Disconnect from a Lobby Voice

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*Lobby*](../interfaces/lobby.md)\>

Defined in: [src/client.ts:1000](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L1000)

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:67

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:72

___

### fetchAccessToken

▸ `Private`**fetchAccessToken**(`code?`: *string*): *Promise*<*undefined* \| *string*\>

Fetches Access Token from given Auth Code

#### Parameters:

Name | Type |
------ | ------ |
`code?` | *string* |

**Returns:** *Promise*<*undefined* \| *string*\>

Defined in: [src/client.ts:273](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L273)

___

### getChannel

▸ **getChannel**(`id`: *string*, `timeout?`: *number*): *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Get a Channel by ID

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Defined in: [src/client.ts:362](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L362)

___

### getChannels

▸ **getChannels**(`guild?`: *string*, `timeout?`: *number*): *Promise*<[*PartialChannel*](../interfaces/partialchannel.md)[]\>

Get all Channels or channels of a specific Guild

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`guild?` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*PartialChannel*](../interfaces/partialchannel.md)[]\>

Defined in: [src/client.ts:388](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L388)

___

### getEntitlements

▸ **getEntitlements**(`timeout?`: *number*): *Promise*<*any*[]\>

Returns an Array of Entitlements

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<*any*[]\>

Defined in: [src/client.ts:718](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L718)

___

### getGuild

▸ **getGuild**(`id`: *string*, `timeout?`: *number*): *Promise*<[*Guild*](../interfaces/guild.md)\>

Get a Guild by ID

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*Guild*](../interfaces/guild.md)\>

Defined in: [src/client.ts:321](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L321)

___

### getGuilds

▸ **getGuilds**(`timeout?`: *number*): *Promise*<[*PartialGuild*](../interfaces/partialguild.md)[]\>

Get all Guilds of the User

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*PartialGuild*](../interfaces/partialguild.md)[]\>

Defined in: [src/client.ts:343](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L343)

___

### getImage

▸ **getImage**(`options`: [*GetImageOptions*](../interfaces/getimageoptions.md), `timeout?`: *number*): *Promise*<*string*\>

Gets an Image's Data (base64 URI). Supports only type: "1" ATM which is User

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`options` | [*GetImageOptions*](../interfaces/getimageoptions.md) | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<*string*\>

Defined in: [src/client.ts:1042](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L1042)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:64

___

### getNetworkingConfig

▸ **getNetworkingConfig**(`timeout?`: *number*): *Promise*<[*NetworkingConfig*](../interfaces/networkingconfig.md)\>

Gets the Networking Config

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*NetworkingConfig*](../interfaces/networkingconfig.md)\>

Defined in: [src/client.ts:738](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L738)

___

### getRelationships

▸ **getRelationships**(`timeout?`: *number*): *Promise*<*any*\>

Get array of Relationships (Presences)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<*any*\>

Defined in: [src/client.ts:645](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L645)

___

### getSelectedVoiceChannel

▸ **getSelectedVoiceChannel**(`timeout?`: *number*): *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Get selected Voice Channel

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Defined in: [src/client.ts:491](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L491)

___

### getSkus

▸ **getSkus**(`timeout?`: *number*): *Promise*<*any*[]\>

Returns an Array of SKUs

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<*any*[]\>

Defined in: [src/client.ts:700](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L700)

___

### getUserAchievements

▸ **getUserAchievements**(`timeout?`: *number*): *Promise*<*any*[]\>

Returns an array of User's Achievements

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<*any*[]\>

Defined in: [src/client.ts:818](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L818)

___

### getVoiceSettings

▸ **getVoiceSettings**(`timeout?`: *number*): *Promise*<[*VoiceSettings*](../interfaces/voicesettings.md)\>

Get Voice Settins of Client

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*VoiceSettings*](../interfaces/voicesettings.md)\>

Defined in: [src/client.ts:512](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L512)

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:68

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:65

___

### networkingCreateToken

▸ **networkingCreateToken**(`timeout?`: *number*): *Promise*<*string*\>

Creates and returns a new Networking Token

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<*string*\>

Defined in: [src/client.ts:798](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L798)

___

### networkingPeerMetrics

▸ **networkingPeerMetrics**(`timeout?`: *number*): *Promise*<*any*\>

Gets the Networking Peer Metrics

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<*any*\>

Defined in: [src/client.ts:778](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L778)

___

### networkingSystemMetrics

▸ **networkingSystemMetrics**(`timeout?`: *number*): *Promise*<*any*\>

Gets the Networking System Metrics

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<*any*\>

Defined in: [src/client.ts:758](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L758)

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:61

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:58

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:59

___

### openOverlayGuildInvite

▸ **openOverlayGuildInvite**(`code`: *string*): [*RPClient*](rpclient.md)

Opens Guild Invite modal in app of given Invite Code

#### Parameters:

Name | Type |
------ | ------ |
`code` | *string* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: [src/client.ts:665](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L665)

___

### openOverlayVoiceSettings

▸ **openOverlayVoiceSettings**(): [*RPClient*](rpclient.md)

Opens Voice Settings Modal in app

**Returns:** [*RPClient*](rpclient.md)

Defined in: [src/client.ts:683](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L683)

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:70

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:71

___

### processEvent

▸ `Private`**processEvent**(`evt`: [*RPCEvent*](../enums/rpcevent.md), `data`: *any*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`evt` | [*RPCEvent*](../enums/rpcevent.md) |
`data` | *any* |

**Returns:** *void*

Defined in: [src/client.ts:144](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L144)

___

### processPacket

▸ `Private`**processPacket**(`packet`: [*Packet*](packet.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`packet` | [*Packet*](packet.md) |

**Returns:** *void*

Defined in: [src/client.ts:81](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L81)

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:66

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:60

___

### searchLobbies

▸ **searchLobbies**(`timeout?`: *number*): *Promise*<[*Lobby*](../interfaces/lobby.md)[]\>

Search for lobbies

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*Lobby*](../interfaces/lobby.md)[]\>

Defined in: [src/client.ts:887](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L887)

___

### selectTextChannel

▸ **selectTextChannel**(`id`: *string*, `timeout?`: *number*): *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Select a Text Channel by ID

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Defined in: [src/client.ts:467](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L467)

___

### selectVoiceChannel

▸ **selectVoiceChannel**(`id`: *string*, `force?`: *boolean*, `timeout?`: *number*): *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Select a Voice Channel by ID

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`force?` | *boolean* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Defined in: [src/client.ts:438](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L438)

___

### sendActivityJoinInvite

▸ **sendActivityJoinInvite**(`id`: *string*): *void*

Approve an Activity Join Request (by user ID)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *void*

Defined in: [src/client.ts:621](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L621)

___

### setActivity

▸ **setActivity**(`activity`: [*Presence*](presence.md)): *Promise*<[*Presence*](presence.md)\>

Set User's Activity (Presence)

#### Parameters:

Name | Type |
------ | ------ |
`activity` | [*Presence*](presence.md) |

**Returns:** *Promise*<[*Presence*](presence.md)\>

Defined in: [src/client.ts:299](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L299)

___

### setCertifiedDevices

▸ **setCertifiedDevices**(`devices`: [*Device*](../interfaces/device.md)[], `timeout?`: *number*): *Promise*<[*RPClient*](rpclient.md)\>

Set Certified Devices (Audio/Video)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`devices` | [*Device*](../interfaces/device.md)[] | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:595](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L595)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### setUserAchievement

▸ **setUserAchievement**(`id`: *string*, `percent`: *number*, `timeout?`: *number*): *Promise*<[*RPClient*](rpclient.md)\>

Sets User's Achievement progress (percent) by ID

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`percent` | *number* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:838](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L838)

___

### setUserVoiceSettings

▸ **setUserVoiceSettings**(`settings`: [*UserVoiceSettings*](../interfaces/uservoicesettings.md), `timeout?`: *number*): *Promise*<[*UserVoiceSettings*](../interfaces/uservoicesettings.md)\>

Set User's Voice Settings (only one property at a time or Discord will error)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`settings` | [*UserVoiceSettings*](../interfaces/uservoicesettings.md) | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*UserVoiceSettings*](../interfaces/uservoicesettings.md)\>

Defined in: [src/client.ts:414](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L414)

___

### setVoiceSettings

▸ **setVoiceSettings**(`settings`: [*VoiceSettings*](../interfaces/voicesettings.md), `timeout?`: *number*): *Promise*<[*VoiceSettings*](../interfaces/voicesettings.md)\>

Set Voice Settings of Client. Only one property to update at once supported

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`settings` | [*VoiceSettings*](../interfaces/voicesettings.md) | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*VoiceSettings*](../interfaces/voicesettings.md)\>

Defined in: [src/client.ts:533](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L533)

___

### startCaptureShortcut

▸ **startCaptureShortcut**(`timeout?`: *number*): *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Start capturing shortcut

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Defined in: [src/client.ts:585](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L585)

___

### stopCaptureShortcut

▸ **stopCaptureShortcut**(`timeout?`: *number*): *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Stop capturing shortcut

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Defined in: [src/client.ts:590](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L590)

___

### subscribe

▸ **subscribe**(`evt`: [*RPCEvent*](../enums/rpcevent.md), `args?`: *any*): *Promise*<[*RPClient*](rpclient.md)\>

Subscribe for an RPC Event.

#### Parameters:

Name | Type |
------ | ------ |
`evt` | [*RPCEvent*](../enums/rpcevent.md) |
`args?` | *any* |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:170](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L170)

___

### unsubscribe

▸ **unsubscribe**(`evt`: [*RPCEvent*](../enums/rpcevent.md), `args?`: *any*): *Promise*<[*RPClient*](rpclient.md)\>

Unsubscribe from an RPC Event.

#### Parameters:

Name | Type |
------ | ------ |
`evt` | [*RPCEvent*](../enums/rpcevent.md) |
`args?` | *any* |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:190](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L190)

___

### updateLobby

▸ **updateLobby**(`id`: *string*, `options`: [*LobbyOptions*](../interfaces/lobbyoptions.md), `timeout?`: *number*): *Promise*<[*RPClient*](rpclient.md)\>

Update a Lobby with given options

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *string* | - |
`options` | [*LobbyOptions*](../interfaces/lobbyoptions.md) | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:908](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L908)

___

### waitFor

▸ **waitFor**(`event`: *string*, `checkFunction?`: (...`args`: *any*[]) => *boolean*, `timeout?`: *number*): *Promise*<*any*[]\>

Wait for an event to fire

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`event` | *string* | - |
`checkFunction` | (...`args`: *any*[]) => *boolean* | ... |
`timeout?` | *number* | - |

**Returns:** *Promise*<*any*[]\>

Defined in: [src/client.ts:1061](https://github.com/DjDeveloperr/RPCord/blob/91f1aca/src/client.ts#L1061)

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:26

___

### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<*any*\>

Defined in: node_modules/@types/node/events.d.ts:23

___

### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *NodeEventTarget* |
`event` | *string* \| *symbol* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:21

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:22
