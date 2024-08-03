import { SymptomWhereInput } from "./SymptomWhereInput";
import { SymptomOrderByInput } from "./SymptomOrderByInput";

export type SymptomFindManyArgs = {
  where?: SymptomWhereInput;
  orderBy?: Array<SymptomOrderByInput>;
  skip?: number;
  take?: number;
};
