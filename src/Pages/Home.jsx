import DoctorTeam from "@/components/Doctor Team/DoctorTeam";
import HeroSection from "@/components/HeroSection/HeroSection";
import Solution from "@/components/Solution/Solution";

function Home() {
  return (
    <>
      <HeroSection />
      <Solution />
      {/* <Service/> */}
      <DoctorTeam />
    </>
  );
}

export default Home;

// setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);

//     // Ensure each selected file is converted to an object with keys
//     const updatedCertificates = newFiles.map((file) => ({
//       name: file.name,
//       type: file.type,
//       size: file.size,
//       lastModified: file.lastModified, // Last modification time
//       // Add other relevant properties as needed (e.g., URL for preview)
//     }));

//     setFields((prevFields) => ({
//       ...prevFields,
//       professionalCertificates: [
//         ...prevFields.professionalCertificates,
//         ...updatedCertificates,
//       ],
//     }));

// {

//   "professionalCertificates": [
//     {
//       File: {
//         lastModified: 1708849549632,
//         lastModifiedDate: Sun Feb 25 2024 13:55:49 GMT+0530 (India Standard Time) {},
//         name: "1618581417695.jpg",
//         size: 16037,
//         type: "image/jpeg",
//         webkitRelativePath: ""
//       },

//         },

//   ],

// }
