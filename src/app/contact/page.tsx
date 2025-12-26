import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { InfoTooltip } from '@/components/ui/info-tooltip';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import BottomCTA from '@/components/BottomCTA';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with EasyFrames. Have questions about our frames? Need help with your order? Contact our friendly customer service team today.',
  keywords: ['contact easyframes', 'customer service', 'frame support', 'frame help', 'frame questions'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - EasyFrames',
    description: 'Get in touch with EasyFrames. Have questions about our frames? Contact our friendly customer service team today.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight font-playfair bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-base lg:text-base text-slate-300 max-w-3xl mx-auto font-inter">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight font-playfair bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
                  Contact Information
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-inter mb-8">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 font-inter">
                        Email
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-inter">
                        support@easyframes.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 font-inter">
                        Phone
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-inter">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 font-inter">
                        Address
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-inter">
                        123 Frame Street<br />
                        Art District, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 font-inter">
                        Hours
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-inter">
                        Mon - Fri: 9am - 6pm<br />
                        Sat - Sun: 10am - 4pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-6 shadow-lg">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight font-playfair bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm sm:text-base font-inter">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 rounded-lg font-inter"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm sm:text-base font-inter">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 rounded-lg font-inter"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="email" className="text-sm sm:text-base font-inter">
                        Email
                      </Label>
                      <InfoTooltip message="We require your email to verify and send purchase confirmation, order updates. No promotional emails." />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 rounded-lg font-inter"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm sm:text-base font-inter">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 rounded-lg font-inter"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base font-inter">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 rounded-lg font-inter"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-slate-900 hover:bg-blue-900 text-white rounded-full px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 font-inter w-full sm:w-auto"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BottomCTA />
        </div>
      </section>
    </div>
  );
}
