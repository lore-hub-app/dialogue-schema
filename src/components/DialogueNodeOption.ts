import { Component } from "./Component";

export interface RequiredVariable {
  readonly variableId: string,
  readonly value: string
}

export class DialogueNodeOption implements Component {
  public readonly type = '@lorehub/dialogue-node-option';
  public readonly apiVersion = '1.0.0';
  constructor(
    public readonly id: string,
    public readonly text: string,
    public readonly nextDialogId?: string,
    public readonly requiredVariables?: Array<RequiredVariable>
  ) {
  }
}
