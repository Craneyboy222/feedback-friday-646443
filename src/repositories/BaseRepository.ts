import { Pool } from 'pg';

export class BaseRepository<T> {
  constructor(protected pool: Pool, protected table: string) {}

  async findById(id: string): Promise<T | null> {
    try {
      const result = await this.pool.query(`SELECT * FROM ${this.table} WHERE id = $1`, [id]);
      return result.rows[0] ? result.rows[0] : null;
    } catch (error) {
      console.error(`Error finding record by id from ${this.table}`, error);
      throw new Error('Database query error');
    }
  }

  async findAll(): Promise<T[]> {
    try {
      const result = await this.pool.query(`SELECT * FROM ${this.table}`);
      return result.rows;
    } catch (error) {
      console.error(`Error retrieving all records from ${this.table}`, error);
      throw new Error('Database query error');
    }
  }
}