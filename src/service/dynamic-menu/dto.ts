export type DynamicMenuDTO = {
  Id?: string
  ParentId: null | string; // Anamenu
  Order: number | null
  AppId: string | null
  Caption: string
  Route: string
  Identifier: string
};
