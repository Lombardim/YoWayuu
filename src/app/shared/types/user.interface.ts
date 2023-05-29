export interface RegisterUser {
  email: string;
  password: string;
  name: string;
  lastName: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  lastName: string;
  name: string;
  notaCurso1: number;
  notaCurso2: number;
  notaCurso3: number;
  notaCurso4: number;
  notaCurso5: number;
  notaCurso6: number;
  password: string;
  progresoCurso1: number;
  progresoCurso2: number;
  progresoCurso3: number;
  progresoCurso4: number;
  progresoCurso5: number;
  progresoCurso6: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface UpdateUser {
  lastName?: string;
  name?: string;
  notaCurso1?: number;
  notaCurso2?: number;
  notaCurso3?: number;
  notaCurso4?: number;
  notaCurso5?: number;
  notaCurso6?: number;
  password?: string;
  progresoCurso1?: number;
  progresoCurso2?: number;
  progresoCurso3?: number;
  progresoCurso4?: number;
  progresoCurso5?: number;
  progresoCurso6?: number;
}

export interface TableData {
  id: number;
  name: string;
  lastName: string;
  lecture1: number;
  lecture2: number;
  lecture3: number;
  lecture4: number;
  lecture5: number;
  lecture6: number;
}
