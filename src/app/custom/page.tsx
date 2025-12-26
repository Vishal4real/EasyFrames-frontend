"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Upload, Check, Ruler, Frame, Eye } from 'lucide-react'
import Link from 'next/link'

const steps = [
    { id: 1, name: 'Upload', icon: Upload },
    { id: 2, name: 'Choose Size', icon: Ruler },
    { id: 3, name: 'Choose Frame', icon: Frame },
    { id: 4, name: 'Review', icon: Eye },
]

const frameSizes = [
    { id: '8x10', label: '8" × 10"', description: 'Perfect for small spaces' },
    { id: '10x12', label: '10" × 12"', description: 'Standard size for bedrooms' },
    { id: '12x16', label: '12" × 16"', description: 'Ideal for living rooms' },
    { id: '16x20', label: '16" × 20"', description: 'Statement piece for large walls' },
]

const frameOptions = [
    { id: 'white', label: 'White Frame', color: 'bg-white border-gray-300', image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400' },
    { id: 'black', label: 'Black Frame', color: 'bg-black border-gray-600', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400' },
    { id: 'wood', label: 'Wood Frame', color: 'bg-amber-800 border-amber-600', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400' },
]

export default function CustomPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [uploadedImage, setUploadedImage] = useState<string | null>(null)
    const [selectedSize, setSelectedSize] = useState<string>('')
    const [selectedFrame, setSelectedFrame] = useState<string>('')
    const [previewImage, setPreviewImage] = useState<string>('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop')

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setUploadedImage(reader.result as string)
                setPreviewImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return uploadedImage !== null
            case 2:
                return selectedSize !== ''
            case 3:
                return selectedFrame !== ''
            default:
                return true
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/">
                        <Button variant="ghost" className="mb-4 font-inter">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-playfair mb-2">
                        Create Custom Frame
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-inter">
                        Upload your image and customize your perfect frame
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Stepper Progress */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sticky top-24">
                            <div className="space-y-4">
                                {steps.map((step, index) => {
                                    const Icon = step.icon
                                    const isActive = currentStep === step.id
                                    const isCompleted = currentStep > step.id

                                    return (
                                        <div key={step.id} className="flex items-center gap-4">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                                                isCompleted
                                                    ? 'bg-blue-900 border-blue-900 text-white'
                                                    : isActive
                                                    ? 'bg-blue-900 border-blue-900 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-400'
                                            }`}>
                                                {isCompleted ? (
                                                    <Check className="w-5 h-5" />
                                                ) : (
                                                    <Icon className="w-5 h-5" />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <div className={`text-sm font-semibold font-inter ${
                                                    isActive || isCompleted
                                                        ? 'text-gray-900 dark:text-white'
                                                        : 'text-gray-400'
                                                }`}>
                                                    Step {step.id}
                                                </div>
                                                <div className={`text-sm font-inter ${
                                                    isActive || isCompleted
                                                        ? 'text-gray-700 dark:text-gray-300'
                                                        : 'text-gray-400'
                                                }`}>
                                                    {step.name}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8">
                            {/* Step 1: Upload */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">
                                        Upload Your Image
                                    </h2>
                                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-12 text-center">
                                        {uploadedImage ? (
                                            <div className="space-y-4">
                                                <Image
                                                    src={uploadedImage}
                                                    alt="Uploaded"
                                                    width={400}
                                                    height={300}
                                                    className="mx-auto rounded-lg max-h-64 object-contain"
                                                />
                                                <Button
                                                    variant="outline"
                                                    onClick={() => {
                                                        setUploadedImage(null)
                                                        const input = document.createElement('input')
                                                        input.type = 'file'
                                                        input.accept = 'image/*'
                                                        input.onchange = handleImageUpload as any
                                                        input.click()
                                                    }}
                                                    className="font-inter"
                                                >
                                                    Change Image
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                <Upload className="w-12 h-12 mx-auto text-gray-400" />
                                                <div>
                                                    <label htmlFor="image-upload" className="cursor-pointer">
                                                        <Button className="font-inter">
                                                            Choose Image
                                                        </Button>
                                                    </label>
                                                    <input
                                                        id="image-upload"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageUpload}
                                                        className="hidden"
                                                    />
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                                                    JPG, PNG up to 10MB
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Choose Size */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">
                                        Choose Frame Size
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {frameSizes.map((size) => (
                                            <button
                                                key={size.id}
                                                onClick={() => setSelectedSize(size.id)}
                                                className={`p-4 rounded-xl border-2 transition-all text-left ${
                                                    selectedSize === size.id
                                                        ? 'border-blue-900 bg-blue-50 dark:bg-blue-900/20'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                                }`}
                                            >
                                                <div className="font-semibold text-gray-900 dark:text-white font-inter mb-1">
                                                    {size.label}
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                                                    {size.description}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Choose Frame */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">
                                        Choose Frame Style
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {frameOptions.map((frame) => (
                                            <button
                                                key={frame.id}
                                                onClick={() => setSelectedFrame(frame.id)}
                                                className={`p-4 rounded-xl border-2 transition-all ${
                                                    selectedFrame === frame.id
                                                        ? 'border-blue-900 bg-blue-50 dark:bg-blue-900/20'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                                }`}
                                            >
                                                <div className={`w-full h-32 rounded-lg mb-3 ${frame.color} border-2`}></div>
                                                <div className="font-semibold text-gray-900 dark:text-white font-inter text-sm">
                                                    {frame.label}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Review */}
                            {currentStep === 4 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">
                                        Review Your Custom Frame
                                    </h2>
                                    
                                    {/* Live Mockup Preview in Room Setting */}
                                    <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                                        <div className="relative h-96">
                                            <Image
                                                src={previewImage}
                                                alt="Frame preview in room"
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4">
                                                <div className="space-y-2 font-inter">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600 dark:text-gray-400">Size:</span>
                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                            {frameSizes.find(s => s.id === selectedSize)?.label}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600 dark:text-gray-400">Frame:</span>
                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                            {frameOptions.find(f => f.id === selectedFrame)?.label}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                                                        <span className="text-lg font-semibold text-gray-900 dark:text-white">Total:</span>
                                                        <span className="text-lg font-bold text-blue-900 dark:text-blue-400">₹399</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 space-y-4 font-inter">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">What's Included</h3>
                                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                            <li className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-green-600" />
                                                Premium 300 GSM print with matte finish
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-green-600" />
                                                5-7 day delivery, free prepaid shipping
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-green-600" />
                                                Quality guarantee
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <Button
                                    variant="outline"
                                    onClick={prevStep}
                                    disabled={currentStep === 1}
                                    className="font-inter"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Previous
                                </Button>
                                {currentStep < 4 ? (
                                    <Button
                                        onClick={nextStep}
                                        disabled={!canProceed()}
                                        className="bg-slate-900 hover:bg-blue-900 text-white font-inter"
                                    >
                                        Next
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                ) : (
                                    <Button
                                        className="bg-slate-900 hover:bg-blue-900 text-white font-inter"
                                    >
                                        Add to Cart
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

