"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Calendar, Clock, User, Phone, Mail, FileText, Check } from "lucide-react";

// Form Validation Schema
const bookingSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  treatment: z.string().min(1, "Please select a treatment"),
  skinConcern: z.string().min(1, "Please select or type your skin concern"),
  appointmentDate: z.string().min(1, "Preferred date is required"),
  appointmentTime: z.string().min(1, "Preferred time is required"),
  conditions: z.string().optional(),
  allergies: z.string().optional(),
  message: z.string().optional(),
  agreePolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy to proceed",
  }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  selectedTreatment?: string;
}

export default function BookingForm({ selectedTreatment }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<BookingFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      treatment: "",
      skinConcern: "",
      appointmentDate: "",
      appointmentTime: "",
      conditions: "",
      allergies: "",
      message: "",
      agreePolicy: false,
    },
  });

  useEffect(() => {
    if (selectedTreatment) {
      setValue("treatment", selectedTreatment, { shouldValidate: true });
    }
  }, [selectedTreatment, setValue]);

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSuccessData(data);
    
    toast.success("Consultation Request Submitted!", {
      description: `Thank you, ${data.fullName}. We've sent details to ${data.email}.`,
    });
  };

  const resetForm = () => {
    setSuccessData(null);
    reset();
  };

  if (successData) {
    return (
      <div className="w-full bg-white dark:bg-[#1B201A] border border-brand-gold/20 dark:border-brand-gold/30 rounded-2xl p-8 shadow-xl text-center flex flex-col items-center justify-center min-h-[500px] animate-fade-in">
        <div className="w-16 h-16 bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-200 dark:border-green-800">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-3xl font-bold tracking-tight text-brand-charcoal dark:text-white mb-3">
          Request Received!
        </h3>
        <p className="text-zinc-600 dark:text-zinc-300 text-sm max-w-sm mb-6 leading-relaxed">
          We have registered your consultation request for{" "}
          <strong className="text-brand-olive dark:text-brand-gold-light">
            {successData.treatment}
          </strong>{" "}
          on{" "}
          <strong className="text-brand-charcoal dark:text-white">
            {successData.appointmentDate}
          </strong>{" "}
          at{" "}
          <strong className="text-brand-charcoal dark:text-white">
            {successData.appointmentTime}
          </strong>.
        </p>
        <div className="w-full max-w-md bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-5 border border-zinc-100 dark:border-zinc-800 text-left text-xs space-y-2 mb-8">
          <div><strong className="text-zinc-400">Patient Name:</strong> <span className="text-brand-charcoal dark:text-white font-medium">{successData.fullName}</span></div>
          <div><strong className="text-zinc-400">Phone:</strong> <span className="text-brand-charcoal dark:text-white font-medium">{successData.phone}</span></div>
          <div><strong className="text-zinc-400">Email:</strong> <span className="text-brand-charcoal dark:text-white font-medium">{successData.email}</span></div>
          <div><strong className="text-zinc-400">Primary Concern:</strong> <span className="text-brand-charcoal dark:text-white font-medium">{successData.skinConcern}</span></div>
          {successData.allergies && <div><strong className="text-zinc-400">Allergies:</strong> <span className="text-brand-charcoal dark:text-white font-medium">{successData.allergies}</span></div>}
        </div>
        <button
          onClick={resetForm}
          className="px-6 py-2.5 bg-brand-olive hover:bg-brand-olive-dark text-white font-semibold rounded-xl transition-all shadow-md"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white dark:bg-[#1B201A] border border-brand-olive/10 dark:border-brand-gold/10 rounded-2xl p-6 md:p-8 shadow-xl space-y-6"
    >
      <div className="text-center md:text-left">
        <h3 className="font-serif text-2xl font-bold tracking-tight text-brand-charcoal dark:text-white mb-1.5">
          Request a Consultation
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-xs">
          Submit your skin concern, and our representatives will reach out to confirm your session.
        </p>
      </div>

      <div className="space-y-4">
        {/* Personal Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-brand-olive dark:text-brand-gold-light mb-1.5 flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Adnan Malik"
              {...register("fullName")}
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.fullName ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
              } bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all`}
            />
            {errors.fullName && (
              <span className="text-[10px] text-red-500 mt-1 font-medium">{errors.fullName.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-brand-olive dark:text-brand-gold-light mb-1.5 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. adnan@gmail.com"
              {...register("email")}
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.email ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
              } bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all`}
            />
            {errors.email && (
              <span className="text-[10px] text-red-500 mt-1 font-medium">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-brand-olive dark:text-brand-gold-light mb-1.5 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 0321 5660142"
              {...register("phone")}
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.phone ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
              } bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all`}
            />
            {errors.phone && (
              <span className="text-[10px] text-red-500 mt-1 font-medium">{errors.phone.message}</span>
            )}
          </div>
        </div>

        {/* Selection Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-brand-olive dark:text-brand-gold-light mb-1.5">
              Select Treatment
            </label>
            <select
              {...register("treatment")}
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.treatment ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
              } bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all`}
            >
              <option value="">-- Choose Category --</option>
              {selectedTreatment && (
                <option value={selectedTreatment}>{selectedTreatment}</option>
              )}
  
  <optgroup label="Hair Treatments">
    <option value="Laser hair removal">Laser Hair Removal</option>
    <option value="DIOD laser hair removal">DIOD Laser Hair Removal</option>
    <option value="Exosomes for hair">Exosomes for Hair</option>
    <option value="PRP with microneedling">PRP with Microneedling</option>
    <option value="FUE hair transplant">FUE Hair Transplant</option>
    <option value="Fue dhi hair transplant">FUE DHI Hair Transplant</option>
    <option value="Female hair transplant">Female Hair Transplant</option>
    <option value="Facial hair removal">Facial Hair Removal</option>
    <option value="Man facial hair removal">Man Facial Hair Removal</option>
    <option value="Underarm hair removal">Underarm Hair Removal</option>
    <option value="Arm hair removal">Arm Hair Removal</option>
    <option value="Legs hair removal">Legs Hair Removal</option>
    <option value="Chest hair removal">Chest Hair Removal</option>
    <option value="Male body hair removal">Male Body Hair Removal</option>
    <option value="Hair line hair removal">Hairline Hair Removal</option>
    <option value="Lips hair removal">Lips Hair Removal</option>
    <option value="Ear hair removal">Ear Hair Removal</option>
  </optgroup>

  <optgroup label="Laser & Skincare">
    <option value="Botox">Botox</option>
    <option value="Filler for face">Filler for Face</option>
    <option value="Exosomes for skin">Exosomes for Skin</option>
    <option value="HIFU Skin Tightening">HIFU Skin Tightening</option>
    <option value="co2 Laser Resurfacing for acne scars">CO2 Laser Resurfacing for Acne Scars</option>
    <option value="PICO Laser">PICO Laser</option>
    <option value="Acne scars treatment">Acne Scars Treatment</option>
    <option value="Skin Lightening drips">Skin Lightening Drips</option>
  </optgroup>
    
  
 

            </select>
            {errors.treatment && (
              <span className="text-[10px] text-red-500 mt-1 font-medium">{errors.treatment.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-brand-olive dark:text-brand-gold-light mb-1.5">
              Primary Skin Concern
            </label>
            <select
              {...register("skinConcern")}
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.skinConcern ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
              } bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all`}
            >
              <option value="">-- Select Main Concern --</option>
              <option value="Hair Loss / Thinning">Hair Loss / Receding hairline</option>
              <option value="Acne / Scars">Acne / Deep Scars</option>
              <option value="Melasma / Hyperpigmentation">Melasma / Sun Damage</option>
              <option value="Aging / Wrinkles / Fine Lines">Aging / Sagging Skin</option>
              <option value="Unwanted Facial/Body Hair">Unwanted Hair Growth</option>
              <option value="Dullness / Dehydration">Dullness / Dehydration</option>
              <option value="Other Inquiries">Other Skincare Inquiry</option>
            </select>
            {errors.skinConcern && (
              <span className="text-[10px] text-red-500 mt-1 font-medium">{errors.skinConcern.message}</span>
            )}
          </div>
        </div>

        {/* Date & Time Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-brand-olive dark:text-brand-gold-light mb-1.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Preferred Appointment Date
            </label>
            <input
              type="date"
              {...register("appointmentDate")}
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.appointmentDate ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
              } bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all`}
            />
            {errors.appointmentDate && (
              <span className="text-[10px] text-red-500 mt-1 font-medium">{errors.appointmentDate.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-brand-olive dark:text-brand-gold-light mb-1.5 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Preferred Time Slot
            </label>
            <select
              {...register("appointmentTime")}
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.appointmentTime ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
              } bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all`}
            >
              <option value="">-- Choose Time --</option>
              <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
              <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
              <option value="Late Afternoon (04:00 PM - 07:00 PM)">Late Afternoon (04:00 PM - 07:00 PM)</option>
              <option value="Evening (07:00 PM - 10:00 PM)">Evening (07:00 PM - 10:00 PM)</option>
            </select>
            {errors.appointmentTime && (
              <span className="text-[10px] text-red-500 mt-1 font-medium">{errors.appointmentTime.message}</span>
            )}
          </div>
        </div>

        {/* Medical Info & Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> Existing Skin Conditions (if any)
            </label>
            <input
              type="text"
              placeholder="e.g. Eczema, Psoriasis, Keloids"
              {...register("conditions")}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">
              Allergies / Drug Sensitivities (optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Lidocaine allergy, Latex, Penicillin"
              {...register("allergies")}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">
            Additional Information / Message
          </label>
          <textarea
            rows={3}
            placeholder="Tell us more about your case or leave a special message..."
            {...register("message")}
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all resize-none"
          ></textarea>
        </div>

        {/* Agreement Checkbox */}
        <div className="flex flex-col py-2">
          <label className="flex items-start gap-2.5 cursor-pointer select-none text-zinc-600 dark:text-zinc-400 text-xs">
            <input
              type="checkbox"
              {...register("agreePolicy")}
              className="mt-0.5 rounded border-zinc-300 text-brand-olive focus:ring-brand-gold"
            />
            <span>
              I agree to the SkinOvationS Privacy Policy and consent to being contacted by clinic staff via SMS, phone, or email to schedule this consultation.
            </span>
          </label>
          {errors.agreePolicy && (
            <span className="text-[10px] text-red-500 mt-1 font-medium">{errors.agreePolicy.message}</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 bg-brand-olive hover:bg-brand-olive-dark disabled:bg-brand-olive/60 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl active:scale-[0.99] transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing Request...
          </>
        ) : (
          "Request Consultation"
        )}
      </button>
    </form>
  );
}
