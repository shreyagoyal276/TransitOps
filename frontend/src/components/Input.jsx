export default function Input({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {


  return (

    <div className="mb-6">


      <label

        className="
        block
        mb-2
        font-semibold
        text-gray-700
        "

      >

        {label}

      </label>




      <input

        className="
        w-full
        px-5
        py-3.5
        rounded-2xl
        bg-gray-50/80
        border
        border-gray-200
        text-gray-700
        placeholder-gray-400
        transition-all
        duration-300
        outline-none
        focus:bg-white
        focus:ring-4
        focus:ring-purple-200
        focus:border-purple-400
        "

        type={type}

        name={name}

        placeholder={placeholder}

        value={value}

        onChange={onChange}

      />


    </div>

  );

}