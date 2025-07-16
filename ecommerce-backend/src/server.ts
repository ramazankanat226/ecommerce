import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import authRoutes from './routes/auth.routes';
import { supabase } from './config/supabaseClient';

const app = express();
const port = process.env.PORT || 3001;

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}); 