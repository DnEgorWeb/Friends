export class FriendError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'Not Found';
  }
}
