import { Component } from "./Component";
import { DialogueNodeOption_v2 } from './DialogueNodeOption_v2';
import { ContentBlock_v1 } from './ContentBlock_v1';

export interface DialogueNode_v2 extends Component {
  type: '@lorehub/dialogue-node',
  apiVersion: '2.0.0',
  id: string,
  nextDialogueNodeId?: string,
  options?: DialogueNodeOption_v2[]
  contents: ContentBlock_v1[]
}
