import { UserRecord } from "firebase-admin/auth";

interface User extends UserRecord {
  username: string;
  accessToken?: string;
}
