[rpcord](../README.md) / [Exports](../modules.md) / Packet

# Class: Packet

## Table of contents

### Constructors

- [constructor](packet.md#constructor)

### Properties

- [data](packet.md#data)
- [op](packet.md#op)

### Methods

- [encode](packet.md#encode)
- [parse](packet.md#parse)
- [tryParse](packet.md#tryparse)

## Constructors

### constructor

\+ **new Packet**(`op`: [*OpCode*](../enums/opcode.md), `data?`: *any*): [*Packet*](packet.md)

#### Parameters:

Name | Type |
:------ | :------ |
`op` | [*OpCode*](../enums/opcode.md) |
`data?` | *any* |

**Returns:** [*Packet*](packet.md)

Defined in: [src/packet.ts:5](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/packet.ts#L5)

## Properties

### data

• **data**: *any*

Defined in: [src/packet.ts:5](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/packet.ts#L5)

___

### op

• **op**: [*OpCode*](../enums/opcode.md)

Defined in: [src/packet.ts:4](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/packet.ts#L4)

## Methods

### encode

▸ **encode**(): *Buffer*

**Returns:** *Buffer*

Defined in: [src/packet.ts:12](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/packet.ts#L12)

___

### parse

▸ `Static`**parse**(`data`: *string* \| *Uint8Array* \| *Buffer*): [*Packet*](packet.md)

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *string* \| *Uint8Array* \| *Buffer* |

**Returns:** [*Packet*](packet.md)

Defined in: [src/packet.ts:25](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/packet.ts#L25)

___

### tryParse

▸ `Static`**tryParse**(`data`: *string* \| *Uint8Array* \| *Buffer*): *undefined* \| [*Packet*](packet.md)

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *string* \| *Uint8Array* \| *Buffer* |

**Returns:** *undefined* \| [*Packet*](packet.md)

Defined in: [src/packet.ts:39](https://github.com/DjDeveloperr/RPCord/blob/43e46ce/src/packet.ts#L39)
