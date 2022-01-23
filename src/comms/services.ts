// This file will mirror API config from swagger

import { HTTPClient } from "./http";


// Patients
export const getUserDataService = () => HTTPClient.get(`patients`)
export const setPatientDataService = (id: string) => HTTPClient.post(`patients/${id}`)


// Centers