export default function Loader() {

  return (

    <div

      className="
      flex
      justify-center
      items-center
      h-40
      "

    >

      <div

        className="
        relative
        flex
        items-center
        justify-center
        "

      >


        {/* Outer Glow */}

        <div

          className="
          absolute
          w-16
          h-16
          rounded-full
          bg-purple-200
          blur-xl
          opacity-60
          "

        />



        {/* Spinner */}

        <div

          className="
          w-12
          h-12
          border-4
          border-purple-400
          border-t-blue-500
          rounded-full
          animate-spin
          "

        />



      </div>


    </div>

  );

}