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
  diagnosticSpecialties,
  emergencyMedicine,
  internalMedicineSubspecialties,
  preventiveMedicine,
  primaryCare,
  specialtyAndSubspecialtyFields,
  surgicalSpecialties,
} from "@/lib/utils";
import { useForm } from "react-hook-form";

const DoctorRegistration = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  useForm();

  console.log(selectedFiles);

  const handleFileChange = (e) => {
    // setSelectedFiles(
    const filesArray = Array.from(e.target.files);

    setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
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
            <form className="w-full flex flex-col items-center gap-10">
              <div className="w-full flex flex-col items-center gap-10">
                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-7">
                  <div className="w-full space-y-1.5">
                    <label className="font-bold" htmlFor="experience">
                      Your Experience
                    </label>
                    <Input
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
                  />
                </div>
                <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-6">
                  <SelectionOption
                    label={"Medicine Subspecialties"}
                    head={"Select Your Medicine Subspecialties"}
                    data={internalMedicineSubspecialties}
                  />

                  <SelectionOption
                    label={"Diagnostic Specialties"}
                    head={"Select Your Diagnostic Specialties"}
                    data={diagnosticSpecialties}
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
                  />

                  <SelectionOption
                    label={"Preventive Medicine"}
                    head={"Select Your Preventive Medicine"}
                    data={preventiveMedicine}
                  />
                </div>

                <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-6">
                  <SelectionOption
                    label={"Emergency Medicine"}
                    head={"Select Your Emergency Medicine"}
                    data={emergencyMedicine}
                  />

                  <SelectionOption
                    label={"Specialty And Subspecialty Fields"}
                    head={"Specialty And Subspecialty Fields"}
                    data={specialtyAndSubspecialtyFields}
                  />
                </div>

                <div className="w-full max-w-sm my-2">
                  <Separator />
                </div>

                <div className="w-full max-w-sm flex flex-col gap-3">
                  <label className="font-bold max-sm:text-center">
                    Plese Upload Your Professional Certificates.
                  </label>
                  <Input
                    type="file"
                    className="input"
                    onChange={handleFileChange}
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
                            - {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center">
                <Button className="flex self-end w-full max-w-xs button justify-center items-center gap-1">
                  Submit
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
