import { Error } from './Error';

export class ReferencedDocumentIsNotPresentedError implements Error {
  public readonly message: string;
  constructor(contentBlock: string, documentId: string) {
    this.message = `Error: Referenced Document ${documentId} is not presented in content block ${contentBlock}`;
  }
}
