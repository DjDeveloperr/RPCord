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

- [\_subscribed](rpclient.md#_subscribed)
- [accessToken](rpclient.md#accesstoken)
- [achievementManager](rpclient.md#achievementmanager)
- [application](rpclient.md#application)
- [authCode](rpclient.md#authcode)
- [authenticated](rpclient.md#authenticated)
- [authorized](rpclient.md#authorized)
- [config](rpclient.md#config)
- [connected](rpclient.md#connected)
- [expires](rpclient.md#expires)
- [id](rpclient.md#id)
- [ipc](rpclient.md#ipc)
- [lobbyManager](rpclient.md#lobbymanager)
- [networkingManager](rpclient.md#networkingmanager)
- [overlayManager](rpclient.md#overlaymanager)
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
- [disconnect](rpclient.md#disconnect)
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
- [getRelationships](rpclient.md#getrelationships)
- [getSelectedVoiceChannel](rpclient.md#getselectedvoicechannel)
- [getSkus](rpclient.md#getskus)
- [getVoiceSettings](rpclient.md#getvoicesettings)
- [listenerCount](rpclient.md#listenercount)
- [listeners](rpclient.md#listeners)
- [off](rpclient.md#off)
- [on](rpclient.md#on)
- [once](rpclient.md#once)
- [prependListener](rpclient.md#prependlistener)
- [prependOnceListener](rpclient.md#prependoncelistener)
- [processEvent](rpclient.md#processevent)
- [processPacket](rpclient.md#processpacket)
- [rawListeners](rpclient.md#rawlisteners)
- [removeAllListeners](rpclient.md#removealllisteners)
- [removeListener](rpclient.md#removelistener)
- [selectTextChannel](rpclient.md#selecttextchannel)
- [selectVoiceChannel](rpclient.md#selectvoicechannel)
- [sendActivityJoinInvite](rpclient.md#sendactivityjoininvite)
- [setActivity](rpclient.md#setactivity)
- [setCertifiedDevices](rpclient.md#setcertifieddevices)
- [setMaxListeners](rpclient.md#setmaxlisteners)
- [setUserVoiceSettings](rpclient.md#setuservoicesettings)
- [setVoiceSettings](rpclient.md#setvoicesettings)
- [startCaptureShortcut](rpclient.md#startcaptureshortcut)
- [stopCaptureShortcut](rpclient.md#stopcaptureshortcut)
- [subscribe](rpclient.md#subscribe)
- [unsubscribe](rpclient.md#unsubscribe)
- [waitFor](rpclient.md#waitfor)
- [listenerCount](rpclient.md#listenercount)
- [on](rpclient.md#on)
- [once](rpclient.md#once)

## Constructors

### constructor

\+ **new RPClient**(`id`: *string*, `options?`: [*RPClientOptions*](../interfaces/rpclientoptions.md)): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`options?` | [*RPClientOptions*](../interfaces/rpclientoptions.md) |

**Returns:** [*RPClient*](rpclient.md)

Defined in: [src/client.ts:94](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L94)

## Properties

### \_subscribed

• `Private` **\_subscribed**: *string*[]

Defined in: [src/client.ts:94](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L94)

___

### accessToken

• `Optional` **accessToken**: *undefined* \| *string*

Access Token saved from `authenticate`

Defined in: [src/client.ts:72](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L72)

___

### achievementManager

• **achievementManager**: *AchievementManager*

Defined in: [src/client.ts:91](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L91)

___

### application

• `Optional` **application**: *undefined* \| [*Application*](../interfaces/application.md)

Application object of the Client

Defined in: [src/client.ts:86](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L86)

___

### authCode

• `Optional` **authCode**: *undefined* \| *string*

Auth Code saved from `authorize`

Defined in: [src/client.ts:70](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L70)

___

### authenticated

• **authenticated**: *boolean*= false

Whether Client is Authenticated yet or not

Defined in: [src/client.ts:68](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L68)

___

### authorized

• **authorized**: *boolean*= false

Whether Client is Authorized yet or not

Defined in: [src/client.ts:66](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L66)

___

### config

• `Optional` **config**: *undefined* \| [*ClientConfig*](../interfaces/clientconfig.md)

RPC Client Config (Discord)

Defined in: [src/client.ts:80](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L80)

___

### connected

• **connected**: *boolean*= false

Whether Client is connected or not

Defined in: [src/client.ts:88](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L88)

___

### expires

• `Optional` **expires**: *undefined* \| *number*

Expiration of Access Token

Defined in: [src/client.ts:84](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L84)

___

### id

• **id**: *string*

Client ID

Defined in: [src/client.ts:60](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L60)

___

### ipc

• **ipc**: [*DiscordIPC*](discordipc.md)

Internal IPC

Defined in: [src/client.ts:64](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L64)

___

### lobbyManager

• **lobbyManager**: *LobbyManager*

Defined in: [src/client.ts:90](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L90)

___

### networkingManager

• **networkingManager**: *NetworkingManager*

Defined in: [src/client.ts:93](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L93)

___

### overlayManager

• **overlayManager**: *OverlayManager*

Defined in: [src/client.ts:92](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L92)

___

### scopes

• `Optional` **scopes**: *undefined* \| *string*[]

Scopes to use for Authorization

Defined in: [src/client.ts:74](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L74)

___

### secret

• `Optional` **secret**: *undefined* \| *string*

Client Secret (for fetching Access Token from Auth Code)

Defined in: [src/client.ts:76](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L76)

___

### user

• `Optional` **user**: *undefined* \| [*User*](../interfaces/user.md)

Underlying User account of the Discord Client

Defined in: [src/client.ts:78](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L78)

___

### userVoiceSettings

• `Optional` **userVoiceSettings**: *undefined* \| [*UserVoiceSettings*](../interfaces/uservoicesettings.md)

User's cached Voice Settings

Defined in: [src/client.ts:82](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L82)

___

### v

• **v**: *number*= 1

Discord RPC Version

Defined in: [src/client.ts:62](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L62)

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
:------ | :------ |
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
:------ | :------ |
`token?` | *string* |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:308](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L308)

___

### authorize

▸ **authorize**(`scopes?`: *string*[]): *Promise*<[*RPClient*](rpclient.md)\>

Authorize for given scopes (or scopes in Client Options).

#### Parameters:

Name | Type |
:------ | :------ |
`scopes?` | *string*[] |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:282](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L282)

___

### captureShortcut

▸ **captureShortcut**(`action`: *START* \| *STOP*, `timeout?`: *number*): *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

START or STOP capturing shortcut

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`action` | *START* \| *STOP* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Defined in: [src/client.ts:613](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L613)

___

### closeActivityRequest

▸ **closeActivityRequest**(`id`: *string*): *void*

Close (decline) an Activity Join Request

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *void*

Defined in: [src/client.ts:689](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L689)

___

### connect

▸ **connect**(): *Promise*<[*RPClient*](rpclient.md)\>

Connect to Discord IPC.

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:266](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L266)

___

### disconnect

▸ **disconnect**(): *void*

Disconnect from Discord IPC

**Returns:** *void*

Defined in: [src/client.ts:814](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L814)

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
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

▸ `Private`**fetchAccessToken**(`code?`: *string*): *Promise*<undefined \| string\>

Fetches Access Token from given Auth Code

#### Parameters:

Name | Type |
:------ | :------ |
`code?` | *string* |

**Returns:** *Promise*<undefined \| string\>

Defined in: [src/client.ts:329](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L329)

___

### getChannel

▸ **getChannel**(`id`: *string*, `timeout?`: *number*): *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Get a Channel by ID

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Defined in: [src/client.ts:418](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L418)

___

### getChannels

▸ **getChannels**(`guild?`: *string*, `timeout?`: *number*): *Promise*<[*PartialChannel*](../interfaces/partialchannel.md)[]\>

Get all Channels or channels of a specific Guild

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`guild?` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*PartialChannel*](../interfaces/partialchannel.md)[]\>

Defined in: [src/client.ts:444](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L444)

___

### getEntitlements

▸ **getEntitlements**(`timeout?`: *number*): *Promise*<any[]\>

Returns an Array of Entitlements

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<any[]\>

Defined in: [src/client.ts:739](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L739)

___

### getGuild

▸ **getGuild**(`id`: *string*, `timeout?`: *number*): *Promise*<[*Guild*](../interfaces/guild.md)\>

Get a Guild by ID

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*Guild*](../interfaces/guild.md)\>

Defined in: [src/client.ts:377](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L377)

___

### getGuilds

▸ **getGuilds**(`timeout?`: *number*): *Promise*<[*PartialGuild*](../interfaces/partialguild.md)[]\>

Get all Guilds of the User

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*PartialGuild*](../interfaces/partialguild.md)[]\>

Defined in: [src/client.ts:399](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L399)

___

### getImage

▸ **getImage**(`options`: [*GetImageOptions*](../interfaces/getimageoptions.md), `timeout?`: *number*): *Promise*<string\>

Gets an Image's Data (base64 URI). Supports only type: "user" ATM which is User Avatar

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`options` | [*GetImageOptions*](../interfaces/getimageoptions.md) | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<string\>

Defined in: [src/client.ts:759](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L759)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:64

___

### getRelationships

▸ **getRelationships**(`timeout?`: *number*): *Promise*<[*Relationship*](../interfaces/relationship.md)[]\>

Get array of Relationships (Presences)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*Relationship*](../interfaces/relationship.md)[]\>

Defined in: [src/client.ts:701](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L701)

___

### getSelectedVoiceChannel

▸ **getSelectedVoiceChannel**(`timeout?`: *number*): *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Get selected Voice Channel

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Defined in: [src/client.ts:547](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L547)

___

### getSkus

▸ **getSkus**(`timeout?`: *number*): *Promise*<any[]\>

Returns an Array of SKUs

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<any[]\>

Defined in: [src/client.ts:721](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L721)

___

### getVoiceSettings

▸ **getVoiceSettings**(`timeout?`: *number*): *Promise*<[*VoiceSettings*](../interfaces/voicesettings.md)\>

Get Voice Settins of Client

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*VoiceSettings*](../interfaces/voicesettings.md)\>

Defined in: [src/client.ts:568](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L568)

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:68

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:65

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:61

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:58

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:59

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:70

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:71

___

### processEvent

▸ `Private`**processEvent**(`evt`: [*RPCEvent*](../enums/rpcevent.md), `data`: *any*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`evt` | [*RPCEvent*](../enums/rpcevent.md) |
`data` | *any* |

**Returns:** *Promise*<void\>

Defined in: [src/client.ts:180](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L180)

___

### processPacket

▸ `Private`**processPacket**(`packet`: [*Packet*](packet.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`packet` | [*Packet*](packet.md) |

**Returns:** *void*

Defined in: [src/client.ts:116](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L116)

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:66

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:60

___

### selectTextChannel

▸ **selectTextChannel**(`id`: *string*, `timeout?`: *number*): *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Select a Text Channel by ID

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`id` | *string* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Defined in: [src/client.ts:523](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L523)

___

### selectVoiceChannel

▸ **selectVoiceChannel**(`id`: *string*, `force?`: *boolean*, `timeout?`: *number*): *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Select a Voice Channel by ID

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`id` | *string* | - |
`force?` | *boolean* | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ChannelPayload*](../interfaces/channelpayload.md)\>

Defined in: [src/client.ts:494](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L494)

___

### sendActivityJoinInvite

▸ **sendActivityJoinInvite**(`id`: *string*): *void*

Approve an Activity Join Request (by user ID)

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *void*

Defined in: [src/client.ts:677](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L677)

___

### setActivity

▸ **setActivity**(`activity`: [*Presence*](presence.md)): *Promise*<[*Presence*](presence.md)\>

Set User's Activity (Presence)

#### Parameters:

Name | Type |
:------ | :------ |
`activity` | [*Presence*](presence.md) |

**Returns:** *Promise*<[*Presence*](presence.md)\>

Defined in: [src/client.ts:355](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L355)

___

### setCertifiedDevices

▸ **setCertifiedDevices**(`devices`: [*Device*](../interfaces/device.md)[], `timeout?`: *number*): *Promise*<[*RPClient*](rpclient.md)\>

Set Certified Devices (Audio/Video)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`devices` | [*Device*](../interfaces/device.md)[] | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:651](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L651)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*RPClient*](rpclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*RPClient*](rpclient.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### setUserVoiceSettings

▸ **setUserVoiceSettings**(`settings`: [*UserVoiceSettings*](../interfaces/uservoicesettings.md), `timeout?`: *number*): *Promise*<[*UserVoiceSettings*](../interfaces/uservoicesettings.md)\>

Set User's Voice Settings (only one property at a time or Discord will error)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`settings` | [*UserVoiceSettings*](../interfaces/uservoicesettings.md) | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*UserVoiceSettings*](../interfaces/uservoicesettings.md)\>

Defined in: [src/client.ts:470](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L470)

___

### setVoiceSettings

▸ **setVoiceSettings**(`settings`: [*VoiceSettings*](../interfaces/voicesettings.md), `timeout?`: *number*): *Promise*<[*VoiceSettings*](../interfaces/voicesettings.md)\>

Set Voice Settings of Client. Only one property to update at once supported

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`settings` | [*VoiceSettings*](../interfaces/voicesettings.md) | - |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*VoiceSettings*](../interfaces/voicesettings.md)\>

Defined in: [src/client.ts:589](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L589)

___

### startCaptureShortcut

▸ **startCaptureShortcut**(`timeout?`: *number*): *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Start capturing shortcut

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Defined in: [src/client.ts:641](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L641)

___

### stopCaptureShortcut

▸ **stopCaptureShortcut**(`timeout?`: *number*): *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Stop capturing shortcut

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`timeout` | *number* | 5000 |

**Returns:** *Promise*<[*ShortcutKeyCombo*](../interfaces/shortcutkeycombo.md)[]\>

Defined in: [src/client.ts:646](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L646)

___

### subscribe

▸ **subscribe**(`evt`: [*RPCEvent*](../enums/rpcevent.md), `args?`: *any*): *Promise*<[*RPClient*](rpclient.md)\>

Subscribe for an RPC Event.

#### Parameters:

Name | Type |
:------ | :------ |
`evt` | [*RPCEvent*](../enums/rpcevent.md) |
`args?` | *any* |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:217](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L217)

___

### unsubscribe

▸ **unsubscribe**(`evt`: [*RPCEvent*](../enums/rpcevent.md), `args?`: *any*): *Promise*<[*RPClient*](rpclient.md)\>

Unsubscribe from an RPC Event.

#### Parameters:

Name | Type |
:------ | :------ |
`evt` | [*RPCEvent*](../enums/rpcevent.md) |
`args?` | *any* |

**Returns:** *Promise*<[*RPClient*](rpclient.md)\>

Defined in: [src/client.ts:242](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L242)

___

### waitFor

▸ **waitFor**(`event`: *string*, `checkFunction?`: (...`args`: *any*[]) => *boolean*, `timeout?`: *number*): *Promise*<any[]\>

Wait for an event to fire

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* |
`checkFunction` | (...`args`: *any*[]) => *boolean* |
`timeout?` | *number* |

**Returns:** *Promise*<any[]\>

Defined in: [src/client.ts:778](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/client.ts#L778)

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:26

___

### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<any\>

Defined in: node_modules/@types/node/events.d.ts:23

___

### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*): *Promise*<any[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *NodeEventTarget* |
`event` | *string* \| *symbol* |

**Returns:** *Promise*<any[]\>

Defined in: node_modules/@types/node/events.d.ts:21

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<any[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<any[]\>

Defined in: node_modules/@types/node/events.d.ts:22
