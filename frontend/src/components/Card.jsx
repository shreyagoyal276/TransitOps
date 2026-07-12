export default function Card({
  title,
  subtitle,
  children,
  className = "",
}) {


  return (

    <div

      className={`
        bg-white/80
        backdrop-blur-xl
        rounded-[2.5rem]
        shadow-lg
        border
        border-white
        p-7
        transition-all
        duration-300
        hover:shadow-xl
        ${className}
      `}

    >



      {(title || subtitle) && (

        <div className="mb-6">


          {title && (

            <h2
              className="
              text-xl
              font-bold
              text-gray-800
              tracking-tight
              "
            >

              {title}

            </h2>

          )}





          {subtitle && (

            <p
              className="
              text-gray-500
              mt-2
              text-sm
              "
            >

              {subtitle}

            </p>

          )}



        </div>

      )}




      {children}



    </div>

  );

}