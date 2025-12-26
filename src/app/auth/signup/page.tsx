'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/auth-context';
import { Mail, Lock, User, ArrowRight, Sparkles, Eye, EyeOff, Check } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const passwordStrength = {
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasMinLength: password.length >= 8,
  };

  const isPasswordStrong =
    passwordStrength.hasUpper &&
    passwordStrength.hasLower &&
    passwordStrength.hasNumber &&
    passwordStrength.hasMinLength;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!agreedToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!isPasswordStrong) {
      setError('Password does not meet strength requirements');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password, fullName);
      router.push('/auth/verify-email');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to create account. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent font-playfair">
              EasyFrames
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair mb-2">
            Create Account
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-inter">
            Join our community and start shopping
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm font-inter">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300 font-inter font-medium text-sm">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="pl-10 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 text-sm font-inter"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-inter font-medium text-sm">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 text-sm font-inter"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 font-inter font-medium text-sm">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 pr-10 border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-500 text-sm font-inter"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Password Strength Indicator */}
            <div className="space-y-2 mt-3">
              <div className="flex gap-1">
                {[
                  passwordStrength.hasUpper,
                  passwordStrength.hasLower,
                  passwordStrength.hasNumber,
                  passwordStrength.hasMinLength,
                ].map((check, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      check ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <div className="space-y-1">
                <StrengthItem
                  check={passwordStrength.hasUpper}
                  text="At least one uppercase letter"
                />
                <StrengthItem
                  check={passwordStrength.hasLower}
                  text="At least one lowercase letter"
                />
                <StrengthItem
                  check={passwordStrength.hasNumber}
                  text="At least one number"
                />
                <StrengthItem
                  check={passwordStrength.hasMinLength}
                  text="At least 8 characters"
                />
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300 font-inter font-medium text-sm">
              Confirm Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={`pl-10 border-gray-300 dark:border-gray-600 text-sm font-inter ${
                  confirmPassword && password !== confirmPassword
                    ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                    : 'focus:border-blue-600 dark:focus:border-blue-500 focus:ring-blue-600 dark:focus:ring-blue-500'
                }`}
              />
            </div>
            {confirmPassword && password !== confirmPassword && (
              <p className="text-red-600 dark:text-red-400 text-xs font-inter">
                Passwords do not match
              </p>
            )}
          </div>

          {/* Terms Agreement */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="w-4 h-4 border border-gray-300 rounded cursor-pointer mt-0.5"
            />
            <span className="text-xs text-gray-600 dark:text-gray-400 font-inter">
              I agree to the{' '}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading || !isPasswordStrong || !agreedToTerms}
            className="w-full h-12 bg-slate-900 hover:bg-blue-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed font-inter"
          >
            {loading ? 'Creating account...' : 'Create Account'}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6 font-inter">
          Already have an account?{' '}
          <Link
            href="/auth/login"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

function StrengthItem({ check, text }: { check: boolean; text: string }) {
  return (
    <div className={`flex items-center gap-2 text-xs font-inter ${
      check ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
    }`}>
      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
        check
          ? 'bg-green-100 dark:bg-green-900/20'
          : 'bg-gray-100 dark:bg-gray-800'
      }`}>
        {check && <Check className="w-3 h-3 text-green-600 dark:text-green-400" />}
      </div>
      {text}
    </div>
  );
}
