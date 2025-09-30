import React, { useState } from "react";
import CourseForm from "../../components/courses/CourseForm";
import CourseModules from "../../components/courses/CourseModules";
import CourseLesson from "../../components/courses/CourseLesson";
const steps = ["CreateCourse", "Modules", "Lessons", "Quiz", "Review"];

function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [courseId, setCourseId] = useState(null);
  const [moduleId, setModuleId] = useState(null);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full  ">
      {/* Stepper UI */}
      <div className="relative flex  justify-between  mb-8">
        {/* Background Line */}
        <div className="absolute rounded-full top-25 left-0 w-full h-1 bg-gray-300 z-10"></div>
        {/* Active Line */}
        <div
          className="absolute rounded-full  top-25 left-0 h-1 bg-blue-900 z-10 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
        <div className="border-2 border-gray-300 flex w-full px-15 h-30 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-row gap-2 items-center"
            >
              <div
                className={`w-10  z-11 h-10 flex items-center justify-center rounded-full border-2 transition-colors
                ${
                  index === currentStep
                    ? "bg-blue-900 text-white border-blue-900"
                    : index < currentStep
                    ? "bg-green-900 text-white border-green-900"
                    : "border-gray-300 bg-white z-11 text-gray-400"
                }`}
              >
                {index < currentStep ? "✓" : index + 1}
              </div>
              <p
                className={`mt-2 text-sm ${
                  index === currentStep
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
              >
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="border p-6 rounded bg-white shadow">
        {currentStep === 0 && (
          <CourseForm onCreated={(c) => setCourseId(c?.id || c?.courseId || c?.data?.id)} />
        )}
        {currentStep === 1 && (
          <CourseModules
            courseId={courseId}
            onModuleCreated={(m) => setModuleId(m?.id || m?.moduleId || m?.data?.id)}
          />
        )}
        {currentStep === 2 && <CourseLesson moduleId={moduleId} />}
        {currentStep === 3 && <Quiz />}
        {currentStep === 4 && <Review />}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-2 bg-blue-900 text-white rounded"
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

// const CourseForm = () => <div>basic form</div>;
const Quiz = () => <div>👉 Quiz Form</div>;
const Review = () => <div>👉 Review & Submit</div>;

export default Stepper;
