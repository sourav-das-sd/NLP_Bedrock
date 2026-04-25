// This file exports various TypeScript types and interfaces used across the application.

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Query {
    id: string;
    userId: string;
    sql: string;
    createdAt: Date;
}

export interface Metric {
    name: string;
    type: 'count' | 'sum' | 'average' | 'max' | 'min';
}

export interface Filter {
    field: string;
    operator: 'equals' | 'not_equals' | 'greater_than' | 'less_than' | 'in' | 'not_in';
    value: any;
}

export interface Domain {
    name: string;
    tables: string[];
    metrics: Metric[];
    filters: Filter[];
}

export interface SemanticModel {
    domain: Domain;
    synonyms: Record<string, string>;
}