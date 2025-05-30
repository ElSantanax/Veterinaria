
type PatientDetailsItemsProps = {
    label: string
    data: string
}

export default function PatientDetailsItems({ label, data }: PatientDetailsItemsProps) {
    return (
        <p className="font-bold mb-3 text-gray-700 uppercase">{label}: {''}
            <span className="font-normal normal-case">{data}</span>
        </p>
    )
}
