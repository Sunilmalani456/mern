import Banner from "@/components/shared/bnner";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SelectionOption from "@/components/shared/selectionOption";
import { Separator } from "@/components/ui/separator";
import {
  complementaryAndAlternativeMedicine,
  diagnosticSpecialties,
  emergencyMedicine,
  internalMedicineSubspecialties,
  nonClinicalSpecialties,
  preventiveMedicine,
  primaryCare,
  specializedAreas,
  specialtyAndSubspecialtyFields,
  surgicalSpecialties,
} from "@/lib/utils";
import { Cross2Icon } from "@radix-ui/react-icons";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorRegistration = () => {
  const [loading, setLoading] = useState(false);
  const userToken = Cookies.get("accessToken");
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [fields, setFields] = useState({
    experience: 0,
    primaryCare: [],
    internalMedicineSubspecialties: [],
    diagnosticSpecialties: [],
    surgicalSpecialties: [],
    preventiveMedicine: [],
    emergencyMedicine: [],
    specialtyAndSubspecialtyFields: [],
    professionalCertificates: [],
    nonClinicalSpecialties: [],
    complementaryAndAlternativeMedicine: [],
    specializedAreas: [],
  });

  const handleFileChange = (e) => {
    // const filesArray = Array.from(e.target.files);

    // setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    // setFields((prevFields) => ({
    //   ...prevFields,
    //   professionalCertificates: [
    //     ...prevFields.professionalCertificates,
    //     ...filesArray,
    //   ],
    // }));

    const filesArray = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    setFields((prevFields) => ({
      ...prevFields,
      professionalCertificates: [
        ...prevFields.professionalCertificates,
        ...filesArray,
      ],
    }));

    // const filesArray = Array.from(e.target.files);

    // // console.log("filesArray", filesArray);
    // setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);

    // setFields((pre) => ({
    //   ...pre,
    //   ["professionalCertificates"]: selectedFiles.includes(e.target.files)
    //     ? selectedFiles.filter((id) => id !== e.target.files)
    //     : [...selectedFiles, e.target.files],
    // }));
  };

  const handleRemoveFile = (index) => {
    // setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));

    // setFields((prevFields) => ({
    //   ...prevFields,
    //   professionalCertificates: prevFields.professionalCertificates.filter(
    //     (file, i) => i !== index
    //   ),
    // }));

    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
    setFields((prevFields) => ({
      ...prevFields,
      professionalCertificates: prevFields.professionalCertificates.filter(
        (file, i) => i !== index
      ),
    }));
  };

  const handleCertificateChange = (event) => {
    const newCertificates = Array.from(event.target.files); // Get selected files
    setFields({ ...fields, professionalCertificates: newCertificates });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      ...fields,
      experience: parseInt(fields.experience),
    };

    // console.log(formData);

    if (e.target) {
      const formData = new FormData();

      // Add regular fields
      for (const key in fields) {
        if (key !== "professionalCertificates") {
          // Exclude certificate array
          formData.append(key, fields[key]);
        }
      }

      // Add certificate files individually
      for (const certificate of fields.professionalCertificates) {
        formData.append("professionalCertificates", certificate); // Use bracket notation
      }

      console.log(formData.forEach((value, key) => console.log(key, value)));

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/doc/details`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${userToken}`, // Assuming your auth header logic
              "Content-Type": "multipart/form-data", // Set content type for file uploads
            },
          }
        );
        if (!res) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = res.data;

        if (result.success) {
          console.log(result.message);
          navigate("/doctor/dashboard");
        }

        setLoading(false);

        console.log(result);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    // try {
    //   const res = await fetch(`${import.meta.env.VITE_BASE_URL}/doc/details`, {
    //     method: "POST",
    //     headers: {
    //       // Accept: "application/json",
    //       // "Content-Type": "mutlipart/form-data",
    //       Authorization: `Bearer ${userToken}`,
    //     },
    //     body: formData,
    //   });
    //   if (!res) {
    //     throw new Error(`HTTP error! Status: ${res.status}`);
    //   }
    //   const result = await res.json();
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="pt-4">
      <Banner
        title="Hello Doctor 👨‍⚕️."
        name="Please, Provide Us Your Details..."
        childStyles="md:text-4xl sm:text-4xl xs:text-xl text-left"
        parentStyles="w-full flex justify-center mb-6 h-72 sm:h-60 text-center p-12 xs:p-4 xs:h-44 rounded-3xl"
      />
      <div className="w-full flex flex-col items-center">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle>Doctor Registration Form</CardTitle>
            <CardDescription>All feilds are mandatory*</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center gap-10"
            >
              <div className="w-full flex flex-col items-center gap-10">
                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-7">
                  <div className="w-full space-y-1.5">
                    <label className="font-bold" htmlFor="experience">
                      Your Experience
                    </label>
                    <Input
                      onChange={(e) =>
                        setFields((prevFields) => ({
                          ...prevFields,
                          experience: e.target.value,
                        }))
                      }
                      value={fields.experience ? fields.experience : ""}
                      className="input"
                      id="experience"
                      type="number"
                      placeholder="Your Experience"
                    />
                  </div>

                  <SelectionOption
                    label="Primary Care"
                    head="Select Your primaryCare"
                    data={primaryCare}
                    fieldName="primaryCare"
                    setFields={setFields}
                  />
                </div>
                <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-6">
                  <SelectionOption
                    label={"Internal Medicine Subspecialties"}
                    head={"Select Your Internal Medicine Subspecialties"}
                    data={internalMedicineSubspecialties}
                    fieldName="internalMedicineSubspecialties"
                    setFields={setFields}
                  />

                  <SelectionOption
                    label={"Diagnostic Specialties"}
                    head={"Select Your Diagnostic Specialties"}
                    data={diagnosticSpecialties}
                    fieldName="diagnosticSpecialties"
                    setFields={setFields}
                  />
                </div>

                <div className="w-full max-w-sm my-4">
                  <Separator />
                </div>

                <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-6">
                  <SelectionOption
                    label={"Surgical Specialties"}
                    head={"Select Your Surgical Specialties"}
                    data={surgicalSpecialties}
                    fieldName="surgicalSpecialties"
                    setFields={setFields}
                  />

                  <SelectionOption
                    label={"Preventive Medicine"}
                    head={"Select Your Preventive Medicine"}
                    data={preventiveMedicine}
                    fieldName="preventiveMedicine"
                    setFields={setFields}
                  />
                </div>

                <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-6">
                  <SelectionOption
                    label={"Emergency Medicine"}
                    head={"Select Your Emergency Medicine"}
                    data={emergencyMedicine}
                    fieldName="emergencyMedicine"
                    setFields={setFields}
                  />

                  <SelectionOption
                    label={"Specialty And Subspecialty Fields"}
                    head={"Specialty And Subspecialty Fields"}
                    data={specialtyAndSubspecialtyFields}
                    fieldName="specialtyAndSubspecialtyFields"
                    setFields={setFields}
                  />
                </div>

                <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-6">
                  <SelectionOption
                    label={"Non Clinical Specialties"}
                    head={"Select Non Clinical Specialties"}
                    data={nonClinicalSpecialties}
                    fieldName="nonClinicalSpecialties"
                    setFields={setFields}
                  />

                  <SelectionOption
                    label={"Complementary And Alternative Medicine"}
                    head={"Complementary And Alternative Medicine"}
                    data={complementaryAndAlternativeMedicine}
                    fieldName="complementaryAndAlternativeMedicine"
                    setFields={setFields}
                  />
                </div>

                <div className="w-full max-w-sm my-2">
                  <Separator />
                </div>

                <SelectionOption
                  label={"Specialized Areas"}
                  head={"Specialized Areas"}
                  data={specializedAreas}
                  fieldName="specializedAreas"
                  setFields={setFields}
                />
                <div className="w-full max-w-sm flex flex-col gap-3">
                  <label className="font-bold max-sm:text-center">
                    Plese Upload Your Professional Certificates.
                  </label>
                  <Input
                    type="file"
                    className="input"
                    onChange={handleCertificateChange}
                    // onChange={handleFileChange}
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    multiple
                  />
                  {selectedFiles.length > 0 && (
                    <div>
                      {/* <h3>{selectedFiles.length} file(s) selected</h3> */}
                      <ul className="flex items-center gap-4 flex-col">
                        {selectedFiles.map((file, index) => (
                          <li className="flex items-center gap-3" key={index}>
                            {
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                style={{
                                  maxWidth: "100px",
                                  maxHeight: "100px",
                                }}
                              />
                            }{" "}
                            - {file.name}{" "}
                            <span onClick={() => handleRemoveFile(index)}>
                              {" "}
                              <Cross2Icon className="w-4 h-4" />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex self-end w-full max-w-xs button justify-center items-center gap-1"
                >
                  {loading ? "Submiting..." : "Submit"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorRegistration;
