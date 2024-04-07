import Radio from "../Radio/index";

export const GroupRadio = ({ options, value, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.label}
          label={option.label}
          checked={option.label === value}
          onChange={() => onChange(option.label)}
        />
      ))}
    </div>
  );
};
