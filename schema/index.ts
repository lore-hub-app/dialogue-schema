import { Dialogue_v2 } from './components/Dialogue_v2';
import { Document_v1 } from './components/Document_v1';
import { DialogueNode_v2 } from './components/DialogueNode_v2';
import { DialogueNodeOption_v2 } from './components/DialogueNodeOption_v2';

const documents: Document_v1[] = [
  {
    type: '@lorehub/document',
    apiVersion: '1.0.0', id: "document-1", name: "Document 1"
  },
  {
    type: '@lorehub/document',
    apiVersion: '1.0.0', id: "document-2", name: "Document 2"
  },
]
const options: DialogueNodeOption_v2[] = [
  {
    type: '@lorehub/dialogue-node-option',
    apiVersion: '2.0.0',
    id: "dialogue-node-option-1",
    nextDialogId: null,
    text: "Bye."
  },
  {
    type: '@lorehub/dialogue-node-option',
    apiVersion: '2.0.0',
    id: "dialogue-node-option-1",
    nextDialogId: null,
    text: "I am fine!"
  }
];

const nodes: DialogueNode_v2[] = [
  {
    type: '@lorehub/dialogue-node',
    apiVersion: '2.0.0',
    id: 'dialogue-node-1',
    nextDialogueNodeId: null,
    options: options,
    contents: [{
      type: '@lorehub/content-block',
      apiVersion: '1.0.0',
      id: "content-block-1",
      text: null,
      documentId: documents[0].id,
    },
    {
      type: '@lorehub/content-block',
      apiVersion: '1.0.0',
      id: "content-block-1",
      text: "- Hello there!",
      documentId: null,
    }]
  }
];

const dialogue: Dialogue_v2 = {
  type: '@lorehub/dialogue',
  apiVersion: '2.0.0',
  id: 'dialogue-1',
  name: 'Dialogue 1',
  startingNodeId: 'node-1',
  documents: documents,
  nodes: nodes,
}

