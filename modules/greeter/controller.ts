interface Greeter {
    message: string;
}

export class GreeterController implements Greeter {
    message: string;
    static $inject: Array<string> = [];
    constructor () {
        this.message = "Hello world!";
    }
}
