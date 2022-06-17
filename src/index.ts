import { Dialogue } from './components/Dialogue';
import { DialogueNode } from './components/DialogueNode';
import { DialogueNodeOption } from './components/DialogueNodeOption';
import { Document } from './components/Document';
import { ExportSchema } from './components/ExportSchema';

export const a = "dsd12";


const document = new Document("1", "Edna");
const options = [
  new DialogueNodeOption("o1", "hi"),
  new DialogueNodeOption("02", "bye")
]

const nodes = [
  new DialogueNode("n1", "c1"),
  new DialogueNode("n2", "c2", "n1")
]

const dialogue = new Dialogue("d1", "dialogue 1", "n2");

const exportSchema = new ExportSchema([
  document,
  options[0],
  options[1],
  nodes[0],
  nodes[1],
  dialogue
]);
