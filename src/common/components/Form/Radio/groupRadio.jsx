import Radio from "../Radio/index";

export const GroupRadio = ({ options, value, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <Radio
          key={option.value}
          valor={option.value}
          label={option.label}
          checked={option.value === value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
};
