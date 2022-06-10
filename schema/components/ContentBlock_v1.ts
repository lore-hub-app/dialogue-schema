import { Component } from "./Component";

export interface ContentBlock_v1 extends Component {
  type: '@lorehub/content-block',
  apiVersion: '1.0.0',
  id: string,
  text?: string,
  documentId?: string,
}
