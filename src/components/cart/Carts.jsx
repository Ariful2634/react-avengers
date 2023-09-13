import Clause from "./Clause";

const Carts = ({actor,clickHandler}) => {

    


    const {name,image,role,salary}=actor;
    return (
        <div className="border p-5 text-center space-y-4 rounded-lg">
            <h3 className="font-semibold">Name: {name} </h3>
           <div className="flex justify-center">
           <img src={image} alt="" />
           </div>
            <div className="flex justify-between gap-4">
                <h4 className="font-semibold">Role: {role}</h4>
                <h4 className="font-semibold">Salary: {salary}</h4>
                
            </div>
            <button onClick={()=>clickHandler(actor)} className="bg-sky-500 px-6 py-1 rounded-lg text-white font-semibold">Select</button>
        </div>
    );
};

export default Carts;