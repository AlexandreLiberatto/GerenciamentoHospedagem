import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  // Salva o token no localStorage
  static saveToken(token: string): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  // Salva o usuário no localStorage
  static saveUser(user: any): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  // Recupera o token
  static getToken(): string | null {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(TOKEN);
    }
    return null;
  }

  // Recupera o usuário
  static getUser(): any | null {
    if (typeof window !== 'undefined') {
      const user = window.localStorage.getItem(USER);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  // Recupera o ID do usuário
  static getUserId(): string {
    const user = this.getUser();
    return user?.id || ''; // Se existir retorna o id, senão string vazia
  }

  // Recupera o papel do usuário
  static getUserRole(): string {
    const user = this.getUser();
    return user?.role || ''; // Se existir retorna o role, senão string vazia
  }

  // Verifica se o Admin está logado
  static isAdminLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const role = this.getUserRole();
    return role === 'ADMIN';
  }

  // Verifica se o Cliente está logado
  static isCustomerLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const role = this.getUserRole();
    return role === 'CUSTOMER';
  }

  // Realiza o logout
  static signOut(): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.removeItem(USER);
    }
  }
}
