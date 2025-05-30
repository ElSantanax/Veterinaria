import type { Patient } from "../types"
import PatientDetailsItems from "./PatientDetailsItems"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailsItems label="ID" data={patient.id} />
            <PatientDetailsItems label="Nombre" data={patient.name} />
            <PatientDetailsItems label="Dueño" data={patient.caretaker} />
            <PatientDetailsItems label="Correo" data={patient.email} />
            <PatientDetailsItems label="Fecha de alta" data={patient.date.toString()} />
            <PatientDetailsItems label="Sintoma" data={patient.symptoms} />

            <div className="flex justify-between mt-3">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg font-bold"
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg font-bold"
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
