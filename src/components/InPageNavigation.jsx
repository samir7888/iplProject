
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function InPageNavigation({ teams, children }) {
    
    const [index, setIndex] = useState(0);
    let tabLineRef = useRef();
    let btnRef = useRef();

    function togleBtn(btn,i){
        let {offsetWidth,offsetLeft} = btn;
        tabLineRef.current.style.width = `${offsetWidth}px`;
        tabLineRef.current.style.left = `${offsetLeft}px`;
        setIndex(i)
    }
    useEffect(() => {
        togleBtn(btnRef.current,0)
    },[])
    return (
        <div className=''>
            <div className='w-full  bg-blue-800 flex justify-between items-end'>

            {
                teams.length > 2 ?  teams.map(({path, title}, i) =>
                    (
                        
                        <Link key={i} to={path}>
                    <button ref={i == 0 ? btnRef : null} className={"px-2 flex justify-between  text-white md:opacity-80 m-1 md:px-10 py-4 hover:bg-gray-200/20   " + 
                    (index == i ? "opacity-100 bg-gray-200/20": "text-gray-200  ")}
                     onClick={(e) => togleBtn(e.target,i)} >
                        {title}
                        </button>
                        </Link>
                ))  
                
                :
                
                teams.map((data, i) => (
                    <button ref={i == 0 ? btnRef : null} className={
                        "bg-black border border-gray-500 w-[50%]  h-12   " + 
                        (index == i ? "text-white ": "text-gray-400 ")} 

                        
                        onClick={(e) => togleBtn(e.target,i)} key={i}>{data}</button>
                    ))
                }
            <hr ref={tabLineRef} className='border-2 border-white absolute duration-300' />
</div>



        {teams.length > 2 ? "" : children[index]}
        </div>
    );
}

InPageNavigation.propTypes = {
    teams: PropTypes.array.isRequired,
    children: PropTypes.array.isRequired
};

export default InPageNavigation;