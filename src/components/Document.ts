import { Component } from "./Component";

export class Document implements Component {
  public readonly type = '@lorehub/document';
  public readonly apiVersion = '1.0.0';

  constructor(public readonly id: string, public readonly name: string) {
  }
}
