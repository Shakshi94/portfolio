import { useState } from 'react';
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const MySwal = withReactContent(Swal);

function Contact() {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }
    setIsLoading(true);

    const { name, email, message } = formData;
    const sanitizedData = {
      name: "Name: " + DOMPurify.sanitize(name),
      email: "Email: " + DOMPurify.sanitize(email),
      message: "Message: " + DOMPurify.sanitize(message),
    };

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs
      .send(serviceID, templateID, sanitizedData, userID)
      .then((response) => {
        console.log("Email is sent successfully!", response.text);
        setFormData(initialState);
        setErrors({});
        MySwal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been successfully sent.',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: ' btn-green',
          }
        }).then(() => {
          setFormData(initialState); // Clear form fields after clicking OK
        });
      })
      .catch((error) => {
        console.error("Email sending failed", error);
        MySwal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'There was an error sending your message. Please try again later.',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'swal2-confirm btn-red',
          }
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto bg-black text-white py-20 px-4 md:px-10 " id='Contact'>
      <div className="flex flex-col items-center space-y-4">
        <div className="text-4xl font-bold">Contact With Me</div>
      </div>

      <div className="flex flex-col md:flex-row items-center py-10 space-y-8 md:space-y-0">
        <div className="bg-black border-2 border-white text-white p-8 rounded-lg shadow-lg w-full md:w-2/5 ">
          <p className="mb-6">If you have a query or concern, please contact me.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border border-gray-700 rounded bg-black text-white ${errors.name ? "error" : ""}`}
                disabled={isLoading}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={`w-full p-2 border border-gray-700 rounded bg-black text-white ${errors.email ? "error" : ""}`}
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className={`w-full p-2 border border-gray-700 rounded bg-black text-white ${errors.message ? "error" : ""}`}
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded transition duration-200"
            >
              {isLoading ? "Sending Message..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="bg-black text-white p-14 rounded-lg shadow-lg w-full md:w-2/5 mt-8 md:mt-0 md:ml-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="rounded-full w-12 h-12 border-2 border-white flex items-center justify-center socialMedia-contact mr-4">
                <AlternateEmailIcon />
              </div>
              <span className='text-lg font-bold'>vishwakarmasakshi80@gmail.com</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full w-12 h-12 border-2 border-white flex items-center justify-center socialMedia-contact mr-4">
                <PhoneIcon />
              </div>
              <span className='text-lg font-bold'>+919451909759</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full w-14 h-12 border-2 border-white flex items-center justify-center socialMedia-contact mr-4">
                <LocationOnIcon />
              </div>
              <span className='text-lg font-bold'>Jasopur, Jaunpur, 222001, Uttar Pradesh, India</span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-6 space-y-6">
            <ul className="flex space-x-8">
              <li>
                <a href="https://www.linkedin.com/in/shakshi-vishwakarma-21050421b/" target='blank' className="rounded-full w-12 h-12 border-2 border-white flex items-center justify-center socialMedia-contact transition duration-200">
                  <LinkedInIcon className="cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Shakshi94" target='blank' className="rounded-full w-12 h-12 border-2 border-white flex items-center justify-center socialMedia-contact transition duration-200">
                  <GitHubIcon className="cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/imshakshivishwakarma/?next=%2F" target='blank' className="rounded-full w-12 h-12 border-2 border-white flex items-center justify-center socialMedia-contact transition duration-200">
                  <InstagramIcon className="cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
