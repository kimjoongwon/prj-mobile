export type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

export type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

export type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : "";

export type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : "";

export interface MobxProps<T = any> {
  path: Paths<T, 4>;
  state: T;
}

export type Validations = Record<string, any>;
export type Validation = {
  timings?: ("onBlur" | "onChange" | "onFocus")[];
  required?: { value: boolean; message: string };
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  min?: { value: number; message: string };
  max?: { value: number; message: string };
  patterns?: { value: string; message: string }[];
};

export type ValidationRecord<T extends object> = Omit<
  Record<keyof T, Validation>,
  "id" | "createdAt" | "updatedAt" | "removedAt" | "seq"
>;

export interface InputBuilder {
  visibleCondition?: {
    eq: {
      path: string;
      value: any;
    };
  };
  type?: string;
  props?: any;
  path?: string;
  validation?: Validation;
}

export interface FormBuilder {
  name?: string;
  validations?: Validations;
  isInValid?: boolean;
  sections?: SectionBuilder[];
  button?: ButtonBuilder;
}

export interface ButtonBuilder {
  icon?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  name: string;
  mutation?: Mutation;
  navigator?: Navigator;
  alert?: Alert;
}
export interface CellButtonBuilder {
  icon?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  name: string;
  mutation?: CellMutation;
  navigator?: Navigator;
  alert?: Alert;
}
export interface Alert {
  message: string;
}

export interface Navigator {
  type?: "push" | "replace" | "back";
  pathname?: string;
  idName?: string;
}

export interface SuccessOrFailure {
  link: string;
  message?: string;
  params?: object & { resourceId: string };
}

export interface AppBuilder {
  name: string;
  routes: RouteBuilder[];
}

export interface Option {
  key: string;
  text: string;
  value: any;
}

export interface LayoutBuilder {
  name?: string;
  pathOptions?: Option[];
  type?:
    | "Outlet"
    | "Auth"
    | "Modal"
    | "Services"
    | "Service"
    | "Tab"
    | "DataGrid";
}

export interface RouteBuilder {
  name?: string;
  pathname?: string;
  layout?: LayoutBuilder;
  page?: PageBuilder;
  params?: object;
  children?: RouteBuilder[];
}

export interface Query {
  name: string;
  params?: any;
  mapper?: any;
  idMapper?: any;
}

export interface Mutation {
  name: string;
  invalidationKey?: string;
  id?: string;
  payloadPath: string;
}

export interface CellMutation {
  name: string;
  idName?: string;
}

export type Key = string | number;

export interface PageState<CDO> {
  form?: {
    inputs: CDO;
    errorMessages?: string[];
  };
  dataGrid?: {
    selectedRowIds?: Key[] | "all";
    selectedRowId?: Key;
    filter?: any;
    sortings?: any;
  };
}

export interface TabBuilder {
  options: Option[];
}

export interface DataGridBuilder {
  buttons?: ButtonBuilder[];
  filter?: FilterBuilder;
  table: TableBuilder;
}

export interface PageBuilder<CDO = any> {
  type?: "Outlet" | "Page";
  name?: string;
  state?: PageState<CDO>;
  query?: Query;
  form?: FormBuilder;
  dataGrid?: DataGridBuilder;
}

export interface FilterBuilder {}

export interface TableState {
  filter?: unknown;
  selection?: Selection;
  pagination?: {
    take: number;
    skip: number;
  };
}

export interface TableBuilder {
  state?: TableState;
  query?: Query;
  selection?: Key[] | "all";
  columns: ColumnBuilder[];
}

export interface ColumnBuilder {
  id?: string;
  accessorKey?: string;
  header: Header;
  cell?: CellBuilder;
}
export interface CellBuilder {
  type?: "date" | "time" | "dateTime";
  buttons?: CellButtonBuilder[];
  expandable?: boolean;
  link?: string;
}
export interface Header {
  name: string;
  expandable?: boolean;
}

export interface SectionBuilder {
  name: string;
  stacks: StackBuilder[];
}

export interface StackBuilder {
  type: "VStack" | "HStack";
  inputs: InputBuilder[];
}
