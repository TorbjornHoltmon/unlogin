export class Base64DecodeError extends Error {
  public serialized: {
    name: string
    message: string
    base64Input: string
  }
  constructor(base64Input: string, options?: ErrorOptions) {
    const message = 'base64 malformed'
    super(message, options)
    this.serialized = {
      name: this.name,
      message: message,
      base64Input,
    }
  }
}
