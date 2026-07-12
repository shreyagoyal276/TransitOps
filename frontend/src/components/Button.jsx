export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) {


  const styles = {


    primary:
      `
      bg-gradient-to-r
      from-blue-600
      to-purple-600
      hover:from-blue-700
      hover:to-purple-700
      text-white
      shadow-blue-200
      `,


    secondary:
      `
      bg-gradient-to-r
      from-gray-100
      to-gray-200
      hover:from-gray-200
      hover:to-gray-300
      text-gray-800
      `,



    danger:
      `
      bg-gradient-to-r
      from-red-500
      to-pink-500
      hover:from-red-600
      hover:to-pink-600
      text-white
      shadow-red-200
      `,



    success:
      `
      bg-gradient-to-r
      from-green-500
      to-emerald-500
      hover:from-green-600
      hover:to-emerald-600
      text-white
      shadow-green-200
      `,

  };




  return (

    <button

      type={type}

      onClick={onClick}

      className={`
        px-6
        py-3
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        shadow-lg
        hover:scale-[1.03]
        active:scale-95
        flex
        items-center
        justify-center
        gap-2
        ${styles[variant]}
        ${className}
      `}

    >

      {children}

    </button>

  );

}