export class AccessControl {
    private userPermissions: Map<string, Set<string>>;

    constructor() {
        this.userPermissions = new Map();
    }

    public setPermissions(userId: string, permissions: string[]): void {
        this.userPermissions.set(userId, new Set(permissions));
    }

    public hasAccess(userId: string, domain: string): boolean {
        const permissions = this.userPermissions.get(userId);
        return permissions ? permissions.has(domain) : false;
    }

    public getUserPermissions(userId: string): string[] {
        const permissions = this.userPermissions.get(userId);
        return permissions ? Array.from(permissions) : [];
    }
}