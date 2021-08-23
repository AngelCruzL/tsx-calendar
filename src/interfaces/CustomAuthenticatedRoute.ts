export interface CustomAuthenticatedRoute {
  exact?: boolean;
  path: string;
  isAuthenticated: boolean;
  component: React.FC;
}
