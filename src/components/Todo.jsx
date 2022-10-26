import React, { useEffect, useState } from "react";
import "./todo.css"

const Todo = () => {
    const [todoInput, setTodoInput] = useState("")
  useEffect(()=>{
  
  },[])

    const [todoList, setTodoList] = useState([
        {   count:null,
            text: "Santosh",
            date: "2022-01-01",
            time: "00:00",
            del:"X",
            checked:false

        }
    ])
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [count,setCount]=useState(1)

    const handleClick = () => {
        
     if(!date || !time){
         alert("Enter date and time")
         return
     }
        if (!todoInput ) {
            alert("Enter something/Item already Exist")
            return
        } else {
           
            setTodoList([...todoList, {
                text: todoInput,
                date,
                time,
                count,
                del:"X",
                checked:false
            }])
           
            setCount(count+1)
            setTodoInput("")
        }
    }

    const handleDelete=(id)=>{
        const filtered=todoList.filter(item=>item.count!==id)
       setTodoList(filtered)
       

    }
    const handleClear=()=>{
        setTodoList([ {
            text: "",
            date:"",
            time:"",
            count:"",
            del:""

        }])
    }
  
    const handleCheck=(id)=>{
        
        const filtered=[...todoList];
        const targetInd = filtered.findIndex(el=>el.count===id)
        filtered[targetInd].checked=!filtered[targetInd].checked
        setTodoList(filtered)
  
    }
   


    return (
        <>
            <div className="upper">
                <h1>TODO LIST</h1>
                <h3>Add Todo Here</h3>
                <input autoFocus placeholder="Enter Todo..." onChange={e => setTodoInput(e.target.value)} />
                <input type="date" onChange={e => setDate(e.target.value)} />
                <input type="time" onChange={e => setTime(e.target.value)} /><br/>
                <button onClick={handleClick} className="btn btn-success">Add Todo</button>
            </div>

            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Status</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            todoList.map((item) => (

                                <tr key={item.count}>
                                    <td className="bullet">•</td>
                                    <td >{item.text}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    {/* <td><input type="checkbox" className="check" checked={checked} onChange={()=>toggleChecked(item.count)}/>{checked?"Completed":"Incomplete"}</td> */}
                                    <td><input type="checkbox" className="check" onChange={()=>handleCheck(item.count)}/>{item.checked?"Completed":"Incomplete"}</td>
         
                                    <td style={{cursor:"pointer"}} onClick={()=>handleDelete(item.count)} className="del">{item.del}</td>
                                </tr>

                            ))
                        }


                    </tbody>
                </table>



            </div>
            <button onClick={handleClear} className="btn btn-primary">Clear All</button>
        </>
    )
}

export default Todo;