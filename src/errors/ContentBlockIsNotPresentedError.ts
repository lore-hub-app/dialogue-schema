import { Error } from './Error';

export class ContentBlockIsNotPresentedError implements Error {
  public readonly message: string;
  constructor(nodeId: string, contentBlockId: string) {
    this.message = `Error: Content Block ${contentBlockId} is not presented for node ${nodeId}`;
  }
}
