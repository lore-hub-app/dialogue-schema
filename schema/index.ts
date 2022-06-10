import { Component } from "./Component";

export interface ExportSchema extends Component {
  type: "@lorehub/export-schema",
  apiVersion: "1.0.0",
  components: Component[];
}



