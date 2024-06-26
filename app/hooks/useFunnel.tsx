import {
  ReactElement,
  isValidElement,
  useCallback,
  useMemo,
  useState,
} from "react";

export interface StepProps {
  name: string;
  children: React.ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export interface UseFunnelProps {
  defaultStep: string;
  stepList: string[];
}

export interface FunnelDefaultType {
  onPrevStep?: () => void;
  onNextStep?: () => void;
  onSetStep?: (value: string) => void;
  onResetStep?: () => void;
}

const useFunnel = ({ defaultStep, stepList }: UseFunnelProps) => {
  const [step, setStep] = useState<string>(defaultStep || "");

  const Step = useMemo(() => {
    const StepComponent = (props: StepProps) => {
      return <>{props.children}</>;
    };
    StepComponent.displayName = "Step";
    return StepComponent;
  }, []);

  const Funnel = useMemo(() => {
    const FunnelComponent = ({ children }: FunnelProps) => {
      const targetStep = children.find(
        (child) => isValidElement(child) && child.props.name === step
      );

      if (!targetStep) {
        throw new Error(`${step} 스텝 컴포넌트를 찾지 못했습니다.`);
      }

      return <>{targetStep}</>;
    };
    FunnelComponent.displayName = "Funnel";
    return FunnelComponent;
  }, [step]);

  const onNextStep = useCallback(() => {
    const currentIndex = stepList.indexOf(step);
    const nextIndex = currentIndex + 1;

    if (nextIndex < stepList.length) {
      setStep(stepList[nextIndex]);
    }
  }, [step, stepList]);

  const onPrevStep = useCallback(() => {
    const currentIndex = stepList.indexOf(step);
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setStep(stepList[prevIndex]);
    }
  }, [step, stepList]);

  const onSetStep = useCallback(
    (value: string) => {
      if (stepList.includes(value)) {
        setStep(value);
      }
    },
    [stepList]
  );

  const onResetStep = useCallback(() => {
    setStep(defaultStep);
  }, [defaultStep]);

  return {
    Step,
    Funnel,
    onNextStep,
    onPrevStep,
    onSetStep,
    onResetStep,
  };
};

export default useFunnel;
