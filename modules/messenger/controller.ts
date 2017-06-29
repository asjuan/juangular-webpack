interface Greeter {
    message: string;
}

export class MessengerController implements Greeter {
    message: string = "yay!";
    static $inject: Array<string> = [];
    constructor () {
        this.message = "Hello world!";
    }
}
