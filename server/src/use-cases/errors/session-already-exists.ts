export class SessionAlreadyExistsError extends Error {
  constructor() {
    super("Session token already exists.");
  }
}
