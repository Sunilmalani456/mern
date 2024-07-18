import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleHTTPError = (status, message) => {
  switch (status) {
    case 400:
      toast.error(message || "Invalid/missing fields unsuccessful");
      break;
    case 404:
      toast.error(message || "User not found");
      break;
    case 500:
      toast.error(message || "Internal server error, please try again later");
      break;
    default:
      toast.error(message || "An unknown error occurred");
  }
};

export const primaryCare = [
  { id: "family-medicine", title: "Family-Medicine" },
  { id: "internal-medicine", title: "Internal-Medicine" },
  { id: "pediatrics", title: "Pediatrics" },
  { id: "geriatrics", title: "Geriatrics" },
];

export const internalMedicineSubspecialties = [
  {
    id: "general",
    title: "General",
  },
  {
    id: "cardiology",
    title: "Cardiology",
  },
  {
    id: "endocrinology",
    title: "Endocrinology",
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
  },
  {
    id: "hematology",
    title: "Hematology",
  },
  {
    id: "infectious-disease",
    title: "Infectious-Disease",
  },
  {
    id: "nephrology",
    title: "Nephrology",
  },
  {
    id: "rheumatology",
    title: "Rheumatology",
  },
];

export const diagnosticSpecialties = [
  { id: "radiology", title: "Radiology" },
  { id: "pathology", title: "Pathology" },
  { id: "laboratory-medicine", title: "Laboratory-Medicine" },
];

export const surgicalSpecialties = [
  { id: "general-surgery", title: "General Surgery" },
  { id: "orthopedic-surgery", title: "Orthopedic Surgery" },
  { id: "neurosurgery", title: "neurosurgery" },
  { id: "cardiothoracic-surgery", title: "Cardiothoracic Surgery" },
  { id: "plastic-surgery", title: "Plastic Surgery" },
  { id: "urology", title: "Urology" },
];

export const preventiveMedicine = [
  { id: "public-health", title: "Public Health" },
  { id: "occupational-medicine", title: "Occupational Medicine" },
  { id: "preventive-medicine", title: "Preventive Medicine" },
];

export const emergencyMedicine = [
  { id: "emergency-medicine", title: "Emergency Medicine" },
];

export const specialtyAndSubspecialtyFields = [
  { id: "sports-medicine", title: "Sports Medicine" },
  { id: "sleep-medicine", title: "Sleep Medicine" },
  { id: "pain-management", title: "Pain Management" },
];
