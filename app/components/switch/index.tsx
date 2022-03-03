import { useField } from "remix-validated-form";

interface SwitchProps {
  name: string;
  label: string;
}

export const Switch = ({ name, label }: SwitchProps) => {
  const { getInputProps, error } = useField(name);

  return (
    <div>
      <input
        type="checkbox"
        {...getInputProps({
          type: "checkbox",
          id: name,
        })}
      />
      <label>{label}</label>
      <pre>{JSON.stringify(getInputProps({ type: "checkbox" }), null, 2)}</pre>
    </div>
  );
};
