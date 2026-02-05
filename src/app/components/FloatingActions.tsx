'use client';

import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export function FloatingActions() {
    const [showChatbot, setShowChatbot] = useState(false);

    return (
        <>
            {/* Chatbot Button - Right Side */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setShowChatbot(!showChatbot)}
                    className="group relative w-16 h-16 bg-gradient-to-br from-[#6a2875] to-[#ff9500] rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    aria-label="Open chatbot"
                >
                    <MessageCircle className="w-7 h-7 text-white" />

                    {/* Pulse Animation */}
                    <span className="absolute inset-0 rounded-full bg-[#6a2875] animate-ping opacity-20"></span>

                    {/* Tooltip */}
                    <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Chat with us
                    </span>
                </button>
            </div>

            {/* Call Button - Left Side */}
            <div className="fixed bottom-6 left-6 z-50">
                <a
                    href="tel:0431687423"
                    className="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    aria-label="Call us"
                >
                    <Phone className="w-7 h-7 text-white" />

                    {/* Pulse Animation */}
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>

                    {/* Tooltip */}
                    <span className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Call: 0431 687 423
                    </span>
                </a>
            </div>

            {/* Email Button - Left Side (Above Call Button) */}
            <div className="fixed bottom-24 left-6 z-50">
                <a
                    href="mailto:info@mydisabilitycare.org"
                    className="group relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    aria-label="Email us"
                >
                    <Mail className="w-7 h-7 text-white" />

                    {/* Pulse Animation */}
                    <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></span>

                    {/* Tooltip */}
                    <span className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Email us
                    </span>
                </a>
            </div>

            {/* Chatbot Modal/Widget */}
            {showChatbot && (
                <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="bg-gradient-to-br from-[#6a2875] to-[#ff9500] p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-[#6a2875]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Chat Support</h3>
                                <p className="text-xs text-white/80">We're here to help!</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowChatbot(false)}
                            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                            aria-label="Close chat"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Chat Content */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        <div className="space-y-4">
                            {/* Bot Message */}
                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#6a2875] to-[#ff9500] rounded-full flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-4 h-4 text-white" />
                                </div>
                                <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                                    <p className="text-sm text-gray-800">
                                        Hello! 👋 Welcome to My Disability Care. How can we assist you today?
                                    </p>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500 text-center">Quick actions:</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-700 transition-colors">
                                        📋 Our Services
                                    </button>
                                    <button className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-700 transition-colors">
                                        📞 Book Consultation
                                    </button>
                                    <button className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-700 transition-colors">
                                        ❓ NDIS Information
                                    </button>
                                    <button className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-700 transition-colors">
                                        💬 Talk to Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6a2875] focus:border-transparent text-sm"
                            />
                            <button
                                className="w-10 h-10 bg-gradient-to-br from-[#6a2875] to-[#ff9500] rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
                                aria-label="Send message"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
