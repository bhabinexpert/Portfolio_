import { Facebook, Github, Instagram, Linkedin, MailIcon, MapPin, MessageCircle, Phone, PhoneCallIcon, SendIcon } from 'lucide-react'
import React, { useState } from 'react'
import {cn} from "@/lib/utils";
import { useToast } from '../hooks/use-toast';

function ContactSection() {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your Message! We will contact you very soon."
            });
            setIsSubmitting(false);
            setForm({ name: '', email: '', message: '' }); 
        }, 1000);
    };
  return (
    <section className='py-24 px-4 relative bg-secondary/30' id='contact'>
        <div className="container mx-auto max-w-5xl">
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Get In <span className='text-primary'> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tempora ex velit est nisi deleniti, laudantium cum praesentium nobis laboriosam nostrum beatae, id maxime fugit molestias, sapiente eligendi porro recusandae?
            </p>

            <div className="grid grid-cols-1 md: grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>
                    <div className="spaye-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MailIcon className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                <a href="mailto:bhabindulal35@gmail.com" className='text-muted-foreground hover:text-primary transition-color'>bhabindulal35@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="spaye-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Phone</h4>
                                <a href="tel:9824009974" className='text-muted-foreground hover:text-primary transition-color'> +977 9824009974</a>
                            </div>
                        </div>
                    </div>
                    <div className="spaye-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Location</h4>
                                <a className='text-muted-foreground hover:text-primary transition-color'> Damak, Jhapa</a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className='font-medium mb-4'>Connect With Me</h4>
                        <div className='flex space-x-4 justify-center'>
                            <a href="https://www.linkedin.com/in/bhabindulal/" target='_blank'>
                                <Linkedin/>
                            </a>

                            <a href="https://github.com/bhabinexpert" target='_blank'>
                                <Github/>
                            </a>

                            <a href="https://www.instagram.com/vabin__/" target='_blank'>
                                <Instagram/>
                            </a>

                            <a href="https://wa.me/9779824009974?text=Hello%20I%20am%20interested%20to%20work%with%you!!" target='_blank'>
                                <MessageCircle/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'> Send a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-2'> Your Name</label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                required
                                value={form.name}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='Enter Your Name'
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium mb-2'> Your Email</label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                required
                                value={form.email}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='Enter Your Email'
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                            <textarea
                                id='message'
                                name='message'
                                required
                                value={form.message}
                                onChange={handleChange}
                                className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                placeholder='Enter Your Message'
                            />
                        </div>

                        <button type='submit'
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <SendIcon size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default ContactSection;
