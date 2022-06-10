import { Component } from "./Component";

export interface DialogueNodeOption_v2 extends Component {
  type: '@lorehub/dialogue-node-option',
  apiVersion: '2.0.0',
  id: string,
  nextDialogId?: string,
  text: string
}
