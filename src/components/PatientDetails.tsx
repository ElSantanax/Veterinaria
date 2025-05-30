import { toast } from 'react-toastify'
import type { Patient } from "../types"
import PatientDetailsItems from "./PatientDetailsItems"
import { usePatientState } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const deletePatient = usePatientState((state) => state.deletePatient)
    const getPatientGetId = usePatientState((state) => state.getPatientGetId)
    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente Eliminado')
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailsItems label="ID" data={patient.id} />
            <PatientDetailsItems label="Nombre" data={patient.name} />
            <PatientDetailsItems label="Dueño" data={patient.caretaker} />
            <PatientDetailsItems label="Correo" data={patient.email} />
            <PatientDetailsItems label="Fecha de alta" data={patient.date.toString()} />
            <PatientDetailsItems label="Sintoma" data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row justify-between mt-3 gap-3">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg font-bold"
                    onClick={() => getPatientGetId(patient.id)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg font-bold"
                    onClick={handleClick}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
