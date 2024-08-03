import { Symptom as TSymptom } from "../api/symptom/Symptom";

export const SYMPTOM_TITLE_FIELD = "id";

export const SymptomTitle = (record: TSymptom): string => {
  return record.id?.toString() || String(record.id);
};
