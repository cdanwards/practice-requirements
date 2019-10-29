export interface UserResponse {
  count: number;
  data: {
    contactId: number;
    created: string;
    createdBy: string;
    emailAddress: string;
    emailTypeId: number;
    id: number;
    isPrimary: boolean;
    locked: boolean;
    modified: string;
    modifiedBy: string;
  };
  total: number;
}
