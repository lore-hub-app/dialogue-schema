import { Component } from "./Component";

export class MetaSchema implements Component {
  public readonly type = '@lorehub/meta-schema'
  public readonly apiVersion = '1.0.1';
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly schemaType: 'text' | 'integer'
  ) {

  }

}
