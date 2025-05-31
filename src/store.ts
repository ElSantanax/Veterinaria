import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from 'uuid'

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (date: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientGetId: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientState = create<PatientState>()
    (devtools((set) => ({
        patients: [],
        activeId: '',
        addPatient: (date) => {
            const newPatient = createPatient(date)
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        },
        getPatientGetId: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
                activeId: ''
            }))
        }
    })
    ))
