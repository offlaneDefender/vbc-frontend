import { font } from '@/utils/font';
import React, { useMemo } from 'react';

import PatientForm from '@/components/PatientForm';
import { useCreatePatientMutation } from '@/features/patients/api';
import { Patient } from '@/types/types';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import parseError from '@/utils/parseError';
import { useRouter } from 'next/router';

const PatientFormPage: React.FC = () => {
    const [createPatient, { isLoading, error }] = useCreatePatientMutation();

    const router = useRouter();

    const handleSubmit = (patient: Patient) => {
        createPatient(patient);
    };

    const errorMessage = useMemo(() => {
        if (error) {
            if ('status' in error) {
                return parseError(typeof error.status === 'number' ? error.status : 500);
            }
            return parseError(500);
        }
        return "";
    }, [error]);

    return (
        <main className={`flex flex-col items-center justify-center h-screen ${font.className}`}>
            {
                isLoading && <LoadingSpinner />
            }
            <PatientForm
                onSubmit={handleSubmit}
                loading={isLoading}
                error={errorMessage}
                onCancel={() => router.back()}
            />
        </main>
    );
};

export default PatientFormPage;