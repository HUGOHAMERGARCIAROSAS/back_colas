import express, { Router } from 'express';

interface Options {
    port: number;
    routes: Router;
    public_path?: string;
}

export class Server {

    public readonly app = express();
    private serverListener?: any;
    private readonly port: number;
    private readonly publicPath: string;
    private  routes: Router;

    constructor(options: Options) {
        const { port, routes, public_path = 'public' } = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }

    async start() {
        
        // middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // public folder
        this.app.use(express.static(this.publicPath));

        // routes
        this.app.use(this.routes);

        // api


        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    public close(){
        this.serverListener?.close();
    }

}