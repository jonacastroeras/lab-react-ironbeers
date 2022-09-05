import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import TopMenu from "../../components/Menu";

function NewBeer() {
    const url = "https://ih-beers-api2.herokuapp.com/beers/new"
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
    })
    function handleChange(e) {
        const value = (e.target.type == "number") ? Number(e.target.value) : e.target.value
        setForm({ ...form, [e.target.name]: value })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            console.log(form)
            await axios.post(url, form)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <TopMenu></TopMenu>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="formItem">
                        <label>Name</label>
                        <input name="name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="formItem">
                        <label>Tagline</label>
                        <input name="tagline" value={form.tagline} onChange={handleChange} />
                    </div>
                    <div className="formItem">
                        <label>Description</label>
                        <textarea name="description" value={form.description} onChange={handleChange} />
                    </div>
                    <div className="formItem">
                        <label>First Brewed</label>
                        <input name="first_brewed" value={form.first_brewed} onChange={handleChange} />
                    </div>
                    <div className="formItem">
                        <label>Brewers Tips</label>
                        <input name="brewers_tips" value={form.brewers_tips} onChange={handleChange} />
                    </div>
                    <div className="formItem">
                        <label>Attenuation Level</label>
                        <input name="attenuation_level" type="number" value={form.attenuation_level} onChange={handleChange} />
                    </div>
                    <div className="formItem">
                        <label>Contributed By</label>
                        <input name="contributed_by" value={form.contributed_by} onChange={handleChange} />
                    </div>
                    <button className="submit" type="submit">Save</button>
                </form>
            </div>

        </>
    )
}
export default NewBeer;