export class ModelRegistry {
    private models: Map<string, any>;

    constructor() {
        this.models = new Map();
    }

    registerModel(name: string, model: any): void {
        if (this.models.has(name)) {
            throw new Error(`Model ${name} is already registered.`);
        }
        this.models.set(name, model);
    }

    getModel(name: string): any {
        const model = this.models.get(name);
        if (!model) {
            throw new Error(`Model ${name} is not registered.`);
        }
        return model;
    }

    listModels(): string[] {
        return Array.from(this.models.keys());
    }
}