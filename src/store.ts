import { create } from "zustand";
import type { Patient } from "./types";

type PatientState = {
    patients: Patient[]
}

export const usePatientState = create<PatientState>(() => ({
    patients: []
}))