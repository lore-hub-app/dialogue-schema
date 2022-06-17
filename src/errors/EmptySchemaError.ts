import { Error } from './Error';

export class EmptySchemaError implements Error {
  public readonly message = "Error: ExportSchema is empty."
}
