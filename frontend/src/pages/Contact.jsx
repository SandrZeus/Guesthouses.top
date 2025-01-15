import React from 'react';
import Carousel from "../components/Carousel"
import "../style/Contact.css"
import carlpic1 from "../assets/carlpic1.jpg"
import danielAndrade from "../assets/daniel-andrade.jpg"
import samuelFoster from "../assets/samuel-foster.jpg"
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const {t} = useTranslation();

    const onSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
    
        // Add access_key required by Web3Forms
        formData.append("access_key", "52a6d27a-28a9-46fc-82bb-1150e8276e5b");
    
        // Convert formData to JSON object
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(jsonObject)
            });
    
            const result = await response.json();
    
            if (result.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Your message was sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: result.message || "Something went wrong. Please try again.",
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: error.message || "Network error occurred.",
                icon: "error"
            });
        }
    };    
    
    return (
        <div>
            <Carousel />
            <div className='page-text'>
                <br/>
                <br/>
                <br/>
                <img src={samuelFoster} className='image-decor' />
                <p className='photographer'> {t("Photograph")} Samuel Foster </p>
                <h1 className='orange-text'> {t("ContactOrange")} </h1>
                <br/>
                <br/>
                <p className='text'>{t("ContactText1")}</p>
                <br/>
                <p className='text'>
                    E-Mail: info@guesthouses.top<br/>
                    Telephone: 0049/ 1776004188<br/>
                    WhatsApp: 0049/ 1776004188
                </p>
                <br/>
                <br/>
                <br/>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={onSubmit}>
                        <label>
                            Name<span className="required">*</span>
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            E-Mail<span className="required">*</span>
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Number<span className="required">*</span>
                            <input type="tel" name="phone" required />
                        </label>
                        <p className="text"> {t("ContactText2")} </p>
                        <button type="submit" className="submit-button">{t("Submit")}</button>
                        <p className="notice">
                            <strong>{t("ContactText3")}</strong> {t("ContactText4")} <span className="required">*</span> {t("ContactText5")}
                        </p>
                    </form>
                    <div>
                        <img src={carlpic1} alt="Decorative" className="contact-image" />
                        <p className='photographer'> {t("Photograph")} Carl Raabe </p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <img src={danielAndrade} className='image-decor' />
                <p className='photographer'> {t("Photograph")} Daniel Andrade </p>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Contact;