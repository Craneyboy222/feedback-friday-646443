import React from 'react';

interface TableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <table className=\