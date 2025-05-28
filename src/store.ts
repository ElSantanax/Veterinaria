import { create } from "zustand";
import type { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from 'uuid'

type PatientState = {
    patients: Patient[]
    addPatient: (date: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientState = create<PatientState>((set) => ({
    patients: [],
    addPatient: (date) => {
        const newPatient = createPatient(date)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    }
}))