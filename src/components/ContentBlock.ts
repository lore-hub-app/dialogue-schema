import { Component } from "./Component";

export interface ContentText {
  readonly text: string
}

export interface ContentReference {
  readonly text?: string
  readonly documentId: string
}

export class ContentBlock implements Component {
  public readonly type = '@lorehub/content-block';
  public readonly apiVersion = '1.0.0';
  constructor(
    public readonly id: string,
    public readonly content: Array<ContentText | ContentReference>) {
  }
}
