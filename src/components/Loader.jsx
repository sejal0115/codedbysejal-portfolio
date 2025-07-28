import gif from "/loading.gif";
import useDarkMode from '../hooks/useDarkMode';

const Loader = () => {
    const [darkMode] = useDarkMode();

    return (
        <div
            className={`absolute inset-0 z-40 backdrop-blur-md flex flex-col items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-black/60' : 'bg-white/60'
                }`}
        >
            <img
                src={gif}
                alt="Loading...."
                className="h-16 object-contain w-[200px]"
            />
            <h3 className='mt-1 text-3xl'>Loading . . . .</h3>
        </div>
    );
};

export default Loader;
