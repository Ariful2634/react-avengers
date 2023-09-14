// import { useState } from "react";


const Clause = ({actorName,salary,remaining}) => {

    

    

    return (
        <div className="bg-gray-400 p-5 rounded-lg">
            <h2 className="font-semibold ">Signing Clause: {actorName.length}</h2>
            <div className="border p-4 mt-4 rounded-lg bg-orange-300">
                <p className="text-center">Total Salary: {salary}</p>
                <p>Remaining: {remaining}</p>
            </div>
            <div className="border mt-4 text-start p-4 bg-slate-200 text-purple-800 rounded-lg">
            

                {
                    actorName.map(nam=><li key={nam.id}>{nam.name}</li>)
                }
            </div>
        </div>
    );
};

export default Clause;