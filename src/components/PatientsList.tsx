import { usePatientState } from "../store"

export default function PatientsList() {
    const patients = usePatientState(state => state.patients)
    console.log(patients);

    return (
        <div>PatientsList</div>
    )
}
