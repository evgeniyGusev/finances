import './index.css';

import axios from 'axios';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from '@/common/router';

const container = document.getElementById('root');
const root = createRoot(container!);

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

console.log(import.meta.env.VITE_API_URL);

// @ts-ignore
root.render(<RouterProvider router={router} />);
