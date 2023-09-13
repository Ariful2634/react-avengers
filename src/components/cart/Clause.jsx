// import { useState } from "react";


const Clause = ({actorName}) => {

    

    

    return (
        <div className="bg-gray-400 p-5 rounded-lg">
            <h2 className="font-semibold text-pink-600">Signing Clause: {actorName.length}</h2>
            <div className="border mt-4 text-start p-4 bg-slate-200 text-purple-800 rounded-lg">
            

                {
                    actorName.map(nam=><li>{nam.name}</li>)
                }
            </div>
        </div>
    );
};

export default Clause;