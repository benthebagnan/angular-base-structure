export interface Root {
  posts: Post[];
  users: User[];
  candidates: Candidate[];
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  createdDate: string;
  content: string;
  comments: Comment[];
  imageUrl?: string;
}

export interface Comment {
  id: number;
  userId: number;
  comment: string;
  createdDate: string;
}

export interface User {
  personalInfo: PersonalInfo;
  contactPreference: string;
  email: Email;
  phone: string;
  loginInfo: LoginInfo;
  id: number;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
}

export interface Email {
  email: string;
  confirm: string;
}

export interface LoginInfo {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  job: string;
  department: string;
  company: string;
  imageUrl: string;
}
