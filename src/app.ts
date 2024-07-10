import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';
import { envs } from './config/envs';

(async () => {
    main();
})();

function main(){
    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
        public_path: 'public'
    });
    server.start();
}