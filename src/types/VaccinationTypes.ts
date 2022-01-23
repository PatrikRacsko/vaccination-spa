export type UserData = {
  id: number
  first_name: string
  last_name: string
  is_allergic: boolean
  vaccination_centre: VaccineCentre
  vaccination_number: number
  vaccine_type: VaccineType
}

type VaccineType = {
  id: number
  vaccine_name: string
  vaccine_type: string
}

type VaccineCentre = {
  id: number
  available_doctors: number
  vaccination_centre: string
  vaccinations_count: number
}
