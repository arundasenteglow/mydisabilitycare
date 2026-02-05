"use client";

import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log("Form submitted");
    };

    return (
        <section id="contact" className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#6a2875] font-semibold text-sm uppercase tracking-wider">
                        Contact Us
                    </span>
                    <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
                        Get In Touch With Us
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Have questions about our services or need assistance with your NDIS plan?
                        Our friendly team is here to help you every step of the way.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-gray-50 p-8 rounded-3xl space-y-8">
                            <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-[#6a2875]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Our Location</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Portal West, Unit 202/2994 Logan Rd,<br />
                                            Underwood QLD 4119
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-[#6a2875]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone Number</p>
                                        <a href="tel:0431687423" className="text-sm text-gray-600 hover:text-[#6a2875] transition-colors">
                                            0431 687 423
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-[#6a2875]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email Address</p>
                                        <a href="mailto:info@mydisabilitycare.org" className="text-sm text-gray-600 hover:text-[#6a2875] transition-colors break-all">
                                            info@mydisabilitycare.org
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-[#6a2875]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Office Hours</p>
                                        <p className="text-sm text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-100/50">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            required
                                            className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="0400 000 000"
                                            className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            placeholder="How can we help?"
                                            className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Your Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us more about your needs..."
                                        rows={6}
                                        required
                                        className="bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none"
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-[#6a2875] hover:bg-[#1e3a8a] text-white py-6 text-lg shadow-lg shadow-pink-100 transition-all duration-300">
                                    Send Message
                                    <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
