import { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Dati del form inviati:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsSubmitted(true);
  };

  return (
    <div className="
      max-w-full
      max-h-full
      bg-[#c8a485]/60
      flex
      flex-row
      md:flex-row
      items-center
      mb-20
      md:rounded-lg
    ">
          <div className="w-4/5 flex flex-col items-start md:px-10 py-10 md:w-3/5">
        <h5 className="text-4xl font-bold text-gray-900 dark:text-white pb-5">
          Contact US
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Send a message to our liquor store for inquiries, product requests, or information on promotions. We're here to assist you and make your alcoholic beverage shopping experience unique and memorable. Fill out the form below, and you'll soon be in touch with our knowledgeable team </p>      </div>
      {isSubmitted ? (
        <div className="p-8 w-full max-w-md mx-auto  rounded-md ">
          <p className="text-green-600">Messaggio inviato con successo!</p>

        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8 w-full max-w-md mx-auto rounded-md justify-end">
          <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome
          </Label>
          <TextInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
            mt-1
            w-full
            rounded-md
            bg-neutral-600
            text-white" 
          />

          <Label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">
            Email
          </Label>
          <TextInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
            mt-1
            w-full
            rounded-md
            bg-neutral-600
            text-white"
          />

          <Label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white"
          />

          <div className="mt-6">
            <Button type="submit" className="w-full text-white p-2 rounded-md">
              Send Message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contact;
