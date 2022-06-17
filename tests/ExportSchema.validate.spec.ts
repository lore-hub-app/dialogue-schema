import { it, expect } from 'vitest'
import { ContentBlock } from '../src/components/ContentBlock';
import { Dialogue } from '../src/components/Dialogue';
import { DialogueNode } from '../src/components/DialogueNode';
import { ExportSchema } from '../src/components/ExportSchema';
import { EmptySchemaError } from '../src/errors/EmptySchemaError';
import { ReferencedDocumentIsNotPresentedError } from '../src/errors/ReferencedDocumentIsNotPresentedError';
import { ContentBlockIsNotPresentedError } from '../src/errors/ContentBlockIsNotPresentedError';

export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}

it('Validate empty schema -> Error', () => {
  // arrange
  const exportSchema = new ExportSchema([]);

  // act
  const result = exportSchema.validate();

  // assert
  expect(result.length).toBe(1);
  expect(result[0]).toBeInstanceOf(EmptySchemaError);
})

it('Dialogue with one node -> No Errors', () => {
  // arrange
  const contentBlock = new ContentBlock("c1", [
    { text: "hi" }
  ])
  const node = new DialogueNode("n1", contentBlock.id);
  const dialogue = new Dialogue("d1", "dialogue 1", node.id);
  const exportSchema = new ExportSchema([dialogue, node, contentBlock]);

  // act
  const result = exportSchema.validate();

  // assert
  expect(result.length).toBe(0);
})

it('Dialogue has node but content block is not presented -> Error', () => {
  // arrange
  const node = new DialogueNode("n1", "cb1");
  const dialogue = new Dialogue("d1", "dialogue 1", node.id);
  const exportSchema = new ExportSchema([dialogue, node]);

  // act
  const result = exportSchema.validate();

  // assert
  expect(result.length).toBe(1);
  expect(result[0]).toBeInstanceOf(ContentBlockIsNotPresentedError);
})

it('Dialogue has content reference but document is not presented -> Error', () => {
  // arrange
  const contentBlock = new ContentBlock("c1", [
    { documentId: "d1" }
  ])
  const node = new DialogueNode("n1", contentBlock.id);
  const dialogue = new Dialogue("d1", "dialogue 1", node.id);
  const exportSchema = new ExportSchema([dialogue, node, contentBlock]);

  // act
  const result = exportSchema.validate();

  // assert
  expect(result.length).toBe(1);
  expect(result[0]).toBeInstanceOf(ReferencedDocumentIsNotPresentedError);
})
