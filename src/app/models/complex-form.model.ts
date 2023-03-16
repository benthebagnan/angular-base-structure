export class ComplexFormValue {
  personInfos!: {
    firstName: string;
    lastName: string;
  };
  contactpreference!: string;
  email?: {
    email: string;
    confirm: string;
  };
  phone?: string;
  loginInfo!: {
    username: string;
    password: string;
    confirmPassword: string;
  };
}
