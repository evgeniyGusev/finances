import './index.css';

import { createRoot } from 'react-dom/client';

import { App } from '@/entities/app/App';

const container = document.getElementById('root');
const root = createRoot(container!);

// @ts-ignore
root.render(<App tab="home" />);
