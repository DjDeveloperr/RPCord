[rpcord](../README.md) / [Exports](../modules.md) / DiscordIPC

# Class: DiscordIPC

## Hierarchy

* *EventEmitter*

  ↳ **DiscordIPC**

## Table of contents

### Constructors

- [constructor](discordipc.md#constructor)

### Properties

- [socket](discordipc.md#socket)
- [captureRejectionSymbol](discordipc.md#capturerejectionsymbol)
- [captureRejections](discordipc.md#capturerejections)
- [defaultMaxListeners](discordipc.md#defaultmaxlisteners)
- [errorMonitor](discordipc.md#errormonitor)

### Methods

- [addListener](discordipc.md#addlistener)
- [close](discordipc.md#close)
- [connect](discordipc.md#connect)
- [emit](discordipc.md#emit)
- [eventNames](discordipc.md#eventnames)
- [getMaxListeners](discordipc.md#getmaxlisteners)
- [listenerCount](discordipc.md#listenercount)
- [listeners](discordipc.md#listeners)
- [off](discordipc.md#off)
- [on](discordipc.md#on)
- [once](discordipc.md#once)
- [prependListener](discordipc.md#prependlistener)
- [prependOnceListener](discordipc.md#prependoncelistener)
- [rawListeners](discordipc.md#rawlisteners)
- [removeAllListeners](discordipc.md#removealllisteners)
- [removeListener](discordipc.md#removelistener)
- [send](discordipc.md#send)
- [setMaxListeners](discordipc.md#setmaxlisteners)
- [listenerCount](discordipc.md#listenercount)
- [on](discordipc.md#on)
- [once](discordipc.md#once)

## Constructors

### constructor

\+ **new DiscordIPC**(`options?`: EventEmitterOptions): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`options?` | EventEmitterOptions |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:18

## Properties

### socket

• `Optional` **socket**: *undefined* \| *Socket*

Defined in: [src/ipc.ts:26](https://github.com/DjDeveloperr/RPCord/blob/51e0bc3/src/ipc.ts#L26)

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

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:57

___

### close

▸ **close**(): *void*

**Returns:** *void*

Defined in: [src/ipc.ts:48](https://github.com/DjDeveloperr/RPCord/blob/51e0bc3/src/ipc.ts#L48)

___

### connect

▸ **connect**(): *Promise*<*void*\>

**Returns:** *Promise*<*void*\>

Defined in: [src/ipc.ts:28](https://github.com/DjDeveloperr/RPCord/blob/51e0bc3/src/ipc.ts#L28)

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

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:64

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

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:61

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:58

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:59

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:70

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:71

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

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:60

___

### send

▸ **send**(`packet`: [*Packet*](packet.md)): *string*

#### Parameters:

Name | Type |
------ | ------ |
`packet` | [*Packet*](packet.md) |

**Returns:** *string*

Defined in: [src/ipc.ts:42](https://github.com/DjDeveloperr/RPCord/blob/51e0bc3/src/ipc.ts#L42)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*DiscordIPC*](discordipc.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*DiscordIPC*](discordipc.md)

Defined in: node_modules/@types/node/events.d.ts:63

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
