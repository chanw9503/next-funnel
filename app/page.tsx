"use client";

import Image from "next/image";
import useFunnel from "./hooks/useFunnel";

const stepList = [
  "step1",
  "step2",
  "step3",
  "step4",
  "step5",
  "step6",
  "step7",
  "step8",
];

export default function Home() {
  const { Step, Funnel, onNextStep, onPrevStep, onResetStep } = useFunnel({
    defaultStep: stepList[0],
    stepList: stepList,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Funnel>
        <Step name="step1">
          <div className="w-full h-screen bg-red-100">
            <div className="flex gap-x-10">
              <button
                onClick={onPrevStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                back
              </button>
              <button
                onClick={onNextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                next
              </button>
            </div>
          </div>
        </Step>
        <Step name="step2">
          <div className="w-full h-screen bg-red-200">
            <div className="flex gap-x-10">
              <button
                onClick={onPrevStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                back
              </button>
              <button
                onClick={onNextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                next
              </button>
            </div>
          </div>
        </Step>
        <Step name="step3">
          <div className="w-full h-screen bg-red-300">
            <div className="flex gap-x-10">
              <button
                onClick={onPrevStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                back
              </button>
              <button
                onClick={onNextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                next
              </button>
            </div>
          </div>
        </Step>
        <Step name="step4">
          <div className="w-full h-screen bg-red-400">
            <div className="flex gap-x-10">
              <button
                onClick={onPrevStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                back
              </button>
              <button
                onClick={onNextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                next
              </button>
            </div>
          </div>
        </Step>
        <Step name="step5">
          <div className="w-full h-screen bg-red-500">
            <div className="flex gap-x-10">
              <button
                onClick={onPrevStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                back
              </button>
              <button
                onClick={onNextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                next
              </button>
            </div>
          </div>
        </Step>
        <Step name="step6">
          <div className="w-full h-screen bg-red-600">
            <div className="flex gap-x-10">
              <button
                onClick={onPrevStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                back
              </button>
              <button
                onClick={onNextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                next
              </button>
            </div>
          </div>
        </Step>
        <Step name="step7">
          <div className="w-full h-screen bg-red-700">
            <div className="flex gap-x-10">
              <button
                onClick={onPrevStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                back
              </button>
              <button
                onClick={onNextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                next
              </button>
            </div>
          </div>
        </Step>
        <Step name="step8">
          <div className="w-full h-screen bg-red-800">
            <div className="flex gap-x-10">
              <button
                onClick={onPrevStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                back
              </button>
              <button
                onClick={onNextStep}
                className="bg-black text-white px-4 py-2 rounded"
              >
                next
              </button>
            </div>
          </div>
        </Step>
      </Funnel>
    </main>
  );
}
