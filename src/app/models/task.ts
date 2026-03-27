export interface Task {
    id: number;
    description: string;
    when: string; // ISO-Date
    amount: number;
    done: boolean;
}