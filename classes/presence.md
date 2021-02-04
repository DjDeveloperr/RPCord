[rpcord](../README.md) / [Exports](../modules.md) / Presence

# Class: Presence

## Hierarchy

* **Presence**

## Implements

* [*ActivityPayload*](../interfaces/activitypayload.md)

## Table of contents

### Constructors

- [constructor](presence.md#constructor)

### Properties

- [assets](presence.md#assets)
- [buttons](presence.md#buttons)
- [details](presence.md#details)
- [flags](presence.md#flags)
- [instance](presence.md#instance)
- [party](presence.md#party)
- [secrets](presence.md#secrets)
- [state](presence.md#state)
- [timestamps](presence.md#timestamps)
- [type](presence.md#type)

### Methods

- [addButton](presence.md#addbutton)
- [setAssets](presence.md#setassets)
- [setButtons](presence.md#setbuttons)
- [setDetails](presence.md#setdetails)
- [setEndTimestamp](presence.md#setendtimestamp)
- [setFlags](presence.md#setflags)
- [setInstance](presence.md#setinstance)
- [setJoinSecret](presence.md#setjoinsecret)
- [setLargeAssets](presence.md#setlargeassets)
- [setLargeImage](presence.md#setlargeimage)
- [setLargeText](presence.md#setlargetext)
- [setMatchSecret](presence.md#setmatchsecret)
- [setParty](presence.md#setparty)
- [setPartyID](presence.md#setpartyid)
- [setPartySize](presence.md#setpartysize)
- [setSecrets](presence.md#setsecrets)
- [setSmallAssets](presence.md#setsmallassets)
- [setSmallImage](presence.md#setsmallimage)
- [setSmallText](presence.md#setsmalltext)
- [setSpectateSecret](presence.md#setspectatesecret)
- [setStartTimestamp](presence.md#setstarttimestamp)
- [setState](presence.md#setstate)
- [setTimestamps](presence.md#settimestamps)
- [setType](presence.md#settype)

## Constructors

### constructor

\+ **new Presence**(`data?`: [*ActivityPayload*](../interfaces/activitypayload.md)): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`data?` | [*ActivityPayload*](../interfaces/activitypayload.md) |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:74](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L74)

## Properties

### assets

• `Optional` **assets**: *undefined* \| [*ActivityAssets*](../interfaces/activityassets.md)

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[assets](../interfaces/activitypayload.md#assets)

Defined in: [src/presence.ts:70](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L70)

___

### buttons

• `Optional` **buttons**: *undefined* \| [*ActivityButton*](../interfaces/activitybutton.md)[]

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[buttons](../interfaces/activitypayload.md#buttons)

Defined in: [src/presence.ts:73](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L73)

___

### details

• `Optional` **details**: *undefined* \| *null* \| *string*

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[details](../interfaces/activitypayload.md#details)

Defined in: [src/presence.ts:67](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L67)

___

### flags

• `Optional` **flags**: *undefined* \| *number*

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[flags](../interfaces/activitypayload.md#flags)

Defined in: [src/presence.ts:74](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L74)

___

### instance

• `Optional` **instance**: *undefined* \| *boolean*

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[instance](../interfaces/activitypayload.md#instance)

Defined in: [src/presence.ts:72](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L72)

___

### party

• `Optional` **party**: *undefined* \| [*ActivityParty*](../interfaces/activityparty.md)

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[party](../interfaces/activitypayload.md#party)

Defined in: [src/presence.ts:69](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L69)

___

### secrets

• `Optional` **secrets**: *undefined* \| [*ActivitySecrets*](../interfaces/activitysecrets.md)

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[secrets](../interfaces/activitypayload.md#secrets)

Defined in: [src/presence.ts:71](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L71)

___

### state

• `Optional` **state**: *undefined* \| *null* \| *string*

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[state](../interfaces/activitypayload.md#state)

Defined in: [src/presence.ts:68](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L68)

___

### timestamps

• `Optional` **timestamps**: *undefined* \| [*ActivityTimestamps*](../interfaces/activitytimestamps.md)

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[timestamps](../interfaces/activitypayload.md#timestamps)

Defined in: [src/presence.ts:66](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L66)

___

### type

• `Optional` **type**: *undefined* \| [*Game*](../enums/activitytype.md#game) \| [*Streaming*](../enums/activitytype.md#streaming) \| [*Listening*](../enums/activitytype.md#listening) \| [*Custom*](../enums/activitytype.md#custom) \| [*Competing*](../enums/activitytype.md#competing)

Implementation of: [ActivityPayload](../interfaces/activitypayload.md).[type](../interfaces/activitypayload.md#type)

Defined in: [src/presence.ts:65](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L65)

## Methods

### addButton

▸ **addButton**(`button`: [*ActivityButton*](../interfaces/activitybutton.md)): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`button` | [*ActivityButton*](../interfaces/activitybutton.md) |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:249](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L249)

___

### setAssets

▸ **setAssets**(`assets?`: [*ActivityAssets*](../interfaces/activityassets.md)): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`assets?` | [*ActivityAssets*](../interfaces/activityassets.md) |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:160](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L160)

___

### setButtons

▸ **setButtons**(...`buttons`: [*undefined* \| [*ActivityButton*](../interfaces/activitybutton.md), *undefined* \| [*ActivityButton*](../interfaces/activitybutton.md)]): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`...buttons` | [*undefined* \| [*ActivityButton*](../interfaces/activitybutton.md), *undefined* \| [*ActivityButton*](../interfaces/activitybutton.md)] |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:241](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L241)

___

### setDetails

▸ **setDetails**(`details?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`details?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:123](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L123)

___

### setEndTimestamp

▸ **setEndTimestamp**(`ts?`: *string* \| *number* \| Date): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`ts?` | *string* \| *number* \| Date |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:111](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L111)

___

### setFlags

▸ **setFlags**(...`flags`: [*ActivityFlags*](../enums/activityflags.md)[]): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`...flags` | [*ActivityFlags*](../enums/activityflags.md)[] |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:231](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L231)

___

### setInstance

▸ **setInstance**(`instance?`: *boolean*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`instance?` | *boolean* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:226](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L226)

___

### setJoinSecret

▸ **setJoinSecret**(`secret?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`secret?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:208](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L208)

___

### setLargeAssets

▸ **setLargeAssets**(`text?`: *string*, `image?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`text?` | *string* |
`image?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:165](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L165)

___

### setLargeImage

▸ **setLargeImage**(`image?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`image?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:185](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L185)

___

### setLargeText

▸ **setLargeText**(`text?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`text?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:179](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L179)

___

### setMatchSecret

▸ **setMatchSecret**(`secret?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`secret?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:220](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L220)

___

### setParty

▸ **setParty**(`party?`: [*ActivityParty*](../interfaces/activityparty.md)): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`party?` | [*ActivityParty*](../interfaces/activityparty.md) |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:133](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L133)

___

### setPartyID

▸ **setPartyID**(`id?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`id?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:138](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L138)

___

### setPartySize

▸ **setPartySize**(`current?`: *number*, `max?`: *number*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`current?` | *number* |
`max?` | *number* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:149](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L149)

___

### setSecrets

▸ **setSecrets**(`secrets?`: [*ActivitySecrets*](../interfaces/activitysecrets.md)): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`secrets?` | [*ActivitySecrets*](../interfaces/activitysecrets.md) |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:203](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L203)

___

### setSmallAssets

▸ **setSmallAssets**(`text?`: *string*, `image?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`text?` | *string* |
`image?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:172](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L172)

___

### setSmallImage

▸ **setSmallImage**(`image?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`image?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:197](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L197)

___

### setSmallText

▸ **setSmallText**(`text?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`text?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:191](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L191)

___

### setSpectateSecret

▸ **setSpectateSecret**(`secret?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`secret?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:214](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L214)

___

### setStartTimestamp

▸ **setStartTimestamp**(`ts?`: *string* \| *number* \| Date): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`ts?` | *string* \| *number* \| Date |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:99](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L99)

___

### setState

▸ **setState**(`state?`: *string*): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`state?` | *string* |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:128](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L128)

___

### setTimestamps

▸ **setTimestamps**(`ts?`: { `end?`: *undefined* \| *string* \| *number* \| Date ; `start?`: *undefined* \| *string* \| *number* \| Date  }): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`ts?` | { `end?`: *undefined* \| *string* \| *number* \| Date ; `start?`: *undefined* \| *string* \| *number* \| Date  } |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:85](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L85)

___

### setType

▸ **setType**(`type`: *undefined* \| [*Game*](../enums/activitytype.md#game) \| [*Streaming*](../enums/activitytype.md#streaming) \| [*Listening*](../enums/activitytype.md#listening) \| [*Custom*](../enums/activitytype.md#custom) \| [*Competing*](../enums/activitytype.md#competing)): [*Presence*](presence.md)

#### Parameters:

Name | Type |
------ | ------ |
`type` | *undefined* \| [*Game*](../enums/activitytype.md#game) \| [*Streaming*](../enums/activitytype.md#streaming) \| [*Listening*](../enums/activitytype.md#listening) \| [*Custom*](../enums/activitytype.md#custom) \| [*Competing*](../enums/activitytype.md#competing) |

**Returns:** [*Presence*](presence.md)

Defined in: [src/presence.ts:80](https://github.com/DjDeveloperr/RPCord/blob/308e2e6/src/presence.ts#L80)
