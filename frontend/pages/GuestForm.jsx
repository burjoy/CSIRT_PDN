import { useReducer, useEffect } from "react";
import { initial_state, StateReducer } from "../state_management/StateReducer";

const GuestForm = () => {
    const [state, dispatch] = useReducer(StateReducer, initial_state);
    useEffect(() => {
        // Reset form state on component mount
        // dispatch({ type: 'RESET_FORM' });
        console.log(state);
    }, [state]);
    return(
        <>
            <div className="container mx-auto px-4 py-12 text-center self-center">
                <form className="" onSubmit={e => e.preventDefault()}>
                    <h1 className="text-4xl font-bold text-center mb-12">Guest Form</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <label className="block mb-4">
                                Name:
                                <input type="text" className="w-full mt-2 p-2 border rounded" onChange={e => {dispatch({type: 'SET_NAME', payload: e.target.value})}} required />
                            </label>
                            <label className="block mb-4">
                                Email:
                                <input type="email" className="w-full mt-2 p-2 border rounded" onChange={e => {dispatch({type: 'SET_EMAIL', payload: e.target.value})}} required />
                            </label>
                            <label className="block mb-4">
                                Message:
                                <textarea className="w-full mt-2 p-2 border rounded" rows="4" onChange={e => {dispatch({type: 'SET_MESSAGE', payload: e.target.value})}} required></textarea>
                            </label>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Submit</button>
                        </div>
                </div>
            </form>
            </div>
        </>
    )
}

export default GuestForm;