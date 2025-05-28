import { create } from "zustand";
import type { DraftPatient, Patient } from "./types";

type PatientState = {
    patients: Patient[]
    addPatient: (date: DraftPatient) => void
}

export const usePatientState = create<PatientState>(() => ({
    patients: [],
    addPatient: (date) => {
        console.log(date);
    }
}))