import { Component } from './Component';

export class Dialogue implements Component {
  public readonly type = '@lorehub/dialogue';
  public readonly apiVersion = '1.0.0';
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly startingNodeId: string) {

  }
}
