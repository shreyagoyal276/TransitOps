import { Search, Sparkles } from "lucide-react";


export default function SearchBar({
  value,
  onChange,
  placeholder = "Search..."
}) {


  return (

    <div

      className="
      relative
      w-full
      max-w-md
      "

    >



      <div

        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-blue-500
        "

      >

        <Search size={19}/>

      </div>





      <input


        value={value}


        onChange={onChange}


        placeholder={placeholder}



        className="
        w-full
        bg-white/80
        backdrop-blur-xl
        border
        border-gray-200
        rounded-2xl
        pl-12
        pr-12
        py-3.5
        text-gray-700
        placeholder-gray-400
        outline-none
        transition-all
        duration-300
        focus:bg-white
        focus:border-purple-400
        focus:ring-4
        focus:ring-purple-200
        shadow-sm
        "


      />





      <div

        className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        text-purple-400
        "

      >

        <Sparkles size={16}/>


      </div>




    </div>

  );

}