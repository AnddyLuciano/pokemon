import './HireBox.css';
import {useState} from 'react';
export const HireBox = ()=>{
    const [data, setData] = useState({
        subject:'',
        to:'',
        message:'',
        date:''
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        fetch(`http://localhost:4000/api/send_mail`,{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data),
        })
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    return(
        <div className="container container-fluid hire-container">
            <div className='box'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3"><label className="form-label" htmlFor="subject">Subject</label><select id="subject" name='subject' className="form-select" onChange={event=>setData({...data,[event.target.name]:event.target.value})}>
                            <optgroup label="Subject">
                                <option defaultValue={""}></option>
                                <option value={"hire"}>👍Hire me</option>
                                <option value={"proj"}>🤝Have a project</option>
                                <option value={"talk"}>💬Want to talk</option>
                            </optgroup>
                        </select></div>
                    <div className="mb-3"><label className="form-label" htmlFor="email">Email</label><input id="email" name='to' className="form-control" type="email" onChange={event=>setData({...data,[event.target.name]:event.target.value})} required/></div>
                    <div className="mb-3"><label className="form-label" htmlFor="message">Message</label><textarea id="message" name='message' className="form-control" placeholder='Specify your phone number . . .' onChange={event=>setData({...data,[event.target.name]:event.target.value})} required></textarea></div>
                    <div className="mb-5">
                        <div className="row">
                            <div className="h-date"><label className="form-label" htmlFor="hire-date">Date</label><input id="hire-date" name='date' className="form-control" type="date" onChange={event=>setData({...data,[event.target.name]:event.target.value})} required/></div>
                        </div>
                    </div>
                    <div className='mb-3 row'>
                        <div className="button btn-hire">
                            <button className="btn btn-primary d-block w-100" type="submit">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}