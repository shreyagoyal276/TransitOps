export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {


  if (!isOpen) return null;


  return (


    <div

      className="
      fixed
      inset-0
      z-50
      flex
      justify-center
      items-center
      bg-black/30
      backdrop-blur-sm
      "

    >



      <div

        className="
        relative
        w-[500px]
        max-w-[90%]
        bg-white/90
        backdrop-blur-xl
        rounded-[2.5rem]
        p-8
        shadow-2xl
        border
        border-white
        animate-in
        fade-in
        zoom-in-95
        duration-200
        "

      >




        {/* Header */}


        <div

          className="
          flex
          justify-between
          items-center
          mb-6
          "

        >



          <h2

            className="
            text-2xl
            font-extrabold
            text-gray-800
            "

          >

            {title}

          </h2>





          <button

            onClick={onClose}

            className="
            w-10
            h-10
            rounded-full
            bg-gray-100
            hover:bg-red-100
            hover:text-red-500
            transition
            text-gray-600
            font-bold
            "

          >

            ✕


          </button>



        </div>






        {/* Content */}


        <div>

          {children}

        </div>



      </div>



    </div>


  );

}