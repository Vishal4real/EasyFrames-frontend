import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Phone, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogOut } from "lucide-react"
import { InfoTooltip } from "@/components/ui/info-tooltip"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
  isVerified?: boolean;
  joinDate?: string;
}

interface ProfileProps {
  variant?: "icon" | "button";
  user?: UserData | null;
  onLogin?: (user: UserData) => void;
  onLogout?: () => void;
}

export default function Profile({ 
  variant = "icon",
  user = null,
  onLogin,
  onLogout
}: ProfileProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  
  // Auth form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });

  // Profile form states
  const [profileForm, setProfileForm] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    bio: ''
  });

  // Auth handlers
  const handleLoginSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const mockUser: UserData = {
        id: 1,
        email: loginForm.email,
        firstName: 'Vishal',
        lastName: 'Vishwakarma',
        isVerified: true,
        joinDate: 'January 2024'
      };
      onLogin?.(mockUser);
      setIsLoading(false);
    }, 1000);
  };

  const handleSignupSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    
    setIsLoading(true);
    
    setTimeout(() => {
      const mockUser: UserData = {
        id: 1,
        email: signupForm.email,
        firstName: signupForm.firstName,
        lastName: signupForm.lastName,
        isVerified: false,
        joinDate: 'August 2025'
      };
      onLogin?.(mockUser);
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider: 'google' | 'apple'): void => {
    setIsLoading(true);
    setTimeout(() => {
      const mockUser: UserData = {
        id: 1,
        email: 'user@example.com',
        firstName: 'John',
        lastName: 'Doe',
        isVerified: true,
        joinDate: 'August 2025'
      };
      onLogin?.(mockUser);
      setIsLoading(false);
    }, 1000);
  };

  const updateLoginForm = (field: string, value: string): void => {
    setLoginForm(prev => ({ ...prev, [field]: value }));
  };

  const updateSignupForm = (field: string, value: string): void => {
    setSignupForm(prev => ({ ...prev, [field]: value }));
  };

  const handleLogout = (): void => {
    onLogout?.();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ): void => {
    setProfileForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  // Auth content
  const renderAuthContent = () => (
    <div className="px-6">
      <Tabs defaultValue="login" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 border border-gray-300 dark:border-gray-600">
          <TabsTrigger 
            value="login" 
            className="font-medium rounded-md data-[state=active]:bg-gray-800 dark:data-[state=active]:bg-gray-700 data-[state=active]:text-white dark:data-[state=active]:text-white data-[state=active]:shadow-sm transition-all duration-300 text-gray-600 dark:text-gray-400"
          >
            Sign In
          </TabsTrigger>
          <TabsTrigger 
            value="signup" 
             className="font-medium rounded-md data-[state=active]:bg-gray-800 dark:data-[state=active]:bg-gray-700 data-[state=active]:text-white dark:data-[state=active]:text-white data-[state=active]:shadow-sm transition-all duration-300 text-gray-600 dark:text-gray-400"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>

        {/* Login Tab */}
        <TabsContent value="login" className="space-y-6">
          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="login-email" className="font-medium text-black dark:text-white">
                Email Address
              </Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 group-focus-within:text-slate-800 dark:group-focus-within:text-slate-300 transition-colors duration-200" />
                <Input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  value={loginForm.email}
                  onChange={(e) => updateLoginForm('email', e.target.value)}
                  className="pl-10 h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="login-password" className="font-medium text-black dark:text-white">
                Password
              </Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 group-focus-within:text-slate-800 dark:group-focus-within:text-slate-300 transition-colors duration-200" />
                <Input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={loginForm.password}
                  onChange={(e) => updateLoginForm('password', e.target.value)}
                  className="pl-10 pr-11 h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                  className="border-gray-400 dark:border-gray-500 data-[state=checked]:bg-slate-800 dark:data-[state=checked]:bg-slate-300 data-[state=checked]:border-slate-800 dark:data-[state=checked]:border-slate-300"
                />
                <Label htmlFor="remember-me" className="text-sm text-black dark:text-white">
                  Remember me
                </Label>
              </div>
              <Button variant="link" className="px-0 text-sm text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white hover:underline">
                Forgot password?
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </TabsContent>

        {/* Signup Tab */}
        <TabsContent value="signup" className="space-y-6">
          <form onSubmit={handleSignupSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="signup-firstName" className="font-medium text-black dark:text-white">
                  First Name
                </Label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 group-focus-within:text-slate-800 dark:group-focus-within:text-slate-300 transition-colors duration-200" />
                  <Input
                    id="signup-firstName"
                    placeholder="John"
                    value={signupForm.firstName}
                    onChange={(e) => updateSignupForm('firstName', e.target.value)}
                    className="pl-10 h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-lastName" className="font-medium text-black dark:text-white">
                  Last Name
                </Label>
                <Input
                  id="signup-lastName"
                  placeholder="Doe"
                  value={signupForm.lastName}
                  onChange={(e) => updateSignupForm('lastName', e.target.value)}
                  className="h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="signup-email" className="font-medium text-black dark:text-white">
                  Email Address
                </Label>
                <InfoTooltip message="We require your email to verify and send purchase confirmation, order updates. No promotional emails." />
              </div>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 group-focus-within:text-slate-800 dark:group-focus-within:text-slate-300 transition-colors duration-200" />
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="john@example.com"
                  value={signupForm.email}
                  onChange={(e) => updateSignupForm('email', e.target.value)}
                  className="pl-10 h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="signup-phone" className="font-medium text-black dark:text-white">
                  Phone Number
                </Label>
                <InfoTooltip message="For OTP verification and WhatsApp communication about order. No promotional messages." />
              </div>
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 group-focus-within:text-slate-800 dark:group-focus-within:text-slate-300 transition-colors duration-200" />
                <Input
                  id="signup-phone"
                  placeholder="12345-67890"
                  value={signupForm.phone}
                  onChange={(e) => updateSignupForm('phone', e.target.value)}
                  className="pl-10 h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="signup-password" className="font-medium text-black dark:text-white">
                Password
              </Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 group-focus-within:text-slate-800 dark:group-focus-within:text-slate-300 transition-colors duration-200" />
                <Input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={signupForm.password}
                  onChange={(e) => updateSignupForm('password', e.target.value)}
                  className="pl-10 pr-11 h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </Button>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed font-inter">
              By signing up, you agree to our{' '}
              <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200">
                Privacy Policy
              </Link>
            </p>
          </form>
        </TabsContent>
      </Tabs>

      {/* Divider */}
      <div className="relative my-8">
        <Separator className="bg-gray-300 dark:bg-gray-600" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white dark:bg-gray-900 px-4 text-gray-500 dark:text-gray-400 text-sm">
            Or continue with
          </span>
        </div>
      </div>

      {/* Social Login */}
      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => handleSocialLogin('google')}
          className="w-full h-11 border-2 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]"
          disabled={isLoading}
        >
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </Button>
      </div>

    </div>
  );

  // Profile content
  const renderProfileContent = () => (
    <div className="space-y-6">
      {/* User Info */}
      <div className="text-center space-y-4 py-6">
        <div className="relative">
          <Avatar className="w-20 h-20 mx-auto border-4 border-gray-200 dark:border-gray-700 shadow-lg">
            <AvatarImage src={user?.avatar} alt={`${user?.firstName} ${user?.lastName}`} />
            <AvatarFallback className="text-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </AvatarFallback>
          </Avatar>
          {user?.isVerified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-slate-800 dark:bg-slate-300 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
              <Sparkles className="w-3 h-3 text-white dark:text-black" />
            </div>
          )}
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-xl text-black dark:text-white">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
          {user?.isVerified && (
            <Badge variant="secondary" className="mt-3 bg-gray-100 dark:bg-gray-800 text-slate-800 dark:text-slate-300 border border-gray-300 dark:border-gray-600 font-medium">
              <Sparkles className="w-3 h-3 mr-1" />
              Verified Account
            </Badge>
          )}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Member since {user?.joinDate}
          </p>
        </div>
      </div>

      <Separator className="bg-gray-200 dark:bg-gray-700" />

      {/* Profile Form */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="font-bold text-lg text-black dark:text-white">
            Personal Information
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Update your account details
          </p>
        </div>
        
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-medium text-black dark:text-white">
                First Name
              </Label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 group-focus-within:text-slate-800 dark:group-focus-within:text-slate-300 transition-colors duration-200" />
                <Input
                  id="firstName"
                  value={profileForm.firstName}
                  onChange={(e) => handleInputChange(e, 'firstName')}
                  className="pl-10 h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="font-medium text-black dark:text-white">
                Last Name
              </Label>
              <Input
                id="lastName"
                value={profileForm.lastName}
                onChange={(e) => handleInputChange(e, 'lastName')}
                className="h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="email" className="font-medium text-black dark:text-white">
                Email Address
              </Label>
              <InfoTooltip message="We require your email to verify and send purchase confirmation, order updates. No promotional emails." />
            </div>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 group-focus-within:text-slate-800 dark:group-focus-within:text-slate-300 transition-colors duration-200" />
              <Input
                id="email"
                type="email"
                value={profileForm.email}
                onChange={(e) => handleInputChange(e, 'email')}
                className="pl-10 h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="phone" className="font-medium text-black dark:text-white">
                Phone Number
              </Label>
              <InfoTooltip message="For OTP verification and WhatsApp communication about order. No promotional messages." />
            </div>
            <div className="relative group">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 group-focus-within:text-slate-800 dark:group-focus-within:text-slate-300 transition-colors duration-200" />
              <Input
                id="phone"
                value={profileForm.phone}
                onChange={(e) => handleInputChange(e, 'phone')}
                className="pl-10 h-11 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-slate-800 dark:focus:border-slate-300 focus:ring-2 focus:ring-slate-800/20 dark:focus:ring-slate-300/20 rounded-lg transition-all duration-200 text-black dark:text-white"
              />
            </div>
          </div>

          <Button 
            className="w-full h-11 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
            disabled={isLoading}
            type="button"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin"></div>
                Saving...
              </div>
            ) : (
              'Save Changes'
            )}
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        {variant === "icon" ? (
          <button className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105">
            <User size={18} className="text-black dark:text-white" />
          </button>
        ) : (
          <button className="flex-1 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:scale-105">
            <User size={18} className="text-black dark:text-white" />
            <span className="font-medium text-black dark:text-white">{user ? 'Profile' : 'Sign In'}</span>
          </button>
        )}
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md bg-white dark:bg-gray-900 border-l border-gray-300 dark:border-gray-700">
        <SheetHeader className="pb-6 border-b border-gray-200 dark:border-gray-700">
          <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent font-playfair">
            {user ? 'Your Profile' : 'Welcome to EasyFrames'}
          </SheetTitle>
          <SheetDescription className="text-gray-600 dark:text-gray-400 font-inter">
            {user 
              ? 'Manage your account information and preferences'
              : 'Access your account or create a new one to get started'
            }
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto pb-6">
          {user ? renderProfileContent() : renderAuthContent()}
        </div>

        {user && (
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button 
              variant="outline" 
              className="w-full h-11 border-2 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] flex items-center gap-2"
              onClick={handleLogout}
              type="button"
            >
              <LogOut size={16} />
              Sign Out
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}