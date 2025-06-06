
export type Patient = {
    id: string
    caretaker: string
    name: string
    email: string
    date: Date
    symptoms: string
}

export type DraftPatient = Omit<Patient, 'id'>