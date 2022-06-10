import { Component } from '../Component';
import { Document } from './Document';

export interface Dialogue extends Component {
  type: '@lorehub/dialogue',
  apiVersion: '2.0.0',
  id: string,
  name: string,
  startingNodeId: string
}
