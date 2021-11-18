export interface IMessage {
    text: string;
    length?: number;
    authorCallback: any;
    recipient: string;
}
