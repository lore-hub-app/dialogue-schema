import { Component } from "./Component";
import { ContentBlock, ContentReference, ContentText } from "./ContentBlock";
import { Dialogue } from "./Dialogue";
import { DialogueNode } from "./DialogueNode";
import { DialogueNodeOption } from "./DialogueNodeOption";
import { MetaSchema } from "./MetaSchema";
import { Variable } from "./Variable";
import { Document } from './Document'
import { Error } from '../errors/Error';
import { EmptySchemaError } from "../errors/EmptySchemaError";
import { ReferencedDocumentIsNotPresentedError } from '../errors/ReferencedDocumentIsNotPresentedError';
import { ContentBlockIsNotPresentedError } from "../errors/ContentBlockIsNotPresentedError";

export class ExportSchema implements Component {
  public readonly type = '@lorehub/export-schema';
  public readonly apiVersion = '1.0.0';
  constructor(public readonly resources: Array<Document | Dialogue | DialogueNode | DialogueNodeOption | Variable | MetaSchema | ContentBlock>) {
  }

  /**
   * Will return array of errors. If array of errors length is 0 it means no errors are presented. 
   */
  public validate(): Array<Error> {
    if (this.resources.length === 0) return [new EmptySchemaError()]
    const errors: Array<Error> = [];

    const documents = this.resources.filter(r => r instanceof Document) as Document[];
    const dialogueNodes = this.resources.filter(r => r instanceof DialogueNode) as DialogueNode[];
    const contentBlocks = this.resources.filter(r => r instanceof ContentBlock) as ContentBlock[];

    // validate: nodes that all content blocks are presented
    dialogueNodes.forEach(n => {
      const tryFindContentBlock = contentBlocks.find(c => c.id === n.contentBlockId);
      if (tryFindContentBlock == null) {
        errors.push(new ContentBlockIsNotPresentedError(n.id, n.contentBlockId));
      }
    })

    contentBlocks.forEach(cb => {
      cb.content.forEach(content => {
        // validate: content blocks with refs
        const asRef = content as ContentReference;
        if (asRef.documentId == undefined) return;
        const tryFindDoc = documents.find(d => d.id === asRef.documentId);
        if (tryFindDoc == null) {
          errors.push(new ReferencedDocumentIsNotPresentedError(cb.id, asRef.documentId));
        }
      });
    })

    return errors;
  }
}
