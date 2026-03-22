export interface AuthTokens {
    access_token: string;
    refresh_token?: string;
    expires_at?: number;
}
export declare function loadTokens(): AuthTokens | null;
export declare function refreshJwt(tokens: AuthTokens): Promise<AuthTokens | null>;
export declare function getValidToken(): Promise<string | null>;
export declare function browserLogin(): Promise<AuthTokens>;
