import { Component } from './Component';
import { Document_v1 } from './Document_v1';
import { DialogueNode_v2 } from './DialogueNode_v2';

export interface Dialogue_v2 extends Component {
  type: '@lorehub/dialogue',
  apiVersion: '2.0.0',
  id: string,
  name: string,
  startingNodeId: string,
  documents: Document_v1[],
  nodes: DialogueNode_v2[]
}
