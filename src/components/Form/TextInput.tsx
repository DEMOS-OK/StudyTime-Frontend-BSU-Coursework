import TextInputType from "@/components/Form/Enums/TextInputType";

interface TextInputProps {
  label: string;
  placeholder: string;
  required: boolean;
  id: string;
  onKeyUp?: (e: any) => void;
  type?: TextInputType;
}

const TextInput = ({
  label,
  placeholder,
  required,
  id,
  onKeyUp,
  type,
}: TextInputProps) => {
  if (!type) {
    type = TextInputType.Text;
  }

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-light text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default TextInput;
