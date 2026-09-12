const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

function getToken(): string {
  return localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '';
}

function saveToken(token: string): void {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
}

function dropToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
}

export {dropToken, getToken, saveToken};
