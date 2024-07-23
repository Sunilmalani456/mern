/* eslint-disable no-unused-vars */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// export const handleHTTPError = (status, message) => {
//   console.log(message, status);

//   switch (status) {
//     case 400:
//       toast.error(message || "Invalid/missing fields unsuccessful");
//       break;
//     case 404:
//       toast.error(message || "User not found");
//       break;
//     case 500:
//       toast.error(message || "Internal server error, please try again later");
//       break;
//     default:
//       toast.error(message || "An unknown error occurred");
//   }
// };

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

export const nonClinicalSpecialties = [
  { id: "medical-research", title: "Medical Research" },
  { id: "medical-administration", title: "Medical Administration" },
  { id: "Medical Education", title: "Medical Education" },
];

export const complementaryAndAlternativeMedicine = [
  { id: "integrative-medicine", title: "Integrative Medicine" },
];

export const specializedAreas = [
  { id: "genetics", title: "Genetics" },
  { id: "cardio-vascular", title: "Cardio Vascular" },
  { id: "orthopedics", title: "Orthopedics" },
  { id: "homeopathy", title: "Homeopathy" },
  { id: "nureo-surgery", title: "Nureo Surgery" },
  { id: "transplant-surgery", title: "Transplant Surgery" },
  { id: "ear-nose-throat", title: "Ear-Nose-Throat" },
];

export function findTimeInterval(fromTime, toTime) {
  // Convert the time strings to Date objects
  const fromDate = new Date(fromTime);
  const toDate = new Date(toTime);

  // Calculate the difference in milliseconds
  const diffInMs = toDate - fromDate;

  // Convert the difference from milliseconds to hours, minutes, and seconds
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);

  const hours = diffInHours;
  const minutes = diffInMinutes % 60;
  const seconds = diffInSeconds % 60;

  let result = "";

  if (hours > 0) {
    result += `${hours}h `;
  }

  if (minutes > 0) {
    result += `${minutes}m`;
  }

  return result.trim();
}

export function getFormattedDate(dateString) {
  const date = new Date(dateString);

  // Get year, month (0-indexed), and day
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero for single-digit days

  // Format the date in dd-mm-yyyy
  const formattedDate = `${day}-${month}-${year}`;

  // Get the weekday abbreviation (e.g., "Mon", "Tue")
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });

  // Combine formatted date and weekday abbreviation
  return formattedDate;
}

export function convertTime(timeString) {
  const timeParts = timeString?.split(":");
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  const date = new Date(0, 0, 0, hours, minutes); // Create a date object with just time

  const options = { hour: "numeric", minute: "2-digit", hour12: true }; // Formatting options
  const normalTime = date.toLocaleTimeString("en-US", options);

  return normalTime;
}

export function convertTimeslots(timeslots) {
  const startFrom = [];
  const endAt = [];

  for (const timeslot of timeslots) {
    startFrom.push(timeslot.startFrom);
    endAt.push(timeslot.endAt);
  }

  return { startFrom, endAt };
}

//
export function RemoveZeros(timeslotData) {
  if (!timeslotData) {
    return { startFrom: [], endAt: [] }; // Handle empty timeslot data gracefully
  }

  const { startFrom, endAt } = timeslotData; // Destructure startFrom and endAt arrays

  // Ensure startFrom and endAt are both valid arrays
  if (!Array.isArray(startFrom) || !Array.isArray(endAt)) {
    console.error("Invalid timeslot data. startFrom and endAt must be arrays.");
    return { startFrom: [], endAt: [] };
  }

  const formattedStartFrom = startFrom.map(removeLeadingZeros);
  const formattedEndAt = endAt.map(removeLeadingZeros);

  return { formattedStartFrom, formattedEndAt }; // Return object with formatted arrays
}

function removeLeadingZeros(timeString) {
  // Regular expression to match leading zeros followed by a colon
  const leadingZeroRegex = /^0+(:\d{2})?/;
  const timeParts = timeString.split(":"); // Split into hours, minutes, seconds
  const hours = timeParts[0].replace(leadingZeroRegex, "$1"); // Remove leading zeros from hours
  const minutes = timeParts[1].padStart(2, "0"); // Ensure two digits for minutes

  // Return formatted time without seconds
  return `${hours}:${minutes}`;
}

//
export function formatTime(timeStr) {
  // Split the time string by the colon
  const timeParts = timeStr.split(":");

  // Extract hours and minutes
  const hours = timeParts[0];
  const minutes = timeParts[1];

  // Return the formatted time in "HH:MM" format
  return `${hours}:${minutes}`;
}

export const extractTimeFromTimestamp = (timestamp) => {
  const dateObj = new Date(timestamp);
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${formattedHours}:${formattedMinutes}`;
};
