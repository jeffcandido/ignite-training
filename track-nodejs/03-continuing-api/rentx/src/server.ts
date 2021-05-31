import 'dotenv/config';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(process.env.RENTX_API_PORT || 3333, () => console.log(`Server started on port ${process.env.RENTX_API_PORT || 3333}`));
