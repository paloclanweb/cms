export type DynamicMenuModel = {
  Id: string;
  ParentId: null; // Anamenu
  Order: string
  AppId: string
  Caption: string
  Route: string
  Identifier: string
  Permissions: Array<number>
};
