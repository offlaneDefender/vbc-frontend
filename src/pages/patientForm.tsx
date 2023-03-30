/**
 * Next.js Page for the Patient Form
 */

import { font } from '@/utils/font';
import React from 'react';

import PatientForm from '../components/PatientForm';

const PatientFormPage: React.FC = () => {
    return (
        <main className={`flex flex-col items-center justify-center h-screen ${font.className}`}>
            <PatientForm />
        </main>
    );
};

export default PatientFormPage;