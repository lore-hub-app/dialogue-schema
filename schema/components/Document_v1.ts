import { Component } from "./Component";

export interface Document_v1 extends Component {
  type: '@lorehub/document',
  apiVersion: '1.0.0',
  id: string,
  name: string,
}
