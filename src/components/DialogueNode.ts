import { Component } from "./Component";

export interface MetaData {
  readonly metaSchemaId: string,
  readonly metaSchemaValue: string,
}

export interface SetVariable {
  readonly variableId: string,
  readonly value: string
}

export class DialogueNode implements Component {
  public readonly type = '@lorehub/dialogue-node';
  public readonly apiVersion = '1.0.0';
  constructor(
    public readonly id: string,
    public readonly contentBlockId: string,
    public readonly nextDialogueNodeId?: string,
    public readonly optionsIds?: Array<string>,
    public readonly setVariableOnStart?: Array<SetVariable>,
    public readonly metaData?: Array<MetaData>,
  ) {
  }
}
