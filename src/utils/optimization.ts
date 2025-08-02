import { Pool } from 'pg';

// Database connection pooling
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Enable query logging
pool.on('connect', client => {
  client.query('SET application_name TO my_app');
});

// Frontend optimization utilities
export const codeSplitAndLazyLoad = () => {
  // Example for React lazy loading
  // const Component = React.lazy(() => import('./Component'));
};

export default pool;