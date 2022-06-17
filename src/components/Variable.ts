import { Component } from "./Component";

export class Variable implements Component {
  public readonly type = '@lorehub/variable';
  public readonly apiVersion = '"1.0.0';
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly variableType: 'boolean',
    public readonly defaultValue: 'false' | 'true',
  ) {

  }

}
