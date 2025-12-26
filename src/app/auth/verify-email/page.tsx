'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Sparkles } from 'lucide-react';

export default function VerifyEmailPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-4">
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent font-playfair">
            EasyFrames
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair mb-3">
          Verify Your Email
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-sm font-inter mb-6">
          We've sent a verification link to your email address. Click the link to complete your registration and start shopping.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8 text-sm text-blue-700 dark:text-blue-400 font-inter space-y-2">
          <p className="font-medium">What happens next?</p>
          <ul className="text-left space-y-1 text-xs">
            <li>• Check your inbox (and spam folder)</li>
            <li>• Click the verification link</li>
            <li>• Sign in to your account</li>
            <li>• Start shopping!</li>
          </ul>
        </div>

        <Link href="/auth/login" className="block">
          <Button className="w-full h-12 bg-slate-900 hover:bg-blue-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] font-inter">
            Back to Sign In
          </Button>
        </Link>

        <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-6 font-inter">
          Didn't receive the email?{' '}
          <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">
            Resend verification email
          </button>
        </p>
      </div>
    </div>
  );
}
